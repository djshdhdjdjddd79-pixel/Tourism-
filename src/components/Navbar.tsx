import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, ChevronRight, ChevronDown } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export type PageId =
  | 'home'
  | 'explore'
  | 'monastery'
  | 'stupa'
  | 'homestays'
  | 'village'
  | 'culture'
  | 'guide'
  | 'stay'
  | 'map'
  | 'gallery'
  | 'contact';

interface NavItem {
  id: PageId;
  label: string;
  isSpecial?: boolean;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'explore', label: 'Attractions' },
  { id: 'monastery', label: 'Monastery', isSpecial: true },
  { id: 'stupa', label: 'Buddha Stupa', isSpecial: true },
  { id: 'homestays', label: 'Homestays', isSpecial: true },
  { id: 'village', label: 'Village Trails', isSpecial: true },
  { id: 'culture', label: 'Culture' },
  { id: 'guide', label: 'Guide' },
  { id: 'map', label: 'Map' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
];

interface NavbarProps {
  currentPage: PageId;
  onPageChange: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId: PageId) => {
    onPageChange(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090c0e]/95 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'bg-[#090c0e]/85 backdrop-blur-sm border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4 xl:gap-8">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 sm:gap-3 text-left focus:outline-none group shrink-0"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#141b21] border border-[#d4af37]/30 flex items-center justify-center group-hover:border-[#d4af37] transition-colors">
              <Compass className="w-5 h-5 text-[#d4af37] transition-transform duration-500 group-hover:rotate-45" />
            </div>
            <div>
              <span className="font-serif tracking-[0.15em] sm:tracking-[0.2em] text-base sm:text-xl font-bold text-white group-hover:text-amber-200 transition-colors whitespace-nowrap">
                {siteConfig.siteName}
              </span>
              <span className="hidden sm:block text-[9px] tracking-widest text-[#d4af37] uppercase font-medium">
                Nubra Valley · Ladakh
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (single-line, compact styling) */}
          <nav
            aria-label="Main Navigation"
            className="hidden xl:flex items-center gap-1 text-xs font-medium text-slate-300"
          >
            {navItems.map((item) => {
              const isActive =
                currentPage === item.id ||
                (item.id === 'homestays' && currentPage === 'stay');
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-2.5 py-1.5 rounded-md whitespace-nowrap transition-colors relative flex items-center gap-1 ${
                    isActive
                      ? 'text-[#d4af37] font-semibold bg-white/5'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  } ${item.isSpecial ? 'border-b border-transparent hover:border-[#d4af37]/40' : ''}`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#d4af37] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Compact Viewport Navigation (for medium screens lg to xl) */}
          <nav
            aria-label="Compact Navigation"
            className="hidden lg:flex xl:hidden items-center gap-1 text-xs font-medium text-slate-300 overflow-x-auto py-1 max-w-[500px]"
          >
            <button
              onClick={() => handleNavClick('home')}
              className={`px-2 py-1 rounded ${currentPage === 'home' ? 'text-[#d4af37] font-bold' : 'hover:text-white'}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('explore')}
              className={`px-2 py-1 rounded ${currentPage === 'explore' ? 'text-[#d4af37] font-bold' : 'hover:text-white'}`}
            >
              Explore
            </button>
            <button
              onClick={() => handleNavClick('monastery')}
              className={`px-2 py-1 rounded ${currentPage === 'monastery' ? 'text-[#d4af37] font-bold' : 'hover:text-white'}`}
            >
              Monastery
            </button>
            <button
              onClick={() => handleNavClick('stupa')}
              className={`px-2 py-1 rounded ${currentPage === 'stupa' ? 'text-[#d4af37] font-bold' : 'hover:text-white'}`}
            >
              Stupa
            </button>
            <button
              onClick={() => handleNavClick('homestays')}
              className={`px-2 py-1 rounded ${currentPage === 'homestays' || currentPage === 'stay' ? 'text-[#d4af37] font-bold' : 'hover:text-white'}`}
            >
              Homestays
            </button>
            <button
              onClick={() => handleNavClick('village')}
              className={`px-2 py-1 rounded ${currentPage === 'village' ? 'text-[#d4af37] font-bold' : 'hover:text-white'}`}
            >
              Trails
            </button>
            <button
              onClick={() => handleNavClick('gallery')}
              className={`px-2 py-1 rounded ${currentPage === 'gallery' ? 'text-[#d4af37] font-bold' : 'hover:text-white'}`}
            >
              Gallery
            </button>
          </nav>

          {/* Zone 3: Single Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNavClick('guide')}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-[#d4af37] hover:bg-[#e5c158] rounded-lg transition-colors shadow-md whitespace-nowrap"
            >
              <span>Plan Visit</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 rounded-lg bg-[#141b21] border border-white/10 text-white hover:border-[#d4af37]/40 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d1216] border-b border-white/15 px-4 pt-3 pb-6 shadow-2xl max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col gap-1">
            <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-slate-500">
              Featured Destinations
            </div>
            <div className="grid grid-cols-2 gap-1.5 mb-2">
              <button
                onClick={() => handleNavClick('monastery')}
                className={`p-2 rounded-lg text-xs font-semibold text-left border ${
                  currentPage === 'monastery'
                    ? 'bg-[#1a232b] text-[#d4af37] border-[#d4af37]/40'
                    : 'bg-[#141b21] text-slate-200 border-white/5'
                }`}
              >
                Samstanling Monastery
              </button>
              <button
                onClick={() => handleNavClick('stupa')}
                className={`p-2 rounded-lg text-xs font-semibold text-left border ${
                  currentPage === 'stupa'
                    ? 'bg-[#1a232b] text-[#d4af37] border-[#d4af37]/40'
                    : 'bg-[#141b21] text-slate-200 border-white/5'
                }`}
              >
                Buddha Stupa & Park
              </button>
              <button
                onClick={() => handleNavClick('homestays')}
                className={`p-2 rounded-lg text-xs font-semibold text-left border ${
                  currentPage === 'homestays' || currentPage === 'stay'
                    ? 'bg-[#1a232b] text-[#d4af37] border-[#d4af37]/40'
                    : 'bg-[#141b21] text-slate-200 border-white/5'
                }`}
              >
                Village Homestays
              </button>
              <button
                onClick={() => handleNavClick('village')}
                className={`p-2 rounded-lg text-xs font-semibold text-left border ${
                  currentPage === 'village'
                    ? 'bg-[#1a232b] text-[#d4af37] border-[#d4af37]/40'
                    : 'bg-[#141b21] text-slate-200 border-white/5'
                }`}
              >
                Village & Heritage Trails
              </button>
            </div>

            <div className="px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-slate-500">
              All Pages
            </div>
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs text-left font-medium transition-colors ${
                    isActive
                      ? 'bg-[#1a232b] text-[#d4af37] border border-[#d4af37]/30'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />}
                </button>
              );
            })}

            <div className="pt-3 mt-2 border-t border-white/10">
              <button
                onClick={() => handleNavClick('guide')}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#d4af37] text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#e5c158] transition-colors"
              >
                <span>Plan Your Visit</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
