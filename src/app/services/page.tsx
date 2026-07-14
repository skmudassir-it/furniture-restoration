import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCouch, faSprayCanSparkles, faHammer, faChair, faPalette, faLeaf, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Our Restoration Services",
  description: "Expert furniture restoration, refinishing, wood repair, upholstery, custom finishing, and cane & rush repair.",
};

const services = [
  { icon: faSprayCanSparkles, title: "Furniture Refinishing", description: "Strip, sand, and refinish worn furniture to like-new condition with premium stains, lacquers, and hand-rubbed oils.", slug: "furniture-refinishing", image: "/images/services/furniture-refinishing.jpg", features: ["Chemical & hand stripping", "Sanding & surface prep", "Stain color matching", "Lacquer, poly, or oil finish"] },
  { icon: faCouch, title: "Antique Restoration", description: "Period-accurate restoration of antique and heirloom pieces preserving historical integrity and craftsmanship.", slug: "antique-restoration", image: "/images/services/antique-restoration.jpg", features: ["Period-accurate techniques", "Original hardware preservation", "Structural stabilization", "Museum-quality finishes"] },
  { icon: faHammer, title: "Wood Repair & Joinery", description: "Structural repairs, joint reinforcement, veneer replacement, and reconstruction of broken or missing parts.", slug: "wood-repair", image: "/images/services/wood-repair.jpg", features: ["Loose joint repair", "Veneer replacement", "Crack & split filling", "Missing part fabrication"] },
  { icon: faChair, title: "Upholstery", description: "Complete reupholstery with premium fabrics, leather, springs, webbing, and padding replacement.", slug: "upholstery", image: "/images/services/upholstery.jpg", features: ["Fabric & leather options", "Spring & webbing repair", "Foam & padding replacement", "Tufting & button work"] },
  { icon: faPalette, title: "Custom Finishing", description: "Hand-rubbed oil finishes, French polish, distressed looks, cerused finishes, and custom color matching.", slug: "custom-finishing", image: "/images/services/custom-finishing.jpg", features: ["French polish", "Hand-rubbed oil & wax", "Distressed & cerused", "Custom color matching"] },
  { icon: faLeaf, title: "Cane & Rush Repair", description: "Traditional hand-woven cane, rush, wicker, and Danish cord seat repair for vintage and modern seating.", slug: "cane-rush-repair", image: "/images/services/cane-rush-repair.jpg", features: ["Hand-woven cane", "Natural rush weaving", "Danish paper cord", "Wicker panel repair"] },
];

export default function ServicesPage() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge variant="secondary" className="mb-4">What We Do</Badge>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Our Restoration Services</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Six specialized services covering every aspect of furniture restoration — from structural repair to showroom finishing.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              <Card className="glass-card overflow-hidden transition-shadow hover:shadow-lg h-full group">
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
                <CardContent>
                  <div className="flex items-center text-sm text-primary font-medium gap-1 group-hover:gap-2 transition-all">
                    Learn more <FontAwesomeIcon icon={faArrowRight} className="size-3" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
