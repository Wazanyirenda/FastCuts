import { NextResponse } from "next/server";
import { prisma } from "@fastcuts/db";
import { getSession } from "../../../lib/session";

export async function GET() {
  const session = await getSession();
  if (!session?.user?.email || !session.user.id) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  const workspace = await prisma.workspace.findFirst({
    where: { ownerId: session.user.id },
  });

  return NextResponse.json({
    user: session.user,
    workspace,
  });
}
