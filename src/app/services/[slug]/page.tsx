import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {
  faFileSignature, faStamp, faGlobeAmericas, faFileContract,
  faBuilding, faIdCard
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ServiceDetail {
  title: string;
  description: string;
  longDescription: string;
  icon: IconDefinition;
  image: string;
  features: string[];
  benefits: { title: string; desc: string }[];
}

const services: Record<string, ServiceDetail> = {
  "loan-signing": {
    title: "Loan Signing Agent",
    description: "Certified loan signing agents for all types of mortgage closings.",
    longDescription: "Our certified loan signing agents handle purchase closings, refinances, HELOCs, and reverse mortgages with precision and professionalism. We ensure every document is properly signed, dated, and initialed — reducing the risk of funding delays.",
    icon: faFileSignature,
    image: "/images/services/loan-signing.jpg",
    features: ["Purchase closings", "Refinance packages", "HELOC signings", "Reverse mortgages", "Seller & buyer packages"],
    benefits: [
      { title: "NNA Certified", desc: "All agents are NNA-certified and background-checked." },
      { title: "Error-Free", desc: "Triple-check process ensures no missed signatures or dates." },
      { title: "Fast Turnaround", desc: "Documents returned to title/lender within 2 hours of signing." },
    ],
  },
  "mobile-notary": {
    title: "Mobile Notary",
    description: "General notarization at your location — any document, any time.",
    longDescription: "Need a document notarized? We come to you — home, office, hospital, or coffee shop. Our mobile notaries handle affidavits, deeds, trusts, contracts, and any document requiring notarization with speed and accuracy.",
    icon: faStamp,
    image: "/images/services/mobile-notary.jpg",
    features: ["Affidavits", "Deeds & titles", "Trust documents", "Contracts", "Parental consent forms"],
    benefits: [
      { title: "Any Document", desc: "We notarize virtually any document that requires notarization." },
      { title: "Any Location", desc: "Home, office, hospital, nursing home, or coffee shop." },
      { title: "7 Days a Week", desc: "Evening and weekend appointments available." },
    ],
  },
  "apostille": {
    title: "Apostille & Authentication",
    description: "Complete apostille processing for international document use.",
    longDescription: "Need documents authenticated for use abroad? We handle the entire apostille chain — from notarization through county clerk to Secretary of State certification. Fast, accurate, and hassle-free.",
    icon: faGlobeAmericas,
    image: "/images/services/apostille.jpg",
    features: ["Birth & marriage certificates", "Diplomas & transcripts", "Background checks", "Corporate documents", "Full apostille handling"],
    benefits: [
      { title: "End-to-End", desc: "We manage the complete apostille chain — you don't lift a finger." },
      { title: "Fast Processing", desc: "Standard and expedited processing options available." },
      { title: "Hague Convention", desc: "Apostilles valid in all Hague Convention member countries." },
    ],
  },
  "power-of-attorney": {
    title: "Power of Attorney",
    description: "Proper notarization of all types of power of attorney documents.",
    longDescription: "Power of attorney documents require precise notarization to be legally binding. Our notaries ensure your POA meets all state requirements, whether it's durable, medical, limited, or springing.",
    icon: faFileContract,
    image: "/images/services/power-of-attorney.jpg",
    features: ["Durable POA", "Medical POA", "Limited POA", "Springing POA", "State-compliant notarization"],
    benefits: [
      { title: "State Compliant", desc: "We stay current on POA requirements for every state we serve." },
      { title: "Witness Coordination", desc: "We can arrange independent witnesses when required." },
      { title: "Urgent Service", desc: "Same-day POA notarization for time-sensitive situations." },
    ],
  },
  "real-estate-closings": {
    title: "Real Estate Closings",
    description: "Complete closing support for buyers, sellers, and agents.",
    longDescription: "From seller packages to buyer signings, we provide complete real estate closing support. Our agents coordinate with title companies, lenders, and real estate agents to ensure smooth, on-time closings.",
    icon: faBuilding,
    image: "/images/services/real-estate-closings.jpg",
    features: ["Seller packages", "Buyer packages", "Deed transfers", "Title coordination", "Same-day availability"],
    benefits: [
      { title: "Full Coordination", desc: "We work directly with your title company and lender." },
      { title: "Flexible Scheduling", desc: "Evening and weekend closings to fit your schedule." },
      { title: "Digital & Paper", desc: "Support for both e-closings and traditional paper signings." },
    ],
  },
  "i9-verification": {
    title: "I-9 Employment Verification",
    description: "Remote I-9 verification and notarization for employers.",
    longDescription: "Streamline your hiring process with mobile I-9 verification. We come to your office or meet new hires at a convenient location to complete Section 2 of Form I-9 with notarization.",
    icon: faIdCard,
    image: "/images/services/i9-verification.jpg",
    features: ["Section 2 completion", "Remote verification", "Bulk employee processing", "HR compliance support", "Multi-location service"],
    benefits: [
      { title: "HR Compliant", desc: "Full compliance with USCIS I-9 requirements." },
      { title: "Bulk Processing", desc: "Multiple employees verified in a single visit." },
      { title: "Documentation", desc: "Complete verification records provided for your files." },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return { title: "Service Not Found" };
  return { title: service.title, description: service.description };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) notFound();

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-6 transition-colors text-sm">
            <FontAwesomeIcon icon={faArrowLeft} className="size-3" />
            All Services
          </Link>
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-amber-500/20 text-amber-200 border-amber-500/30">{service.title}</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{service.title}</h1>
            <p className="mt-4 text-lg text-blue-100 leading-relaxed">{service.longDescription}</p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="w-full h-72 bg-muted rounded-xl flex items-center justify-center overflow-hidden mb-8">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover rounded-xl" />
              </div>
              <h2 className="text-2xl font-bold mb-6">What We Cover</h2>
              <div className="grid gap-2 sm:grid-cols-2">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <FontAwesomeIcon icon={faCheckCircle} className="size-4 text-green-500 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Why Choose Us</h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, i) => (
                  <Card key={i} className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-base">{benefit.title}</CardTitle>
                      <CardDescription>{benefit.desc}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/contact" className="inline-flex">
                  <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
                    Request This Service
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
