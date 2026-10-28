import React from 'react';
import { Compass, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { PageId } from './Navbar';

interface FooterProps {
  onPageChange: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (pageId: PageId) => {
    onPageChange(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#06080a] border-t border-white/10 text-slate-300 relative z-20">
      {/* Top Banner / Statement */}
      <div className="border-b border-white/5 py-8 bg-[#090c0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#141b21] border border-[#d4af37]/30 flex items-center justify-center shrink-0">
              <Compass className="w-5 h-5 text-[#d4af37]" />
            </div>
            <div>
              <p className="font-serif text-white font-semibold tracking-wider">
                {siteConfig.siteName}
              </p>
              <p className="text-xs text-[#d4af37]">
                Nubra Valley · Ladakh · 3,100m Altitude
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl text-center md:text-right">
            "Discover Sumur celebrates the natural beauty, culture, and heritage of Nubra Valley, Ladakh."
          </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif text-xl font-bold tracking-wide text-white">
              DISCOVER SUMUR
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              A serene village along the Nubra River, home to historic Samstanling Gompa, sacred chortens, traditional mud-brick farmsteads, and high-altitude orchards under the Karakoram sky.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span>Sumur, Nubra Valley, Ladakh 194401, India</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-amber-200/80 bg-[#12181f] px-3 py-1.5 rounded-lg border border-white/5 w-fit">
              <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Dedicated to respectful, leave-no-trace travel</span>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-widest text-[#d4af37] uppercase">
              Explore Pages
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick('home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('explore')}
                  className="hover:text-white transition-colors"
                >
                  Attractions Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('monastery')}
                  className="hover:text-white transition-colors text-amber-200/90 font-medium"
                >
                  Samstanling Monastery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('stupa')}
                  className="hover:text-white transition-colors text-amber-200/90 font-medium"
                >
                  Buddha Stupa & Park
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('culture')}
                  className="hover:text-white transition-colors"
                >
                  Culture & Heritage
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Village & Region */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-widest text-[#d4af37] uppercase">
              Village & Stays
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick('homestays')}
                  className="hover:text-white transition-colors text-amber-200/90 font-medium"
                >
                  Village Homestays
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('village')}
                  className="hover:text-white transition-colors text-amber-200/90 font-medium"
                >
                  Village & Heritage Trails
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('guide')}
                  className="hover:text-white transition-colors"
                >
                  Travel Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('map')}
                  className="hover:text-white transition-colors"
                >
                  Wayfinding & Map
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('gallery')}
                  className="hover:text-white transition-colors"
                >
                  Photo Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="hover:text-white transition-colors"
                >
                  Tourism Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Travel Notice */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-widest text-[#d4af37] uppercase">
              Travel Note
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Nubra Valley requires Inner Line Permits (ILP) or Protected Area Permits. Check current route and weather advisories at Leh before ascending Khardung La.
            </p>
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-[#d4af37] transition-colors"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Disclaimer */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} Discover Sumur. All rights reserved.</p>
          <p className="text-center sm:text-right max-w-xl text-[11px] text-slate-400">
            {siteConfig.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
};
