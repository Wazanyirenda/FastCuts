import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@fastcuts/ui";

interface EmptyStateProps {
  title: string;
  description: string;
  cta: string;
}

export function EmptyState({ title, description, cta }: EmptyStateProps) {
  return (
    <Card className="border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button>{cta}</Button>
      </CardContent>
    </Card>
  );
}
