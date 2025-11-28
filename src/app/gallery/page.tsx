"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { motion } from "framer-motion";

const categories = ["All", "BMW", "Mercedes-Benz", "Audi", "Porsche", "Performance", "Facility"];

const galleryItems = [
  // BMW Collection
  { id: 1, category: "BMW", title: "BMW M3 Competition", description: "503 HP Twin-Turbo Inline-6 • Carbon Fiber Accents", color: "from-blue-600 to-blue-800", hasLights: true, image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80" },
  { id: 2, category: "BMW", title: "BMW M5 CS", description: "627 HP V8 Beast • Ceramic Brakes • Track Ready", color: "from-gray-800 to-black", hasExhaust: true, image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&q=80" },
  { id: 3, category: "BMW", title: "BMW M8 Gran Coupe", description: "617 HP Luxury Performance • Premium Interior", color: "from-blue-500 to-indigo-700", hasLights: true, image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80" },
  { id: 4, category: "BMW", title: "BMW X5 M Competition", description: "617 HP SUV Performance • M Sport Exhaust", color: "from-slate-700 to-gray-900", hasExhaust: true, image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80" },
  
  // Mercedes-Benz Collection
  { id: 5, category: "Mercedes-Benz", title: "Mercedes-AMG GT 63 S", description: "630 HP Biturbo V8 • AMG Performance Exhaust", color: "from-red-600 to-red-900", hasExhaust: true, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80" },
  { id: 6, category: "Mercedes-Benz", title: "Mercedes-AMG C63 S", description: "503 HP Handcrafted Engine • AMG Dynamics", color: "from-gray-700 to-black", hasLights: true, image: "https://images.unsplash.com/photo-1617886903355-9354bb57751f?w=800&q=80" },
  { id: 7, category: "Mercedes-Benz", title: "Mercedes-AMG E63 S Estate", description: "612 HP Wagon • Drift Mode • All-Wheel Drive", color: "from-zinc-800 to-neutral-900", hasExhaust: true, image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80" },
  { id: 8, category: "Mercedes-Benz", title: "Mercedes-AMG G63", description: "577 HP Off-Road Icon • AMG Night Package", color: "from-stone-700 to-zinc-900", hasLights: true, image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80" },
  
  // Audi Collection
  { id: 9, category: "Audi", title: "Audi RS6 Avant", description: "591 HP Twin-Turbo V8 • Quattro AWD • Carbon Trim", color: "from-red-700 to-rose-900", hasExhaust: true, image: "https://images.unsplash.com/photo-1610768764270-790fbec18178?w=800&q=80" },
  { id: 10, category: "Audi", title: "Audi RS7 Sportback", description: "591 HP Gran Turismo • Matrix LED • Sport Exhaust", color: "from-gray-800 to-slate-900", hasLights: true, image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f1f2e?w=800&q=80" },
  { id: 11, category: "Audi", title: "Audi R8 V10 Plus", description: "602 HP Mid-Engine • Naturally Aspirated • Magnetic Ride", color: "from-orange-600 to-red-800", hasExhaust: true, image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=80" },
  { id: 12, category: "Audi", title: "Audi RS Q8", description: "591 HP Performance SUV • Sport Differential • Ceramic Brakes", color: "from-slate-700 to-gray-900", hasLights: true, image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80" },
  
  // Porsche Collection
  { id: 13, category: "Porsche", title: "Porsche 911 GT3 RS", description: "518 HP Naturally Aspirated • PDK • Rear-Wheel Steering", color: "from-green-600 to-emerald-800", hasExhaust: true, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80" },
  { id: 14, category: "Porsche", title: "Porsche 911 Turbo S", description: "640 HP Twin-Turbo Flat-6 • Launch Control • All-Wheel Drive", color: "from-blue-700 to-indigo-900", hasLights: true, image: "https://images.unsplash.com/photo-1611821064430-f3e4f0e2c2d8?w=800&q=80" },
  { id: 15, category: "Porsche", title: "Porsche Taycan Turbo S", description: "750 HP Electric Performance • 2.6s 0-100 • 800V Charging", color: "from-purple-600 to-violet-800", hasLights: true, image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800&q=80" },
  { id: 16, category: "Porsche", title: "Porsche Cayenne Turbo GT", description: "631 HP SUV • Sport Exhaust • Carbon Ceramic Brakes", color: "from-gray-700 to-zinc-900", hasExhaust: true, image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80" },
  
  // Performance Builds
  { id: 17, category: "Performance", title: "Stage 3 M4 Competition", description: "720 HP Custom Tune • Upgraded Turbos • Full Exhaust", color: "from-yellow-500 to-orange-700", hasExhaust: true, image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80" },
  { id: 18, category: "Performance", title: "AMG GT R Pro", description: "Track-Spec Build • Roll Cage • Race Seats • Slicks", color: "from-green-500 to-teal-700", hasLights: true, image: "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&q=80" },
  { id: 19, category: "Performance", title: "RS3 1000+ HP Build", description: "1000+ HP Hybrid Turbo • Built Engine • Drag Spec", color: "from-red-500 to-rose-700", hasExhaust: true, image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80" },
  { id: 20, category: "Performance", title: "911 GT3 Cup Car", description: "Race-Ready • Full FIA Spec • Motorsport Package", color: "from-blue-600 to-cyan-800", hasLights: true, image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80" },
  
  // Facility
  { id: 21, category: "Facility", title: "Main Workshop Bay", description: "13,000+ sq. ft. state-of-the-art facility", color: "from-gray-600 to-gray-800", hasLights: false, image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80" },
  { id: 22, category: "Facility", title: "Premium Reception", description: "Luxury customer lounge with coffee bar", color: "from-stone-600 to-slate-800", hasLights: false, image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" },
  { id: 23, category: "Facility", title: "Diagnostics Center", description: "OE-level diagnostic equipment suite", color: "from-zinc-600 to-gray-800", hasLights: false, image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80" },
  { id: 24, category: "Facility", title: "Detailing Studio", description: "Temperature-controlled ceramic coating bay", color: "from-neutral-600 to-stone-800", hasLights: false, image: "https://images.unsplash.com/photo-1487925876428-ebd8a23ee1d4?w=800&q=80" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
            Our Facility
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Take a look inside our 13,000+ sq. ft. flagship facility designed for precision automotive care.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
              >
                {/* Real Car Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-40 mix-blend-multiply transition-all duration-700`} />
                
                {/* Animated Grid Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                  }} />
                </div>

                {/* Light Blinker Animation (Headlights) */}
                {item.hasLights && (
                  <>
                    <motion.div
                      className="absolute top-1/3 left-8 w-12 h-8 rounded-full bg-yellow-300 blur-xl"
                      animate={{
                        opacity: [0.3, 1, 0.3],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    />
                    <motion.div
                      className="absolute top-1/3 right-8 w-12 h-8 rounded-full bg-yellow-300 blur-xl"
                      animate={{
                        opacity: [0.3, 1, 0.3],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2 + 0.1,
                      }}
                    />
                  </>
                )}

                {/* Exhaust Flame Animation */}
                {item.hasExhaust && (
                  <>
                    <motion.div
                      className="absolute bottom-12 left-12 w-16 h-16 rounded-full blur-2xl"
                      style={{
                        background: 'radial-gradient(circle, rgba(255,100,0,0.9) 0%, rgba(255,200,0,0.5) 50%, transparent 70%)',
                      }}
                      animate={{
                        opacity: [0, 1, 0.8, 0],
                        scale: [0.5, 1.5, 1.2, 0.5],
                        x: [0, -20, -10, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                    <motion.div
                      className="absolute bottom-12 right-12 w-16 h-16 rounded-full blur-2xl"
                      style={{
                        background: 'radial-gradient(circle, rgba(255,100,0,0.9) 0%, rgba(255,200,0,0.5) 50%, transparent 70%)',
                      }}
                      animate={{
                        opacity: [0, 1, 0.8, 0],
                        scale: [0.5, 1.5, 1.2, 0.5],
                        x: [0, 20, 10, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: index * 0.3 + 0.2,
                      }}
                    />
                  </>
                )}

                {/* Speed Lines Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                  style={{
                    background: 'repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)',
                  }}
                />

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 group-hover:from-black/20 group-hover:to-black/90 transition-all duration-300" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                  <h3 className="text-xl font-heading font-bold mb-2 drop-shadow-lg">{item.title}</h3>
                  <p className="text-sm text-gray-200 drop-shadow-md">{item.description}</p>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <motion.span
                    className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/30 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.category}
                  </motion.span>
                </div>

                {/* Hover Indicator */}
                <motion.div
                  className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Premium Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">24+</div>
              <div className="text-sm text-gray-600">Premium Vehicles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">4</div>
              <div className="text-sm text-gray-600">Luxury Brands</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">1000+</div>
              <div className="text-sm text-gray-600">HP Performance Builds</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">OE-Level</div>
              <div className="text-sm text-gray-600">Certified Service</div>
            </div>
          </motion.div>

          {/* Coming Soon Notice */}
          <div className="mt-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative inline-block bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 overflow-hidden"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 opacity-10">
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                  }}
                />
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-heading font-bold text-white mb-4">
                  More Exclusive Builds Coming Soon
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl">
                  We're documenting premium builds, track-spec conversions, and custom projects. 
                  Follow us on Instagram for exclusive behind-the-scenes content!
                </p>
                <a
                  href="https://instagram.com/german_werks_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Follow @german_werks_
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
