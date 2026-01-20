"use client";

import { motion } from "framer-motion";



const techStack = [
  {
    title: "OE-Level Diagnostic Systems",
    image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=600&q=80",
    items: ["BMW ISTA", "Mercedes Xentry", "VAG ODIS", "Real-time fault detection"],
  },
  {
    title: "Advanced Paint Protection",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&q=80",
    items: ["Ceramic coating", "Paint Protection Film (PPF)", "Professional detailing", "Interior restoration"],
  },
  {
    title: "Performance Tuning Tools",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    items: ["ECU remapping", "Stage upgrades", "Dyno-ready setups", "Throttle optimization"],
  },
  // Motorsport Infrastructure card fully removed
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
              className="relative rounded-2xl overflow-hidden border border-gray-700 group"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <motion.img
                  src={tech.image}
                  alt={tech.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/85 to-gray-900/95"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-8">
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
