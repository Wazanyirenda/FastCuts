import Link from "next/link";
import { Button } from "@fastcuts/ui";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
        404
      </p>
      <h1 className="text-3xl font-semibold">That page disappeared.</h1>
      <p className="text-muted-foreground">
        The page you were looking for does not exist.
      </p>
      <Button asChild>
        <Link href="/">Back to home</Link>
      </Button>
    </main>
  );
}
