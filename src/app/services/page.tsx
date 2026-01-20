"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check } from "lucide-react";





const services = [
  {
    id: "maintenance",
    title: "Routine Maintenance",
    tagline: "Keep Your German Machine Running Like New",
    description: "OEM-grade tools, certified protocols, and preventive care to ensure your vehicle performs at its best.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
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
    title: "Diagnostics",
    tagline: "Factory-Level Fault Detection",
    description: "ISTA, Xentry, ODIS — no guesswork, just precision diagnostics using manufacturer-grade equipment.",
    image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&q=80",
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
    title: "Body & Paint Care",
    tagline: "Restore Perfection. Elevate Style.",
    description: "Expert dent removal, full-body paint, and custom body kits designed with precision and care.",
    image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80",
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
    title: "Detailing & Protection",
    tagline: "Ceramic Coating | Graphene Coating, PPF & Interior Care",
    description: "Premium-grade materials and meticulous techniques to protect and enhance your vehicle.",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80",
    features: [
      "9H ceramic coating | Graphene coating",
      "Paint Protection Film (PPF)",
      "Interior deep cleaning",
      "Leather conditioning",
      "Engine bay detailing",
      "Headlight restoration",
    ],
  },
  {
    id: "tuning",
    title: "Performance Tuning",
    tagline: "Race-Ready Upgrades. Road-Ready Reliability.",
    description: "ECU remaps, throttle tuning, and stage upgrades to unleash your vehicle's full potential.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    features: [
      "ECU remapping and chip tuning",
      "Stage 1, 2, 3 upgrades",
      "Throttle response optimization",
      "Dyno testing and calibration",
      "Exhaust system upgrades",
      "Intake and turbo modifications",
    ],
  },
  // Motorsport Prep service fully removed
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
            Certified Care. Precision Engineering.
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            All under one roof. Every service executed with German precision and attention to detail.
          </p>
          <Button asChild className="bg-white text-gray-900 hover:bg-gray-100">
            <Link href="/contact">Book Your Service</Link>
          </Button>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-3">
                    {service.title}
                  </h2>
                  <p className="text-xl font-medium text-gray-700 mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <Button asChild>
                    <Link href="/contact">Request Quote</Link>
                  </Button>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <motion.div 
                    className="relative rounded-2xl overflow-hidden shadow-xl group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Service Image */}
                    <div className="relative h-80 overflow-hidden">
                      <motion.img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      
                      {/* Service Title Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          className="text-white"
                        >
                          <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                          <p className="text-sm text-gray-200">{service.tagline}</p>
                        </motion.div>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="bg-gray-50 p-8 border border-gray-200">
                      <h3 className="text-lg font-heading font-bold text-gray-900 mb-6">
                        What's Included:
                      </h3>
                      <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <motion.li 
                          key={feature} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: idx * 0.2,
                            }}
                          >
                            <Check className="h-6 w-6 text-gray-900 mr-3 flex-shrink-0 mt-0.5" />
                          </motion.div>
                          <span className="text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
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
            <Button asChild className="bg-white text-gray-900 hover:bg-gray-100">
              <Link href="/contact">Book a Service</Link>
            </Button>
            <Button asChild className="border-white text-white hover:bg-white/10">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
