import { EmptyState } from "../../../components/empty-state";

export default function TemplatesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Templates</h1>
        <p className="mt-2 text-muted-foreground">
          Save branded layouts for consistent content.
        </p>
      </div>
      <EmptyState
        title="No templates yet"
        description="Create your first template to speed up production."
        cta="New template"
      />
    </div>
  );
}
