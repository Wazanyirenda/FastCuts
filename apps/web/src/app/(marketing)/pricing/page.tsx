import { Button, Card, CardContent, CardHeader, CardTitle } from "@fastcuts/ui";
import { PLANS } from "../../../lib/plans";

export default function PricingPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Pricing</h1>
      <p className="mt-2 text-muted-foreground">
        Choose a plan that matches your production pace.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {PLANS.map((plan) => (
          <Card
            key={plan.name}
            className="border-white/10 bg-gradient-to-br from-white/5 to-transparent"
          >
            <CardHeader className="space-y-3">
              <div>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <p className="mt-2 text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold">{plan.price}</p>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  {plan.cadence}
                </p>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-2 text-sm text-muted-foreground">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant="outline">
                {plan.cta}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
