import Link from "next/link";
import { AuthForm } from "../../../components/auth-form";

export default function SignupPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Create your account</h1>
        <p className="mt-2 text-muted-foreground">
          Get started with a premium FastCuts workspace.
        </p>
      </div>
      <AuthForm
        title="Join FastCuts"
        description="We'll send a magic link to finish your signup."
        buttonLabel="Get magic link"
      />
      <p className="text-sm text-muted-foreground">
        Already have access?{" "}
        <Link className="text-primary hover:underline" href="/login">
          Sign in
        </Link>
      </p>
    </div>
  );
}
