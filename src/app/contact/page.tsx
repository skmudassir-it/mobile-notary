"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone required"),
  service: z.string().optional(),
  message: z.string().min(10, "Please describe your needs"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setSending(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) setSubmitted(true);
    } catch (e) {
      console.error(e);
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-lg px-4 text-center">
          <div className="text-6xl mb-6">✅</div>
          <h1 className="text-3xl font-bold tracking-tight mb-4">Request Received!</h1>
          <p className="text-muted-foreground mb-8">We'll get back to you within 1 hour during business hours. For urgent requests, call us directly.</p>
          <Button onClick={() => setSubmitted(false)} variant="outline">Send Another Request</Button>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-amber-500/20 text-amber-200 border-amber-500/30">Get in Touch</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Schedule Your Notary</h1>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Fill out the form below and we'll confirm your appointment within the hour.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 max-w-5xl mx-auto">
            <div className="lg:col-span-3">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Request a Notary</CardTitle>
                  <CardDescription>Tell us what you need and when. We'll handle the rest.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Name *</label>
                        <Input {...register("name")} placeholder="Your full name" />
                        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Phone *</label>
                        <Input {...register("phone")} placeholder="(555) 123-4567" />
                        {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Email *</label>
                      <Input {...register("email")} type="email" placeholder="you@example.com" />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Service Needed</label>
                      <Input {...register("service")} placeholder="e.g., Loan Signing, Apostille, General Notary" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Message *</label>
                      <Textarea {...register("message")} rows={4} placeholder="Describe what you need and your preferred date/time..." />
                      {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
                    </div>
                    <Button type="submit" disabled={sending} size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold w-full sm:w-auto">
                      {sending ? "Sending..." : "Submit Request"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <Card className="glass-card">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faPhone} className="size-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Phone</p>
                      <p className="text-sm text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faEnvelope} className="size-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Email</p>
                      <p className="text-sm text-muted-foreground">hello@signswiftnotary.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faLocationDot} className="size-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Service Area</p>
                      <p className="text-sm text-muted-foreground">Greater Metro Area & surrounding counties</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faClock} className="size-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Hours</p>
                      <p className="text-sm text-muted-foreground">Mon–Sat 8am–8pm<br />Sunday by appointment</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card bg-primary text-white">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Need It Now?</h3>
                  <p className="text-sm text-blue-200 mb-4">Call us for same-day and emergency notary service.</p>
                  <p className="text-2xl font-bold text-amber-400">(555) 123-4567</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
