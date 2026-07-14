"use client";

import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCouch, faSprayCanSparkles, faHammer, faChair, faPalette,
  faLeaf, faStar, faQuoteLeft, faArrowRight, faPhone, faClock, faShield, faMedal,
} from "@fortawesome/free-solid-svg-icons";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const services = [
  { icon: faSprayCanSparkles, title: "Furniture Refinishing", description: "Strip, sand, and refinish worn furniture to like-new condition with premium stains and lacquers.", href: "/services/furniture-refinishing", image: "/images/services/furniture-refinishing.jpg" },
  { icon: faCouch, title: "Antique Restoration", description: "Meticulous period-accurate restoration of antique and heirloom pieces by master craftsmen.", href: "/services/antique-restoration", image: "/images/services/antique-restoration.jpg" },
  { icon: faHammer, title: "Wood Repair & Joinery", description: "Structural repairs, joint reinforcement, veneer replacement, and broken part reconstruction.", href: "/services/wood-repair", image: "/images/services/wood-repair.jpg" },
  { icon: faChair, title: "Upholstery", description: "Complete reupholstery with premium fabrics, leather, springs, and padding replacement.", href: "/services/upholstery", image: "/images/services/upholstery.jpg" },
  { icon: faPalette, title: "Custom Finishing", description: "Hand-rubbed oil finishes, French polish, distressed looks, and custom color matching.", href: "/services/custom-finishing", image: "/images/services/custom-finishing.jpg" },
  { icon: faLeaf, title: "Cane & Rush Repair", description: "Traditional hand-woven cane, rush, and wicker seat repair for vintage and modern chairs.", href: "/services/cane-rush-repair", image: "/images/services/cane-rush-repair.jpg" },
];

const projects = [
  { title: "Victorian Walnut Secretary", description: "Complete restoration of an 1880s burl walnut secretary desk with original brass hardware.", image: "/images/projects/victorian-desk.jpg" },
  { title: "Mid-Century Teak Sideboard", description: "Refinished Danish teak credenza — repaired veneer, new oil finish, restored sliding doors.", image: "/images/projects/teak-sideboard.jpg" },
  { title: "Heirloom Rocking Chair", description: "Re-caned seat and back, structural reinforcement, and hand-rubbed oil finish on a family heirloom.", image: "/images/projects/rocking-chair.jpg" },
  { title: "Art Deco Dining Set", description: "Full restoration of a 1930s Art Deco mahogany dining table with six matching chairs.", image: "/images/projects/art-deco-dining.jpg" },
  { title: "Farmhouse Hutch Revival", description: "Stripped layers of paint, repaired joinery, and finished in hand-waxed natural pine.", image: "/images/projects/farmhouse-hutch.jpg" },
  { title: "Grandfather Clock Restoration", description: "Mechanical overhaul and case refinishing of a 1920s oak grandfather clock.", image: "/images/projects/grandfather-clock.jpg" },
];

const testimonials = [
  { quote: "RevivalCraft restored my grandmother's dining table — it looks better than I ever remember. Absolutely flawless work.", name: "Margaret S.", role: "Homeowner" },
  { quote: "They saved a 200-year-old armoire that three other shops said was beyond repair. True artisans.", name: "James K.", role: "Antique Collector" },
  { quote: "Our mid-century credenza came back looking showroom-new. The color matching was perfect.", name: "Lisa & Tom R.", role: "Interior Design Clients" },
  { quote: "Honest pricing, quick turnaround, and craftsmanship that speaks for itself. Highly recommend.", name: "David M.", role: "Repeat Client" },
];

const stats = [
  { icon: faStar, value: "25+", label: "Years Experience" },
  { icon: faShield, value: "4,800+", label: "Pieces Restored" },
  { icon: faMedal, value: "100%", label: "Satisfaction" },
  { icon: faClock, value: "48hr", label: "Estimate Turnaround" },
];

export function HomeClient() {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  const testimonialAutoplay = useRef(Autoplay({ delay: 6000, stopOnInteraction: true }));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/60 via-white to-amber-50/40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-6 text-sm px-4 py-1.5" variant="secondary">
              Serving Since 1998 — Family Owned
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Bringing Furniture <span className="text-primary">Back to Life</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Expert restoration, refinishing, and repair for antique and modern furniture.
              Every piece receives artisan-level care from our master craftsmen.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex">
                <Button size="lg" className="font-semibold text-base">
                  <FontAwesomeIcon icon={faCouch} className="mr-2 size-4" />
                  Get Free Estimate
                </Button>
              </Link>
              <Link href="/projects" className="inline-flex">
                <Button variant="outline" size="lg" className="text-base">
                  View Our Work
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-amber-200/40 bg-white/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ icon, value, label }) => (
              <div key={label} className="text-center">
                <FontAwesomeIcon icon={icon} className="size-6 text-primary mb-2" />
                <div className="text-2xl sm:text-3xl font-bold text-foreground">{value}</div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge variant="secondary" className="mb-4">Our Services</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Expert Restoration Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From antique heirlooms to mid-century modern pieces — we restore furniture of every era and style.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.href} href={service.href}>
                <Card className="glass-card overflow-hidden transition-shadow hover:shadow-lg h-full group cursor-pointer">
                  <div className="w-full h-44 bg-muted flex items-center justify-center overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                  <CardHeader>
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-2">
                      <FontAwesomeIcon icon={service.icon} className="size-4" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Carousel */}
      <section className="py-20 sm:py-24 bg-amber-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge variant="secondary" className="mb-4">Our Work</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Before &amp; After Transformations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See the craftsmanship behind every piece we restore.
            </p>
          </div>
          <Carousel plugins={[autoplay.current]} opts={{ loop: true, align: "start" }} className="mx-auto max-w-5xl">
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.title} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="glass-card overflow-hidden h-full">
                    <div className="w-full h-48 bg-muted flex items-center justify-center overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-base">{project.title}</CardTitle>
                      <CardDescription className="text-sm">{project.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
          <div className="text-center mt-10">
            <Link href="/projects" className="inline-flex">
              <Button variant="outline">
                View All Projects
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge variant="secondary" className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">What Our Clients Say</h2>
          </div>
          <Carousel plugins={[testimonialAutoplay.current]} opts={{ loop: true, align: "start" }} className="mx-auto max-w-3xl">
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem key={t.name} className="basis-full">
                  <div className="glass-card p-8 sm:p-10 text-center">
                    <FontAwesomeIcon icon={faQuoteLeft} className="size-8 text-primary/30 mb-4" />
                    <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                    <div className="font-semibold text-foreground">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-gradient-to-r from-amber-800 via-amber-700 to-amber-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Restore Your Treasures?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">
            Bring us your worn, damaged, or neglected furniture. We&apos;ll give it a second life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex">
              <Button size="lg" variant="secondary" className="font-semibold">
                <FontAwesomeIcon icon={faPhone} className="mr-2 size-4" />
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
