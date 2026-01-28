import { prisma } from "./client";

export const PLAN_LIMITS = {
  FREE: {
    maxProjectsPerMonth: 1,
    maxMinutes: 10,
    maxClips: 3,
    watermark: true,
    affiliateEligible: false,
  },
  STARTER: {
    maxMinutes: 60,
    maxClips: 10,
    watermark: false,
    affiliateEligible: false,
  },
  CREATOR: {
    maxMinutes: 180,
    maxClips: 30,
    watermark: false,
    affiliateEligible: true,
  },
  PRO: {
    maxMinutes: 500,
    maxClips: 100,
    watermark: false,
    affiliateEligible: true,
  },
} as const;

export type WorkspacePlan = keyof typeof PLAN_LIMITS;

export function getMonthStart(date = new Date()) {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 1));
}

export async function getOrCreateUsage(workspaceId: string) {
  const monthStart = getMonthStart();
  const usage = await prisma.usage.upsert({
    where: {
      workspaceId_monthStart: {
        workspaceId,
        monthStart,
      },
    },
    update: {},
    create: {
      workspaceId,
      monthStart,
    },
  });

  return usage;
}

export function isUsageExceeded(plan: WorkspacePlan, usage: { minutesUsed: number; clipsRendered: number }) {
  const limits = PLAN_LIMITS[plan];
  return usage.minutesUsed >= limits.maxMinutes || usage.clipsRendered >= limits.maxClips;
}
