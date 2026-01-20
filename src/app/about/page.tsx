"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const iconGifs = {
  award: "https://cdn-icons-png.flaticon.com/128/2917/2917995.png",
  users: "https://cdn-icons-png.flaticon.com/128/1256/1256650.png",
  target: "https://cdn-icons-png.flaticon.com/128/1055/1055687.png",
  briefcase: "https://cdn-icons-png.flaticon.com/128/3281/3281289.png",
};

const founders = [
  {
    name: "Dhilip",
    role: "Founder & Technical Director",
    experience: "10+ years in the automobile industry",
    description: "Pan-India No. 1 Service Advisor Certified (2025) in BMW, Star employee of the year (2022) in Mercedes Benz. Expertise in workshop operations, customer service excellence, and advanced vehicle diagnostics.",
    image: "/founders/dhilip.jpg",
    careerPath: [
      "Mitsubishi – Technician",
      "Maruti Suzuki – Technician",
      "Volkswagen – Service Advisor",
      "Mercedes-Benz – Service Advisor",
      "BMW – Service Advisor"
    ],
    expertise: ["Vehicle Diagnostics", "Workshop Management", "Customer Service Excellence", "Award-winning Service Advisory"],
  },
  {
    name: "Gokul",
    role: "Co-Founder & Service Manager",
    experience: "12+ years in the automobile industry",
    description: "Royal Blue Award winner at Volkswagen. Certified Service Advisor in Volkswagen Group with expertise in workshop front office operations.",
    image: "/founders/gokul.jpg",
    careerPath: [
      "Honda – Technician",
      "Maruti Suzuki – Customer Care Executive",
      "Volkswagen – Service Advisor & Assistant Service Manager",
      "Škoda – Service Manager",
      "Mercedes-Benz – Service Advisor"
    ],
    expertise: ["Workshop Front Office", "Customer Relations", "Technical Diagnosis", "Operational Leadership"],
  },
  {
    name: "Gopal",
    role: "Co-Founder & Production Engineering Lead",
    experience: "10+ years in automotive engineering & manufacturing",
    description: "Manufacturing professional with 10 years of experience in the automobile tool room and manufacturing sector, includes custom manufacturing of automobile components according to engineering aspects with high precision, ensuring quality, accuracy, and efficiency.",
    image: "/founders/gopal.jpg",
    careerPath: [
      "Production Engineering – Cost Analysis & Process Optimization",
      "Supplier Development – Design Reviews & Manufacturing Audits",
      "Material Innovation – Performance Enhancement & Corrosion Prevention",
      "Technical Liaison – Engineering, Procurement & Supply Chain",
      "Quality Assurance – Tolerance Analysis & Defect Reduction"
    ],
    expertise: ["Production Process Optimization", "Supplier Development", "Quality Assurance", "Technical Cost Analysis"],
  },
];

const values = [
  {
    iconGif: iconGifs.award,
    title: "Certified Excellence",
    description: "Every team member is certified and continuously trained in the latest German automotive technologies. We maintain the highest industry standards.",
  },
  {
    iconGif: iconGifs.users,
    title: "Customer First",
    description: "Transparent service, clear communication, and a commitment to exceeding expectations every time. Your satisfaction is our priority.",
  },
  {
    iconGif: iconGifs.target,
    title: "Precision Focus",
    description: "From routine maintenance to race prep, we deliver OE-level precision in everything we touch. No shortcuts, just excellence.",
  },
  {
    iconGif: iconGifs.briefcase,
    title: "Professional Integrity",
    description: "Honest assessments, fair pricing, and work that stands behind our reputation. We treat every vehicle as if it were our own.",
  },
];

const milestones = [
  {
    year: "2024",
    title: "German Werks Founded",
    description: "Established with a vision to bring world-class German automotive care to South India.",
  },
  {
    year: "2024-2025",
    title: "Team Building & Training",
    description: "Assembled a team of certified professionals and invested in international training programs.",
  },
  {
    year: "January 2026",
    title: "Flagship Facility Launch",
    description: "Opening our state-of-the-art 13,000+ sq. ft. facility in Coimbatore with full-service capabilities.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-3xl flex-1">
              <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
                German Experts. Precision Meets Passion.
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Founded in 2024, German Werks is South India's premier destination for German and 
                European automotive care. We deliver OE-level diagnostics, meticulous detailing, 
                and high-performance upgrades — all under one roof.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/logo-black.png"
                alt="German Werks Logo"
                width={400}
                height={400}
                className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  German Werks was born from a passion for automotive excellence and a commitment 
                  to delivering service that German car enthusiasts deserve.
                </p>
                <p>
                  In January 2026, we launch our flagship 13,000+ sq. ft. facility in Coimbatore, 
                  designed to serve enthusiasts who demand more than dealership service. Every 
                  vehicle we touch reflects our commitment to precision, transparency, and passion.
                </p>
                <p>
                  Our team of certified professionals brings decades of combined experience, 
                  manufacturer certifications, and a genuine love for German engineering. We're 
                  not just a service center — we're enthusiasts serving enthusiasts.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                Our Journey
              </h3>
              <div className="space-y-8">
                {milestones.map((milestone) => (
                  <div key={milestone.year}>
                    <div className="flex items-center mb-2">
                      <div className="w-20 h-20 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold text-xs mr-4 px-2 text-center">
                        {milestone.year}
                      </div>
                      <h4 className="text-lg font-heading font-bold text-gray-900">
                        {milestone.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 ml-24">
                      {milestone.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Meet the Founders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A team of certified professionals with a shared passion for German automotive excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200"
              >
                <div className="mb-6">
                  {founder.image ? (
                    <div className="w-28 h-28 rounded-full mb-4 overflow-hidden border-4 border-gray-900 mx-auto flex items-center justify-center">
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        width={96}
                        height={96}
                        className="w-24 h-24 object-cover rounded-full"
                      />
                    </div>
                  ) : (
                    <div className="w-28 h-28 rounded-full bg-gray-900 mb-4 flex items-center justify-center text-white text-3xl font-bold mx-auto">
                      {founder.name[0]}
                    </div>
                  )}
                  <h3 className="text-2xl font-heading font-bold text-gray-900">
                    {founder.name}
                  </h3>
                  <p className="text-xs text-blue-600 font-medium mt-1">
                    {founder.experience}
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {founder.description}
                </p>

                {/* Expertise */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Core Competencies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {founder.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at German Werks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
              >
                <div 
                  className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gray-900 text-white hover:scale-110 hover:rotate-6 transition-all duration-300"
                >
                  <img src={value.iconGif} alt={value.title} className="h-7 w-7 invert" />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Experience the German Werks Difference
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Visit our facility or book a service to see our commitment to excellence firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-gray-900 hover:bg-gray-100">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button asChild className="border-white text-white hover:bg-white/10">
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
