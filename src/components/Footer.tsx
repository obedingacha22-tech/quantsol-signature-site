import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold tracking-tight mb-2">QUANTSOL</h3>
            <p className="text-gold text-xs tracking-widest uppercase mb-4">Consultants Limited</p>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              The Hallmark of Quantity Surveying Solutions. Delivering cost-effective, sustainable, and client-centered solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gold mb-6">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Portfolio", path: "/portfolio" },
                { label: "Our Team", path: "/team" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="text-sm text-primary-foreground/60 hover:text-gold transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gold mb-6">Services</h4>
            <nav className="flex flex-col gap-3">
              {["Quantity Surveying", "Project Management", "Facilities Management"].map((s) => (
                <Link key={s} to="/services" className="text-sm text-primary-foreground/60 hover:text-gold transition-colors">
                  {s}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gold mb-6">Contact</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/60">Sigona Suites 502B, Kikuyu, Kenya</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gold flex-shrink-0" />
                <a href="tel:0798770275" className="text-sm text-primary-foreground/60 hover:text-gold transition-colors">0798 770 275</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gold flex-shrink-0" />
                <a href="mailto:info@quantsol.co.ke" className="text-sm text-primary-foreground/60 hover:text-gold transition-colors">info@quantsol.co.ke</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Quantsol Consultants Limited. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/40">
            Registered under the Architects & Quantity Surveyors Act, Cap 525
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
