import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCouch, faSprayCanSparkles, faHammer, faChair, faPalette, faLeaf, faCheckCircle, faArrowLeft, faPhone } from "@fortawesome/free-solid-svg-icons";

const services: Record<string, { title: string; description: string; icon: any; image: string; features: string[]; process: string[]; longDescription: string }> = {
  "furniture-refinishing": {
    title: "Furniture Refinishing",
    description: "Strip, sand, and refinish worn furniture to like-new condition.",
    icon: faSprayCanSparkles,
    image: "/images/services/furniture-refinishing.jpg",
    features: ["Chemical & hand stripping of old finishes", "Precision sanding to preserve wood grain", "Custom stain color matching", "Lacquer, polyurethane, or hand-rubbed oil finish"],
    process: ["Inspection & assessment of wood condition", "Stripping old finish — chemical or hand method", "Sanding through progressive grits", "Stain application & color matching", "Protective topcoat application", "Final inspection & hand-buffing"],
    longDescription: "Our furniture refinishing service transforms tired, scratched, and worn pieces into stunning showpieces. We remove old finishes completely — not just scuff-and-spray — and rebuild the surface with premium stains and protective topcoats. Every piece is color-matched to your preference, whether you want to restore the original shade or go with something entirely new.",
  },
  "antique-restoration": {
    title: "Antique Restoration",
    description: "Period-accurate restoration of antique and heirloom pieces.",
    icon: faCouch,
    image: "/images/services/antique-restoration.jpg",
    features: ["Period-accurate restoration techniques", "Original hardware cleaned and preserved", "Structural stabilization & reinforcement", "Museum-quality reversible finishes"],
    process: ["Historical research & period identification", "Documentation of original construction", "Gentle cleaning & consolidation", "Structural repairs with period joinery", "Finish restoration matching original", "Hardware cleaning & preservation"],
    longDescription: "Antique furniture requires a different approach — one that respects history while ensuring structural integrity. Our master craftsmen research each piece's era and apply period-appropriate techniques. We use reversible adhesives and finishes where possible, preserving the piece's authenticity and value for generations to come.",
  },
  "wood-repair": {
    title: "Wood Repair & Joinery",
    description: "Structural repairs, veneer replacement, and broken part reconstruction.",
    icon: faHammer,
    image: "/images/services/wood-repair.jpg",
    features: ["Loose & broken joint repair", "Veneer lifting, patching & replacement", "Crack, split & gouge filling", "Missing part fabrication & matching"],
    process: ["Structural assessment & stability check", "Disassembly of damaged joints", "Joint cleaning, regluing & clamping", "Veneer flattening & replacement", "Crack filling with color-matched epoxy", "Final sanding & finish blending"],
    longDescription: "Broken legs, split tabletops, lifting veneer — these are the emergencies we handle daily. Our wood repair service addresses both cosmetic and structural damage, from hairline cracks to completely shattered components. We fabricate replacement parts from matching wood species and age them to blend seamlessly with the original piece.",
  },
  "upholstery": {
    title: "Upholstery",
    description: "Complete reupholstery with premium fabrics, leather, and padding replacement.",
    icon: faChair,
    image: "/images/services/upholstery.jpg",
    features: ["Extensive fabric & leather selection", "Spring, webbing & frame repair", "High-density foam & padding replacement", "Tufting, buttoning & decorative trim"],
    process: ["Fabric/leather consultation & selection", "Frame inspection & repair", "Stripping old upholstery & padding", "Spring/webbing replacement", "New padding & fabric application", "Detail work — tufting, welting, trim"],
    longDescription: "Great upholstery starts with a solid foundation. We inspect and repair the frame, springs, and webbing before a single stitch of fabric goes on. Then we apply premium foam, batting, and your chosen fabric — anything from classic linen to top-grain leather — with precise pattern matching and hand-finished details.",
  },
  "custom-finishing": {
    title: "Custom Finishing",
    description: "Hand-rubbed oil finishes, French polish, distressed looks, and custom color matching.",
    icon: faPalette,
    image: "/images/services/custom-finishing.jpg",
    features: ["French polish — high-gloss shellac", "Hand-rubbed oil & wax finishes", "Distressed, cerused & limed effects", "Custom color matching to any sample"],
    process: ["Consultation — discuss desired look & feel", "Sample boards for approval", "Surface preparation & base application", "Layering — color, toner, glaze as needed", "Topcoat — oil, wax, shellac, or lacquer", "Hand-rubbing & final sheen adjustment"],
    longDescription: "The finish defines the look, feel, and durability of your furniture. Our custom finishing service goes far beyond staining — we offer French polish for mirror-like gloss, hand-rubbed oil for a natural matte warmth, cerused finishes that pop the grain with white pigment, and distressed effects that tell a story. We match any color from a photo, fabric swatch, or existing piece.",
  },
  "cane-rush-repair": {
    title: "Cane & Rush Repair",
    description: "Traditional hand-woven cane, rush, and wicker seat repair.",
    icon: faLeaf,
    image: "/images/services/cane-rush-repair.jpg",
    features: ["Hand-woven hole-to-hole cane", "Pressed-in sheet cane", "Natural rush & Danish paper cord", "Wicker panel repair & replacement"],
    process: ["Assessment — identify weave type & material", "Removal of damaged weaving", "Frame & spline groove preparation", "Weaving — hand-laced or pressed cane", "Rush/cord wrapping for seats", "Final tensioning & trimming"],
    longDescription: "A sagging cane seat doesn't mean the chair is done. Our cane and rush repair service restores seating to factory-tight tension using traditional hand-weaving techniques. We work with all materials — hole-to-hole cane, pressed sheet cane, natural rush, Danish paper cord, and wicker panels — matching both the weave pattern and material to the original.",
  },
};

export function generateStaticParams() {
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
      {/* Hero */}
      <section className="relative py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-white" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2 size-3" />
            Back to Services
          </Link>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                <FontAwesomeIcon icon={service.icon} className="size-5" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{service.title}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{service.longDescription}</p>
              <Link href="/contact" className="inline-flex">
                <Button className="font-semibold">
                  <FontAwesomeIcon icon={faPhone} className="mr-2 size-4" />
                  Request a Quote
                </Button>
              </Link>
            </div>
            <div className="w-full h-72 sm:h-80 bg-muted rounded-xl overflow-hidden">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Features & Process */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>What&apos;s Included</CardTitle>
                <CardDescription>Everything covered in this service</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <FontAwesomeIcon icon={faCheckCircle} className="size-4 text-primary mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Our Process</CardTitle>
                <CardDescription>How we approach each project</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  {service.process.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Badge variant="secondary" className="shrink-0 mt-0.5 w-6 h-6 flex items-center justify-center rounded-full p-0 text-xs">
                        {i + 1}
                      </Badge>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-50/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Contact us for a free estimate on your {service.title.toLowerCase()} project.
          </p>
          <Link href="/contact" className="inline-flex">
            <Button size="lg" className="font-semibold">
              <FontAwesomeIcon icon={faPhone} className="mr-2 size-4" />
              Get Free Estimate
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
