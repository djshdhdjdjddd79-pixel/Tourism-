import React from 'react';
import { Home, MapPin, Sparkles, AlertCircle, HeartHandshake, Check, Info } from 'lucide-react';
import { accommodationCards } from '../data/sumurData';
import { siteImages } from '../config/images';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { PageId } from '../components/Navbar';

interface StayPageProps {
  onNavigate: (page: PageId) => void;
  onOpenLightbox: (imageKey: string) => void;
}

export const StayPage: React.FC<StayPageProps> = ({ onNavigate, onOpenLightbox }) => {
  return (
    <div className="space-y-20 py-10">
      {/* Header Banner */}
      <section className="text-center max-w-3xl mx-auto px-4 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141b21] border border-[#d4af37]/30 text-amber-200 text-xs font-semibold tracking-widest uppercase">
          <Home className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Village Homestays & Guest Retreats</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
          Stay Local, Experience More
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Choosing a village homestay in Sumur allows you to directly support local families, experience authentic Ladakhi home hospitality, and savor traditional meals prepared with fresh garden produce.
        </p>
        <div className="pt-2">
          <button
            onClick={() => onNavigate('homestays')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#d4af37] text-black text-xs font-semibold uppercase tracking-wider hover:bg-[#e5c158] transition-colors shadow-lg"
          >
            <span>Explore Dedicated Village Homestays Page</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </section>

      {/* 3 EDITABLE ACCOMMODATION CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="space-y-1">
            <h2 className="font-serif text-2xl font-bold text-white">
              Sumur Accommodations
            </h2>
            <p className="text-xs text-slate-400">
              Verified local guest listings will be updated with direct contact information.
            </p>
          </div>
          <span className="text-xs text-amber-300/80 bg-[#141b21] px-3 py-1.5 rounded-lg border border-white/5 hidden sm:inline-block">
            3 Property Slots Configured
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accommodationCards.map((stay) => {
            const imageConfig = siteImages[stay.imageKey];
            return (
              <div
                key={stay.id}
                className="rounded-2xl bg-[#0e1418] border border-white/10 hover:border-[#d4af37]/40 transition-all flex flex-col justify-between overflow-hidden group shadow-lg"
              >
                {/* Photo Placeholder Frame */}
                <div className="p-2 pb-0">
                  <ImagePlaceholder
                    src={imageConfig?.url || ''}
                    alt={imageConfig?.alt || stay.propertyName}
                    caption={imageConfig?.caption || stay.propertyName}
                    aspectRatio="16/9"
                    placeholderTitle={stay.propertyName}
                    category="Homestay Slot"
                    onClick={() => onOpenLightbox(stay.imageKey)}
                    showCaptionBelow={false}
                  />
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <h3 className="font-serif text-xl font-bold text-white group-hover:text-amber-200 transition-colors">
                        {stay.propertyName}
                      </h3>
                      <p className="text-xs text-amber-200/80 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{stay.location}</span>
                      </p>
                    </div>

                    {/* Official Notice as required */}
                    <div className="p-3.5 rounded-xl bg-[#141b21] border border-white/5 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs text-amber-300 font-medium">
                        <Info className="w-3.5 h-3.5 text-[#d4af37]" />
                        <span>Listing Status</span>
                      </div>
                      <p className="text-xs italic text-slate-300">
                        "{stay.statusNotice}"
                      </p>
                    </div>

                    {/* Facilities Preview */}
                    <div className="space-y-1.5">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                        Typical Facilities
                      </div>
                      <ul className="grid grid-cols-2 gap-1.5 text-xs text-slate-300">
                        {stay.facilities.map((fac, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <Check className="w-3 h-3 text-[#d4af37] shrink-0" />
                            <span className="truncate">{fac}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Contact Details & Booking link field */}
                  <div className="pt-4 border-t border-white/5 space-y-2 text-xs">
                    <div className="flex items-center justify-between text-slate-400">
                      <span>Phone:</span>
                      <span className="text-slate-300 font-mono italic">
                        {stay.contactDetails.phone}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span>Direct Inquiries:</span>
                      <span className="text-slate-300 italic">
                        Via Village Tourism Desk
                      </span>
                    </div>

                    <button
                      onClick={() => onNavigate('contact')}
                      className="w-full mt-3 py-2.5 px-4 rounded-xl bg-[#172027] hover:bg-[#202c36] text-amber-200 font-semibold text-xs uppercase tracking-wider border border-white/10 transition-colors text-center"
                    >
                      Inquire About Homestays
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* HOMESTAY ETIQUETTE & RESPONSIBLE LIVING ADVICE */}
      <section className="bg-[#0b0e12] border-y border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold tracking-widest text-[#d4af37] uppercase">
              Responsible Hospitality
            </span>
            <h2 className="font-serif text-3xl font-bold text-white">
              What to Expect at a Sumur Homestay
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Living with a Ladakhi family offers an authentic glimpse into high mountain resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#0f1418] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#172027] border border-white/10 flex items-center justify-center">
                <HeartHandshake className="w-5 h-5 text-[#d4af37]" />
              </div>
              <h3 className="font-semibold text-white text-base">Hearth & Family Meals</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Families welcome you into their kitchen hearth (the focal point of the Ladakhi home) for freshly cooked vegetable dishes, local breads, and steaming butter tea.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0f1418] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#172027] border border-white/10 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-[#d4af37]" />
              </div>
              <h3 className="font-semibold text-white text-base">Water Conservation</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Water is precious in high cold deserts. Many traditional homes use eco-friendly Ladakhi composting toilets or solar water heating; please use running water mindfully.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0f1418] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#172027] border border-white/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#d4af37]" />
              </div>
              <h3 className="font-semibold text-white text-base">Respecting Privacy</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Observe household traditions, ask before entering family prayer rooms (Choshuk), and remove your outdoor footwear before entering carpeted living spaces.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
