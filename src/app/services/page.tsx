import type { Metadata } from "next";
import { Wrench, Search, Paintbrush, Sparkles, Zap, Trophy, Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services | German Werks - Premium German Car Service in Coimbatore",
  description: "Comprehensive German car services including maintenance, diagnostics, body & paint, detailing, performance tuning, and motorsport prep. OE-level tools and certified technicians.",
};

const services = [
  {
    id: "maintenance",
    icon: Wrench,
    title: "Routine Maintenance",
    tagline: "Keep Your German Machine Running Like New",
    description: "OE-grade tools, certified protocols, and preventive care to ensure your vehicle performs at its best.",
    features: [
      "Engine oil and filter changes",
      "Brake system inspection and service",
      "Suspension and steering checks",
      "Transmission service",
      "Cooling system maintenance",
      "Scheduled service intervals",
    ],
  },
  {
    id: "diagnostics",
    icon: Search,
    title: "Diagnostics",
    tagline: "Factory-Level Fault Detection",
    description: "ISTA, Xentry, ODIS — no guesswork, just precision diagnostics using manufacturer-grade equipment.",
    features: [
      "BMW ISTA diagnostics",
      "Mercedes Xentry system",
      "VAG ODIS for Audi/VW",
      "Real-time fault detection",
      "Component coding and programming",
      "Digital service history",
    ],
  },
  {
    id: "bodywork",
    icon: Paintbrush,
    title: "Body & Paint Care",
    tagline: "Restore Perfection. Elevate Style.",
    description: "Expert dent removal, full-body paint, and custom body kits designed with precision and care.",
    features: [
      "Paintless dent repair",
      "Full body paint and refinishing",
      "Custom body kit fabrication",
      "Aerodynamic enhancements",
      "Panel replacement and alignment",
      "Factory-matched paint colors",
    ],
  },
  {
    id: "detailing",
    icon: Sparkles,
    title: "Detailing & Protection",
    tagline: "Ceramic Coating, PPF & Interior Care",
    description: "Premium-grade materials and meticulous techniques to protect and enhance your vehicle.",
    features: [
      "9H ceramic coating",
      "Paint Protection Film (PPF)",
      "Interior deep cleaning",
      "Leather conditioning",
      "Engine bay detailing",
      "Headlight restoration",
    ],
  },
  {
    id: "tuning",
    icon: Zap,
    title: "Performance Tuning",
    tagline: "Race-Ready Upgrades. Road-Ready Reliability.",
    description: "ECU remaps, throttle tuning, and stage upgrades to unleash your vehicle's full potential.",
    features: [
      "ECU remapping and chip tuning",
      "Stage 1, 2, 3 upgrades",
      "Throttle response optimization",
      "Dyno testing and calibration",
      "Exhaust system upgrades",
      "Intake and turbo modifications",
    ],
  },
  {
    id: "motorsport",
    icon: Trophy,
    title: "Motorsport Prep",
    tagline: "Kari Speedway-Ready. Built for Enthusiasts.",
    description: "Professional track preparation with suspension tuning, brake upgrades, and race-spec builds.",
    features: [
      "Track-spec suspension setup",
      "Performance brake systems",
      "Roll cage installation",
      "Weight reduction",
      "Safety equipment installation",
      "Race alignment and geometry",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
            Certified Care. Motorsport Precision.
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            All under one roof. Every service executed with German precision and attention to detail.
          </p>
          <Button asChild size="xl" className="bg-white text-gray-900 hover:bg-gray-100">
            <Link href="/contact">Book Your Service</Link>
          </Button>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gray-900 text-white mb-6">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-3">
                    {service.title}
                  </h2>
                  <p className="text-xl font-medium text-gray-700 mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <Button asChild size="lg">
                    <Link href="/contact">Request Quote</Link>
                  </Button>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                    <h3 className="text-lg font-heading font-bold text-gray-900 mb-6">
                      What's Included:
                    </h3>
                    <ul className="space-y-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <Check className="h-6 w-6 text-gray-900 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Ready to Experience the Werks Difference?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Book your service today and discover why enthusiasts trust German Werks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="xl" className="bg-white text-gray-900 hover:bg-gray-100">
              <Link href="/contact">Book a Service</Link>
            </Button>
            <Button asChild size="xl" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
