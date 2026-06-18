import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileSignature, faStamp, faGlobeAmericas, faFileContract,
  faBuilding, faIdCard
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  icon: IconDefinition;
  image: string;
  features: string[];
}

const services: ServiceItem[] = [
  {
    slug: "loan-signing",
    title: "Loan Signing Agent",
    description: "Certified loan signing agents for purchase, refinance, HELOC, and reverse mortgage closings. We ensure every document is signed, dated, and initialed correctly.",
    icon: faFileSignature,
    image: "/images/services/loan-signing.jpg",
    features: ["Purchase closings", "Refinance packages", "HELOC signings", "Reverse mortgages", "Seller & buyer packages"],
  },
  {
    slug: "mobile-notary",
    title: "Mobile Notary",
    description: "General notarization services at your location. Affidavits, deeds, trusts, contracts — we notarize them all, wherever you are.",
    icon: faStamp,
    image: "/images/services/mobile-notary.jpg",
    features: ["Affidavits", "Deeds & titles", "Trust documents", "Contracts", "Parental consent forms"],
  },
  {
    slug: "apostille",
    title: "Apostille & Authentication",
    description: "Document authentication for international use. We handle the complete apostille chain — notarization, county clerk, Secretary of State.",
    icon: faGlobeAmericas,
    image: "/images/services/apostille.jpg",
    features: ["Birth & marriage certificates", "Diplomas & transcripts", "Background checks", "Corporate documents", "Full apostille handling"],
  },
  {
    slug: "power-of-attorney",
    title: "Power of Attorney",
    description: "Proper notarization of durable, medical, and limited power of attorney documents. We ensure compliance with state requirements.",
    icon: faFileContract,
    image: "/images/services/power-of-attorney.jpg",
    features: ["Durable POA", "Medical POA", "Limited POA", "Springing POA", "State-compliant notarization"],
  },
  {
    slug: "real-estate-closings",
    title: "Real Estate Closings",
    description: "Complete closing support for buyers, sellers, and agents. We handle document preparation, notarization, and coordination with title companies.",
    icon: faBuilding,
    image: "/images/services/real-estate-closings.jpg",
    features: ["Seller packages", "Buyer packages", "Deed transfers", "Title coordination", "Same-day availability"],
  },
  {
    slug: "i9-verification",
    title: "I-9 Employment Verification",
    description: "Remote I-9 verification and notarization for employers. We come to your office or meet employees at a convenient location.",
    icon: faIdCard,
    image: "/images/services/i9-verification.jpg",
    features: ["Section 2 completion", "Remote verification", "Bulk employee processing", "HR compliance support", "Multi-location service"],
  },
];

export const metadata: Metadata = {
  title: "Our Services",
  description: "Comprehensive mobile notary and loan signing services. From apostilles to real estate closings, we handle it all.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Our Services</h1>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Comprehensive notary and loan signing solutions — we come to you, on your schedule.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group">
                <Card className="glass-card h-full overflow-hidden transition-shadow hover:shadow-lg">
                  <div className="w-full h-48 bg-muted flex items-center justify-center overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                  <CardHeader>
                    <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-3">
                      <FontAwesomeIcon icon={service.icon} className="size-5" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription className="text-sm">{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Not Sure What You Need?</h2>
          <p className="mt-4 text-lg text-blue-100">Contact us and we'll guide you to the right service.</p>
          <div className="mt-8">
            <Link href="/contact" className="inline-flex">
              <span className="inline-flex items-center justify-center rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-3 transition-colors">
                Get in Touch
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
