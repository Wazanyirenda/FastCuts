import { NextResponse } from "next/server";
import { cookies, headers } from "next/headers";
import { prisma } from "@fastcuts/db";
import { affiliateTrackSchema } from "../../../../lib/validation";
import { createHash, randomUUID } from "crypto";

const ANON_COOKIE = "fastcuts_anon";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = affiliateTrackSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const affiliate = await prisma.affiliate.findUnique({
    where: { code: parsed.data.code },
  });

  if (!affiliate) {
    return NextResponse.json({ error: "Affiliate not found" }, { status: 404 });
  }

  const cookieStore = cookies();
  let anonId = cookieStore.get(ANON_COOKIE)?.value;
  let shouldSetCookie = false;

  if (!anonId) {
    anonId = randomUUID();
    shouldSetCookie = true;
  }

  const now = new Date();
  const startOfDay = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));

  const existing = await prisma.affiliateClick.findFirst({
    where: {
      affiliateId: affiliate.id,
      anonId,
      createdAt: {
        gte: startOfDay,
      },
    },
  });

  if (!existing) {
    const headerList = headers();
    const ipRaw = headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    const salt = process.env.IP_HASH_SALT ?? "";
    const ipHash = createHash("sha256").update(`${ipRaw}${salt}`).digest("hex");

    await prisma.affiliateClick.create({
      data: {
        affiliateId: affiliate.id,
        anonId,
        userAgent: headerList.get("user-agent") ?? undefined,
        ipHash,
      },
    });
  }

  const response = NextResponse.json({ ok: true });

  if (shouldSetCookie) {
    response.cookies.set(ANON_COOKIE, anonId, {
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
      sameSite: "lax",
    });
  }

  return response;
}
