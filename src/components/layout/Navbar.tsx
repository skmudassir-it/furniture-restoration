"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCouch,
} from "@fortawesome/free-solid-svg-icons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="glass-nav sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 font-bold text-xl text-primary shrink-0">
            <img src="/logo.svg" alt="RevivalCraft" className="size-8" />
            <span className="hidden sm:inline">RevivalCraft</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="inline-flex">
                <Button variant={pathname === href ? "default" : "ghost"} className="text-sm font-medium">
                  {label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link href="/contact" className="inline-flex">
              <Button className="font-semibold">
                <FontAwesomeIcon icon={faCouch} className="mr-2 size-4" />
                Free Estimate
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="md:hidden">
              <Button variant="ghost" size="icon">
                <FontAwesomeIcon icon={faBars} className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-4/5 sm:w-72">
              <div className="flex flex-col gap-1 mt-8">
                {navLinks.map(({ href, label }) => (
                  <Link key={href} href={href} className="inline-flex">
                    <Button
                      variant={pathname === href ? "default" : "ghost"}
                      className="justify-start text-base w-full"
                      onClick={() => setOpen(false)}
                    >
                      {label}
                    </Button>
                  </Link>
                ))}
                <Link href="/contact" className="inline-flex mt-4">
                  <Button className="w-full font-semibold" onClick={() => setOpen(false)}>
                    Free Estimate
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
