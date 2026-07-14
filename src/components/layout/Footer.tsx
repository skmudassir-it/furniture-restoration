import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCouch, faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons";

const footerLinks = {
  Services: [
    { href: "/services/furniture-refinishing", label: "Furniture Refinishing" },
    { href: "/services/antique-restoration", label: "Antique Restoration" },
    { href: "/services/wood-repair", label: "Wood Repair" },
    { href: "/services/upholstery", label: "Upholstery" },
    { href: "/services/custom-finishing", label: "Custom Finishing" },
    { href: "/services/cane-rush-repair", label: "Cane & Rush Repair" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/projects", label: "Our Projects" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-amber-200/60 bg-white/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary">
              <img src="/logo.svg" alt="RevivalCraft" className="size-7" />
              RevivalCraft
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Expert furniture restoration, refinishing, and repair since 1998.
              Every piece treated with artisan care.
            </p>
            <div className="flex gap-3 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors"><FontAwesomeIcon icon={faFacebook} className="size-4" /></a>
              <a href="#" className="hover:text-primary transition-colors"><FontAwesomeIcon icon={faInstagram} className="size-4" /></a>
              <a href="#" className="hover:text-primary transition-colors"><FontAwesomeIcon icon={faPinterest} className="size-4" /></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">Services</h4>
            <ul className="space-y-2.5">
              {footerLinks.Services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.Company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} className="size-3.5 text-primary shrink-0" />
                <span>(555) 234-8901</span>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="size-3.5 text-primary shrink-0" />
                <span>hello@revivalcraft.com</span>
              </li>
              <li className="flex items-start gap-2">
                <FontAwesomeIcon icon={faLocationDot} className="size-3.5 text-primary shrink-0 mt-0.5" />
                <span>2847 Craftsman Way<br />Portland, OR 97214</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-amber-200/40 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} RevivalCraft Furniture Restoration. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
