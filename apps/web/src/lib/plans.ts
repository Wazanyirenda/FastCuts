export const PLANS = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for trying FastCuts.",
    plan: "FREE" as const,
    features: [
      "Max 1 project/month",
      "10 minutes/month",
      "Max 3 clips",
      "Watermark always on",
      "Slow processing queue",
      "No affiliate eligibility",
    ],
  },
  {
    name: "Starter",
    price: "$9",
    description: "For solo creators just getting started.",
    plan: "STARTER" as const,
    features: [
      "60 minutes/month",
      "No watermark",
      "10 clips",
    ],
  },
  {
    name: "Creator",
    price: "$15",
    description: "For creators publishing every week.",
    plan: "CREATOR" as const,
    features: [
      "180 minutes/month",
      "30 clips",
      "Affiliate eligible (25% recurring)",
    ],
  },
  {
    name: "Pro",
    price: "$25",
    description: "For teams shipping at scale.",
    plan: "PRO" as const,
    features: [
      "500 minutes/month",
      "100 clips",
      "Batch processing",
      "Priority queue",
    ],
  },
];
