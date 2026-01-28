import Link from "next/link";
import { Button } from "@fastcuts/ui";
import { AffiliateTracker } from "./tracking";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <AffiliateTracker />
      <header className="border-b border-white/5 bg-black/30 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-semibold">
            FastCuts
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <Link href="/pricing" className="hover:text-foreground">
              Pricing
            </Link>
            <Link href="/faq" className="hover:text-foreground">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Get started</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-white/5 bg-black/40">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} FastCuts. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/pricing" className="hover:text-foreground">
              Pricing
            </Link>
            <Link href="/faq" className="hover:text-foreground">
              FAQ
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
