"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";

const projects = [
  { category: "antique", title: "Victorian Walnut Secretary", description: "Complete restoration of an 1880s burl walnut secretary desk. Replaced missing veneer, restored original brass hardware, hand-rubbed oil finish.", image: "/images/projects/victorian-desk.jpg" },
  { category: "modern", title: "Mid-Century Teak Sideboard", description: "Refinished 1960s Danish teak credenza. Repaired water-damaged veneer, applied Danish oil finish, restored sliding door tracks.", image: "/images/projects/teak-sideboard.jpg" },
  { category: "antique", title: "Heirloom Rocking Chair", description: "Re-caned seat and back with traditional hole-to-hole cane. Structural reinforcement and hand-rubbed oil on 1920s oak rocker.", image: "/images/projects/rocking-chair.jpg" },
  { category: "antique", title: "Art Deco Dining Set", description: "Full restoration of a 1930s mahogany Art Deco dining table with six chairs. French polish finish, reupholstered seats.", image: "/images/projects/art-deco-dining.jpg" },
  { category: "modern", title: "Farmhouse Hutch Revival", description: "Stripped eight layers of paint from a 1940s pine hutch. Repaired joinery, finished in hand-waxed natural pine.", image: "/images/projects/farmhouse-hutch.jpg" },
  { category: "antique", title: "Grandfather Clock Restoration", description: "Mechanical overhaul and case refinishing of a 1920s quarter-sawn oak grandfather clock.", image: "/images/projects/grandfather-clock.jpg" },
  { category: "upholstery", title: "Chesterfield Sofa Rebuild", description: "Complete rebuild of a Chesterfield sofa — new springs, premium leather upholstery, deep-button tufting.", image: "/images/projects/chesterfield.jpg" },
  { category: "modern", title: "Cane Chair Revival", description: "Six mid-century dining chairs with completely re-caned seats using hand-laced technique matching original pattern.", image: "/images/projects/cane-chairs.jpg" },
  { category: "upholstery", title: "Wingback Chair Transformation", description: "Stripped to frame, reinforced joints, new webbing, premium velvet upholstery with piping detail.", image: "/images/projects/wingback-chair.jpg" },
];

const categories = ["all", "antique", "modern", "upholstery"];

export function ProjectsClient() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge variant="secondary" className="mb-4">Our Portfolio</Badge>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Before &amp; After</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Every piece tells a story. Browse our gallery of transformations.
          </p>
        </div>

        <Tabs value={filter} onValueChange={(v) => setFilter(v ?? "all")} className="mb-10">
          <TabsList className="mx-auto flex justify-center bg-transparent gap-2">
            {categories.map((cat) => (
              <TabsTrigger key={cat} value={cat} className="capitalize rounded-full px-5">
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <Card key={project.title} className="glass-card overflow-hidden transition-shadow hover:shadow-lg">
              <div className="w-full h-52 bg-muted flex items-center justify-center overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2 capitalize">{project.category}</Badge>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="text-center mt-14">
          <p className="text-muted-foreground mb-6">Have a piece that needs restoration?</p>
          <Link href="/contact" className="inline-flex">
            <Button size="lg" className="font-semibold">
              <FontAwesomeIcon icon={faPhone} className="mr-2 size-4" />
              Get Free Estimate
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
