import React, { useState } from 'react';
import { Mountain, MapPin, Sparkles, Compass, CheckCircle2, Footprints, Clock, ArrowRight, Sun, Leaf } from 'lucide-react';
import { siteImages } from '../config/images';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { PageId } from '../components/Navbar';

interface VillageTrailsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenLightbox: (imageKey: string) => void;
}

interface TrailItem {
  id: string;
  name: string;
  distance: string;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Gentle Stroll';
  description: string;
  highlights: string[];
}

const villageTrails: TrailItem[] = [
  {
    id: 'orchard-trail',
    name: 'Glacial Canal & Apricot Orchard Walk (Yura Trail)',
    distance: '2.5 km',
    duration: '45–60 mins',
    difficulty: 'Easy',
    description:
      'Follow the ancient stone-lined water canals (yura) that deliver crystalline glacial meltwater from high snowfields to nourish Sumur’s lush apricot orchards, apple gardens, and terraced barley fields.',
    highlights: [
      'Centuries-old stone water channels (Yura) managed by village water masters (Churpon)',
      'Fragrant summer apricot, apple, and sea buckthorn (Tsestalulu) orchards',
      'Shaded pathways beneath tall poplar and willow windbreaks',
    ],
  },
  {
    id: 'heritage-lane',
    name: 'Old Village Lane & Vernacular Architecture Trail',
    distance: '1.8 km',
    duration: '35–45 mins',
    difficulty: 'Gentle Stroll',
    description:
      'Wander through the historic village lanes of Sumur, observing traditional sun-dried mud-brick farmsteads, carved wooden window lintels (shingstok), rooftop fodder stores, and whitewashed chortens.',
    highlights: [
      'Authentic Ladakhi earthen masonry evolved for high-altitude desert resilience',
      'Carved wooden lintels, prayer flag poles, and mani stones along house walls',
      'Warm encounters and gentle greetings of "Julley" from welcoming villagers',
    ],
  },
  {
    id: 'riverside-grove',
    name: 'Riverside Willow Grove & Picnic Trail',
    distance: '3.2 km',
    duration: '1–1.5 hours',
    difficulty: 'Easy',
    description:
      'A serene walk leading down to the willow-fringed banks and freshwater streams near the Nubra River, where mountain breezes and rustling leaves create an idyllic setting for quiet reading and outdoor relaxation.',
    highlights: [
      'Tranquil willow and poplar groves providing cool alpine shade',
      'Freshwater glacial streams with crystal-clear runoff',
      'Sweeping panoramic views across the wide, braided Nubra River basin',
    ],
  },
  {
    id: 'monastery-ascent',
    name: 'Samstanling Monastic Ascent & Ridge Trail',
    distance: '2.0 km',
    duration: '45–60 mins',
    difficulty: 'Moderate',
    description:
      'A gradual uphill trail ascending from the village center through terraced barley fields to the upper ridge where Samstanling Gompa stands, rewarding walkers with unmatched vistas over Sumur and northern Nubra.',
    highlights: [
      'Panoramic 360-degree overlook of Sumur village and the Karakoram range',
      'Long rows of ancient prayer stones (Mani walls) and spinning prayer wheels',
      'Peaceful approach into the historic gates of Samstanling Monastery',
    ],
  },
];

