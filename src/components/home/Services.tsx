"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Routine Maintenance",
    description: "Keep your German machine running like new with OEM-grade tools and certified protocols.",
    href: "/services#maintenance",
  },
  {
    title: "Diagnostics",
    description: "Factory-level fault detection using ISTA, Xentry, and ODIS. No guesswork, just precision.",
    href: "/services#diagnostics",
  },
  {
    title: "Body & Paint Care",
    description: "Restore perfection with dent removal, full-body paint, and custom body kits.",
    href: "/services#bodywork",
  },
  {
    title: "Detailing & Protection",
    description: "Premium ceramic coating | Graphene coating , PPF, and interior care with premium-grade materials.",
    href: "/services#detailing",
  },
  {
    title: "Performance Tuning",
    description: "Race-ready upgrades with road-ready reliability. ECU remaps and stage upgrades.",
    href: "/services#tuning",
  },
  // Motorsport Prep service fully removed
];

export function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900 mb-4">
            Certified Care. Precision Engineering.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            All under one roof. Every service executed with German precision and attention to detail.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.href}>
                <div className="group h-full bg-gray-50 rounded-2xl p-8 service-card-hover border border-gray-200">
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center text-sm font-medium text-gray-900 group-hover:text-gray-700">
                    Learn more
                    <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Button asChild size="xl" className="bg-gray-900 text-white hover:bg-gray-800">
            <Link href="/services">View All Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
