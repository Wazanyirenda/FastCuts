import Link from "next/link";
import { Button, Card, CardContent, CardHeader, CardTitle } from "@fastcuts/ui";

const features = [
  "Auto-detect highlights with timeline controls.",
  "Export in vertical, square, and landscape presets.",
  "Team-ready workspaces with clear status tracking.",
  "Affiliate-ready referrals built in from day one.",
];

const steps = [
  {
    title: "Upload or link",
    description: "Bring in your long-form videos from uploads or YouTube.",
  },
  {
    title: "Design your cuts",
    description: "Pick templates and trim clips with guided chapters.",
  },
  {
    title: "Publish faster",
    description: "Export polished shorts ready for every platform.",
  },
];

export default function MarketingHome() {
  return (
    <div className="space-y-24">
      <section className="relative overflow-hidden bg-gradient-to-b from-black via-black/60 to-background">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-20 md:flex-row md:items-center">
          <div className="flex-1 space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              FastCuts Studio
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Premium short-form production built for modern teams.
            </h1>
            <p className="text-lg text-muted-foreground">
              FastCuts turns long-form content into branded clips with a cinematic UI,
              organized workspaces, and affiliate-ready growth.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/signup">Start free trial</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/pricing">See pricing</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <Card className="border-white/10 bg-gradient-to-br from-white/10 to-transparent">
              <CardHeader>
                <CardTitle className="text-xl">FastCuts pipeline</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <div className="flex items-center justify-between rounded-lg border border-white/10 bg-black/40 px-4 py-3">
                  <span>Import video</span>
                  <span className="text-xs text-emerald-300">Ready</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-white/10 bg-black/40 px-4 py-3">
                  <span>Highlight finder</span>
                  <span className="text-xs text-amber-300">Processing</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-white/10 bg-black/40 px-4 py-3">
                  <span>Caption styling</span>
                  <span className="text-xs text-muted-foreground">Queued</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-2xl font-semibold">How it works</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <Card
              key={step.title}
              className="border-white/10 bg-gradient-to-br from-white/5 to-transparent"
            >
              <CardHeader>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {step.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-2xl font-semibold">Features built for growth</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <Card
              key={feature}
              className="border-white/10 bg-gradient-to-br from-white/5 to-transparent"
            >
              <CardContent className="p-6 text-sm text-muted-foreground">
                {feature}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-2xl font-semibold">Frequently asked</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            {
              q: "Do I need editing experience?",
              a: "FastCuts guides you through clip selection with templates and presets.",
            },
            {
              q: "Can I collaborate with my team?",
              a: "Yes. Workspaces keep projects organized with clear ownership.",
            },
            {
              q: "When will affiliate payouts be available?",
              a: "Affiliate tracking is live now with automated payouts coming soon.",
            },
            {
              q: "Is the UI customizable?",
              a: "Brand themes and layout personalization are on the roadmap.",
            },
          ].map((item) => (
            <Card
              key={item.q}
              className="border-white/10 bg-gradient-to-br from-white/5 to-transparent"
            >
              <CardHeader>
                <CardTitle className="text-base">{item.q}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {item.a}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <Card className="border-white/10 bg-gradient-to-br from-white/10 to-transparent">
          <CardContent className="flex flex-col items-start justify-between gap-6 p-10 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-semibold">Ready to ship more shorts?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Create your FastCuts workspace in minutes.
              </p>
            </div>
            <Button asChild>
              <Link href="/signup">Create workspace</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
