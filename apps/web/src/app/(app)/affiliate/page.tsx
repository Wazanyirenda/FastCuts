import { EmptyState } from "../../../components/empty-state";

export default function AffiliatePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Affiliate</h1>
        <p className="mt-2 text-muted-foreground">
          Share your code and track referral performance.
        </p>
      </div>
      <EmptyState
        title="No affiliate stats yet"
        description="Start sharing your unique code to earn commission."
        cta="Copy affiliate link"
      />
    </div>
  );
}
