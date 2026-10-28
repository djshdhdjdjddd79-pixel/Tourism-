import React, { useState } from 'react';
import { Camera, Eye, Filter, Sparkles, Layers } from 'lucide-react';
import { galleryImages } from '../config/images';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { PageId } from '../components/Navbar';

interface GalleryPageProps {
  onNavigate: (page: PageId) => void;
  onOpenLightboxWithIndex: (index: number) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate, onOpenLightboxWithIndex }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredImages = galleryImages.filter((img) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'monuments') return img.category === 'monastery' || img.category === 'stupa';
    if (activeFilter === 'nature') return img.category === 'landscape' || img.category === 'picnic';
    if (activeFilter === 'culture') return img.category === 'culture' || img.category === 'architecture' || img.category === 'village';
    return true;
  });

  return (
    <div className="space-y-16 py-10">
      {/* Header Banner */}
      <section className="text-center max-w-3xl mx-auto px-4 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141b21] border border-[#d4af37]/30 text-amber-200 text-xs font-semibold tracking-widest uppercase">
          <Camera className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Visual Archive</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
          Moments from Sumur
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          A dedicated photographic visual showcase honoring the architecture, culture, stupas, and mountainous terrain of Sumur. Click any slot to view full image or placeholder details.
        </p>

        {/* Filter Bar (Interactive segmented controls) */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeFilter === 'all'
                ? 'bg-[#d4af37] text-black font-semibold shadow-md'
                : 'bg-[#12181f] text-slate-300 hover:text-white border border-white/5'
            }`}
          >
            All 8 Slots
          </button>
          <button
            onClick={() => setActiveFilter('monuments')}
            className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeFilter === 'monuments'
                ? 'bg-[#d4af37] text-black font-semibold shadow-md'
                : 'bg-[#12181f] text-slate-300 hover:text-white border border-white/5'
            }`}
          >
            Monuments & Stupas
          </button>
          <button
            onClick={() => setActiveFilter('nature')}
            className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeFilter === 'nature'
                ? 'bg-[#d4af37] text-black font-semibold shadow-md'
                : 'bg-[#12181f] text-slate-300 hover:text-white border border-white/5'
            }`}
          >
            Nature & Landscapes
          </button>
          <button
            onClick={() => setActiveFilter('culture')}
            className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeFilter === 'culture'
                ? 'bg-[#d4af37] text-black font-semibold shadow-md'
                : 'bg-[#12181f] text-slate-300 hover:text-white border border-white/5'
            }`}
          >
            Culture & Village Life
          </button>
        </div>
      </section>

      {/* 8 Photo Gallery Placeholders Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, index) => {
            const originalIndex = galleryImages.findIndex((item) => item.id === img.id);
            // Dynamic column spans for interesting rhythm on desktop
            const isHeroCard = originalIndex === 0 || originalIndex === 7;

            return (
              <div
                key={img.id}
                className={`rounded-2xl bg-[#0e1418] border border-white/10 hover:border-[#d4af37]/60 transition-all overflow-hidden flex flex-col justify-between group shadow-xl ${
                  isHeroCard ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className="p-2 pb-0">
                  <ImagePlaceholder
                    src={img.url}
                    alt={img.alt}
                    caption={img.caption}
                    credit={img.credit}
                    aspectRatio={isHeroCard ? '21/9' : img.aspectRatio || '16/9'}
                    placeholderTitle={img.caption || img.alt}
                    category={img.category}
                    onClick={() => onOpenLightboxWithIndex(originalIndex)}
                    showCaptionBelow={false}
                  />
                </div>

                <div className="p-5 flex items-center justify-between gap-3 text-xs border-t border-white/5">
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-amber-200 transition-colors">
                      {img.caption || img.alt}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Slot #{originalIndex + 1} · {img.category?.toUpperCase() || 'GALLERY'}
                    </p>
                  </div>

                  <button
                    onClick={() => onOpenLightboxWithIndex(originalIndex)}
                    className="p-2 rounded-lg bg-[#172129] hover:bg-[#d4af37] hover:text-black text-amber-200 transition-colors shrink-0"
                    title="Open Fullscreen View"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Configuration Notice */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0d1216] border border-white/10 text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs text-amber-300 font-semibold">
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
            <span>Developer / Administrator Note</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            All 8 photograph slots correspond directly to entries in{' '}
            <code className="text-amber-300 font-mono text-[11px] px-1.5 py-0.5 rounded bg-black/60">
              src/config/images.ts
            </code>
            . When you provide real image URLs, simply paste them into the config file and they will automatically appear here and in the fullscreen lightbox!
          </p>
        </div>
      </section>
    </div>
  );
};
