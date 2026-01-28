import { Card, CardContent, CardHeader, CardTitle, Button } from "@fastcuts/ui";
import { PLANS } from "../../../lib/plans";

export default function PricingPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Pricing</h1>
      <p className="mt-2 text-muted-foreground">
        Premium plans are launching soon.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {PLANS.map((plan) => (
          <Card
            key={plan.plan}
            className="border-white/10 bg-gradient-to-br from-white/5 to-transparent"
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{plan.name}</CardTitle>
                <span className="text-lg font-semibold">{plan.price}</span>
              </div>
              <p className="text-sm text-muted-foreground">{plan.description}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
              <Button className="mt-6 w-full">
                {plan.plan === "FREE" ? "Start free" : "Join waitlist"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
