import React from 'react';
import { Landmark, Sparkles, MapPin, CheckCircle2, AlertCircle, Compass, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { siteImages } from '../config/images';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { PageId } from '../components/Navbar';

interface SamstanlingMonasteryPageProps {
  onNavigate: (page: PageId) => void;
  onOpenLightbox: (imageKey: string) => void;
}

export const SamstanlingMonasteryPage: React.FC<SamstanlingMonasteryPageProps> = ({
  onNavigate,
  onOpenLightbox,
}) => {
  return (
    <div className="space-y-20 py-10">
      {/* Header Banner */}
      <section className="text-center max-w-4xl mx-auto px-4 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141b21] border border-[#d4af37]/30 text-amber-200 text-xs font-semibold tracking-widest uppercase">
          <Landmark className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Sacred Himalayan Gompa</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
          Samstanling Monastery (Gompa)
        </h1>
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          The spiritual heart of Sumur Village—a revered 19th-century Buddhist monastery founded by Lama Tsultim Nima, commanding majestic views over the Nubra valley.
        </p>
        <div className="flex items-center justify-center gap-2 text-xs text-[#d4af37] font-medium pt-2">
          <MapPin className="w-3.5 h-3.5" />
          <span>Upper Sumur, Nubra Valley · Approx. 3,150 m Altitude</span>
        </div>
      </section>

      {/* Dual Photo Feature Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Ridge Panorama */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#d4af37]/40 bg-[#0d1216] p-2 shadow-2xl flex flex-col justify-between">
            <ImagePlaceholder
              src={siteImages.samstanlingMonastery.url}
              alt={siteImages.samstanlingMonastery.alt}
              caption={siteImages.samstanlingMonastery.caption}
              credit={siteImages.samstanlingMonastery.credit}
              aspectRatio="16/9"
              placeholderTitle="Samstanling Monastery on the Mountain Ridge above Sumur"
              category="Monastery Ridge Panorama"
              onClick={() => onOpenLightbox('samstanlingMonastery')}
            />
          </div>

          {/* Temple Facade & Prayer Flags */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-white/10 bg-[#0d1216] p-2 shadow-2xl flex flex-col justify-between">
            <ImagePlaceholder
              src={siteImages.samstanlingFront.url}
              alt={siteImages.samstanlingFront.alt}
              caption={siteImages.samstanlingFront.caption}
              credit={siteImages.samstanlingFront.credit}
              aspectRatio="16/9"
              placeholderTitle="Samstanling Monastery Temple Gate & Prayer Flags"
              category="Temple Facade & Chortens"
              onClick={() => onOpenLightbox('samstanlingFront')}
            />
          </div>
        </div>
      </section>

      {/* Narrative & History */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Detailed History & Spiritual Significance */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
                Heritage & Founding
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                A Mountain Sanctuary of the Gelugpa Order
              </h2>
            </div>

            <p>
              Perched on the mountain slopes behind Sumur village, <strong>Samstanling Monastery</strong> (also commonly known as Samstanling Gompa) was established in the mid-19th century (circa 1841) by the venerable <strong>Lama Tsultim Nima</strong>. It stands today as the primary monastic institution of northern Nubra Valley.
            </p>

            <p>
              The monastery belongs to the <strong>Gelugpa (Yellow Hat)</strong> tradition of Tibetan Buddhism. The complex is distinguished by its vivid ochre, brick-red, and whitewashed walls, adorned with fluttering Buddhist prayer flags that create a striking silhouette against the barren, towering Karakoram backdrop.
            </p>

            <p>
              A scenic approach path winds up from Sumur village through terraced barley fields and groves of sweet willow and poplar trees, bordered by long lines of prayer stones (Mani walls) and spinning prayer wheels.
            </p>

            {/* Architectural Highlights Box */}
            <div className="p-6 rounded-2xl bg-[#0e1418] border border-white/10 space-y-3">
              <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#d4af37]" />
                <span>Monastery Highlights</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>Dukhang (Main Assembly Hall) with sacred thangkas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>Frescoes depicting Shakyamuni Buddha & Tara</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>Panoramic viewpoint over the Sumur river basin</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>Residency of novice and senior monastic scholars</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Visitor Etiquette & Practical Guidelines */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0e1418] border border-amber-500/30 space-y-5 shadow-xl">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-xs text-amber-300 font-semibold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                  <span>Monastic Decorum</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  Visitor Conduct Guidelines
                </h3>
                <p className="text-xs text-slate-400">
                  Samstanling is an active place of prayer and study. Visitors are welcomed with genuine Ladakhi warmth when decorum is observed.
                </p>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <span className="font-semibold text-white">Footwear & Headwear</span>
                  <p className="text-slate-300">
                    Always remove shoes, hats, and sunglasses before stepping inside the prayer halls and inner shrines.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <span className="font-semibold text-white">Clockwise Movement (Kora)</span>
                  <p className="text-slate-300">
                    Always walk in a clockwise direction around the monastery perimeter, stupas, and rows of prayer wheels.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <span className="font-semibold text-white">Respectful Attire</span>
                  <p className="text-slate-300">
                    Dress conservatively with shoulders, chest, and knees fully covered out of respect for the monastic community.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <span className="font-semibold text-white">Photography Etiquette</span>
                  <p className="text-slate-300">
                    Do not photograph monks during active meditation or use flash photography on historic frescoes and thangkas.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/20 text-[11px] text-amber-200/90 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>
                  Visiting hours and ceremony schedules vary with seasonal monastic retreats. We recommend inquiring in the village before walking up.
                </span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-4 rounded-xl bg-[#0d1216] border border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-300 font-medium">
                Want to plan your visit here?
              </span>
              <button
                onClick={() => onNavigate('guide')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#d4af37] text-black text-xs font-semibold uppercase tracking-wider hover:bg-[#e5c158] transition-colors"
              >
                <span>Travel Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Second Image Feature: Chortens & Sacred Approaches */}
      <section className="bg-[#0b0e12] border-y border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
              The Sacred Landscape
            </span>
            <h2 className="font-serif text-3xl font-bold text-white">
              The Path to Samstanling
            </h2>
            <p className="text-sm text-slate-400">
              The walk up to Samstanling offers one of the most serene viewpoints in all of Ladakh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0d1216] p-1.5">
              <ImagePlaceholder
                src={siteImages.welcomeVillageSupporting2.url}
                alt={siteImages.welcomeVillageSupporting2.alt}
                caption={siteImages.welcomeVillageSupporting2.caption}
                aspectRatio="16/9"
                placeholderTitle="Sacred Chortens and Mountain Path to Samstanling"
                category="Sacred Chortens"
                onClick={() => onOpenLightbox('welcomeVillageSupporting2')}
              />
            </div>

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <h3 className="font-serif text-2xl font-bold text-white">
                Venerated Stupas and Mani Stones
              </h3>
              <p>
                Along the ridge leading to Samstanling, whitewashed stupas (chortens) stand as physical markers of Buddhist cosmology and peace. Each stone in the surrounding Mani walls is hand-carved with the sacred mantra <em>"Om Mani Padme Hum"</em>.
              </p>
              <p>
                From the monastery courtyard, visitors look out across the green canopy of Sumur village orchards, the braided channels of the Nubra River, and the distant snowy peaks of the Karakoram range.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('stupa')}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37] hover:underline"
                >
                  <span>Explore Buddha Stupa Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
