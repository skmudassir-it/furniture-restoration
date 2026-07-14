"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot, faClock, faPaperPlane, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    try {
      await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch {}
    setLoading(false);
  };

  if (submitted) {
    return (
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <div className="glass-card p-10">
            <FontAwesomeIcon icon={faCheckCircle} className="size-16 text-green-500 mb-6" />
            <h1 className="text-2xl font-bold mb-4">Message Received!</h1>
            <p className="text-muted-foreground mb-8">
              Thank you for reaching out. We&apos;ll review your request and get back to you within 24-48 hours.
            </p>
            <Link href="/" className="inline-flex">
              <Button>Back to Home</Button>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge variant="secondary" className="mb-4">Get In Touch</Badge>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Request a Free Estimate</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Tell us about your piece and we&apos;ll provide a detailed written estimate within 48 hours — no obligation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-5">
            {[
              { icon: faPhone, title: "Phone", content: "(555) 234-8901" },
              { icon: faEnvelope, title: "Email", content: "hello@revivalcraft.com" },
              { icon: faLocationDot, title: "Workshop", content: "2847 Craftsman Way, Portland, OR 97214" },
              { icon: faClock, title: "Hours", content: "Mon–Fri: 8am–6pm | Sat: 9am–2pm" },
            ].map(({ icon, title, content }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                  <FontAwesomeIcon icon={icon} className="size-4" />
                </div>
                <div>
                  <div className="font-semibold text-sm">{title}</div>
                  <div className="text-sm text-muted-foreground">{content}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Tell Us About Your Project</CardTitle>
                <CardDescription>Describe your furniture and what you need — photos help us give a faster estimate.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name</label>
                      <Input name="name" placeholder="Jane Smith" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input name="email" type="email" placeholder="jane@example.com" required />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone</label>
                      <Input name="phone" placeholder="(555) 123-4567" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Service Interested In</label>
                      <Select name="service">
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="furniture-refinishing">Furniture Refinishing</SelectItem>
                          <SelectItem value="antique-restoration">Antique Restoration</SelectItem>
                          <SelectItem value="wood-repair">Wood Repair & Joinery</SelectItem>
                          <SelectItem value="upholstery">Upholstery</SelectItem>
                          <SelectItem value="custom-finishing">Custom Finishing</SelectItem>
                          <SelectItem value="cane-rush-repair">Cane & Rush Repair</SelectItem>
                          <SelectItem value="other">Other / Not Sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Describe Your Piece</label>
                    <Textarea
                      name="description"
                      placeholder="Tell us about your furniture — age, wood type, condition, and what you'd like done. Include dimensions if possible."
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" disabled={loading} className="w-full font-semibold">
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faPaperPlane} className="mr-2 size-4" />
                        Send Request
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
