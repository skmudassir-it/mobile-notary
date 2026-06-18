import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faPhone } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing for mobile notary and loan signing services. No hidden fees — just fair, upfront pricing.",
};

const plans = [
  {
    name: "General Notary",
    price: "$45",
    unit: "per signature",
    description: "Basic notarization of documents at your location.",
    features: ["1-3 signatures included", "Additional signatures $15 each", "Travel fee may apply outside metro area", "Same-day service available"],
    popular: false,
  },
  {
    name: "Loan Signing",
    price: "$150",
    unit: "per closing",
    description: "Complete loan signing package for purchasers & refis.",
    features: ["Full document review and signing", "Triple-check accuracy verification", "Documents returned within 2 hours", "E&O insurance included"],
    popular: true,
  },
  {
    name: "Apostille",
    price: "$95",
    unit: "per document",
    description: "Full apostille processing including all government fees.",
    features: ["Notarization included", "County clerk certification", "Secretary of State apostille", "Standard processing (7-10 days)"],
    popular: false,
  },
];

const addons = [
  { service: "I-9 Employment Verification", price: "$35 per employee" },
  { service: "Power of Attorney Notarization", price: "$55" },
  { service: "Real Estate Closing (Seller Package)", price: "$175" },
  { service: "Real Estate Closing (Buyer Package)", price: "$200" },
  { service: "Expedited Apostille (3-5 days)", price: "+$50" },
  { service: "Rush Apostille (1-2 days)", price: "+$100" },
  { service: "Travel Outside Metro Area", price: "$1.50/mile" },
  { service: "After-Hours / Weekend Premium", price: "+$25" },
];

export default function PricingPage() {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-amber-500/20 text-amber-200 border-amber-500/30">Transparent Pricing</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Simple, Upfront Pricing</h1>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            No hidden fees, no surprises. Just fair pricing for professional mobile notary services.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <Card key={i} className={`glass-card relative ${plan.popular ? "ring-2 ring-primary shadow-lg scale-[1.02]" : ""}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-1 text-sm">{plan.unit}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <FontAwesomeIcon icon={faCheckCircle} className="size-4 text-green-500 mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-flex mt-6 w-full">
                    <Button className={`w-full ${plan.popular ? "bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold" : ""}`}>
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Additional Services</h2>
          <Card className="glass-card overflow-hidden">
            <div className="divide-y divide-border">
              {addons.map((item, i) => (
                <div key={i} className="flex items-center justify-between px-6 py-4">
                  <span className="text-sm font-medium">{item.service}</span>
                  <span className="text-sm font-semibold text-primary">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="px-6 py-5 bg-amber-50/50 flex items-center gap-3">
              <FontAwesomeIcon icon={faPhone} className="size-4 text-amber-600" />
              <p className="text-sm text-slate-600">Have a custom request? <Link href="/contact" className="text-primary font-medium hover:underline">Contact us</Link> for a personalized quote.</p>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
