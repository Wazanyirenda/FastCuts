"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Input } from "@fastcuts/ui";

interface AuthFormProps {
  title: string;
  description: string;
  buttonLabel: string;
}

export function AuthForm({ title, description, buttonLabel }: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("loading");

    await signIn("email", {
      email,
      callbackUrl: "/app/projects",
    });

    setStatus("sent");
  }

  return (
    <Card className="border-white/10 bg-gradient-to-br from-white/5 to-transparent">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground" htmlFor="email">
              Work email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={status === "loading"}>
            {status === "loading" ? "Sending magic link..." : buttonLabel}
          </Button>
          {status === "sent" && (
            <p className="text-xs text-muted-foreground">
              Check your email for a magic link to continue.
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
