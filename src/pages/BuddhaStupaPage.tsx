import React from 'react';
import { Sparkles, MapPin, Compass, ShieldCheck, CheckCircle2, AlertCircle, ArrowRight, Heart, Info } from 'lucide-react';
import { siteImages } from '../config/images';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { PageId } from '../components/Navbar';

interface BuddhaStupaPageProps {
  onNavigate: (page: PageId) => void;
  onOpenLightbox: (imageKey: string) => void;
}

export const BuddhaStupaPage: React.FC<BuddhaStupaPageProps> = ({
  onNavigate,
  onOpenLightbox,
}) => {
  return (
    <div className="space-y-20 py-10">
      {/* Header Banner */}
      <section className="text-center max-w-4xl mx-auto px-4 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141b21] border border-[#d4af37]/30 text-amber-200 text-xs font-semibold tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Sacred Monument of Enlightenment</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
          Buddha Stupa & Eco Buddha Park
        </h1>
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          A revered sanctuary of peace, meditation, and Buddhist spiritual heritage set against the high mountain peaks of Sumur Village in Nubra Valley.
        </p>
        <div className="flex items-center justify-center gap-2 text-xs text-[#d4af37] font-medium pt-2">
          <MapPin className="w-3.5 h-3.5" />
          <span>Sumur Village, Nubra Valley · Ladakh, India</span>
        </div>
      </section>

      {/* Main Feature Photo: Real Photo of Buddha Statue & Stupa */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden border border-[#d4af37]/40 bg-[#0d1216] p-2 shadow-2xl">
          <ImagePlaceholder
            src={siteImages.buddhaStupa.url}
            alt={siteImages.buddhaStupa.alt}
            caption={siteImages.buddhaStupa.caption}
            credit={siteImages.buddhaStupa.credit}
            aspectRatio="21/9"
            placeholderTitle="Buddha Statue & Sacred Stupa in Sumur against Mountain Backdrop"
            category="Buddha Stupa & Statue"
            onClick={() => onOpenLightbox('buddhaStupa')}
          />
        </div>
      </section>

      {/* Narrative & Cultural Significance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Spiritual Philosophy of the Stupa */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
                Spiritual Symbolism
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                The Architecture of Enlightenment
              </h2>
            </div>

            <p>
              In Tibetan Buddhist cosmology, a <strong>Stupa (known locally in Ladakhi as a Chorten)</strong> is a sacred architectural representation of the fully enlightened mind of the Buddha. Each structural level of a stupa embodies one of the <strong>Five Cosmic Elements</strong> that form the universe:
            </p>

            {/* Five Elements Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-[#0e1418] border border-white/10 text-center">
                <div className="text-xs uppercase text-amber-300 font-bold">1. Earth</div>
                <div className="text-[11px] text-slate-400 mt-1">Square Base</div>
                <div className="text-[10px] text-slate-500">Stability</div>
              </div>
              <div className="p-3 rounded-xl bg-[#0e1418] border border-white/10 text-center">
                <div className="text-xs uppercase text-cyan-300 font-bold">2. Water</div>
                <div className="text-[11px] text-slate-400 mt-1">Dome (Bumpa)</div>
                <div className="text-[10px] text-slate-500">Fluidity</div>
              </div>
              <div className="p-3 rounded-xl bg-[#0e1418] border border-white/10 text-center">
                <div className="text-xs uppercase text-rose-300 font-bold">3. Fire</div>
                <div className="text-[11px] text-slate-400 mt-1">Spire (Steps)</div>
                <div className="text-[10px] text-slate-500">Wisdom</div>
              </div>
              <div className="p-3 rounded-xl bg-[#0e1418] border border-white/10 text-center">
                <div className="text-xs uppercase text-emerald-300 font-bold">4. Air</div>
                <div className="text-[11px] text-slate-400 mt-1">Crescent Moon</div>
                <div className="text-[10px] text-slate-500">Action</div>
              </div>
              <div className="p-3 rounded-xl bg-[#0e1418] border border-white/10 text-center col-span-2 sm:col-span-1">
                <div className="text-xs uppercase text-[#d4af37] font-bold">5. Space</div>
                <div className="text-[11px] text-slate-400 mt-1">Sun & Pinnacle</div>
                <div className="text-[10px] text-slate-500">Consciousness</div>
              </div>
            </div>

            <p>
              The Buddha Stupa and peaceful Eco Buddha Park in Sumur offer visitors a haven of quiet contemplation. Surrounded by green fields and high arid mountain ridges, the presence of the monument brings harmony to the entire valley, dispelling negative energies and blessing all sentient beings.
            </p>

            <p>
              Visitors can participate in the ancient practice of <strong>Kora</strong>—walking mindfully around the stupa in a clockwise direction while reciting mantras or reflecting quietly on peace and gratitude.
            </p>
          </div>

          {/* Right Column: Verified Documentation & Etiquette */}
          <div className="lg:col-span-5 space-y-6">
            {/* Editable Fields Card as requested */}
            <div className="p-6 rounded-2xl bg-[#0e1418] border border-[#d4af37]/40 space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300">
                <Info className="w-4 h-4 text-[#d4af37]" />
                <span>Verified Documentation Records</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                Monument Information
              </h3>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <span className="text-slate-400 font-medium">Verified Monument Name:</span>
                  <p className="text-white font-semibold">
                    Buddha Stupa & Eco Buddha Park (Sumur)
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <span className="text-slate-400 font-medium">Location:</span>
                  <p className="text-slate-200">
                    Sumur Village, Nubra Sub-Division, Ladakh
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <span className="text-slate-400 font-medium">Description:</span>
                  <p className="text-slate-300 leading-relaxed">
                    A peaceful Buddhist monument and statue overlooking the high mountain ranges, honoring centuries of Himalayan Buddhist culture.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <span className="text-slate-400 font-medium">Additional Information:</span>
                  <p className="text-slate-400 italic">
                    Historical lineage and consecrated relic records are maintained in collaboration with Sumur village elders.
                  </p>
                </div>
              </div>
            </div>

            {/* Sacred Stupa Etiquette */}
            <div className="p-6 rounded-2xl bg-[#0e1418] border border-white/10 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                <span>Visiting Etiquette</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span><strong>Always circumambulate clockwise:</strong> Keep the stupa on your right side.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span><strong>Never sit or stand on the base:</strong> Treat the sacred structure with reverence.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span><strong>Maintain serene silence:</strong> Preserve peace for meditators and pilgrims.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span><strong>Leave No Trace:</strong> Carry back all litter and keep grounds spotless.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Photo Section: Chortens and Mountain Path */}
      <section className="bg-[#0b0e12] border-y border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
              Sacred Valley Chortens
            </span>
            <h2 className="font-serif text-3xl font-bold text-white">
              White Chortens of Nubra Valley
            </h2>
            <p className="text-sm text-slate-400">
              Scattered along the mountain trails of Sumur, whitewashed chortens guard the approaches and welcome mindful travelers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <h3 className="font-serif text-2xl font-bold text-white">
                Spiritual Guardians of the High Passes
              </h3>
              <p>
                In Ladakh, travelers and caravans crossing high mountain passes have placed faith in stupas for over a millennium. As you walk through Sumur, you will notice these monuments facing the open riverbed, framed by colorful prayer flags carrying mantras on the wind.
              </p>
              <p>
                The stupas serve as quiet reminders of impermanence, mindfulness, and the timeless bond between human life and nature in the Himalayas.
              </p>
              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => onNavigate('monastery')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#d4af37] text-black text-xs font-semibold uppercase tracking-wider hover:bg-[#e5c158] transition-colors"
                >
                  <span>Visit Samstanling Monastery</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0d1216] p-1.5">
              <ImagePlaceholder
                src={siteImages.welcomeVillageSupporting2.url}
                alt={siteImages.welcomeVillageSupporting2.alt}
                caption={siteImages.welcomeVillageSupporting2.caption}
                aspectRatio="16/9"
                placeholderTitle="Sacred Chortens overlooking Sumur river basin"
                category="Village Chortens"
                onClick={() => onOpenLightbox('welcomeVillageSupporting2')}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
