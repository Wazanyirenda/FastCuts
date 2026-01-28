import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black/70 to-background">
      <div className="mx-auto flex min-h-screen w-full max-w-lg flex-col justify-center px-6 py-12">
        <Link href="/" className="mb-10 text-lg font-semibold">
          FastCuts
        </Link>
        {children}
      </div>
    </div>
  );
}
