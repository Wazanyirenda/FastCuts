import { EmptyState } from "../../../components/empty-state";

export default function PricingPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Pricing</h1>
      <p className="mt-2 text-muted-foreground">
        Premium plans are launching soon.
      </p>
      <div className="mt-10">
        <EmptyState
          title="Pricing tiers incoming"
          description="We are finalizing launch pricing. Join the waitlist to get early access."
          cta="Join waitlist"
        />
      </div>
    </div>
  );
}
