"use client";

import { motion } from "framer-motion";
import { CheckCircle, Gift, Sparkles, Users, Percent, Car } from "lucide-react";

const offers = [
  {
    icon: CheckCircle,
    title: "Free Vehicle Health Check",
    description: "Complimentary multi-point inspection covering brakes, fluids, battery, tires, and more.",
    highlight: "Build trust with premium diagnostics",
    gradient: "from-blue-600/20 to-blue-800/20",
    border: "border-blue-500/30",
  },
  {
    icon: Percent,
    title: "20% Off Labor Charges",
    description: "Flat discount on all labor charges for services booked during our launch period.",
    highlight: "Try our expertise at special rates",
    gradient: "from-green-600/20 to-green-800/20",
    border: "border-green-500/30",
  },
  {
    icon: Sparkles,
    title: "Free Car Wash & Cleaning",
    description: "Complimentary exterior wash and interior vacuum cleaning with any paid service.",
    highlight: "High-value addition to every visit",
    gradient: "from-purple-600/20 to-purple-800/20",
    border: "border-purple-500/30",
  },
  {
    icon: Car,
    title: "Loyalty Card Program",
    description: "Earn rewards with every visit. 5 visits = 1 free oil change service.",
    highlight: "Long-term savings for regulars",
    gradient: "from-orange-600/20 to-orange-800/20",
    border: "border-orange-500/30",
  },
  {
    icon: Users,
    title: "Referral Rewards",
    description: "Refer friends and family to earn discounts and free services on your next visit.",
    highlight: "Share the excellence, earn rewards",
    gradient: "from-pink-600/20 to-pink-800/20",
    border: "border-pink-500/30",
  },
];

export function LaunchOffers() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-500/50 rounded-full mb-6">
              <Gift className="h-5 w-5 mr-2 text-blue-400" />
              <span className="text-sm font-medium">Launch Special Offers</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
              Grand Opening Offers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Celebrate our January 2026 launch with exclusive offers designed to give you the 
              best value and experience the German Werks difference.
            </p>
          </motion.div>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className={`bg-gradient-to-br ${offer.gradient} backdrop-blur-sm rounded-2xl p-6 border ${offer.border} hover:border-opacity-100 transition-all`}
            >
              <div className="mb-4">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                  <offer.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-2">{offer.title}</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {offer.description}
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm text-gray-400 italic">{offer.highlight}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-300 mb-6">
            🎉 Valid for the first 100 customers during our launch month!
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all">
            <span>Book Your Launch Offer Now</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
