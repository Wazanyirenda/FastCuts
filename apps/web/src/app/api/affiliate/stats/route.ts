import { NextResponse } from "next/server";
import { getSession } from "../../../../lib/session";

export async function GET() {
  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({
    clicks: 0,
    referrals: 0,
    earnings: 0,
  });
}
