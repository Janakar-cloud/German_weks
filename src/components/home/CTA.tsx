"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";



export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-6">
            Ready to Experience the Werks Difference?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Join us at our flagship 13,000+ sq. ft. facility in Coimbatore. 
            Book your service or visit us for a consultation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="xl" className="bg-white text-gray-900 hover:bg-gray-100">
              <Link href="/contact" className="flex items-center">
                
                Book a Service
              </Link>
            </Button>
            <Button asChild size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent">
              <Link href="/services">
                View Our Services
              </Link>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300">
            <a
              href="tel:+919092920927"
              className="flex items-center hover:text-white transition-colors"
            >
              
              +91 90 92 92 0927 (Dhilip - Primary)
            </a>
            <span className="hidden sm:block text-gray-600">•</span>
            <a
              href="https://instagram.com/german_werks_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-white transition-colors"
            >
              
              @german_werks_
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
