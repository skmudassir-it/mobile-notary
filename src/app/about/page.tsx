import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faShield, faClock, faStar, faAward } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "About Us",
  description: "SignSwift Mobile Notary — licensed, bonded, and insured mobile notary and loan signing services. Founded with a mission to make notarization convenient.",
};

const values = [
  { icon: faClock, title: "Convenience First", desc: "We come to you — on your schedule, not ours." },
  { icon: faShield, title: "Trust & Integrity", desc: "Licensed, bonded, and insured. Your documents are safe with us." },
  { icon: faStar, title: "Excellence", desc: "98% client satisfaction. We don't stop until it's done right." },
  { icon: faAward, title: "Certified Expertise", desc: "NNA-certified agents with thousands of signings completed." },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-amber-500/20 text-amber-200 border-amber-500/30">About SignSwift</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Notarization That Comes to You</h1>
            <p className="mt-4 text-lg text-blue-100 leading-relaxed">
              Founded on the belief that notarization shouldn't be a chore. We bring certified notary services to your doorstep — fast, professional, and hassle-free.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="w-full h-80 bg-muted rounded-xl flex items-center justify-center overflow-hidden">
                <img src="/images/about/team.jpg" alt="SignSwift Team" className="w-full h-full object-cover rounded-xl" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                SignSwift was founded to solve a simple problem: getting documents notarized shouldn't be difficult. Whether you're closing on a home, preparing for international travel, or managing healthcare decisions for a loved one, the last thing you need is to hunt down a notary during business hours.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We built SignSwift to bring notary services directly to our clients — wherever they are, whenever they need us. Our team of NNA-certified notaries and loan signing agents has completed thousands of signings with a 98% client satisfaction rate.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, SignSwift serves the entire metro area with same-day service, evening and weekend availability, and a commitment to accuracy that's second to none.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our Values</h2>
            <p className="mt-4 text-lg text-muted-foreground">The principles that guide everything we do.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <Card key={i} className="glass-card text-center">
                <CardHeader>
                  <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-3">
                    <FontAwesomeIcon icon={v.icon} className="size-6" />
                  </div>
                  <CardTitle className="text-base">{v.title}</CardTitle>
                  <CardDescription className="text-sm">{v.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
