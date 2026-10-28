import React, { useState, useEffect } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { HomePage } from './pages/HomePage';
import { AttractionsPage } from './pages/AttractionsPage';
import { SamstanlingMonasteryPage } from './pages/SamstanlingMonasteryPage';
import { BuddhaStupaPage } from './pages/BuddhaStupaPage';
import { HomestaysPage } from './pages/HomestaysPage';
import { VillageTrailsPage } from './pages/VillageTrailsPage';
import { CulturePage } from './pages/CulturePage';
import { TravelGuidePage } from './pages/TravelGuidePage';
import { StayPage } from './pages/StayPage';
import { MapPage } from './pages/MapPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { galleryImages, siteImages, ImageItem } from './config/images';
import { ChevronRight, Home } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<ImageItem[]>(galleryImages);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const validPages: PageId[] = [
    'home',
    'explore',
    'monastery',
    'stupa',
    'homestays',
    'village',
    'culture',
    'guide',
    'stay',
    'map',
    'gallery',
    'contact',
  ];

  // Sync URL hash with currentPage and smooth scroll on hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
        const targetId = hash === 'home' ? 'hero' : hash === 'stay' ? 'homestays' : hash;
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    if (window.location.hash) {
      setTimeout(handleHashChange, 100);
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll spy to highlight active section in navbar as user scrolls
  useEffect(() => {
    const sectionIds: { id: string; page: PageId }[] = [
      { id: 'hero', page: 'home' },
      { id: 'welcome', page: 'home' },
      { id: 'monastery', page: 'monastery' },
      { id: 'stupa', page: 'stupa' },
      { id: 'homestays', page: 'homestays' },
      { id: 'village', page: 'village' },
      { id: 'explore', page: 'explore' },
      { id: 'culture', page: 'culture' },
      { id: 'guide', page: 'guide' },
      { id: 'gallery', page: 'gallery' },
      { id: 'map', page: 'map' },
      { id: 'contact', page: 'contact' },
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setCurrentPage(sectionIds[i].page);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePageChange = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    const targetId = page === 'home' ? 'hero' : page === 'stay' ? 'homestays' : page;
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Open lightbox with specific image key from siteImages
  const handleOpenLightboxWithKey = (imageKey: string) => {
    const targetImage = siteImages[imageKey];
    if (targetImage) {
      setLightboxImages([targetImage]);
      setLightboxIndex(0);
      setLightboxOpen(true);
    }
  };

  // Open lightbox with index in the galleryImages
  const handleOpenLightboxWithGalleryIndex = (index: number) => {
    setLightboxImages(galleryImages);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#090c0e] text-slate-100 flex flex-col font-sans selection:bg-[#d4af37]/30 selection:text-white">
      {/* Top Navigation Bar */}
      <Navbar currentPage={currentPage} onPageChange={handlePageChange} />

      {/* Main Unified Plane Content */}
      <main className="flex-1 pt-20">
        <HomePage
          onNavigate={handlePageChange}
          onOpenLightbox={handleOpenLightboxWithKey}
          onOpenLightboxWithGalleryIndex={handleOpenLightboxWithGalleryIndex}
        />
      </main>

      {/* Global Interactive Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />

      {/* Footer */}
      <Footer onPageChange={handlePageChange} />
    </div>
  );
}

