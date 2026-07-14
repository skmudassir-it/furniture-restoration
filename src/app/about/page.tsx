import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHammer, faAward, faHeart, faUsers, faPhone } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "About RevivalCraft",
  description: "Master furniture restorers since 1998. Learn about our craft, our team, and our commitment to quality.",
};

const team = [
  { name: "Robert Ellison", role: "Master Restorer & Founder", initials: "RE", image: "/images/team/robert.jpg" },
  { name: "Maria Santos", role: "Lead Finisher & Colorist", initials: "MS", image: "/images/team/maria.jpg" },
  { name: "David Chen", role: "Upholstery Specialist", initials: "DC", image: "/images/team/david.jpg" },
  { name: "Sarah Kimani", role: "Antique Appraiser & Historian", initials: "SK", image: "/images/team/sarah.jpg" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-white" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">Our Story</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Crafting Furniture <span className="text-primary">Since 1998</span></h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              What started as a one-man workshop in a Portland garage has grown into a team of master craftsmen
              dedicated to the art of furniture restoration. Over 25 years and 4,800 pieces later, we remain
              committed to the same principle: every piece deserves artisan care.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: faAward, title: "Our Mission", text: "To preserve the beauty and craftsmanship of fine furniture through meticulous restoration, extending the life of cherished pieces for generations." },
              { icon: faHeart, title: "Our Values", text: "Honesty in assessment, transparency in pricing, and an unwavering commitment to quality — no shortcuts, no compromises." },
              { icon: faHammer, title: "Our Craft", text: "Combining traditional hand-tool techniques with modern finishing technology, we bridge centuries of woodworking knowledge." },
            ].map(({ icon, title, text }) => (
              <Card key={title} className="glass-card">
                <CardHeader>
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                    <FontAwesomeIcon icon={icon} className="size-4" />
                  </div>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription className="leading-relaxed">{text}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-20 bg-amber-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge variant="secondary" className="mb-4">Our Team</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Meet the Craftsmen</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A team of specialists — each with decades of experience in their craft.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((person) => (
              <Card key={person.name} className="glass-card text-center">
                <CardContent className="pt-8 pb-6">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-amber-700 to-amber-500 flex items-center justify-center text-white font-bold text-lg mb-4 overflow-hidden">
                    <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                  </div>
                  <CardTitle className="text-base">{person.name}</CardTitle>
                  <CardDescription>{person.role}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Let&apos;s Talk About Your Piece</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Bring your furniture to our workshop or send us photos — we&apos;ll provide a free, no-obligation estimate.
          </p>
          <Link href="/contact" className="inline-flex">
            <Button size="lg" className="font-semibold">
              <FontAwesomeIcon icon={faPhone} className="mr-2 size-4" />
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
