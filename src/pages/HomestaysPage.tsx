import React from 'react';
import { Home, MapPin, Sparkles, HeartHandshake, Check, Info, ShieldCheck, Coffee, Sun, Droplets, ArrowRight } from 'lucide-react';
import { siteImages } from '../config/images';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { PageId } from '../components/Navbar';

interface HomestaysPageProps {
  onNavigate: (page: PageId) => void;
  onOpenLightbox: (imageKey: string) => void;
}

export const HomestaysPage: React.FC<HomestaysPageProps> = ({
  onNavigate,
  onOpenLightbox,
}) => {
  return (
    <div className="space-y-20 py-10">
      {/* Header Banner */}
      <section className="text-center max-w-4xl mx-auto px-4 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141b21] border border-[#d4af37]/30 text-amber-200 text-xs font-semibold tracking-widest uppercase">
          <Home className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Authentic Community Hospitality</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
          Sumur Village Homestays
        </h1>
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Experience genuine Ladakhi life by staying with local families in Sumur—where high-altitude farmsteads, home-cooked food, and mountain warmth welcome every traveler.
        </p>
        <div className="flex items-center justify-center gap-2 text-xs text-[#d4af37] font-medium pt-2">
          <MapPin className="w-3.5 h-3.5" />
          <span>Sumur Village, Nubra Valley · Sustainable Eco-Tourism</span>
        </div>
      </section>

      {/* Featured Real Photo Grid of Homestays (4 Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Homestay 1 */}
          <div className="rounded-2xl bg-[#0e1418] border border-[#d4af37]/40 overflow-hidden flex flex-col justify-between group shadow-xl">
            <div className="p-2 pb-0">
              <ImagePlaceholder
                src={siteImages.homestay1.url}
                alt={siteImages.homestay1.alt}
                caption={siteImages.homestay1.caption}
                aspectRatio="16/9"
                placeholderTitle="Traditional Sumur Village Homestay"
                category="Family Homestay"
                onClick={() => onOpenLightbox('homestay1')}
                showCaptionBelow={false}
              />
            </div>
            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20 w-fit block">
                  Traditional Farmstead
                </span>
                <h3 className="font-serif text-base font-bold text-white group-hover:text-amber-200 transition-colors">
                  Sumur Traditional Village Homestay
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Authentic mud-brick architecture, wooden balconies, private guest rooms, and meals cooked right at the family hearth with fresh orchard vegetables.
                </p>
              </div>
              <div className="pt-3 border-t border-white/5 space-y-1 text-xs text-slate-400">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Check className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Fresh Home-Cooked Meals</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Check className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Mountain & Orchard Views</span>
                </div>
              </div>
            </div>
          </div>

          {/* Homestay 2 */}
          <div className="rounded-2xl bg-[#0e1418] border border-white/10 hover:border-[#d4af37]/40 overflow-hidden flex flex-col justify-between group shadow-xl transition-all">
            <div className="p-2 pb-0">
              <ImagePlaceholder
                src={siteImages.homestay2.url}
                alt={siteImages.homestay2.alt}
                caption={siteImages.homestay2.caption}
                aspectRatio="16/9"
                placeholderTitle="Green Valley Homestay in Sumur"
                category="Garden Stay"
                onClick={() => onOpenLightbox('homestay2')}
                showCaptionBelow={false}
              />
            </div>
            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-300 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-500/20 w-fit block">
                  Orchard & Garden Stay
                </span>
                <h3 className="font-serif text-base font-bold text-white group-hover:text-amber-200 transition-colors">
                  Green Valley Homestay (Sumur)
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Surrounded by lush apricot and apple orchards with peaceful mountain views. Enjoy outdoor garden seating and organic high-altitude breakfast.
                </p>
              </div>
              <div className="pt-3 border-t border-white/5 space-y-1 text-xs text-slate-400">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Check className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Garden Grounds & Apricots</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Check className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Solar Water Heating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Homestay 3 */}
          <div className="rounded-2xl bg-[#0e1418] border border-white/10 hover:border-[#d4af37]/40 overflow-hidden flex flex-col justify-between group shadow-xl transition-all">
            <div className="p-2 pb-0">
              <ImagePlaceholder
                src={siteImages.homestay3.url}
                alt={siteImages.homestay3.alt}
                caption={siteImages.homestay3.caption}
                aspectRatio="16/9"
                placeholderTitle="Sumur Mountain Retreat Lodge"
                category="Mountain Retreat"
                onClick={() => onOpenLightbox('homestay3')}
                showCaptionBelow={false}
              />
            </div>
            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-cyan-300 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/20 w-fit block">
                  Ridge Panorama
                </span>
                <h3 className="font-serif text-base font-bold text-white group-hover:text-amber-200 transition-colors">
                  Sumur Mountain Retreat Lodge
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Located near the upper slopes close to Samstanling ridge, providing wide panoramas across the Nubra River valley and starry night skies.
                </p>
              </div>
              <div className="pt-3 border-t border-white/5 space-y-1 text-xs text-slate-400">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Check className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Panoramic Valley Views</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Check className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Walking Access to Gompa</span>
                </div>
              </div>
            </div>
          </div>

          {/* Homestay 4: New from User Link */}
          <div className="rounded-2xl bg-[#0e1418] border border-white/10 hover:border-[#d4af37]/40 overflow-hidden flex flex-col justify-between group shadow-xl transition-all">
            <div className="p-2 pb-0">
              <ImagePlaceholder
                src={siteImages.homestay4.url}
                alt={siteImages.homestay4.alt}
                caption={siteImages.homestay4.caption}
                aspectRatio="16/9"
                placeholderTitle="Sumur Village Boutique Lodge"
                category="Boutique Lodge"
                onClick={() => onOpenLightbox('homestay4')}
                showCaptionBelow={false}
              />
            </div>
            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-200 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-500/20 w-fit block">
                  Boutique Lodging
                </span>
                <h3 className="font-serif text-base font-bold text-white group-hover:text-amber-200 transition-colors">
                  Sumur Village Boutique Lodge
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Tranquil guest retreat offering comfortable high-altitude rooms, sun terraces, and mountain views across the eastern Nubra bank.
                </p>
              </div>
              <div className="pt-3 border-t border-white/5 space-y-1 text-xs text-slate-400">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Check className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Viewing Sun Terrace</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Check className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Village Walk Proximity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Homestay Experience & Living Culture */}
      <section className="bg-[#0b0e12] border-y border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
              Life with a Ladakhi Family
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              The Meaning of a Village Homestay
            </h2>
            <p className="text-sm text-slate-400">
              More than lodging, a homestay in Sumur is a living cultural exchange that sustains rural mountain livelihoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 rounded-2xl bg-[#0f1418] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#172027] border border-white/10 flex items-center justify-center">
                <Coffee className="w-6 h-6 text-[#d4af37]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                The Kitchen Hearth (Chansa)
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                The traditional Ladakhi kitchen is the social epicenter of the home. Here, guests gather around the traditional metal stove for hot butter tea (Gur-gur chai), freshly baked bread (Khambir), and hearty vegetable soups (Thukpa).
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-2xl bg-[#0f1418] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#172027] border border-white/10 flex items-center justify-center">
                <Droplets className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                Eco-Friendly Living & Water Care
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Water is a precious resource in the cold desert of Nubra. Traditional dry-composting Ladakhi toilets (Chagtsa) recycle organic matter back into orchard soils without wasting water, reflecting centuries of sustainable ecological adaptation.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-2xl bg-[#0f1418] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#172027] border border-white/10 flex items-center justify-center">
                <Sun className="w-6 h-6 text-amber-300" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                Direct Community Empowerment
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                100% of your stay fees go directly to the local family, helping them maintain their centuries-old homes, send their children to school, and protect organic high-altitude agriculture from commercial disruption.
              </p>
            </div>
          </div>

          {/* Traveler Homestay Etiquette Card */}
          <div className="p-8 rounded-2xl bg-[#0e151a] border border-[#d4af37]/30 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300">
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
              <span>Etiquette for Staying with a Ladakhi Family</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">
              Respectful Guest Guidelines
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 text-xs text-slate-300">
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <span className="font-bold text-white">1. Remove Shoes</span>
                <p className="text-slate-400">
                  Always take off your footwear before entering carpeted living and sleeping quarters.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <span className="font-bold text-white">2. Receive with Both Hands</span>
                <p className="text-slate-400">
                  When receiving food or tea from your hosts, hold your cup or plate with both hands as a mark of respect.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <span className="font-bold text-white">3. Mindful Water Use</span>
                <p className="text-slate-400">
                  Use bucket showers and running water consciously; every drop is hand-carried or solar-heated.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <span className="font-bold text-white">4. Greet with "Julley"</span>
                <p className="text-slate-400">
                  A cheerful "Julley" connects you instantly with elders and children alike across the household.
                </p>
              </div>
            </div>
          </div>

          {/* Booking Inquiry Desk */}
          <div className="p-6 rounded-2xl bg-[#141b21] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-serif text-lg font-bold text-white">
                Interested in booking a village homestay?
              </h4>
              <p className="text-xs text-slate-300">
                Contact our village tourism desk to match your travel dates with welcoming families in Sumur.
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#d4af37] text-black text-xs font-semibold uppercase tracking-wider hover:bg-[#e5c158] transition-colors shrink-0"
            >
              <span>Inquire for Homestay</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
