import { EmptyState } from "../../../components/empty-state";

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="mt-2 text-muted-foreground">
          Track every edit from import to export.
        </p>
      </div>
      <EmptyState
        title="No projects yet"
        description="Upload a video or connect a YouTube link to get started."
        cta="Create project"
      />
    </div>
  );
}
