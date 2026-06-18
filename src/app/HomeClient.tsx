"use client";

import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileSignature, faHouse, faStamp, faGlobeAmericas, faFileContract,
  faClock, faStar, faCheckCircle, faArrowRight, faBuilding, faShield,
  faPlane, faIdCard
} from "@fortawesome/free-solid-svg-icons";
import Autoplay from "embla-carousel-autoplay";

const services = [
  {
    title: "Loan Signing Agent",
    description: "Certified loan signing agents for purchase, refinance, HELOC, and reverse mortgage closings.",
    icon: faFileSignature,
    href: "/services/loan-signing",
  },
  {
    title: "Mobile Notary",
    description: "General notarizations at your location — affidavits, deeds, POAs, and more.",
    icon: faStamp,
    href: "/services/mobile-notary",
  },
  {
    title: "Apostille & Authentication",
    description: "Document authentication for international use. We handle the entire apostille process.",
    icon: faGlobeAmericas,
    href: "/services/apostille",
  },
  {
    title: "Power of Attorney",
    description: "Proper notarization of durable, medical, and limited power of attorney documents.",
    icon: faFileContract,
    href: "/services/power-of-attorney",
  },
  {
    title: "Real Estate Closings",
    description: "Full closing support — seller packages, buyer packages, and deed transfers.",
    icon: faBuilding,
    href: "/services/real-estate-closings",
  },
  {
    title: "I-9 Employment Verification",
    description: "Remote I-9 verification and notarization for employers and HR departments.",
    icon: faIdCard,
    href: "/services/i9-verification",
  },
];

const testimonials = [
  {
    quote: "SignSwift made our home closing so smooth. They came to our office at 7pm and had everything ready in under an hour.",
    author: "Sarah M.",
    role: "Home Buyer",
  },
  {
    quote: "I needed a notary for my mom in the hospital on a Sunday. SignSwift was there within 2 hours. Incredible service.",
    author: "David K.",
    role: "Healthcare POA Client",
  },
  {
    quote: "As a real estate agent, I depend on SignSwift for every closing. Their loan signing agents are professional, punctual, and thorough.",
    author: "Maria R.",
    role: "Real Estate Agent",
  },
  {
    quote: "Needed an apostille for my marriage certificate for an overseas job. SignSwift handled everything — documents came back in days.",
    author: "James T.",
    role: "International Client",
  },
  {
    quote: "We use SignSwift for all our I-9 verifications across three states. Their mobile service saves us countless hours.",
    author: "Linda P.",
    role: "HR Director",
  },
];

const stats = [
  { value: "5,000+", label: "Documents Notarized" },
  { value: "2,000+", label: "Loan Signings" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Availability" },
];

export function HomeClient() {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.05),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-amber-500/20 text-amber-200 border-amber-500/30 px-4 py-1.5 text-sm font-medium">
              Available 7 Days a Week
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Mobile Notary &amp; Loan Signing That Comes to <span className="text-amber-400">You</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-blue-100 max-w-2xl leading-relaxed">
              Skip the trip. Our certified notaries and loan signing agents travel to your home, office, hospital, or coffee shop — on your schedule.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold shadow-lg">
                  Schedule a Notary <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4" />
                </Button>
              </Link>
              <Link href="/services" className="inline-flex">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative -mt-10 z-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="glass-card grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our Notary Services</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              From loan signings to apostilles, we handle all your notarization needs with precision and care.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Link key={i} href={service.href} className="group">
                <Card className="glass-card h-full transition-shadow hover:shadow-lg">
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

      {/* Why Choose Us */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Why Choose SignSwift?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We make notarization effortless, convenient, and trustworthy.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {[
              { icon: faClock, title: "Same-Day Service", desc: "Need it now? We're available 7 days a week with same-day appointments." },
              { icon: faHouse, title: "We Come to You", desc: "Home, office, hospital, or coffee shop — we travel to your location." },
              { icon: faShield, title: "Licensed & Insured", desc: "All notaries are fully licensed, bonded, and carry E&O insurance." },
              { icon: faStar, title: "5-Star Rated", desc: "98% client satisfaction with hundreds of 5-star reviews." },
              { icon: faCheckCircle, title: "Error-Free Guarantee", desc: "We review every document carefully. No returns for corrections." },
              { icon: faPlane, title: "Apostille Experts", desc: "Full apostille and authentication handling for international documents." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                  <FontAwesomeIcon icon={item.icon} className="size-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't take our word for it — hear from the people we've served.
            </p>
          </div>
          <Carousel plugins={[autoplay.current]} opts={{ loop: true, align: "start" }}
            className="max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="glass-card h-full">
                    <CardContent className="p-6">
                      <div className="flex gap-1 mb-4 text-amber-400">
                        {[...Array(5)].map((_, j) => (
                          <FontAwesomeIcon key={j} icon={faStar} className="size-4" />
                        ))}
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                      <div>
                        <p className="font-semibold text-sm">{t.author}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Ready to Get Your Documents Notarized?</h2>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Schedule your mobile notary today. We'll come to you — fast, professional, and hassle-free.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold shadow-lg px-8">
                Schedule Now
              </Button>
            </Link>
            <Link href="/pricing" className="inline-flex">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
