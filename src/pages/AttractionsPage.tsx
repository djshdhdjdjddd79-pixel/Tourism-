import React, { useState } from 'react';
import { MapPin, Info, CheckCircle2, AlertCircle, Sparkles, X, ChevronRight, Compass } from 'lucide-react';
import { attractionsData, AttractionData } from '../data/sumurData';
import { siteImages } from '../config/images';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { PageId } from '../components/Navbar';

interface AttractionsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenLightbox: (imageKey: string) => void;
}

export const AttractionsPage: React.FC<AttractionsPageProps> = ({ onNavigate, onOpenLightbox }) => {
  const [selectedAttraction, setSelectedAttraction] = useState<AttractionData | null>(null);

  return (
    <div className="space-y-16 py-10">
      {/* Header Banner */}
      <section className="text-center max-w-3xl mx-auto px-4 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141b21] border border-[#d4af37]/30 text-amber-200 text-xs font-semibold tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Sumur & Nubra Valley Highlights</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
          Places Worth Discovering
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          From the sacred halls of Samstanling Monastery and serene chortens to lush village orchards and nearby regional landmarks, explore the treasures of Sumur.
        </p>
      </section>

      {/* Main Grid of Attraction Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractionsData.map((attraction) => {
            const imageConfig = siteImages[attraction.imageKey];
            return (
              <div
                key={attraction.id}
                className={`flex flex-col justify-between rounded-2xl bg-[#0e1418] border transition-all duration-300 hover:shadow-2xl overflow-hidden group ${
                  attraction.isRegionalNearby
                    ? 'border-amber-500/30 hover:border-amber-400/60'
                    : 'border-white/10 hover:border-[#d4af37]/50'
                }`}
              >
                {/* Image Placeholder Frame */}
                <div className="relative p-2 pb-0">
                  <ImagePlaceholder
                    src={imageConfig?.url || ''}
                    alt={imageConfig?.alt || attraction.name}
                    caption={imageConfig?.caption || attraction.name}
                    aspectRatio="16/9"
                    placeholderTitle={attraction.name}
                    category={attraction.isRegionalNearby ? 'Regional Excursion' : 'Sumur Village'}
                    onClick={() => onOpenLightbox(attraction.imageKey)}
                    showCaptionBelow={false}
                  />

                  {/* Location badge on top of image */}
                  <div className="mt-3 flex items-center justify-between text-xs px-2">
                    <span
                      className={`inline-flex items-center gap-1 font-medium ${
                        attraction.isRegionalNearby ? 'text-amber-300' : 'text-[#d4af37]'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{attraction.location}</span>
                    </span>

                    {attraction.isRegionalNearby ? (
                      <span className="text-[11px] text-amber-300 font-semibold uppercase tracking-wider bg-amber-950/40 px-2 py-0.5 rounded border border-amber-500/30">
                        Nearby Nubra
                      </span>
                    ) : (
                      <span className="text-[11px] text-emerald-400 font-semibold uppercase tracking-wider bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30">
                        In Sumur
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-amber-200 transition-colors">
                      {attraction.name}
                    </h3>
                    <p className="text-xs text-amber-200/70 font-medium">
                      {attraction.subtitle}
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed pt-1">
                      {attraction.shortDescription}
                    </p>
                  </div>

                  {/* Action buttons */}
                  <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedAttraction(attraction)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#d4af37] hover:text-amber-200 transition-colors"
                    >
                      <span>Explore More</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    {attraction.id === 'samstanling-monastery' && (
                      <button
                        onClick={() => onNavigate('monastery')}
                        className="text-xs text-amber-200 hover:underline font-semibold"
                      >
                        Full Monastery Page →
                      </button>
                    )}

                    {attraction.id === 'buddha-stupa' && (
                      <button
                        onClick={() => onNavigate('stupa')}
                        className="text-xs text-amber-200 hover:underline font-semibold"
                      >
                        Full Stupa Page →
                      </button>
                    )}

                    {attraction.id === 'sumur-village' && (
                      <button
                        onClick={() => onNavigate('village')}
                        className="text-xs text-amber-200 hover:underline font-semibold"
                      >
                        Village Trails Page →
                      </button>
                    )}

                    {attraction.id !== 'samstanling-monastery' && attraction.id !== 'buddha-stupa' && attraction.id !== 'sumur-village' && (
                      <button
                        onClick={() => onOpenLightbox(attraction.imageKey)}
                        className="text-xs text-slate-400 hover:text-slate-200 transition-colors"
                      >
                        View Photo
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* DEDICATED SPOTLIGHT 1: Buddha Stupa with Editable Fields */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-[#12181f] via-[#0e1418] to-[#090c0e] border border-[#d4af37]/30 p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#d4af37]/10 text-amber-300 text-xs font-semibold uppercase tracking-wider border border-[#d4af37]/20">
                <Info className="w-3.5 h-3.5" />
                <span>Dedicated Monument Spotlight</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Buddha Stupa (Chorten) in Sumur
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                In Buddhist philosophy, a stupa represents the enlightened mind of the Buddha and anchors spiritual harmony across the Himalayan landscape. Stupas protect communities, inspire mindfulness, and are traditionally circumambulated clockwise by devotees.
              </p>

              {/* Editable Fields Box as requested */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2 text-xs">
                <div className="text-[11px] font-semibold uppercase tracking-widest text-amber-300">
                  Verified Documentation Fields (Reserved for Updates)
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300 pt-1">
                  <div>
                    <span className="text-slate-500">Verified Name:</span>{' '}
                    <span className="text-slate-200 font-medium">Buddha Stupa / Village Chorten (Sumur)</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Location:</span>{' '}
                    <span className="text-slate-200 font-medium">Sumur Village perimeter, Nubra Valley</span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-slate-500">Description:</span>{' '}
                    <span className="text-slate-300">
                      Spiritual monument surrounded by high peaks and colorful prayer flags (Lungta).
                    </span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-slate-500">Additional Information:</span>{' '}
                    <span className="italic text-slate-400">
                      Historical consecration lineage and archival records will be integrated here upon confirmation.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ImagePlaceholder
                src={siteImages.buddhaStupa.url}
                alt={siteImages.buddhaStupa.alt}
                caption={siteImages.buddhaStupa.caption}
                credit={siteImages.buddhaStupa.credit}
                aspectRatio="4/3"
                placeholderTitle="Buddha Stupa in Sumur"
                category="Buddhist Chorten"
                onClick={() => onOpenLightbox('buddhaStupa')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* DEDICATED SPOTLIGHT 2: Local Picnic Spot with Editable Fields */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-[#0e1614] via-[#0d1216] to-[#090c0e] border border-emerald-500/30 p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <ImagePlaceholder
                src={siteImages.picnicSpot.url}
                alt={siteImages.picnicSpot.alt}
                caption={siteImages.picnicSpot.caption}
                credit={siteImages.picnicSpot.credit}
                aspectRatio="4/3"
                placeholderTitle="Picnic Spot near Sumur"
                category="Natural Recreation"
                onClick={() => onOpenLightbox('picnicSpot')}
              />
            </div>

            <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-950/50 text-emerald-300 text-xs font-semibold uppercase tracking-wider border border-emerald-500/30">
                <Compass className="w-3.5 h-3.5" />
                <span>Local Nature Spotlight</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Local Picnic Spot Near Sumur
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Cherished for its tranquil willow groves and gentle mountain streams fed by high glacial runoff, this natural retreat provides a restful oasis for visitors and families seeking peace under the Karakoram peaks.
              </p>

              {/* Editable Fields Box as requested */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2 text-xs">
                <div className="text-[11px] font-semibold uppercase tracking-widest text-emerald-400">
                  Verified Picnic Spot Details (Editable Fields)
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300 pt-1">
                  <div>
                    <span className="text-slate-500">Place Name:</span>{' '}
                    <span className="text-slate-200 font-medium">Riverside Willow Picnic Grove (Sumur)</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Location:</span>{' '}
                    <span className="text-slate-200 font-medium">Near Sumur freshwater runoff channels</span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-slate-500">Description:</span>{' '}
                    <span className="text-slate-300">
                      A peaceful natural retreat with shade from willow and poplar trees, ideal for quiet reading and outdoor relaxation.
                    </span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-slate-500">Visitor Guidance:</span>{' '}
                    <span className="text-emerald-300/90 font-medium">
                      Leave No Trace: Pack out all waste. Keep glacial water streams pristine and unpolluted.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Modal when 'Explore More' is clicked on an attraction */}
      {selectedAttraction && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto"
        >
          <div className="relative w-full max-w-3xl bg-[#0e1418] border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 my-8">
            {/* Close button */}
            <button
              onClick={() => setSelectedAttraction(null)}
              aria-label="Close attraction details"
              className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#d4af37]">
                {selectedAttraction.isRegionalNearby ? 'Nearby Regional Destination' : 'Attraction in Sumur'}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                {selectedAttraction.name}
              </h2>
              <p className="text-xs text-amber-200/80 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{selectedAttraction.location}</span>
              </p>
            </div>

            {/* Full narrative paragraphs */}
            <div className="space-y-3 text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4">
              {selectedAttraction.fullDescription.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Key Highlights list */}
            <div className="space-y-2 bg-[#141b21] p-4 rounded-xl border border-white/5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                Key Highlights
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {selectedAttraction.keyHighlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visitor Guidance if present */}
            {selectedAttraction.visitorGuidance && (
              <div className="space-y-2 bg-amber-950/20 p-4 rounded-xl border border-amber-500/20">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Respectful Visitor Guidance</span>
                </h4>
                <ul className="space-y-1 text-xs text-amber-200/80">
                  {selectedAttraction.visitorGuidance.map((guide, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>{guide}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Modal Footer */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10">
              <button
                onClick={() => {
                  setSelectedAttraction(null);
                  onOpenLightbox(selectedAttraction.imageKey);
                }}
                className="w-full sm:w-auto px-4 py-2 rounded-lg bg-[#1a232b] hover:bg-[#222e38] text-white text-xs font-semibold border border-white/10 transition-colors"
              >
                View Full Photograph Slot
              </button>

              <button
                onClick={() => {
                  setSelectedAttraction(null);
                  onNavigate('guide');
                }}
                className="w-full sm:w-auto px-5 py-2 rounded-lg bg-[#d4af37] text-black text-xs font-semibold uppercase tracking-wider hover:bg-[#e5c158] transition-colors"
              >
                Plan Journey to this Sight
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
