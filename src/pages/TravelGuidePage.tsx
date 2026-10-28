import React from 'react';
import { Compass, MapPin, ExternalLink, CloudSun, ShieldAlert, Mountain, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import { nearbyDestinations } from '../data/sumurData';
import { siteConfig } from '../config/siteConfig';
import { siteImages } from '../config/images';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { PageId } from '../components/Navbar';

interface TravelGuidePageProps {
  onNavigate: (page: PageId) => void;
  onOpenLightbox: (imageKey: string) => void;
}

export const TravelGuidePage: React.FC<TravelGuidePageProps> = ({ onNavigate, onOpenLightbox }) => {
  return (
    <div className="space-y-20 py-10">
      {/* Header Banner */}
      <section className="text-center max-w-3xl mx-auto px-4 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141b21] border border-[#d4af37]/30 text-amber-200 text-xs font-semibold tracking-widest uppercase">
          <Compass className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Practical Travel Information</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
          Plan Your Journey to Sumur
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Detailed guidance on navigating high-altitude mountain roads, preparing for changing weather, respecting local culture, and exploring nearby Nubra destinations.
        </p>
      </section>

      {/* 1. HOW TO REACH SUMUR SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#0e1418] border border-white/10 p-6 sm:p-10 shadow-xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
                Route & Road Overview
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                How to Reach Sumur
              </h2>
            </div>

            <a
              href={siteConfig.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#d4af37] text-black text-xs font-semibold uppercase tracking-wider hover:bg-[#e5c158] transition-colors shrink-0 shadow-md"
            >
              <span>Open Location Map</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4 text-sm text-slate-300 leading-relaxed">
              <p>
                Visitors travel to Sumur from Leh, the capital of Ladakh, traveling by road across the Ladakh Range via Khardung La.
              </p>
              <p>
                The journey descends into the dramatic river valleys of the Shyok and Nubra. At Khalsar junction, the road forks: the western branch leads across the river towards Diskit and Hunder, while the northern branch continues along the Nubra River directly to Sumur and onwards to Panamik.
              </p>
              <div className="p-4 rounded-xl bg-[#141b21] border border-white/10 space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                  <Mountain className="w-3.5 h-3.5" />
                  <span>Important Road & Pass Note</span>
                </h4>
                <p className="text-xs text-slate-300">
                  Travel over Khardung La and through Nubra Valley is strictly subject to current road and weather conditions. High passes may experience seasonal snow, maintenance closures, or convoy timing regulations managed by local traffic authorities.
                </p>
              </div>
            </div>

            {/* Visual Route Steps */}
            <div className="lg:col-span-5 bg-[#090c0e] rounded-xl p-5 border border-white/10 space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                Typical Route Sequence
              </h4>
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#1a232b] text-[#d4af37] border border-white/10 flex items-center justify-center font-bold shrink-0">
                    1
                  </span>
                  <div>
                    <span className="font-semibold text-white">Leh (Starting Base)</span>
                    <p className="text-slate-400">Rest 24–48 hours for altitude acclimatization.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#1a232b] text-[#d4af37] border border-white/10 flex items-center justify-center font-bold shrink-0">
                    2
                  </span>
                  <div>
                    <span className="font-semibold text-white">Khardung La Pass</span>
                    <p className="text-slate-400">High mountain pass crossing across Ladakh Range.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#1a232b] text-[#d4af37] border border-white/10 flex items-center justify-center font-bold shrink-0">
                    3
                  </span>
                  <div>
                    <span className="font-semibold text-white">Khalsar Fork</span>
                    <p className="text-slate-400">Take the northern branch along Nubra River.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#d4af37] text-black flex items-center justify-center font-bold shrink-0">
                    4
                  </span>
                  <div>
                    <span className="font-semibold text-white">Sumur Village</span>
                    <p className="text-amber-200">Arrive at peaceful orchards and Samstanling Gompa.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. NEARBY DESTINATIONS (Clearly distinguishing Sumur vs Regional) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#d4af37] uppercase">
            <span>Regional Geography</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Nearby Destinations in Nubra Valley
          </h2>
          <p className="text-sm text-slate-400 max-w-3xl">
            To assist your travel planning, attractions located directly within Sumur are clearly distinguished from regional destinations in other sectors of Nubra Valley.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {nearbyDestinations.map((dest) => {
            const isLocal = dest.badgeType === 'local';
            const imgConfig = siteImages[dest.imageKey];
            return (
              <div
                key={dest.id}
                className={`p-6 rounded-2xl bg-[#0e1418] border flex flex-col justify-between transition-all group ${
                  isLocal
                    ? 'border-[#d4af37]/40 hover:border-[#d4af37]'
                    : 'border-white/10 hover:border-amber-400/40'
                }`}
              >
                <div className="space-y-4">
                  {/* Top Badge */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                        isLocal
                          ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/30'
                          : 'bg-amber-950/60 text-amber-300 border border-amber-500/30'
                      }`}
                    >
                      {dest.type}
                    </span>
                    <span className="text-xs text-slate-400">{dest.locationRelation}</span>
                  </div>

                  {/* Thumbnail Placeholder */}
                  <div className="rounded-xl overflow-hidden">
                    <ImagePlaceholder
                      src={imgConfig?.url || ''}
                      alt={imgConfig?.alt || dest.name}
                      caption={imgConfig?.caption || dest.name}
                      aspectRatio="16/9"
                      placeholderTitle={dest.name}
                      category={isLocal ? 'In Sumur' : 'Regional Nubra'}
                      onClick={() => onOpenLightbox(dest.imageKey)}
                      showCaptionBelow={false}
                    />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-amber-200 transition-colors">
                    {dest.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {dest.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-400">
                    {isLocal ? 'Located right in Sumur village' : 'Requires local taxi / vehicle excursion'}
                  </span>
                  <button
                    onClick={() => onOpenLightbox(dest.imageKey)}
                    className="text-[#d4af37] hover:underline font-medium"
                  >
                    View Photo
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. WEATHER AND PREPARATION ADVICE */}
      <section className="bg-[#0b0e12] border-y border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold tracking-widest text-[#d4af37] uppercase">
              Preparation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Weather & Travel Preparation
            </h2>
            <p className="text-sm text-slate-400">
              Essential tips for a safe, comfortable, and respectful high-altitude Himalayan journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#0f1418] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#172027] border border-white/10 flex items-center justify-center">
                <CloudSun className="w-5 h-5 text-[#d4af37]" />
              </div>
              <h3 className="font-semibold text-white text-base">Check Weather & Passes</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Himalayan weather changes rapidly. Always consult official morning road and weather updates in Leh prior to crossing Khardung La.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0f1418] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#172027] border border-white/10 flex items-center justify-center">
                <ShieldAlert className="w-5 h-5 text-[#d4af37]" />
              </div>
              <h3 className="font-semibold text-white text-base">Carry Suitable Clothing</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Pack thermal base layers, a windproof and water-resistant fleece or jacket, UV sunglasses, sun hat, and sturdy walking shoes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0f1418] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#172027] border border-white/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-[#d4af37]" />
              </div>
              <h3 className="font-semibold text-white text-base">Permit Requirements</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                All domestic and international visitors must obtain necessary Inner Line Permits (ILP) or Protected Area Permits for Nubra Valley.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0f1418] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#172027] border border-white/10 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-[#d4af37]" />
              </div>
              <h3 className="font-semibold text-white text-base">Respect Local Customs</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Honor monastic decorum, cover shoulders and knees, walk clockwise around religious structures, and greet villagers with "Julley".
              </p>
            </div>
          </div>

          {/* Interactive Map Quick Callout */}
          <div className="p-6 rounded-2xl bg-[#12181f] border border-[#d4af37]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-serif text-lg font-bold text-white">
                Find Your Way on the Interactive Map
              </h4>
              <p className="text-xs text-slate-300">
                Explore coordinates, geographic landmarks, and driving overview to Sumur.
              </p>
            </div>
            <button
              onClick={() => onNavigate('map')}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#d4af37] text-black text-xs font-semibold uppercase tracking-wider hover:bg-[#e5c158] transition-colors shrink-0"
            >
              <span>View Map Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
