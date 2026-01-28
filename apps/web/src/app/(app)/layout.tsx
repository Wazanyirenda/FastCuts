import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "../../lib/session";
import { SignOutButton } from "../../components/sign-out-button";

const navItems = [
  { href: "/app/projects", label: "Projects" },
  { href: "/app/templates", label: "Templates" },
  { href: "/app/affiliate", label: "Affiliate" },
  { href: "/app/settings", label: "Settings" },
];

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex min-h-screen">
        <aside className="hidden w-64 flex-col border-r border-white/5 bg-black/40 px-6 py-8 lg:flex">
          <Link href="/" className="text-lg font-semibold">
            FastCuts
          </Link>
          <nav className="mt-10 flex flex-col gap-2 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <div className="flex flex-1 flex-col">
          <header className="flex items-center justify-between border-b border-white/5 bg-black/30 px-6 py-4">
            <div className="text-sm text-muted-foreground">
              Welcome, {session.user.email}
            </div>
            <SignOutButton />
          </header>
          <main className="flex-1 px-6 py-10">{children}</main>
        </div>
      </div>
    </div>
  );
}
