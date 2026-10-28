import React from 'react';
import { Landmark, Mountain, Users, Compass, Check, Sparkles, Heart } from 'lucide-react';
import { culturePillars, visitorExperiences } from '../data/sumurData';
import { siteImages } from '../config/images';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { PageId } from '../components/Navbar';

interface CulturePageProps {
  onNavigate: (page: PageId) => void;
  onOpenLightbox: (imageKey: string) => void;
}

export const CulturePage: React.FC<CulturePageProps> = ({ onNavigate, onOpenLightbox }) => {
  const getExperienceIcon = (iconName: string) => {
    switch (iconName) {
      case 'temple':
        return <Landmark className="w-6 h-6 text-[#d4af37]" />;
      case 'mountain':
        return <Mountain className="w-6 h-6 text-[#d4af37]" />;
      case 'users':
        return <Users className="w-6 h-6 text-[#d4af37]" />;
      case 'compass':
      default:
        return <Compass className="w-6 h-6 text-[#d4af37]" />;
    }
  };

  return (
    <div className="space-y-24 py-10">
      {/* 1. CULTURE & HERITAGE SECTION */}
      <section className="space-y-12">
        <div className="text-center max-w-3xl mx-auto px-4 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141b21] border border-[#d4af37]/30 text-amber-200 text-xs font-semibold tracking-widest uppercase">
            <Heart className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Living Himalayan Heritage</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Experience the Spirit of Ladakh
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Sumur preserves an ancient and resilient culture shaped by Tibetan Buddhism, generational agro-pastoral wisdom, and an enduring respect for nature in the high Himalayas.
          </p>
        </div>

        {/* 4 Cultural Cards Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {culturePillars.map((item) => {
              const imageConfig = siteImages[item.imageKey];
              return (
                <div
                  key={item.id}
                  className="rounded-2xl bg-[#0e1418] border border-white/10 hover:border-[#d4af37]/40 transition-all overflow-hidden flex flex-col justify-between group shadow-lg"
                >
                  <div className="p-2 pb-0">
                    <ImagePlaceholder
                      src={imageConfig?.url || ''}
                      alt={imageConfig?.alt || item.title}
                      caption={imageConfig?.caption || item.title}
                      aspectRatio="16/9"
                      placeholderTitle={item.title}
                      category="Ladakhi Heritage"
                      onClick={() => onOpenLightbox(item.imageKey)}
                      showCaptionBelow={false}
                    />
                  </div>

                  <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <span className="text-xs uppercase font-semibold text-[#d4af37] tracking-wider">
                          Cultural Pillar
                        </span>
                        <h2 className="font-serif text-2xl font-bold text-white group-hover:text-amber-200 transition-colors">
                          {item.title}
                        </h2>
                        <p className="text-xs text-amber-200/70 font-medium">
                          {item.subtitle}
                        </p>
                      </div>

                      <p className="text-sm text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/5 space-y-2">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Essential Elements
                      </h4>
                      <ul className="grid grid-cols-1 gap-1.5 text-xs text-slate-300">
                        {item.keyAspects.map((aspect, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                            <span>{aspect}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. VISITOR EXPERIENCES SECTION: Make Your Visit Memorable */}
      <section className="bg-[#0b0f13] border-y border-white/10 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold tracking-widest text-[#d4af37] uppercase">
              Curated Encounters
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Make Your Visit Memorable
            </h2>
            <p className="text-sm text-slate-400">
              Thoughtful, immersive ways to connect with the landscape, spirituality, and community of Sumur.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visitorExperiences.map((exp) => (
              <div
                key={exp.id}
                className="p-6 rounded-2xl bg-[#0f151a] border border-white/10 hover:border-[#d4af37]/60 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#172129] border border-white/10 flex items-center justify-center group-hover:border-[#d4af37] transition-colors">
                    {getExperienceIcon(exp.iconName)}
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-300/80">
                      {exp.category}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-amber-200 transition-colors mt-0.5">
                      {exp.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 space-y-1.5">
                  {exp.highlights.map((h, i) => (
                    <div key={i} className="text-[11px] text-slate-400 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#d4af37]" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick CTA to travel guide */}
          <div className="text-center pt-4">
            <button
              onClick={() => onNavigate('guide')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#d4af37] text-black text-xs font-semibold uppercase tracking-wider hover:bg-[#e5c158] transition-colors shadow-lg"
            >
              <span>Read Traveler Preparation Guide</span>
              <Compass className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