export const VillageTrailsPage: React.FC<VillageTrailsPageProps> = ({
  onNavigate,
  onOpenLightbox,
}) => {
  const [selectedTrail, setSelectedTrail] = useState<TrailItem>(villageTrails[0]);

  return (
    <div className="space-y-20 py-10">
      {/* Header Banner */}
      <section className="text-center max-w-4xl mx-auto px-4 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141b21] border border-[#d4af37]/30 text-amber-200 text-xs font-semibold tracking-widest uppercase">
          <Footprints className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Village Discovery & Nature Trails</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
          Sumur Village & Heritage Trails
        </h1>
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Step into a timeless high-Himalayan oasis. Walk through shaded apricot groves, follow centuries-old glacial water canals, and admire handcrafted vernacular architecture.
        </p>
        <div className="flex items-center justify-center gap-2 text-xs text-[#d4af37] font-medium pt-2">
          <MapPin className="w-3.5 h-3.5" />
          <span>Sumur Village, Nubra Valley · Walking & Heritage Routes</span>
        </div>
      </section>

      {/* Main Panoramic Photograph of Village */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden border border-[#d4af37]/40 bg-[#0d1216] p-2 shadow-2xl">
          <ImagePlaceholder
            src={siteImages.sumurVillageLandscape.url}
            alt={siteImages.sumurVillageLandscape.alt}
            caption={siteImages.sumurVillageLandscape.caption}
            credit={siteImages.sumurVillageLandscape.credit}
            aspectRatio="21/9"
            placeholderTitle="Sumur Village Landscape with Green Barley Fields & Mountain Peaks"
            category="Village Panorama"
            onClick={() => onOpenLightbox('sumurVillageLandscape')}
          />
        </div>
      </section>

      {/* 2-Column Supporting Visuals: Orchards & Architecture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0d1216] p-2">
            <ImagePlaceholder
              src={siteImages.welcomeVillageMain.url}
              alt={siteImages.welcomeVillageMain.alt}
              caption={siteImages.welcomeVillageMain.caption}
              aspectRatio="16/9"
              placeholderTitle="Whitewashed Village Homes & Apricot Orchards"
              category="Village Orchards"
              onClick={() => onOpenLightbox('welcomeVillageMain')}
            />
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0d1216] p-2">
            <ImagePlaceholder
              src={siteImages.welcomeVillageSupporting1.url}
              alt={siteImages.welcomeVillageSupporting1.alt}
              caption={siteImages.welcomeVillageSupporting1.caption}
              aspectRatio="16/9"
              placeholderTitle="Earthen Architecture & Woodcraft in Sumur"
              category="Vernacular Craft"
              onClick={() => onOpenLightbox('welcomeVillageSupporting1')}
            />
          </div>
        </div>
      </section>

      {/* Interactive Trails Explorer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
            Walking Itineraries
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Curated Walking Trails in Sumur
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl">
            Sumur is best explored on foot. Choose a route below to view distance, duration, and key scenic landmarks.
          </p>
        </div>

        {/* Trail Selector Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {villageTrails.map((trail) => {
            const isSelected = selectedTrail.id === trail.id;
            return (
              <button
                key={trail.id}
                onClick={() => setSelectedTrail(trail)}
                className={`p-5 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#141c22] border-[#d4af37] shadow-xl'
                    : 'bg-[#0e1418] border-white/10 hover:border-white/20'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase text-amber-300">
                      {trail.difficulty}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {trail.distance}
                    </span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-white">
                    {trail.name}
                  </h3>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{trail.duration}</span>
                  </span>
                  <span className="text-[#d4af37] font-medium">Select →</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Trail Deep-Dive Card */}
        <div className="p-8 rounded-2xl bg-[#0e1418] border border-[#d4af37]/40 space-y-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold">
                Trail Profile
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                {selectedTrail.name}
              </h3>
            </div>
            <div className="flex items-center gap-3 text-xs shrink-0">
              <span className="px-3 py-1.5 rounded-lg bg-[#172129] border border-white/10 text-white font-mono">
                {selectedTrail.distance}
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#172129] border border-white/10 text-white font-mono">
                {selectedTrail.duration}
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 font-semibold">
                {selectedTrail.difficulty}
              </span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {selectedTrail.description}
          </p>

          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Landmarks & Highlights Along This Trail
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {selectedTrail.highlights.map((hl, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Village Seasons & Agriculture */}
      <section className="bg-[#0b0e12] border-y border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
              High Altitude Agriculture
            </span>
            <h2 className="font-serif text-3xl font-bold text-white">
              The Agricultural Rhythm of Sumur
            </h2>
            <p className="text-sm text-slate-400">
              Fed by the glacial melt of the Karakoram range, Sumur is a flourishing oasis in the cold desert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#0f1418] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#172027] border border-white/10 flex items-center justify-center">
                <Sun className="w-5 h-5 text-amber-300" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                Spring & High Summer
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                As snow melts in June, glacial canals roar to life. Terraced fields turn vibrant green with highland barley and wheat, while apricot and apple blossoms perfume the village breeze.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0f1418] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#172027] border border-white/10 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                Golden Autumn Harvest
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                September brings radiant golden-yellow poplar foliage. Families harvest barley, harvest vitamin-rich sea buckthorn berries (Tsestalulu), and dry sweet apricots on flat mud rooftops for the winter.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0f1418] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#172027] border border-white/10 flex items-center justify-center">
                <Mountain className="w-5 h-5 text-[#d4af37]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                Peaceful Winter Contemplation
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Winter blankets the high peaks in deep snow. Village life turns inward around warm hearth stoves, with traditional wool spinning, monastic celebrations, and contemplative community gatherings.
              </p>
            </div>
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => onNavigate('homestays')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#d4af37] text-black text-xs font-semibold uppercase tracking-wider hover:bg-[#e5c158] transition-colors shadow-lg"
            >
              <span>Explore Village Homestays</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
