"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";



type FormData = {
  name: string;
  email: string;
  phone: string;
  vehicle: string;
  service: string;
  message: string;
};

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form');
      }

      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to experience the German Werks difference? Book your service or visit us for a consultation.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <motion.div 
                    className="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Phone className="w-6 h-6" />
                  </motion.div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                    <div className="space-y-1">
                      <a href="tel:+919092920927" className="text-gray-600 hover:text-gray-900 block">+91 90 92 92 0927</a>
                      <a href="tel:+919092920928" className="text-gray-600 hover:text-gray-900 block">+91 90 92 92 0928</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <motion.div 
                    className="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Mail className="w-6 h-6" />
                  </motion.div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:service@germanweks.in" className="text-gray-600 hover:text-gray-900">
                      service@germanweks.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <motion.div 
                    className="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <MapPin className="w-6 h-6" />
                  </motion.div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">
                      No-9/145, Kaikolapalayam,<br />
                      Vellanaipatti Road,<br />
                      Coimbatore – 641 062
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <motion.div 
                    className="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Facebook className="w-6 h-6" />
                  </motion.div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Social Media</h3>
                    <div className="space-y-1">
                      <a
                        href="https://www.facebook.com/share/1APXz9QMmo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 block"
                      >
                        Facebook
                      </a>
                      <a
                        href="https://instagram.com/german_werks_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 block"
                      >
                        Instagram
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="flex items-center mb-6">
                  
                  <h3 className="text-xl font-heading font-bold text-gray-900">
                    Business Hours
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Saturday</span>
                    <span className="font-medium text-gray-900">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium text-gray-900">10:00 AM - 5:00 PM</span>
                  </div>
                </div>
                <p className="mt-6 text-sm text-gray-600">
                  
                  Launching January 2026
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                  Book a Service
                </h2>

                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-medium">
                      Thank you! We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {submitError && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 font-medium">
                      {submitError}
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      {...register("name", { required: "Name is required" })}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone", { required: "Phone number is required" })}
                      placeholder="+91 90 92 92 0927"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="vehicle" className="block text-sm font-medium text-gray-700 mb-2">
                      Vehicle Details *
                    </label>
                    <Input
                      id="vehicle"
                      {...register("vehicle", { required: "Vehicle details are required" })}
                      placeholder="BMW 3 Series / Mercedes C-Class"
                    />
                    {errors.vehicle && (
                      <p className="mt-1 text-sm text-red-600">{errors.vehicle.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Required *
                    </label>
                    <select
                      id="service"
                      {...register("service", { required: "Please select a service" })}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select a service</option>
                      <option value="maintenance">Routine Maintenance</option>
                      <option value="diagnostics">Diagnostics</option>
                      <option value="bodywork">Body & Paint</option>
                      <option value="detailing">Detailing & Protection</option>
                      <option value="tuning">Performance Tuning</option>
                      <option value="motorsport">Motorsport Prep</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Details
                    </label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder="Tell us more about your requirements..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to be contacted by German Werks.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Visit Our Location
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              No-9/145, Kaikolapalayam, Vellanaipatti Road, Coimbatore – 641 062
            </p>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200" style={{ height: "500px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.721965290234!2d77.0538512517459!3d11.072217918008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857fcd5b0a825%3A0xe007f5c61fdc4a33!2sGerman%20Werks!5e0!3m2!1sen!2sin!4v1767889308931!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="German Werks Location - Kaikolapalayam, Coimbatore"
            />
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 mb-2">
              📍 No-9/145, Kaikolapalayam, Vellanaipatti Road, Coimbatore – 641 062
            </p>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=No-9/145,+Kaikolapalayam,+Vellanaipatti+Road,+Coimbatore+-+641+062"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 text-gray-900 hover:text-gray-700 font-medium transition-colors"
            >
              
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
