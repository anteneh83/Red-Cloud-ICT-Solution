"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { companyData } from "@/data/company";
import { MapPin, Phone, Mail, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

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
      // Simulate enterprise secure API dispatch
      await new Promise((resolve) => setTimeout(resolve, 900));
      setSubmitSuccess(true);
      reset();
    } catch {
      setSubmitError("Failed to submit inquiry. Please try calling 8025 directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#05070a] border-t border-slate-900 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#E50914]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E50914]/10 border border-[#E50914]/30 text-xs font-semibold text-[#E50914] uppercase tracking-wider mb-4">
            Direct Enterprise Engagement
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            LET&apos;S BUILD SOMETHING <br />
            <span className="text-gradient-red">GREAT TOGETHER</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Have a technology challenge, infrastructure requirement, or new digital project? Let&apos;s start a conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Verified Coordinates & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-[#080c14] border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white">
                Contact Coordinates
              </h3>

              {/* Verified Contact Details */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-[#E50914]/10 border border-[#E50914]/25 text-[#E50914] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Headquarters Address</div>
                    <div className="text-sm font-semibold text-white mt-0.5">{companyData.address.full}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-[#E50914]/10 border border-[#E50914]/25 text-[#E50914] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Enterprise Hotline</div>
                    <div className="text-lg font-black text-white mt-0.5">
                      <a href={`tel:${companyData.contact.shortCode}`} className="hover:text-[#E50914] transition-colors">
                        {companyData.contact.shortCode}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-[#E50914]/10 border border-[#E50914]/25 text-[#E50914] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Email</div>
                    <div className="text-sm font-semibold text-white mt-0.5">
                      <a href={`mailto:${companyData.contact.email}`} className="hover:text-[#E50914] transition-colors">
                        {companyData.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map Container */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-[#080c14] h-64 relative shadow-lg">
              <iframe
                title="Red Cloud Ethiopian IT Park Location"
                src="https://maps.google.com/maps?q=Ethiopian%20IT%20Park,%20Addis%20Ababa&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-[11px] text-slate-300 flex items-center justify-between">
                <span>Ethiopian IT Park Hub</span>
                <span className="text-[#E50914] font-semibold">Verified Location</span>
              </div>
            </div>
          </div>

          {/* Right Column: React Hook Form + Zod Form */}
          <div className="lg:col-span-7 bg-[#090d15] border border-slate-800 rounded-2xl p-8 sm:p-10 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-2">
              Send an Enterprise Inquiry
            </h3>
            <p className="text-sm text-slate-400 mb-8">
              Fill in your specifications and our technical engineering team will get back to you promptly.
            </p>

            {submitSuccess ? (
              <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-800/80 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Thank You for Reaching Out</h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Your message has been received by Red Cloud ICT Solutions PLC. Our team will review your inquiry and follow up shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitSuccess(false)}
                  className="mt-4 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                {submitError && (
                  <div className="p-4 rounded-lg bg-red-950/40 border border-red-800 flex items-center gap-3 text-xs text-red-200">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      {...register("name")}
                      placeholder="e.g. Dawit Tadesse"
                      className={`w-full px-4 py-3 rounded-xl bg-[#0e1320] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? "border-red-500 focus:ring-red-500/50"
                          : "border-slate-800 focus:border-[#E50914] focus:ring-[#E50914]/20"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Business Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      {...register("email")}
                      placeholder="e.g. name@enterprise.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#0e1320] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? "border-red-500 focus:ring-red-500/50"
                          : "border-slate-800 focus:border-[#E50914] focus:ring-[#E50914]/20"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Subject / Solution of Interest *
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    {...register("subject")}
                    placeholder="e.g. Data Center Colocation & VISP Bandwidth Consultation"
                    className={`w-full px-4 py-3 rounded-xl bg-[#0e1320] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.subject
                        ? "border-red-500 focus:ring-red-500/50"
                        : "border-slate-800 focus:border-[#E50914] focus:ring-[#E50914]/20"
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-red-400 mt-1">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Project Message / Inquiry Details *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    {...register("message")}
                    placeholder="Describe your technical requirements, estimated user concurrency, or inquiry..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#0e1320] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.message
                        ? "border-red-500 focus:ring-red-500/50"
                        : "border-slate-800 focus:border-[#E50914] focus:ring-[#E50914]/20"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-4 rounded-xl text-base font-semibold tracking-wide flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Talk to Red Cloud</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-500 text-center pt-2">
                  Privacy assurance: Your enterprise contact details are kept strictly confidential and used solely for business consultation.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
