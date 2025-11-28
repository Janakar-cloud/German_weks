"use client";

import { motion } from "framer-motion";
import { Cpu, Gauge, Wrench, Shield } from "lucide-react";

const techStack = [
  {
    icon: Cpu,
    title: "OE-Level Diagnostic Systems",
    items: ["BMW ISTA", "Mercedes Xentry", "VAG ODIS", "Real-time fault detection"],
  },
  {
    icon: Shield,
    title: "Advanced Paint Protection",
    items: ["Ceramic coating", "Paint Protection Film (PPF)", "Professional detailing", "Interior restoration"],
  },
  {
    icon: Gauge,
    title: "Performance Tuning Tools",
    items: ["ECU remapping", "Stage upgrades", "Dyno-ready setups", "Throttle optimization"],
  },
  {
    icon: Wrench,
    title: "Motorsport Infrastructure",
    items: ["Race-prep facilities", "Suspension tuning", "Kari Speedway alignment", "Custom fabrication"],
  },
];

export function TechStack() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            Our Garage Tech Stack
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            State-of-the-art equipment and certified tools to deliver precision service 
            that matches factory standards.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700"
            >
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white text-gray-900">
                <tech.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">
                {tech.title}
              </h3>
              <ul className="space-y-3">
                {tech.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <svg className="h-6 w-6 text-gray-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
