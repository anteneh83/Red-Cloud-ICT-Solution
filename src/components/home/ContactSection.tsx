"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { companyData } from "@/data/company";
import { MapPin, Phone, Mail, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SocialIcons } from "@/components/ui/SocialIcons";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid business email address."),
  subject: z.string().min(3, "Subject must be at least 3 characters."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Simulate API dispatch
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSubmitSuccess(true);
      reset();
    } catch {
      setSubmitError("Failed to submit inquiry. Please call 8025 directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-white border-t border-gray-200 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up" duration={0.6}>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-[#e61f23] uppercase tracking-wider mb-3">
              Contact Us
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-950 tracking-tight">
              Get In <span className="text-[#e61f23]">Touch With Us</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mt-2">
              Have a project, infrastructure requirement, or technology inquiry? Contact our team today.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Verified Coordinates & Map */}
          <ScrollReveal direction="left" delay={0.1} duration={0.7} className="lg:col-span-5 space-y-6">
            <div className="p-5 sm:p-8 rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-200 space-y-5 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-950">
                Contact Information
              </h3>

              {/* Verified Contact Details */}
              <div className="space-y-4">
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className="p-2.5 rounded-xl bg-red-100 text-[#e61f23] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-500">Address</div>
                    <div className="text-sm font-semibold text-gray-900 mt-0.5">{companyData.address.full}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className="p-2.5 rounded-xl bg-red-100 text-[#e61f23] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-500">Call Us</div>
                    <div className="text-lg font-black text-gray-950 mt-0.5">
                      <a href={`tel:${companyData.contact.shortCode}`} className="hover:text-[#e61f23] transition-colors">
                        {companyData.contact.shortCode}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200 bg-gray-100 h-56 sm:h-64 relative shadow-sm">
              <iframe
                title="Red Cloud Ethiopian IT Park Location"
                src="https://maps.google.com/maps?q=Ethiopian%20IT%20Park,%20Addis%20Ababa&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-gray-200 text-[11px] text-gray-700 flex items-center justify-between shadow-xs">
                <span>Ethiopian IT Park Hub</span>
                <span className="text-[#e61f23] font-bold">Verified Location</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Contact Form */}
          <ScrollReveal direction="right" delay={0.2} duration={0.7} className="lg:col-span-7 bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-5 sm:p-8 lg:p-10 shadow-sm hover:shadow-lg hover:shadow-red-500/5 transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-950 mb-1">
              Send Message
            </h3>
            <p className="text-sm text-gray-600 mb-7">
              Fill in the form below and our team will get back to you promptly.
            </p>

            {submitSuccess ? (
              <div className="p-6 rounded-xl bg-red-50 border border-red-200 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#e61f23] mx-auto" />
                <h4 className="text-lg font-bold text-gray-950">Thank You for Reaching Out</h4>
                <p className="text-sm text-gray-600 max-w-md mx-auto">
                  Your message has been received by Red Cloud ICT Solutions PLC. We will review your inquiry and follow up shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitSuccess(false)}
                  className="mt-4 px-4 py-2 rounded-lg bg-[#e61f23] text-xs font-semibold text-white transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                {submitError && (
                  <div className="p-4 rounded-lg bg-red-50 border border-red-200 flex items-center gap-3 text-xs text-[#e61f23]">
                    <AlertCircle className="w-4 h-4 text-[#e61f23] shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      {...register("name")}
                      placeholder="Your Name"
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-all ${errors.name
                          ? "border-red-500 focus:ring-1 focus:ring-red-500"
                          : "border-gray-300 focus:border-[#e61f23] focus:ring-1 focus:ring-[#e61f23]"
                        }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      {...register("email")}
                      placeholder="Your Email"
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-all ${errors.email
                          ? "border-red-500 focus:ring-1 focus:ring-red-500"
                          : "border-gray-300 focus:border-[#e61f23] focus:ring-1 focus:ring-[#e61f23]"
                        }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                    Subject *
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    {...register("subject")}
                    placeholder="Subject"
                    className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-all ${errors.subject
                        ? "border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-gray-300 focus:border-[#e61f23] focus:ring-1 focus:ring-[#e61f23]"
                      }`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-red-500 mt-1">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    {...register("message")}
                    placeholder="Message"
                    className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-all ${errors.message
                        ? "border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-gray-300 focus:border-[#e61f23] focus:ring-1 focus:ring-[#e61f23]"
                      }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-3.5 rounded-xl text-base font-semibold tracking-wide flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
