"use client";

import { Button } from "@fastcuts/ui";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="min-h-screen bg-background text-foreground">
        <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-4 px-6 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Something went wrong
          </p>
          <h1 className="text-3xl font-semibold">We hit a snag.</h1>
          <p className="text-muted-foreground">
            {error.message || "Please try again in a moment."}
          </p>
          <Button onClick={reset}>Try again</Button>
        </main>
      </body>
    </html>
  );
}
