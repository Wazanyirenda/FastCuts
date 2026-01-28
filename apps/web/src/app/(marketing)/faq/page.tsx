import { EmptyState } from "../../../components/empty-state";

export default function FaqPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-semibold">FAQ</h1>
      <p className="mt-2 text-muted-foreground">
        Answers to common FastCuts questions.
      </p>
      <div className="mt-10">
        <EmptyState
          title="More FAQs coming soon"
          description="We are curating responses for onboarding, billing, and integrations."
          cta="Contact support"
        />
      </div>
    </div>
  );
}
