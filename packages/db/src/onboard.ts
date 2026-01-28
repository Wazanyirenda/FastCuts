import { prisma } from "./client";

function generateAffiliateCode(length = 7) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < length; i += 1) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

export async function ensureUserWorkspaceAndAffiliate(userId: string, email: string) {
  const [workspace, affiliate] = await Promise.all([
    prisma.workspace.findFirst({ where: { ownerId: userId } }),
    prisma.affiliate.findUnique({ where: { userId } }),
  ]);

  if (!workspace) {
    await prisma.workspace.create({
      data: {
        ownerId: userId,
        name: email ? `${email.split("@")[0]}'s Workspace` : "My Workspace",
      },
    });
  }

  if (!affiliate) {
    let code = generateAffiliateCode();
    let attempt = 0;
    while (attempt < 5) {
      const existing = await prisma.affiliate.findUnique({ where: { code } });
      if (!existing) break;
      code = generateAffiliateCode();
      attempt += 1;
    }

    await prisma.affiliate.create({
      data: {
        userId,
        code,
      },
    });
  }
}
