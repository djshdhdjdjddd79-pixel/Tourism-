import React, { useState } from 'react';
import {
  ArrowRight,
  Compass,
  MapPin,
  Sparkles,
  Mountain,
  Landmark,
  HeartHandshake,
  Home,
  CheckCircle2,
  AlertCircle,
  Footprints,
  Clock,
  Sun,
  Leaf,
  Coffee,
  Droplets,
  ShieldCheck,
  Check,
  Info,
  ExternalLink,
  ChevronRight,
  Eye,
  Camera,
  Heart,
  Users,
  ShieldAlert,
  CloudSun,
  AlertTriangle,
  Trash2,
  Mail,
  Phone,
  Send,
  Shield
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { siteImages, galleryImages } from '../config/images';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { PageId } from '../components/Navbar';
import { attractionsData, AttractionData, culturePillars, responsibleTourismGuidelines } from '../data/sumurData';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenLightbox: (imageKey: string) => void;
  onOpenLightboxWithGalleryIndex: (index: number) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenLightbox,
  onOpenLightboxWithGalleryIndex,
}) => {
  const [selectedAttraction, setSelectedAttraction] = useState<AttractionData | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-28 sm:space-y-36">
      {/* 1. HERO SECTION WITH BACKGROUND IMAGE & OVERLAID CONTENT */}
      <section
        id="hero"
        className="relative min-h-[85vh] sm:min-h-[88vh] lg:min-h-[92vh] flex items-center justify-start overflow-hidden bg-[#090c0e]"
        style={{
          backgroundImage: `url('/images/sumoor_hero_front.jpg'), url('https://discoverlehladakh.in/wp-content/uploads/2025/08/Sumur-village-in-Nubra-valley-of-Ladakh.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Soft, minimal gradient overlay so the real photograph of Sumoor is bright and clearly visible while ensuring text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090c0e]/80 via-transparent to-black/15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28 relative z-10 w-full flex flex-col justify-between min-h-[85vh] sm:min-h-[88vh] lg:min-h-[92vh]">
          {/* Main Hero Text (Positioned Towards the Left on Desktop) */}
          <div className="max-w-3xl space-y-6 pt-10 sm:pt-14 text-left">
            {/* Small Kicker Heading */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-[#d4af37]/70 backdrop-blur-md text-[#e5c158] text-xs font-bold tracking-widest uppercase shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>EXPLORE NUBRA VALLEY, LADAKH</span>
            </div>

            {/* Main Heading with crisp drop-shadow for bright background */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.08] drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
              Discover the Hidden Beauty of Sumoor
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-white font-medium leading-relaxed max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Explore the peaceful landscapes, Buddhist heritage, local culture, and natural beauty of Sumoor, Nubra Valley, Ladakh.
            </p>

            {/* Two Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection('explore')}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#d4af37] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#e5c158] hover:shadow-lg hover:shadow-[#d4af37]/25 transition-all duration-200 cursor-pointer shadow-md"
              >
                <span>Explore Sumoor</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('guide')}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-black/60 hover:bg-black/80 text-white border border-white/30 hover:border-[#d4af37]/60 backdrop-blur-md font-bold text-xs uppercase tracking-widest transition-all duration-200 cursor-pointer shadow-md"
              >
                <span>Plan Your Visit</span>
                <Compass className="w-4 h-4 text-[#d4af37]" />
              </button>
            </div>
          </div>

          {/* Quick Metrics & Location Strip Docked on Hero Bottom */}
          <div className="mt-12 pt-6 border-t border-white/10 w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-black/50 border border-white/15 backdrop-blur-md text-left">
            <div className="p-2">
              <div className="text-[11px] uppercase tracking-wider text-amber-200/80 font-medium">Altitude</div>
              <div className="text-lg font-serif font-bold text-white mt-0.5">3,100 m / 10,170 ft</div>
              <div className="text-[11px] text-slate-400">Nubra Valley, Ladakh</div>
            </div>
            <div className="p-2 border-l border-white/10">
              <div className="text-[11px] uppercase tracking-wider text-amber-200/80 font-medium">Location</div>
              <div className="text-lg font-serif font-bold text-white mt-0.5">Sumoor Village</div>
              <div className="text-[11px] text-slate-400">Eastern River Bank</div>
            </div>
            <div className="p-2 border-l border-white/10">
              <div className="text-[11px] uppercase tracking-wider text-amber-200/80 font-medium">Monastery</div>
              <div className="text-lg font-serif font-bold text-white mt-0.5">Samstanling Gompa</div>
              <div className="text-[11px] text-slate-400">19th-Century Sanctuary</div>
            </div>
            <div className="p-2 border-l border-white/10">
              <div className="text-[11px] uppercase tracking-wider text-amber-200/80 font-medium">Sacred Monument</div>
              <div className="text-lg font-serif font-bold text-white mt-0.5">Buddha Stupa</div>
              <div className="text-[11px] text-slate-400">Eco Buddha Park</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WELCOME TO SUMUR: Where Nature Meets Tradition */}
      <section id="welcome" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold tracking-widest text-[#d4af37] uppercase">
            Village Overview
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Where Nature Meets Tradition
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Nestled along the eastern bank of the Nubra River beneath towering Karakoram peaks, Sumur is celebrated for peaceful orchards, Buddhist monuments, and traditional Ladakhi life.
          </p>
        </div>

        {/* IMAGES PLACED ABOVE: 1 Large + 2 Supporting */}
        <div className="space-y-4">
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0d1216] p-1.5 shadow-xl">
            <ImagePlaceholder
              src={siteImages.welcomeVillageMain.url}
              alt={siteImages.welcomeVillageMain.alt}
              caption={siteImages.welcomeVillageMain.caption}
              credit={siteImages.welcomeVillageMain.credit}
              aspectRatio="21/9"
              placeholderTitle="The Serene Heart of Sumur Village"
              category="Village Landscape"
              onClick={() => onOpenLightbox('welcomeVillageMain')}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0d1216] p-1.5 shadow-md">
              <ImagePlaceholder
                src={siteImages.welcomeVillageSupporting1.url}
                alt={siteImages.welcomeVillageSupporting1.alt}
                caption={siteImages.welcomeVillageSupporting1.caption}
                credit={siteImages.welcomeVillageSupporting1.credit}
                aspectRatio="16/9"
                placeholderTitle="Traditional Earthen Architecture & Woodwork in Sumur"
                category="Architecture"
                onClick={() => onOpenLightbox('welcomeVillageSupporting1')}
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0d1216] p-1.5 shadow-md">
              <ImagePlaceholder
                src={siteImages.welcomeVillageSupporting2.url}
                alt={siteImages.welcomeVillageSupporting2.alt}
                caption={siteImages.welcomeVillageSupporting2.caption}
                credit={siteImages.welcomeVillageSupporting2.credit}
                aspectRatio="16/9"
                placeholderTitle="Sacred Chortens and Mountain Path to Upper Ridge"
                category="Sacred Monuments"
                onClick={() => onOpenLightbox('welcomeVillageSupporting2')}
              />
            </div>
          </div>
        </div>

        {/* WRITE-UP PLACED DIRECTLY BELOW IMAGES */}
        <div className="p-8 rounded-2xl bg-[#0e1418] border border-white/10 space-y-4">
          <h3 className="font-serif text-2xl font-bold text-white">
            Discovering Sumur: A Gateway of Calm in Nubra
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300 leading-relaxed">
            <p>
              Unlike more bustling transit hubs, Sumur retains its authentic pastoral rhythm. Traditional whitewashed farmsteads sit amidst terraced barley and wheat fields, bordered by tall poplars, willow groves, and golden sea buckthorn bushes fed by ancient glacial meltwater channels (*yura*).
            </p>
            <p>
              Beyond its own cultural treasures—including Samstanling Gompa and serene village stupas—Sumur serves as an ideal and peaceful starting point for exploring the wider wonders of Nubra Valley, from the hot springs of Panamik to the sand dunes of Hunder.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SAMSTANLING MONASTERY (IMAGES PLACED ABOVE, WRITE-UP RIGHT BELOW) */}
      <section id="monastery" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 scroll-mt-24">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141b21] border border-[#d4af37]/40 text-amber-200 text-xs font-semibold tracking-widest uppercase">
            <Landmark className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Monastic Heritage</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Samstanling Monastery (Gompa)
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Perched on the mountain slopes behind Sumur village, Samstanling Gompa is the foremost spiritual sanctuary of northern Nubra Valley.
          </p>
        </div>

        {/* IMAGES PLACED DIRECTLY ABOVE: Dual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#d4af37]/40 bg-[#0d1216] p-2 shadow-2xl">
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

          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-white/10 bg-[#0d1216] p-2 shadow-2xl">
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

        {/* WRITE-UP PLACED DIRECTLY BELOW IMAGES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed p-6 sm:p-8 rounded-2xl bg-[#0e1418] border border-white/10">
            <h3 className="font-serif text-2xl font-bold text-white">
              History & Spiritual Significance of Samstanling
            </h3>
            <p>
              Founded in the mid-19th century (circa 1841) by <strong>Lama Tsultim Nima</strong>, Samstanling Gompa belongs to the <strong>Gelugpa (Yellow Hat)</strong> order of Tibetan Buddhism. The complex stands proudly against the stark mountain face with its distinctive red, ochre, and whitewashed walls crowned by golden finials.
            </p>
            <p>
              Inside the sacred assembly halls (*Dukhang*), visitors can admire revered thangkas, intricate wall frescoes depicting Buddhist cosmology, the Wheel of Life, and statues of Shakyamuni Buddha and Avalokiteshvara. The aroma of burning juniper incense and the soft resonance of monastic chants fill the sacred spaces.
            </p>
            <div className="pt-3 border-t border-white/10">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-300 mb-2">
                Key Features
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>Historic 19th-century Gelugpa monastery</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>Dukhang with ancient frescoes & thangkas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>Commanding views across the Nubra basin</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>Active monastic community and studies</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4 p-6 sm:p-8 rounded-2xl bg-[#0e1418] border border-amber-500/30">
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Monastery Visiting Decorum</span>
              </span>
              <h4 className="font-serif text-xl font-bold text-white">
                Respectful Guidelines
              </h4>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                <strong className="text-white block">Remove Footwear:</strong>
                Always take off shoes and hats before entering the shrine rooms.
              </li>
              <li className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                <strong className="text-white block">Clockwise Circumambulation:</strong>
                Walk clockwise around the monastery, prayer wheels, and stupas.
              </li>
              <li className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                <strong className="text-white block">Quiet Demeanor:</strong>
                Keep voices low and avoid flash photography inside prayer halls.
              </li>
            </ul>
            <button
              onClick={() => onNavigate('monastery')}
              className="w-full mt-2 py-2.5 px-4 rounded-xl bg-[#d4af37] text-black text-xs font-semibold uppercase tracking-wider hover:bg-[#e5c158] transition-colors text-center"
            >
              Open Dedicated Monastery Page →
            </button>
          </div>
        </div>
      </section>

      {/* 4. BUDDHA STUPA & ECO BUDDHA PARK (IMAGES PLACED ABOVE, WRITE-UP RIGHT BELOW) */}
      <section id="stupa" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 scroll-mt-24">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141b21] border border-[#d4af37]/40 text-amber-200 text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Sacred Himalayan Monument</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Buddha Stupa & Eco Buddha Park
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            A sanctuary of peace in Sumur featuring the Golden Buddha statue, sacred Chortens, and panoramic mountain contemplation.
          </p>
        </div>

        {/* IMAGES PLACED DIRECTLY ABOVE WRITE-UP: 3-Image Sacred Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
          {/* 1. Golden Buddha Statue of Sumur Village */}
          <div className="md:col-span-4 rounded-2xl overflow-hidden border border-[#d4af37]/50 bg-[#0d1216] p-2 shadow-2xl flex flex-col justify-between">
            <ImagePlaceholder
              src={siteImages.goldenBuddha.url}
              alt={siteImages.goldenBuddha.alt}
              caption={siteImages.goldenBuddha.caption}
              credit={siteImages.goldenBuddha.credit}
              aspectRatio="1/1"
              placeholderTitle="The Golden Buddha Statue of Sumur Village"
              category="Golden Buddha Guardian"
              onClick={() => onOpenLightbox('goldenBuddha')}
            />
            <div className="p-3 text-center border-t border-white/5 mt-2">
              <span className="text-[11px] font-semibold text-[#d4af37] uppercase tracking-wider block">
                The Golden Buddha of Sumur
              </span>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Tranquil Guardian of Nubra Valley
              </p>
            </div>
          </div>

          {/* 2. Buddha Statue & Sacred Stupa at Eco Buddha Park */}
          <div className="md:col-span-5 rounded-2xl overflow-hidden border border-[#d4af37]/40 bg-[#0d1216] p-2 shadow-2xl flex flex-col justify-between">
            <ImagePlaceholder
              src={siteImages.buddhaStupa.url}
              alt={siteImages.buddhaStupa.alt}
              caption={siteImages.buddhaStupa.caption}
              credit={siteImages.buddhaStupa.credit}
              aspectRatio="16/9"
              placeholderTitle="Buddha Statue & Sacred Stupa in Sumur against Mountains"
              category="Buddha Stupa & Park"
              onClick={() => onOpenLightbox('buddhaStupa')}
            />
            <div className="p-3 text-center border-t border-white/5 mt-2">
              <span className="text-[11px] font-semibold text-white uppercase tracking-wider block">
                Eco Buddha Park & Stupa
              </span>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Sacred Stupa framed against high Karakoram peaks
              </p>
            </div>
          </div>

          {/* 3. Sacred White Chortens */}
          <div className="md:col-span-3 rounded-2xl overflow-hidden border border-white/10 bg-[#0d1216] p-2 shadow-2xl flex flex-col justify-between">
            <ImagePlaceholder
              src={siteImages.welcomeVillageSupporting2.url}
              alt={siteImages.welcomeVillageSupporting2.alt}
              caption={siteImages.welcomeVillageSupporting2.caption}
              credit={siteImages.welcomeVillageSupporting2.credit}
              aspectRatio="4/3"
              placeholderTitle="Sacred White Chortens in Sumur"
              category="Valley Chortens"
              onClick={() => onOpenLightbox('welcomeVillageSupporting2')}
            />
            <div className="p-3 text-center border-t border-white/5 mt-2">
              <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">
                Valley White Chortens
              </span>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Prayer path overlooking the Nubra River basin
              </p>
            </div>
          </div>
        </div>

        {/* WRITE-UP PLACED DIRECTLY BELOW IMAGES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed p-6 sm:p-8 rounded-2xl bg-[#0e1418] border border-white/10">
            <h3 className="font-serif text-2xl font-bold text-white">
              The Architecture & Spiritual Meaning of the Stupa
            </h3>
            <p>
              In Tibetan Buddhist philosophy, a <strong>Stupa (known locally as a Chorten)</strong> harmonizes the surrounding terrain, protects the valley from natural disharmony, and dispels negative energies. Erected at sacred junctures in Sumur, every tier of the Chorten represents one of the <strong>Five Cosmic Elements</strong>:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-1 text-center">
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                <div className="text-[11px] font-bold text-amber-300">1. Earth</div>
                <div className="text-[10px] text-slate-400">Square Base</div>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                <div className="text-[11px] font-bold text-cyan-300">2. Water</div>
                <div className="text-[10px] text-slate-400">Dome (Bumpa)</div>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                <div className="text-[11px] font-bold text-rose-300">3. Fire</div>
                <div className="text-[10px] text-slate-400">Spire (Steps)</div>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                <div className="text-[11px] font-bold text-emerald-300">4. Air</div>
                <div className="text-[10px] text-slate-400">Crescent</div>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 col-span-2 sm:col-span-1">
                <div className="text-[11px] font-bold text-[#d4af37]">5. Space</div>
                <div className="text-[10px] text-slate-400">Sun Pinnacle</div>
              </div>
            </div>
            <p className="pt-2">
              The revered <strong>Golden Buddha of Sumur Village</strong> gazes tranquilly across the valley, welcoming travelers with gestures of fearlessness (*Abhaya Mudra*) and spiritual compassion.
            </p>
            <p>
              Visitors are warmly encouraged to practice <em>Kora</em> (walking mindfully in a clockwise direction around the stupa) while observing peace and absorbing the pristine mountain stillness.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-4 p-6 sm:p-8 rounded-2xl bg-[#0e1418] border border-[#d4af37]/40 shadow-xl">
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] flex items-center gap-1.5">
                <Info className="w-4 h-4" />
                <span>Verified Documentation Fields</span>
              </span>
              <h4 className="font-serif text-xl font-bold text-white">
                Monument Record
              </h4>
            </div>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                <span className="text-slate-400 block font-medium">Verified Name:</span>
                <span className="text-white font-bold">Buddha Stupa & Eco Buddha Park (Sumur)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                <span className="text-slate-400 block font-medium">Location:</span>
                <span className="text-slate-200">Sumur Village, Nubra Valley, Ladakh (34.63° N, 77.63° E)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                <span className="text-slate-400 block font-medium">Key Highlights:</span>
                <span className="text-amber-200 font-medium">Golden Buddha Statue, Sacred Chortens, Mountain Meditation Precinct</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                <span className="text-slate-400 block font-medium">Visitor Guidance:</span>
                <span className="text-emerald-300 font-medium">Always walk clockwise; keep grounds immaculate; maintain quiet meditation.</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => onOpenLightbox('goldenBuddha')}
                className="flex-1 py-2.5 px-3 rounded-xl bg-[#d4af37] text-black text-xs font-semibold uppercase tracking-wider hover:bg-[#e5c158] transition-colors text-center"
              >
                View Golden Buddha Photo
              </button>
              <button
                onClick={() => onOpenLightbox('buddhaStupa')}
                className="flex-1 py-2.5 px-3 rounded-xl bg-[#141b21] hover:bg-[#1a232b] text-white border border-white/10 text-xs font-semibold uppercase tracking-wider transition-colors text-center"
              >
                View Stupa Panorama
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SUMUR VILLAGE HOMESTAYS (IMAGES PLACED ABOVE, WRITE-UP RIGHT BELOW) */}
      <section id="homestays" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 scroll-mt-24">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141b21] border border-[#d4af37]/40 text-amber-200 text-xs font-semibold tracking-widest uppercase">
            <Home className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Community Hospitality</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Stay Local: Sumur Village Homestays
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Experience genuine Ladakhi life with welcoming local families—enjoy home-cooked meals by the hearth and tranquil orchard gardens.
          </p>
        </div>

        {/* IMAGES PLACED DIRECTLY ABOVE: 4 Verified Stays Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Stay 1 */}
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
            <div className="p-4 space-y-2">
              <span className="text-[10px] font-semibold uppercase text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20 w-fit block">
                Traditional Farmstead
              </span>
              <h4 className="font-serif text-base font-bold text-white">
                Sumur Traditional Homestay
              </h4>
              <p className="text-xs text-slate-400">
                Mud-brick architecture, wooden balconies, home hearth cooking.
              </p>
            </div>
          </div>

          {/* Stay 2 */}
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
            <div className="p-4 space-y-2">
              <span className="text-[10px] font-semibold uppercase text-amber-300 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-500/20 w-fit block">
                Orchard Stay
              </span>
              <h4 className="font-serif text-base font-bold text-white">
                Green Valley Homestay
              </h4>
              <p className="text-xs text-slate-400">
                Surrounded by apricot orchards with peaceful mountain views.
              </p>
            </div>
          </div>

          {/* Stay 3 */}
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
            <div className="p-4 space-y-2">
              <span className="text-[10px] font-semibold uppercase text-cyan-300 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/20 w-fit block">
                Ridge Panorama
              </span>
              <h4 className="font-serif text-base font-bold text-white">
                Mountain Retreat Lodge
              </h4>
              <p className="text-xs text-slate-400">
                Views across the valley and close walking access to Samstanling.
              </p>
            </div>
          </div>

          {/* Stay 4 */}
          <div className="rounded-2xl bg-[#0e1418] border border-white/10 hover:border-[#d4af37]/40 overflow-hidden flex flex-col justify-between group shadow-xl transition-all">
            <div className="p-2 pb-0">
              <ImagePlaceholder
                src={siteImages.homestay4.url}
                alt={siteImages.homestay4.alt}
                caption={siteImages.homestay4.caption}
                aspectRatio="16/9"
                placeholderTitle="Sumur Village Boutique Lodge"
                category="Boutique Stay"
                onClick={() => onOpenLightbox('homestay4')}
                showCaptionBelow={false}
              />
            </div>
            <div className="p-4 space-y-2">
              <span className="text-[10px] font-semibold uppercase text-amber-200 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-500/20 w-fit block">
                Boutique Lodge
              </span>
              <h4 className="font-serif text-base font-bold text-white">
                Sumur Boutique Lodge
              </h4>
              <p className="text-xs text-slate-400">
                Comfortable guest lodging with viewing terrace and garden grounds.
              </p>
            </div>
          </div>
        </div>

        {/* WRITE-UP PLACED DIRECTLY BELOW IMAGES */}
        <div className="p-8 rounded-2xl bg-[#0e1418] border border-white/10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300 leading-relaxed">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#172027] border border-white/10 flex items-center justify-center">
                <Coffee className="w-5 h-5 text-[#d4af37]" />
              </div>
              <h4 className="font-serif text-base font-bold text-white">
                The Hearth & Dining (*Chansa*)
              </h4>
              <p>
                Guests are invited into the traditional kitchen hearth to enjoy freshly baked bread (*Khambir*), organic vegetable stews (*Skyu* & *Thukpa*), and warm butter tea (*Gur-gur chai*).
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#172027] border border-white/10 flex items-center justify-center">
                <Droplets className="w-5 h-5 text-emerald-400" />
              </div>
              <h4 className="font-serif text-base font-bold text-white">
                Eco-Conscious Living
              </h4>
              <p>
                Water is precious in the cold desert. Homestays use solar heating and traditional dry-composting Ladakhi toilets (*Chagtsa*), preserving mountain ecology and enriching soil without wasting water.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#172027] border border-white/10 flex items-center justify-center">
                <HeartHandshake className="w-5 h-5 text-amber-300" />
              </div>
              <h4 className="font-serif text-base font-bold text-white">
                Direct Family Support
              </h4>
              <p>
                100% of your stay fee goes directly to local families, sustaining centuries-old homesteads, education, and organic agricultural heritage in Sumur.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 italic">
              "Local accommodation contact information will be updated soon with verified phone numbers."
            </div>
            <button
              onClick={() => onNavigate('homestays')}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#d4af37] text-black text-xs font-semibold uppercase tracking-wider hover:bg-[#e5c158] transition-colors"
            >
              <span>Explore Dedicated Homestays Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. SUMUR VILLAGE & HERITAGE TRAILS (IMAGES PLACED ABOVE, WRITE-UP RIGHT BELOW) */}
      <section id="village" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 scroll-mt-24">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141b21] border border-[#d4af37]/40 text-amber-200 text-xs font-semibold tracking-widest uppercase">
            <Footprints className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Walking & Nature Trails</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Sumur Village & Heritage Trails
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Follow ancient stone water canals (*yura*), stroll past mud-brick farmsteads, and relax in willow-fringed riverside groves.
          </p>
        </div>

        {/* IMAGES PLACED DIRECTLY ABOVE: 3 Curated Village Scenes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden border border-[#d4af37]/40 bg-[#0d1216] p-1.5 shadow-xl flex flex-col justify-between">
            <ImagePlaceholder
              src={siteImages.sumoorScenes.url}
              alt={siteImages.sumoorScenes.alt}
              caption={siteImages.sumoorScenes.caption}
              credit={siteImages.sumoorScenes.credit}
              aspectRatio="16/9"
              placeholderTitle="Sumoor Village Pathways & Mountain Walking Trails"
              category="Village Scenes"
              onClick={() => onOpenLightbox('sumoorScenes')}
            />
            <div className="p-3 text-center border-t border-white/5 mt-1">
              <span className="text-[11px] font-semibold text-[#d4af37] uppercase tracking-wider block">
                Sumoor Village Trails
              </span>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Pathways through orchards, poplar groves & stone canals
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0d1216] p-1.5 shadow-xl flex flex-col justify-between">
            <ImagePlaceholder
              src={siteImages.sumurVillageLandscape.url}
              alt={siteImages.sumurVillageLandscape.alt}
              caption={siteImages.sumurVillageLandscape.caption}
              credit={siteImages.sumurVillageLandscape.credit}
              aspectRatio="16/9"
              placeholderTitle="Sumoor Village Mountain Backdrop"
              category="Village Panorama"
              onClick={() => onOpenLightbox('sumurVillageLandscape')}
            />
            <div className="p-3 text-center border-t border-white/5 mt-1">
              <span className="text-[11px] font-semibold text-white uppercase tracking-wider block">
                Mountain Backdrop
              </span>
              <p className="text-[11px] text-slate-400 mt-0.5">
                High Karakoram peaks rising above Sumur valley
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0d1216] p-1.5 shadow-xl flex flex-col justify-between">
            <ImagePlaceholder
              src={siteImages.welcomeVillageSupporting1.url}
              alt={siteImages.welcomeVillageSupporting1.alt}
              caption={siteImages.welcomeVillageSupporting1.caption}
              credit={siteImages.welcomeVillageSupporting1.credit}
              aspectRatio="16/9"
              placeholderTitle="Traditional Earthen Architecture & Carved Woodwork"
              category="Vernacular Craft"
              onClick={() => onOpenLightbox('welcomeVillageSupporting1')}
            />
            <div className="p-3 text-center border-t border-white/5 mt-1">
              <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">
                Heritage Craft
              </span>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Centuries-old sun-dried earthen architecture
              </p>
            </div>
          </div>
        </div>

        {/* WRITE-UP PLACED DIRECTLY BELOW IMAGES */}
        <div className="p-8 rounded-2xl bg-[#0e1418] border border-white/10 space-y-6">
          <h3 className="font-serif text-2xl font-bold text-white">
            Curated Walking Routes Through Sumur
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-slate-300">
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1.5">
              <span className="text-amber-300 font-bold block">1. Glacial Canal Trail (2.5 km)</span>
              <p className="text-slate-400">
                Follow stone canals (*yura*) delivering glacial meltwater through fragrant apricot and sea buckthorn groves.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1.5">
              <span className="text-amber-300 font-bold block">2. Old Village Lane (1.8 km)</span>
              <p className="text-slate-400">
                Stroll past sun-dried mud-brick houses, carved window lintels, prayer flag poles, and mani stones.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1.5">
              <span className="text-amber-300 font-bold block">3. Riverside Willow Grove (3.2 km)</span>
              <p className="text-slate-400">
                A peaceful walk along shaded freshwater streams and willow trees near the Nubra River confluence.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1.5">
              <span className="text-amber-300 font-bold block">4. Monastic Ascent (2.0 km)</span>
              <p className="text-slate-400">
                A scenic uphill trail ascending to the ridge of Samstanling Gompa with panoramic valley overlooks.
              </p>
            </div>
          </div>
          <div className="text-center pt-2">
            <button
              onClick={() => onNavigate('village')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#d4af37] hover:underline"
            >
              <span>View Full Walking Itineraries & Agricultural Calendar →</span>
            </button>
          </div>
        </div>
      </section>

      {/* 7. ALL ATTRACTIONS & SIGHTS GRID (`id="explore"`) */}
      <section id="explore" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold tracking-widest text-[#d4af37] uppercase">
            Complete Sights
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Places Worth Discovering
          </h2>
          <p className="text-slate-400 text-sm">
            From monastic sanctuaries and chortens to mountain landscapes and nearby regional destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractionsData.map((attraction) => {
            const imageConfig = siteImages[attraction.imageKey];
            return (
              <div
                key={attraction.id}
                className="rounded-2xl bg-[#0e1418] border border-white/10 hover:border-[#d4af37]/50 transition-all flex flex-col justify-between overflow-hidden group shadow-xl"
              >
                <div className="p-2 pb-0">
                  <ImagePlaceholder
                    src={imageConfig?.url || ''}
                    alt={imageConfig?.alt || attraction.name}
                    caption={imageConfig?.caption || attraction.name}
                    aspectRatio="16/9"
                    placeholderTitle={attraction.name}
                    category={attraction.isRegionalNearby ? 'Regional Excursion' : 'In Sumur'}
                    onClick={() => onOpenLightbox(attraction.imageKey)}
                    showCaptionBelow={false}
                  />
                  <div className="mt-2.5 px-2 flex items-center justify-between text-xs">
                    <span className="text-[#d4af37] flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{attraction.location}</span>
                    </span>
                    {attraction.isRegionalNearby ? (
                      <span className="text-[10px] text-amber-300 uppercase font-semibold bg-amber-950/40 px-2 py-0.5 rounded border border-amber-500/20">
                        Nearby Nubra
                      </span>
                    ) : (
                      <span className="text-[10px] text-emerald-400 uppercase font-semibold bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                        In Sumur
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-amber-200 transition-colors">
                      {attraction.name}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed mt-1">
                      {attraction.shortDescription}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedAttraction(attraction)}
                      className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#d4af37] hover:text-amber-200"
                    >
                      <span>Explore More</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onOpenLightbox(attraction.imageKey)}
                      className="text-xs text-slate-400 hover:text-white"
                    >
                      View Photo
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CULTURE & HERITAGE SECTION (`id="culture"`) */}
      <section id="culture" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141b21] border border-[#d4af37]/30 text-amber-200 text-xs font-semibold tracking-widest uppercase">
            <Heart className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Living Himalayan Heritage</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Culture & Traditions of Sumur
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Ancient Buddhist faith, earthen architectural heritage, welcoming family hearths, and seasonal high-altitude farming rhythms.
          </p>
        </div>

        {/* 4 Cultural Cards Grid with real photos placed ABOVE each write-up */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {culturePillars.map((item) => {
            const imageConfig = siteImages[item.imageKey];
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-[#0e1418] border border-white/10 hover:border-[#d4af37]/40 transition-all overflow-hidden flex flex-col justify-between group shadow-xl"
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
                      <h3 className="font-serif text-2xl font-bold text-white group-hover:text-amber-200 transition-colors">
                        {item.title}
                      </h3>
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
      </section>

      {/* TRAVEL GUIDE & PASSES SECTION (`id="guide"`) */}
      <section id="guide" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141b21] border border-[#d4af37]/30 text-amber-200 text-xs font-semibold tracking-widest uppercase">
            <Compass className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Practical Travel Information</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Plan Your Journey to Sumur
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Essential route information, high-altitude passes, acclimatization principles, and seasonal advice for Nubra Valley.
          </p>
        </div>

        {/* How to Reach & Route Overview */}
        <div className="rounded-2xl bg-[#0e1418] border border-white/10 p-6 sm:p-10 shadow-xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
                Route & Road Overview
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                How to Reach Sumur from Leh
              </h3>
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
                Visitors travel to Sumur from Leh, the capital of Ladakh, traveling by road across the Ladakh Range via the famous Khardung La pass (~17,982 ft / 5,359 m).
              </p>
              <p>
                The journey descends into the dramatic river valleys of the Shyok and Nubra. At Khalsar junction, the road forks: the western branch leads across the river towards Diskit and Hunder, while the northern branch continues along the eastern bank of the Nubra River directly to Sumur and onwards to Panamik.
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
                    <span className="font-semibold text-white">Khalsar Junction</span>
                    <p className="text-slate-400">Take northern branch towards Sumur & Panamik.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#1a232b] text-[#d4af37] border border-white/10 flex items-center justify-center font-bold shrink-0">
                    4
                  </span>
                  <div>
                    <span className="font-semibold text-white">Sumur Village</span>
                    <p className="text-slate-400">Arrive at peaceful village homestays and monasteries.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Acclimatization & Seasonality Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
            <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                <span>Acclimatization</span>
              </div>
              <h4 className="font-serif text-base font-bold text-white">Altitude Safety</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Sumur sits at ~3,100 meters (~10,200 ft). Spend at least 2 full days resting in Leh before crossing Khardung La. Stay well hydrated and avoid overexertion on arrival.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Sun className="w-4 h-4" />
                <span>Best Season</span>
              </div>
              <h4 className="font-serif text-base font-bold text-white">May to September</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Pleasant daytime temperatures (15°C–25°C), blooming apricot orchards, green barley fields, and reliable pass conditions. September brings magnificent golden poplar foliage.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Permits</span>
              </div>
              <h4 className="font-serif text-base font-bold text-white">Protected Area Permit</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                All domestic and international tourists require a valid Inner Line Permit (ILP) or Protected Area Permit (PAP) to visit Nubra Valley, easily obtained online or via registered agencies in Leh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. MOMENTS PHOTO GALLERY (`id="gallery"`) */}
      <section id="gallery" className="bg-[#0b0e12] border-y border-white/10 py-16 sm:py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141b21] border border-[#d4af37]/30 text-amber-200 text-xs font-semibold tracking-widest uppercase">
              <Camera className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Visual Showcase</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Moments from Sumur
            </h2>
            <p className="text-sm text-slate-400">
              Photographs honoring the monasteries, stupas, earthen homesteads, and mountain valleys of Sumur. Click any image to view in full resolution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {galleryImages.slice(0, 12).map((img, idx) => (
              <div
                key={img.id}
                onClick={() => onOpenLightboxWithGalleryIndex(idx)}
                className="rounded-xl overflow-hidden bg-[#0d1216] border border-white/10 hover:border-[#d4af37]/60 transition-all cursor-pointer group shadow-lg flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={img.url}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 p-1.5 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-3.5 h-3.5 text-[#d4af37]" />
                  </div>
                </div>
                <div className="p-3 text-xs">
                  <h4 className="font-medium text-white line-clamp-1 group-hover:text-amber-200 transition-colors">
                    {img.caption}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {img.category?.toUpperCase() || 'SUMUR'}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => onNavigate('gallery')}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#141b21] hover:bg-[#1a232b] text-white border border-[#d4af37]/40 text-xs font-semibold uppercase tracking-wider transition-all"
            >
              <span>View Full Gallery Page with Category Filters</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#d4af37]" />
            </button>
          </div>
        </div>
      </section>

      {/* 9. WAYFINDING & MAP QUICK JUMP (`id="map"`) */}
      <section id="map" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#12181f] via-[#0e1418] to-[#090c0e] border border-[#d4af37]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
              Geographic Coordinates
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Sumur, Nubra Valley (34.63° N, 77.63° E)
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              Situated along the Siachen / Panamik route on the eastern bank of the Nubra River. Accessible from Leh via the Khardung La pass.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={siteConfig.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#d4af37] text-black text-xs font-semibold uppercase tracking-wider hover:bg-[#e5c158] transition-colors shadow-md"
            >
              <span>Open Location Map</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => onNavigate('map')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#141b21] hover:bg-[#1a232b] text-white border border-white/15 text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <span>Route Milestones</span>
              <Compass className="w-3.5 h-3.5 text-[#d4af37]" />
            </button>
          </div>
        </div>
      </section>

      {/* 10. RESPONSIBLE TOURISM & CONTACT (`id="contact"`) */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141b21] border border-[#d4af37]/30 text-amber-200 text-xs font-semibold tracking-widest uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Ethical Himalayan Travel & Local Enquiries</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Travel Respectfully, Leave No Trace
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            The fragile ecology and sacred heritage of Sumur thrive on gentle, conscious travel.
          </p>
        </div>

        {/* 6 Guidelines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {responsibleTourismGuidelines.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-[#0e1418] border border-white/10 hover:border-[#d4af37]/40 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#172129] border border-white/10 flex items-center justify-center group-hover:border-[#d4af37] transition-colors">
                  {item.icon === 'trash' ? (
                    <Trash2 className="w-5 h-5 text-emerald-400" />
                  ) : item.icon === 'temple' ? (
                    <Landmark className="w-5 h-5 text-[#d4af37]" />
                  ) : item.icon === 'camera' ? (
                    <Camera className="w-5 h-5 text-[#d4af37]" />
                  ) : item.icon === 'shield' ? (
                    <Shield className="w-5 h-5 text-amber-300" />
                  ) : (
                    <Sparkles className="w-5 h-5 text-emerald-400" />
                  )}
                </div>
                <h3 className="font-serif text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 space-y-1.5">
                {item.tips.map((tip, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-400">
                    <span className="text-[#d4af37] font-bold">✓</span>
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Local Enquiries & Village Information */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#12181f] via-[#0e1418] to-[#090c0e] border border-white/10 space-y-6 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs uppercase font-semibold text-[#d4af37] tracking-wider">
                Assistance & Community Office
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Contact & Local Information
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                For verified inquiries regarding homestay availability, local road conditions, cultural events, or eco-tourism initiatives in Sumur:
              </p>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/5">
                  <MapPin className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <div>
                    <span className="text-slate-400 block font-medium">Location:</span>
                    <span className="text-white font-medium">Sumur Village Panchayat & Information, Nubra Valley, Ladakh - 194401</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/5">
                  <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <div>
                    <span className="text-slate-400 block font-medium">Email:</span>
                    <span className="text-white font-medium">info@discoversumur.in</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/5">
                  <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <div>
                    <span className="text-slate-400 block font-medium">Tourist Assistance Nubra:</span>
                    <span className="text-white font-medium">+91 (01982) Tourist Helpdesk / Police Control Room</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-xl bg-[#090c0e] border border-white/10 space-y-4">
              <h4 className="font-serif text-lg font-bold text-white">
                Send a Message to Local Guides
              </h4>
              <p className="text-xs text-slate-400">
                Planning your trip to Sumur? Submit your inquiry below:
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you! Your inquiry has been noted. We will get back to you shortly.');
                }}
                className="space-y-3"
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                />
                <textarea
                  rows={3}
                  placeholder="How can we help plan your stay in Sumur?"
                  required
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37] resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-lg bg-[#d4af37] hover:bg-[#e5c158] text-black text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Attraction Details Modal */}
      {selectedAttraction && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto"
        >
          <div className="relative w-full max-w-2xl bg-[#0e1418] border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-5 my-8">
            <button
              onClick={() => setSelectedAttraction(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white"
            >
              ✕
            </button>

            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#d4af37] font-semibold">
                {selectedAttraction.location}
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1">
                {selectedAttraction.name}
              </h3>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4">
              {selectedAttraction.fullDescription.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="pt-2 flex items-center justify-end">
              <button
                onClick={() => setSelectedAttraction(null)}
                className="px-5 py-2 rounded-xl bg-[#d4af37] text-black text-xs font-semibold uppercase tracking-wider hover:bg-[#e5c158]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
