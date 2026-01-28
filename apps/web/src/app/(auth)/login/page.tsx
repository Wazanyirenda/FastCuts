import Link from "next/link";
import { AuthForm } from "../../../components/auth-form";

export default function LoginPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Welcome back</h1>
        <p className="mt-2 text-muted-foreground">
          Sign in to manage projects and templates.
        </p>
      </div>
      <AuthForm
        title="Sign in"
        description="We'll email you a secure magic link to access your workspace."
        buttonLabel="Send magic link"
      />
      <p className="text-sm text-muted-foreground">
        New to FastCuts?{" "}
        <Link className="text-primary hover:underline" href="/signup">
          Create an account
        </Link>
      </p>
    </div>
  );
}
