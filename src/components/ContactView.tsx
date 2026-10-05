import React, { useState, useEffect } from 'react';
import { ContactFormData } from '../types';
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { motion } from 'motion/react';

interface ContactViewProps {
  initialSubject?: string;
  initialMessage?: string;
}

export const ContactView: React.FC<ContactViewProps> = ({
  initialSubject = '',
  initialMessage = '',
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: 'Acquisition / Purchase Inquiry',
    subject: initialSubject,
    message: initialMessage,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFormData, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (initialSubject) {
      setFormData((prev) => ({
        ...prev,
        subject: initialSubject,
        inquiryType: 'Acquisition / Purchase Inquiry',
      }));
    }
    if (initialMessage) {
      setFormData((prev) => ({
        ...prev,
        message: initialMessage,
      }));
    }
  }, [initialSubject, initialMessage]);

  const validateField = (name: keyof ContactFormData, value: string): string => {
    if (name === 'fullName' && !value.trim()) {
      return 'Please enter your full name.';
    }
    if (name === 'email') {
      if (!value.trim()) return 'Please enter your email address.';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return 'Please provide a valid email address.';
    }
    if (name === 'subject' && !value.trim()) {
      return 'Please enter a subject.';
    }
    if (name === 'message' && !value.trim()) {
      return 'Please enter your message or inquiry.';
    }
    return '';
  };

  const handleBlur = (field: keyof ContactFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const errorMsg = validateField(field, formData[field] || '');
    setErrors((prev) => ({ ...prev, [field]: errorMsg }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name as keyof ContactFormData]) {
      const errorMsg = validateField(name as keyof ContactFormData, value);
      setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Validate all required fields
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {
      fullName: validateField('fullName', formData.fullName),
      email: validateField('email', formData.email),
      subject: validateField('subject', formData.subject),
      message: validateField('message', formData.message),
    };

    setErrors(newErrors);
    setTouched({
      fullName: true,
      email: true,
      subject: true,
      message: true,
    });

    const hasAnyError = Object.values(newErrors).some((err) => Boolean(err));
    if (hasAnyError) {
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable asynchronous sending with clean visual state
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      inquiryType: 'Acquisition / Purchase Inquiry',
      subject: '',
      message: '',
    });
    setErrors({});
    setTouched({});
    setIsSubmitted(false);
    setSubmitError(null);
  };

  return (
    <div id="contact-view" className="w-full bg-[#faf9f6] min-h-screen">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-3"
        >
          <div className="flex items-center gap-2">
            <span className="font-cinzel text-xs uppercase tracking-widest text-[#A6533B] font-semibold">
              Get in Touch
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-stone-900 leading-tight">
            Contact Us
          </h1>

          <p className="text-stone-600 text-sm sm:text-base max-w-3xl leading-relaxed">
            For artwork inquiries, retrospective queries, or correspondence, reach out via the details below or send a direct message.
          </p>
        </motion.div>
      </section>

      {/* Main Two-Column (Desktop/Tablet) & Single-Column (Mobile) Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Official Contact & Address Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-6">
              {/* Head office address */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A6533B]">
                  <MapPin className="w-4 h-4 text-[#A6533B] shrink-0" />
                  <span>Head office address</span>
                </div>
                <div className="pl-6 border-l-2 border-[#A6533B]/30 space-y-1">
                  <h3 className="font-serif text-xl font-bold text-stone-900">
                    Kalashrinkhala
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    17, Neelkanth Enclave Phase-1, Mauja Sunari, Agra 283105
                  </p>
                </div>
              </div>

              {/* Contacts us */}
              <div className="border-t border-stone-100 pt-6 space-y-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#A6533B]">
                  <span>Contacts us :</span>
                </div>

                {/* Email */}
                <a
                  href="mailto:kalashrinkhala@gmail.com"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-stone-50 hover:bg-stone-100 border border-stone-200 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white border border-stone-200 text-[#A6533B] flex items-center justify-center shrink-0 shadow-2xs group-hover:border-[#A6533B]/50 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[11px] font-medium uppercase tracking-wider text-stone-500">Email</span>
                    <span className="block text-sm font-medium text-stone-900 group-hover:text-[#A6533B] transition-colors truncate">
                      kalashrinkhala@gmail.com
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:7060190029"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-stone-50 hover:bg-stone-100 border border-stone-200 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white border border-stone-200 text-[#A6533B] flex items-center justify-center shrink-0 shadow-2xs group-hover:border-[#A6533B]/50 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[11px] font-medium uppercase tracking-wider text-stone-500">Phone / Mobile</span>
                    <span className="block text-sm font-medium text-stone-900 group-hover:text-[#A6533B] transition-colors font-mono">
                      7060190029
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact & Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl border border-stone-200 shadow-sm">
              {isSubmitted ? (
                /* Success State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-5"
                >
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                    Inquiry Received Successfully
                  </h3>
                  <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. Your correspondence has been logged with the Kala Shrinkhala Studio Archive. Our team will review your inquiry and get in touch at <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-4 px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-widest rounded-lg transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                /* Interactive Form with Default, Focus, Validation, and Submitting States */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-stone-900">
                      Send a Direct Message
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      Fields marked with <span className="text-rose-600 font-bold">*</span> are required.
                    </p>
                  </div>

                  {submitError && (
                    <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-lg flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="contact-fullName"
                        className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5"
                      >
                        Full Name <span className="text-rose-600">*</span>
                      </label>
                      <input
                        id="contact-fullName"
                        name="fullName"
                        type="text"
                        placeholder="e.g. Rajesh Sharma"
                        value={formData.fullName}
                        onChange={handleChange}
                        onBlur={() => handleBlur('fullName')}
                        className={`w-full px-4 py-2.5 rounded-lg border text-sm text-stone-900 placeholder-stone-400 transition-all focus:outline-none focus:ring-2 ${
                          touched.fullName && errors.fullName
                            ? 'border-rose-400 bg-rose-50/20 focus:ring-rose-300'
                            : 'border-stone-300 bg-stone-50/50 focus:border-stone-900 focus:ring-stone-400'
                        }`}
                      />
                      {touched.fullName && errors.fullName && (
                        <p className="text-rose-600 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5"
                      >
                        Email Address <span className="text-rose-600">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="e.g. name@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={() => handleBlur('email')}
                        className={`w-full px-4 py-2.5 rounded-lg border text-sm text-stone-900 placeholder-stone-400 transition-all focus:outline-none focus:ring-2 ${
                          touched.email && errors.email
                            ? 'border-rose-400 bg-rose-50/20 focus:ring-rose-300'
                            : 'border-stone-300 bg-stone-50/50 focus:border-stone-900 focus:ring-stone-400'
                        }`}
                      />
                      {touched.email && errors.email && (
                        <p className="text-rose-600 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Inquiry Type Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone (Optional) */}
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5"
                      >
                        Phone / WhatsApp <span className="text-stone-400 text-[10px] font-normal">(Optional)</span>
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-stone-300 bg-stone-50/50 text-sm text-stone-900 placeholder-stone-400 transition-all focus:outline-none focus:border-stone-900 focus:ring-2 focus:ring-stone-400"
                      />
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label
                        htmlFor="contact-inquiryType"
                        className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5"
                      >
                        Nature of Inquiry
                      </label>
                      <select
                        id="contact-inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-stone-300 bg-stone-50/50 text-sm text-stone-900 transition-all focus:outline-none focus:border-stone-900 focus:ring-2 focus:ring-stone-400 cursor-pointer"
                      >
                        <option value="Acquisition / Purchase Inquiry">Acquisition / Purchase Inquiry</option>
                        <option value="Curatorial / Exhibition Proposal">Curatorial / Exhibition Proposal</option>
                        <option value="Monograph / Book Order">Monograph / Publication Order</option>
                        <option value="Academic & Media Interview">Academic & Media Interview</option>
                        <option value="General Studio Correspondence">General Studio Correspondence</option>
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5"
                    >
                      Subject / Artwork Reference <span className="text-rose-600">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      placeholder="e.g. Inquiry regarding Earth Tones & Form (Serigraph I)"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={() => handleBlur('subject')}
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm text-stone-900 placeholder-stone-400 transition-all focus:outline-none focus:ring-2 ${
                        touched.subject && errors.subject
                          ? 'border-rose-400 bg-rose-50/20 focus:ring-rose-300'
                          : 'border-stone-300 bg-stone-50/50 focus:border-stone-900 focus:ring-stone-400'
                      }`}
                    />
                    {touched.subject && errors.subject && (
                      <p className="text-rose-600 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message Body */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5"
                    >
                      Your Message <span className="text-rose-600">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      placeholder="Please share details about your acquisition interests, exhibition schedule, or question..."
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={() => handleBlur('message')}
                      className={`w-full px-4 py-3 rounded-lg border text-sm text-stone-900 placeholder-stone-400 transition-all focus:outline-none focus:ring-2 resize-y ${
                        touched.message && errors.message
                          ? 'border-rose-400 bg-rose-50/20 focus:ring-rose-300'
                          : 'border-stone-300 bg-stone-50/50 focus:border-stone-900 focus:ring-stone-400'
                      }`}
                    />
                    {touched.message && errors.message && (
                      <p className="text-rose-600 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      id="contact-submit-button"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 bg-[#A6533B] hover:bg-[#8F442F] active:bg-[#7A3623] disabled:opacity-70 text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.16em] rounded-lg shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>SENDING CORRESPONDENCE...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>SEND INQUIRY TO STUDIO</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
