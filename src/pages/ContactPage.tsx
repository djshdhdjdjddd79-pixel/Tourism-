import React, { useState } from 'react';
import { ShieldCheck, Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Info, Landmark, Trash2, Camera, Home, Shield, Sparkles } from 'lucide-react';
import { responsibleTourismGuidelines } from '../data/sumurData';
import { siteConfig } from '../config/siteConfig';
import { PageId } from '../components/Navbar';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [inquiryType, setInquiryType] = useState('Tourism Enquiries');
  const [visitorName, setVisitorName] = useState('');
  const [visitorEmail, setVisitorEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getGuidelineIcon = (iconName: string) => {
    switch (iconName) {
      case 'temple':
        return <Landmark className="w-5 h-5 text-[#d4af37]" />;
      case 'trash':
        return <Trash2 className="w-5 h-5 text-emerald-400" />;
      case 'camera':
        return <Camera className="w-5 h-5 text-[#d4af37]" />;
      case 'home':
        return <Home className="w-5 h-5 text-[#d4af37]" />;
      case 'shield':
        return <Shield className="w-5 h-5 text-amber-300" />;
      case 'leaf':
      default:
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <div className="space-y-24 py-10">
      {/* 1. RESPONSIBLE TOURISM SECTION: Travel Respectfully, Leave No Trace */}
      <section className="space-y-12">
        <div className="text-center max-w-3xl mx-auto px-4 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141b21] border border-[#d4af37]/30 text-amber-200 text-xs font-semibold tracking-widest uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Ethical Himalayan Travel</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Travel Respectfully, Leave No Trace
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            The fragile ecosystem and ancient cultural fabric of Sumur and Nubra Valley thrive on gentle, conscious travel. Please follow these principles during your stay.
          </p>
        </div>

        {/* Responsible Tourism Cards Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {responsibleTourismGuidelines.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-[#0e1418] border border-white/10 hover:border-[#d4af37]/40 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#172129] border border-white/10 flex items-center justify-center group-hover:border-[#d4af37] transition-colors">
                    {getGuidelineIcon(item.icon)}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 space-y-1.5">
                  {item.tips.map((tip, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-400">
                      <span className="text-[#d4af37] font-bold">✓</span>
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. CONTACT INFORMATION SECTION: Get Local Information */}
      <section className="bg-[#0b0e12] border-y border-white/10 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold tracking-widest text-[#d4af37] uppercase">
              Assistance & Enquiries
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Get Local Information
            </h2>
            <p className="text-sm text-slate-400">
              Community contact channels for tourism guidance, certified local guides, and homestay coordination in Sumur.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Editable Information Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl bg-[#0f151a] border border-white/10 p-6 sm:p-8 space-y-6 shadow-xl">
                <div className="space-y-1">
                  <h3 className="font-serif text-xl font-bold text-white">
                    Tourism Information Desk
                  </h3>
                  <p className="text-xs text-slate-400">
                    Sumur Village, Nubra Sub-Division, Ladakh
                  </p>
                </div>

                {/* Mandatory Status Notice when verified details are not yet provided */}
                <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30 flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div className="space-y-1 text-xs">
                    <span className="font-semibold text-amber-200">
                      Verification Notice:
                    </span>
                    <p className="text-amber-100/90 italic">
                      "{siteConfig.contact.statusNotice}"
                    </p>
                  </div>
                </div>

                {/* Structured Editable Fields */}
                <div className="space-y-4 text-xs">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <div className="text-[11px] uppercase tracking-wider text-[#d4af37] font-semibold">
                      1. Tourism Enquiries
                    </div>
                    <p className="text-slate-300">
                      {siteConfig.contact.tourismInquiries}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <div className="text-[11px] uppercase tracking-wider text-[#d4af37] font-semibold">
                      2. Local Guides
                    </div>
                    <p className="text-slate-300">
                      {siteConfig.contact.localGuides}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <div className="text-[11px] uppercase tracking-wider text-[#d4af37] font-semibold">
                      3. Homestay Enquiries
                    </div>
                    <p className="text-slate-300">
                      {siteConfig.contact.homestayInquiries}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                      <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
                        <span>Email Address</span>
                      </div>
                      <p className="text-slate-300 font-mono text-[11px]">
                        {siteConfig.contact.emailAddress || 'To be updated soon'}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                      <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                        <span>Telephone Number</span>
                      </div>
                      <p className="text-slate-300 font-mono text-[11px]">
                        {siteConfig.contact.phoneNumber || 'To be updated soon'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 italic">
                  Note: Contact numbers and emails are securely configured in{' '}
                  <code className="text-amber-300">src/config/siteConfig.ts</code>.
                </div>
              </div>
            </div>

            {/* Right: Traveler Message / Enquiry Dispatch Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-[#0f151a] border border-white/10 p-6 sm:p-8 space-y-6 shadow-xl">
                <div className="space-y-1">
                  <h3 className="font-serif text-xl font-bold text-white">
                    Send an Inquiry to Sumur Travel Desk
                  </h3>
                  <p className="text-xs text-slate-400">
                    Draft your message for local planning, seasonal visits, or homestay queries.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-900/60 text-emerald-300 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif text-lg font-bold text-white">
                      Inquiry Draft Saved
                    </h4>
                    <p className="text-xs text-slate-300 max-w-md mx-auto">
                      Thank you, <span className="font-semibold text-white">{visitorName}</span>. Your inquiry regarding <span className="text-amber-200">{inquiryType}</span> has been logged. Once verified local email channels are activated, responses will be communicated.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-[#d4af37] hover:underline font-medium pt-2"
                    >
                      Draft another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Inquiry Category
                      </label>
                      <select
                        value={inquiryType}
                        onChange={(e) => setInquiryType(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#090c0e] border border-white/10 text-white text-xs focus:outline-none focus:border-[#d4af37] transition-colors"
                      >
                        <option value="Tourism Enquiries">General Tourism Inquiries</option>
                        <option value="Local Guides">Local Village Guide Assistance</option>
                        <option value="Homestay Enquiries">Homestay & Accommodation Guidance</option>
                        <option value="Monastery Timings & Etiquette">Monastery Decorum & Visit</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                          Your Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={visitorName}
                          onChange={(e) => setVisitorName(e.target.value)}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#090c0e] border border-white/10 text-white text-xs focus:outline-none focus:border-[#d4af37] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={visitorEmail}
                          onChange={(e) => setVisitorEmail(e.target.value)}
                          placeholder="e.g. traveler@example.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#090c0e] border border-white/10 text-white text-xs focus:outline-none focus:border-[#d4af37] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Your Message / Travel Question
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Inquire about visit dates, monastery celebrations, homestays, or travel via Khardung La..."
                        className="w-full px-4 py-2.5 rounded-xl bg-[#090c0e] border border-white/10 text-white text-xs focus:outline-none focus:border-[#d4af37] transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-6 rounded-xl bg-[#d4af37] text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#e5c158] transition-colors flex items-center justify-center gap-2 shadow-md"
                    >
                      <span>Submit Tourism Inquiry</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
