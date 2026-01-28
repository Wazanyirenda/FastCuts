import { NextResponse } from "next/server";
import { prisma, getOrCreateUsage } from "@fastcuts/db";
import { getSession } from "../../../lib/session";

export async function GET() {
  const session = await getSession();
  if (!session?.user?.email || !session.user.id) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  const workspace = await prisma.workspace.findFirst({
    where: { ownerId: session.user.id },
  });

  const usage = workspace ? await getOrCreateUsage(workspace.id) : null;

  return NextResponse.json({
    user: session.user,
    workspace,
    usage,
  });
}
