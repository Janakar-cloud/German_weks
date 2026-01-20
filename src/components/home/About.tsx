"use client";

import { motion } from "framer-motion";



const founders = [
  {
    name: "Dhilip",
    role: "Founder & Technical Director",
    description: "Certified BMW Service Advisor with 12+ years of experience. Leads operations, diagnostics, and performance strategy. Currently training internationally in chip tuning and remapping.",
  },
  {
    name: "Gokul",
    role: "Co-Founder & Mercedes-Benz Certified Technician",
    description: "Deep mechanical insight and hands-on experience with German vehicles. Anchors service excellence across all departments.",
  },
  {
    name: "Gopal",
    role: "Design & Bodywork Specialist",
    description: "Leads bodyshop and custom body kit division. Expert in aesthetic and aerodynamic enhancements for performance vehicles.",
  },
];

const values = [
  {
    title: "Certified Excellence",
    description: "Every team member is certified and continuously trained in the latest German automotive technologies.",
  },
  {
    title: "Customer First",
    description: "Transparent service, clear communication, and a commitment to exceeding expectations every time.",
  },
  {
    title: "Precision Focus",
    description: "From routine maintenance to race prep, we deliver OE-level precision in everything we touch.",
  },
];

export function About() {
  return (
    <section className="py-24 bg-gray-50">
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
            About German Werks
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded in 2024, German Werks is South India's premier destination for German and European 
            automotive care. We deliver OE-level diagnostics, meticulous detailing, and high-performance 
            performance upgrades — all under one roof.
          </p>
        </motion.div>

        {/* Founders */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-heading font-bold text-gray-900 mb-10 text-center"
          >
            Meet the Founders
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200"
              >
                <div className="mb-4">
                  <div className="w-20 h-20 rounded-full bg-gray-900 mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {founder.name[0]}
                  </div>
                  <h4 className="text-xl font-heading font-bold text-gray-900">
                    {founder.name}
                  </h4>
                  <p className="text-sm text-gray-600 font-medium mt-1">
                    {founder.role}
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {founder.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-heading font-bold text-gray-900 mb-10 text-center"
          >
            Our Values
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <h4 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
