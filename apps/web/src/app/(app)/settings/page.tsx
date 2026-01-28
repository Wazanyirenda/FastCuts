import { EmptyState } from "../../../components/empty-state";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Settings</h1>
        <p className="mt-2 text-muted-foreground">
          Manage your workspace preferences.
        </p>
      </div>
      <EmptyState
        title="No settings configured"
        description="Customize your workspace, notifications, and billing."
        cta="Open settings"
      />
    </div>
  );
}
