"use client";

import { Check, Droplets, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const washingPackages = [
  {
    name: "Basic Wash",
    price: "₹399",
    features: [
      "Exterior wash",
      "Underbody rinse",
      "Tyre & wheel cleaning",
      "Dashboard wipe & shine",
      "Interior vacuum cleaning",
    ],
    gradient: "from-blue-600/20 to-blue-800/20",
    border: "border-blue-500/30",
  },
  {
    name: "Ultimate Wash",
    price: "₹999",
    popular: true,
    features: [
      "Full exterior wash + polish",
      "Interior foam wash",
      "Engine bay cleaning",
      "All Basic Wash features",
    ],
    gradient: "from-purple-600/20 to-purple-800/20",
    border: "border-purple-500/30",
  },
];

const detailingPackages = [
  {
    name: "Interior Detailing",
    price: "₹2,499",
    features: [
      "Foam wash for seats, carpets, roof liner",
      "Dashboard & trims conditioning",
      "Odor removal treatment",
      "Deep vacuum cleaning",
    ],
    gradient: "from-green-600/20 to-green-800/20",
    border: "border-green-500/30",
  },
  {
    name: "Exterior Detailing",
    price: "₹3,499",
    features: [
      "Machine polish & waxing",
      "Scratch removal (minor)",
      "Paint protection coating",
      "Headlight restoration",
    ],
    gradient: "from-orange-600/20 to-orange-800/20",
    border: "border-orange-500/30",
  },
  {
    name: "Complete Detailing",
    price: "₹4,999",
    popular: true,
    features: [
      "Interior + exterior detailing",
      "Alloy wheel deep cleaning",
      "Engine bay detailing",
      "Complimentary car wash voucher",
      "All features from both packages",
    ],
    gradient: "from-pink-600/20 to-pink-800/20",
    border: "border-pink-500/30",
  },
];

export default function PackagesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
              Service Packages & Schemes
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Premium washing and detailing services designed for German and European vehicles. 
              Professional care at transparent prices.
            </p>
          </div>
        </div>
      </section>

      {/* Washing Packages */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">
              <Droplets className="h-5 w-5 mr-2 text-blue-600" />
              <span className="text-sm font-medium text-blue-900">Washing Services</span>
            </div>
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Washing Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keep your vehicle clean and protected with our professional washing services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {washingPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 ${
                  pkg.popular ? "border-purple-500" : "border-gray-200"
                } transition-shadow flex flex-col`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-purple-600 text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Droplets className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-4xl font-bold text-blue-600">{pkg.price}</div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-gray-900 hover:bg-gray-800 mt-auto">
                  Book Now
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailing Packages */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-4">
              <Sparkles className="h-5 w-5 mr-2 text-purple-600" />
              <span className="text-sm font-medium text-purple-900">Premium Detailing</span>
            </div>
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Detailing Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional detailing services to restore and protect your vehicle's beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {detailingPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: pkg.popular ? 1.03 : 1.02, y: -8 }}
                className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 ${
                  pkg.popular ? "border-pink-500" : "border-gray-200"
                } transition-all flex flex-col`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-pink-600 text-white text-sm font-semibold rounded-full">
                      Best Value
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-4xl font-bold text-purple-600">{pkg.price}</div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-gray-900 hover:bg-gray-800 mt-auto">
                  Book Now
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timings & Location */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">Garage Timings</h3>
              <div className="space-y-2 text-lg">
                <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                <p>Sunday: 10:00 AM - 6:00 PM</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">Visit Us</h3>
              <div className="text-gray-300">
                <p>German Werks</p>
                <p>No-9/145, Kaikolapalayam,</p>
                <p>Vellanaipatti Road,</p>
                <p>Coimbatore – 641 062</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
            Ready to Book Your Service?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us to schedule your appointment or visit our facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-gray-900 hover:bg-gray-800">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="tel:+919092920927">Call: +91 90 92 92 0927 (Dhilip)</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
