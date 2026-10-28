import React, { useState } from 'react';
import { MapPin, ExternalLink, Navigation, Compass, Layers, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { PageId } from '../components/Navbar';

interface MapPageProps {
  onNavigate: (page: PageId) => void;
}

interface Waypoint {
  id: string;
  name: string;
  elevation: string;
  description: string;
  highlight: string;
  type: 'pass' | 'junction' | 'village' | 'destination';
}

const waypoints: Waypoint[] = [
  {
    id: 'leh',
    name: 'Leh (Start Point)',
    elevation: '3,500 m / 11,500 ft',
    description: 'Capital of Ladakh, base for inner line permits, acclimatization, and transport arrangements.',
    highlight: 'Acclimatize here for at least 24–48 hours.',
    type: 'village',
  },
  {
    id: 'khardung-la',
    name: 'Khardung La Pass',
    elevation: '5,359 m / 17,582 ft',
    description: 'Iconic mountain pass across the Ladakh range linking the Indus Valley with the Nubra & Shyok Valleys.',
    highlight: 'Breathtaking high-altitude pass. Dress warmly.',
    type: 'pass',
  },
  {
    id: 'khalsar',
    name: 'Khalsar Junction',
    elevation: '3,150 m / 10,335 ft',
    description: 'Road bifurcates here: West to Diskit & Hunder across Shyok, North along Nubra River to Sumur.',
    highlight: 'Take the northern fork towards Sumur.',
    type: 'junction',
  },
  {
    id: 'sumur',
    name: 'Sumur Village (Destination)',
    elevation: '3,100 m / 10,170 ft',
    description: 'Peaceful oasis village on the eastern bank of the Nubra River, home to Samstanling Monastery.',
    highlight: 'Destination reached: serene orchards & gompa.',
    type: 'destination',
  },
  {
    id: 'panamik',
    name: 'Panamik (Northern Extension)',
    elevation: '3,180 m / 10,430 ft',
    description: 'Scenic regional extension further north up the valley, celebrated for natural sulphur hot springs.',
    highlight: 'Optional day excursion from Sumur.',
    type: 'destination',
  },
];

export const MapPage: React.FC<MapPageProps> = ({ onNavigate }) => {
  const [selectedWaypoint, setSelectedWaypoint] = useState<Waypoint>(waypoints[3]); // Sumur default

  return (
    <div className="space-y-16 py-10">
      {/* Header Banner */}
      <section className="text-center max-w-3xl mx-auto px-4 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141b21] border border-[#d4af37]/30 text-amber-200 text-xs font-semibold tracking-widest uppercase">
          <Navigation className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Geography & Wayfinding</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
          Find Your Way to Sumur
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Sumur is located on the eastern banks of the Nubra River in Ladakh. Use our geographical guide and location coordinates to navigate your journey.
        </p>
      </section>

      {/* Main Interactive Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#0e1418] border border-white/10 overflow-hidden shadow-2xl">
          {/* Top Control Bar */}
          <div className="p-4 sm:p-6 bg-[#12181f] border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs text-[#d4af37] font-semibold uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                <span>Geographic Coordinates</span>
              </div>
              <p className="font-mono text-sm text-white font-medium">
                {siteConfig.location.coordinates.display} ({siteConfig.location.coordinates.latitude}° N, {siteConfig.location.coordinates.longitude}° E)
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={siteConfig.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#d4af37] text-black text-xs font-semibold uppercase tracking-wider hover:bg-[#e5c158] transition-colors shadow-md shrink-0"
              >
                <span>Open Location Map</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Attractive Graphic Map Visual Placeholder */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] max-h-[500px] bg-[#090c0e] flex items-center justify-center overflow-hidden">
            {/* Topographic Contour Vector Illustration */}
            <svg
              className="absolute inset-0 w-full h-full opacity-35"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 500"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                </pattern>
                <linearGradient id="river-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#0284c7" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              <rect width="1000" height="500" fill="url(#grid-pattern)" />

              {/* Topographic Contour Lines */}
              <path
                d="M 50,450 Q 200,300 400,320 T 750,220 T 950,150"
                fill="none"
                stroke="rgba(212,175,55,0.2)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <path
                d="M 100,480 Q 280,260 520,290 T 820,180 T 980,100"
                fill="none"
                stroke="rgba(212,175,55,0.25)"
                strokeWidth="1.5"
              />
              <path
                d="M 30,350 Q 250,200 480,230 T 780,130 T 950,50"
                fill="none"
                stroke="rgba(212,175,55,0.15)"
                strokeWidth="1.5"
              />

              {/* Nubra & Shyok River Flow Vector */}
              <path
                d="M 150,500 C 300,400 350,300 450,250 C 520,220 540,140 560,0"
                fill="none"
                stroke="url(#river-grad)"
                strokeWidth="12"
                strokeLinecap="round"
              />
              <path
                d="M 450,250 C 400,220 300,180 200,160"
                fill="none"
                stroke="url(#river-grad)"
                strokeWidth="8"
                strokeLinecap="round"
              />

              {/* Road Line */}
              <path
                d="M 180,480 Q 320,380 470,270 L 580,160 L 620,60"
                fill="none"
                stroke="#d4af37"
                strokeWidth="3"
                strokeDasharray="8 6"
              />

              {/* Sumur Location Pin Vector */}
              <circle cx="580" cy="160" r="16" fill="#d4af37" fillOpacity="0.25" className="animate-pulse" />
              <circle cx="580" cy="160" r="8" fill="#d4af37" />
              <text x="605" y="165" fill="#f8fafc" fontSize="18" fontWeight="bold" fontFamily="serif">
                SUMUR VILLAGE
              </text>
              <text x="605" y="185" fill="#d4af37" fontSize="12" fontFamily="sans-serif">
                34.63° N, 77.63° E · 3,100m
              </text>

              {/* Other Waypoint Markers */}
              <circle cx="180" cy="480" r="5" fill="#94a3b8" />
              <text x="120" y="495" fill="#94a3b8" fontSize="12">
                Leh
              </text>

              <circle cx="320" cy="380" r="5" fill="#94a3b8" />
              <text x="240" y="375" fill="#94a3b8" fontSize="12">
                Khardung La Pass
              </text>

              <circle cx="470" cy="270" r="6" fill="#fbbf24" />
              <text x="485" y="275" fill="#fbbf24" fontSize="12">
                Khalsar Fork
              </text>

              <circle cx="260" cy="170" r="5" fill="#cbd5e1" />
              <text x="210" y="195" fill="#cbd5e1" fontSize="12">
                Diskit / Hunder
              </text>

              <circle cx="620" cy="60" r="5" fill="#cbd5e1" />
              <text x="635" y="65" fill="#cbd5e1" fontSize="12">
                Panamik
              </text>
            </svg>

            {/* Floating Info Pill on Map */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md bg-black/85 backdrop-blur-md p-4 rounded-xl border border-white/10 text-xs space-y-1 z-10">
              <div className="font-semibold text-white flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Sumur Village, Nubra Sub-Division</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Situated on the Siachen / Panamik road along the eastern bank of the Nubra River.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WAYPOINT EXPLORER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
            Milestones Along The Route
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Key Waypoints from Leh to Sumur
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Select a milestone to inspect elevation and traveler guidance.
          </p>
        </div>

        {/* Milestone Buttons */}
        <div className="flex flex-wrap gap-2">
          {waypoints.map((wp) => {
            const isSelected = selectedWaypoint.id === wp.id;
            return (
              <button
                key={wp.id}
                onClick={() => setSelectedWaypoint(wp)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-[#d4af37] text-black font-semibold shadow-md'
                    : 'bg-[#12181f] text-slate-300 hover:bg-[#1a232b] hover:text-white border border-white/5'
                }`}
              >
                {wp.name}
              </button>
            );
          })}
        </div>

        {/* Active Waypoint Card */}
        <div className="p-6 rounded-2xl bg-[#0e1418] border border-white/10 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-amber-300/80 font-semibold">
                Waypoint Elevation
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                {selectedWaypoint.name}
              </h3>
            </div>
            <span className="font-mono text-sm px-3 py-1 rounded bg-[#172129] border border-white/10 text-white font-semibold w-fit">
              {selectedWaypoint.elevation}
            </span>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            {selectedWaypoint.description}
          </p>

          <div className="p-3.5 rounded-xl bg-[#141b21] border border-white/5 flex items-center gap-2 text-xs text-amber-200">
            <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
            <span>{selectedWaypoint.highlight}</span>
          </div>
        </div>
      </section>
    </div>
  );
};
