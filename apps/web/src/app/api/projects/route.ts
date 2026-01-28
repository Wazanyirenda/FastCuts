import { NextResponse } from "next/server";
import { prisma, getMonthStart, getOrCreateUsage, isUsageExceeded, PLAN_LIMITS } from "@fastcuts/db";
import { getSession } from "../../../lib/session";
import { projectSchema } from "../../../lib/validation";

export async function GET() {
  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ projects: [] }, { status: 401 });
  }

  const projects = await prisma.project.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ projects });
}

export async function POST(request: Request) {
  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = projectSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const workspace = await prisma.workspace.findFirst({
    where: { ownerId: session.user.id },
  });

  if (!workspace) {
    return NextResponse.json({ error: "Workspace not found" }, { status: 404 });
  }

  const usage = await getOrCreateUsage(workspace.id);
  const plan = workspace.plan;

  if (isUsageExceeded(plan, usage)) {
    return NextResponse.json({ error: "Plan usage exceeded" }, { status: 403 });
  }

  if (plan === "FREE") {
    const monthStart = getMonthStart();
    const projectCount = await prisma.project.count({
      where: {
        workspaceId: workspace.id,
        createdAt: {
          gte: monthStart,
        },
      },
    });

    if (projectCount >= PLAN_LIMITS.FREE.maxProjectsPerMonth) {
      return NextResponse.json({ error: "Free plan project limit reached" }, { status: 403 });
    }
  }

  const project = await prisma.project.create({
    data: {
      workspaceId: workspace.id,
      userId: session.user.id,
      title: parsed.data.title,
      sourceType: parsed.data.sourceType,
      sourceUrl: parsed.data.sourceUrl || null,
      status: "NEW",
    },
  });

  return NextResponse.json({ project }, { status: 201 });
}
