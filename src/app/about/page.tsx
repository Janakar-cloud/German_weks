import type { Metadata } from "next";
import { Award, Users, Target, Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us | German Werks - Premium German Car Experts in Coimbatore",
  description: "Meet the certified team behind German Werks. Founded in 2024, we're South India's premier destination for German and European automotive care.",
};

const founders = [
  {
    name: "Dhilip",
    role: "Founder & Technical Director",
    description: "Certified BMW Service Advisor with 12+ years of experience. Leads operations, diagnostics, and performance strategy. Currently training internationally in chip tuning and remapping.",
    expertise: ["BMW Specialist", "Operations Management", "Performance Tuning", "Diagnostics"],
  },
  {
    name: "Gokul",
    role: "Co-Founder & Mercedes-Benz Certified Technician",
    description: "Deep mechanical insight and hands-on experience with German vehicles. Anchors service excellence across all departments.",
    expertise: ["Mercedes-Benz Certified", "Mechanical Excellence", "Service Quality", "Team Leadership"],
  },
  {
    name: "Gopal",
    role: "Design & Bodywork Specialist",
    description: "Leads bodyshop and custom body kit division. Expert in aesthetic and aerodynamic enhancements for performance vehicles.",
    expertise: ["Custom Body Kits", "Paint & Bodywork", "Aerodynamic Design", "Fabrication"],
  },
];

const values = [
  {
    icon: Award,
    title: "Certified Excellence",
    description: "Every team member is certified and continuously trained in the latest German automotive technologies. We maintain the highest industry standards.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Transparent service, clear communication, and a commitment to exceeding expectations every time. Your satisfaction is our priority.",
  },
  {
    icon: Target,
    title: "Precision Focus",
    description: "From routine maintenance to race prep, we deliver OE-level precision in everything we touch. No shortcuts, just excellence.",
  },
  {
    icon: Briefcase,
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
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
              German Experts. Precision Meets Passion.
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Founded in 2024, German Werks is South India's premier destination for German and 
              European automotive care. We deliver OE-level diagnostics, meticulous detailing, 
              and motorsport-grade performance upgrades — all under one roof.
            </p>
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
                      <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold text-sm mr-4">
                        {milestone.year}
                      </div>
                      <h4 className="text-lg font-heading font-bold text-gray-900">
                        {milestone.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 ml-20">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200"
              >
                <div className="mb-6">
                  <div className="w-24 h-24 rounded-full bg-gray-900 mb-4 flex items-center justify-center text-white text-3xl font-bold">
                    {founder.name[0]}
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900">
                    {founder.name}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium mt-2">
                    {founder.role}
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {founder.description}
                </p>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Expertise:</h4>
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
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gray-900 text-white">
                  <value.icon className="h-7 w-7" />
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
            <Button asChild size="xl" className="bg-white text-gray-900 hover:bg-gray-100">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button asChild size="xl" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
