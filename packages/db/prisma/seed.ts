import { prisma } from "../src/client";
import { ensureUserWorkspaceAndAffiliate } from "../src/onboard";

async function main() {
  const email = "demo@fastcuts.com";
  const user = await prisma.user.upsert({
    where: { email },
    update: {},
    create: { email, name: "Demo User" },
  });

  await ensureUserWorkspaceAndAffiliate(user.id, user.email ?? "");

  console.log("Seeded demo user:", user.email);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
