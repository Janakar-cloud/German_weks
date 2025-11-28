import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

const navigation = {
  services: [
    { name: "Routine Maintenance", href: "/services#maintenance" },
    { name: "Diagnostics", href: "/services#diagnostics" },
    { name: "Body & Paint", href: "/services#bodywork" },
    { name: "Detailing & Protection", href: "/services#detailing" },
    { name: "Performance Tuning", href: "/services#tuning" },
    { name: "Motorsport Prep", href: "/services#motorsport" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    { name: "Instagram", href: "https://instagram.com/german_werks_", icon: Instagram },
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "YouTube", href: "#", icon: Youtube },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold text-white">
              GERMAN WERKS
            </h3>
            <p className="text-sm leading-relaxed">
              German Experts. Precision Meets Passion.
            </p>
            <p className="text-sm leading-relaxed">
              South India's premier destination for German and European automotive care.
            </p>
            <div className="pt-4">
              <p className="text-xs text-gray-400">
                Launching January 2026
              </p>
              <p className="text-xs text-gray-400">
                13,000+ sq. ft. Flagship Facility
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+919944438636"
                  className="text-sm hover:text-white transition-colors"
                >
                  +91-994 443 8636
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:germanwerks26@gmail.com"
                  className="text-sm hover:text-white transition-colors"
                >
                  germanwerks26@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Coimbatore, Tamil Nadu, India
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6 flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} German Werks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
