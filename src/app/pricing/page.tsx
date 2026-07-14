import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPhone } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing for furniture restoration, refinishing, upholstery, and repair services.",
};

const plans = [
  {
    name: "Basic Refinish",
    price: "$350+",
    description: "Perfect for worn finishes on structurally sound pieces.",
    features: ["Strip & sand old finish", "Standard stain color", "Satin lacquer topcoat", "1-2 week turnaround", "Free pickup & delivery"],
    popular: false,
  },
  {
    name: "Full Restoration",
    price: "$750+",
    description: "For pieces needing structural repair and premium finishing.",
    features: ["Complete strip & refinish", "Structural repairs & joinery", "Custom color matching", "Premium finish options", "Hardware cleaning/polishing", "Free pickup & delivery"],
    popular: true,
  },
  {
    name: "Heirloom Package",
    price: "$1,500+",
    description: "Museum-quality restoration for valuable antiques and heirlooms.",
    features: ["Period-accurate restoration", "Reversible conservation methods", "French polish or hand-rubbed oil", "Original patina preservation", "Full documentation & photos", "Climate-controlled studio"],
    popular: false,
  },
];

const addons = [
  { service: "Upholstery (per chair)", price: "$200 – $600" },
  { service: "Cane seat replacement", price: "$85 – $180" },
  { service: "Veneer repair (per area)", price: "$75 – $250" },
  { service: "Missing part fabrication", price: "Custom quote" },
  { service: "Custom color match", price: "$50" },
  { service: "Rush shipping (3-5 days)", price: "+25%" },
];

export default function PricingPage() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge variant="secondary" className="mb-4">Pricing</Badge>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Simple, Transparent Pricing</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Every piece is unique — these are starting prices. Contact us for a free, detailed estimate.
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {plans.map((plan) => (
            <Card key={plan.name} className={`glass-card relative ${plan.popular ? "ring-2 ring-primary shadow-lg" : ""}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 px-4">Most Popular</Badge>
              )}
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="text-4xl font-bold text-primary my-3">{plan.price}</div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <FontAwesomeIcon icon={faCheck} className="size-3.5 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link href="/contact" className="inline-flex w-full">
                    <Button variant={plan.popular ? "default" : "outline"} className="w-full font-semibold">
                      Get Estimate
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add-ons */}
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-6">Additional Services</h2>
          <Card className="glass-card">
            <CardContent className="pt-6">
              <div className="divide-y divide-amber-200/30">
                {addons.map((item) => (
                  <div key={item.service} className="flex justify-between items-center py-3 text-sm">
                    <span className="text-foreground font-medium">{item.service}</span>
                    <span className="text-primary font-semibold">{item.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Common Questions</h2>
          <div className="space-y-3">
            {[
              { q: "How long does restoration take?", a: "Basic refinishing takes 1-2 weeks. Full restorations typically take 3-6 weeks depending on complexity. Rush service is available for an additional 25%." },
              { q: "Do you offer pickup and delivery?", a: "Yes! Free pickup and delivery within 30 miles. Longer distances available for a fee. We handle your furniture with blankets, straps, and enclosed transport." },
              { q: "How do I get an accurate estimate?", a: "Send us photos via our contact form or bring the piece to our workshop. We'll provide a detailed written estimate within 48 hours — no obligation." },
              { q: "Is my antique safe with you?", a: "Absolutely. Our workshop is climate-controlled, insured, and secured. We use conservation-grade methods that preserve your piece's value." },
            ].map((faq) => (
              <details key={faq.q} className="glass-card group p-0 overflow-hidden">
                <summary className="cursor-pointer list-none p-4 font-medium flex items-center justify-between">
                  {faq.q}
                  <svg className="size-4 transition-transform group-open:rotate-180 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="px-4 pb-4 text-muted-foreground text-sm">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Link href="/contact" className="inline-flex">
            <Button size="lg" className="font-semibold">
              <FontAwesomeIcon icon={faPhone} className="mr-2 size-4" />
              Request Free Estimate
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
