import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, MapPin, Tag } from 'lucide-react';
import { ImageItem } from '../config/images';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: ImageItem[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, currentIndex, images.length]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];
  const hasMultiple = images.length > 1;

  const handlePrev = () => {
    const prev = (currentIndex - 1 + images.length) % images.length;
    onNavigate(prev);
  };

  const handleNext = () => {
    const next = (currentIndex + 1) % images.length;
    onNavigate(next);
  };

  const isRealPhoto = Boolean(currentImage.url && currentImage.url.trim() !== '');

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox Viewer"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6"
    >
      {/* Background click overlay */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      {hasMultiple && (
        <button
          onClick={handlePrev}
          aria-label="Previous photograph"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-[#d4af37] hover:text-black text-white transition-all focus:outline-none"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next button */}
      {hasMultiple && (
        <button
          onClick={handleNext}
          aria-label="Next photograph"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-[#d4af37] hover:text-black text-white transition-all focus:outline-none"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Lightbox Content Container */}
      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center bg-[#0d1216] border border-white/15 rounded-2xl overflow-hidden shadow-2xl">
        {/* Main Display Area */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[70vh] bg-[#090c0e] flex items-center justify-center overflow-hidden">
          {isRealPhoto ? (
            <img
              src={currentImage.url}
              alt={currentImage.alt}
              className="max-h-full max-w-full object-contain"
              referrerPolicy="no-referrer"
            />
          ) : (
            /* Mountain Silhouette Placeholder in Lightbox */
            <div className="relative w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-b from-[#141d24] via-[#0d1216] to-[#090c0e] text-center">
              <svg
                className="absolute inset-0 w-full h-full opacity-25 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 800 400"
                preserveAspectRatio="none"
              >
                <polygon
                  points="0,400 0,180 140,110 260,210 400,60 540,170 680,90 800,160 800,400"
                  fill="#d4af37"
                  fillOpacity="0.2"
                />
                <polygon
                  points="0,400 0,240 180,160 300,250 450,140 600,240 730,160 800,220 800,400"
                  fill="#e2e8f0"
                  fillOpacity="0.15"
                />
              </svg>

              <div className="relative z-10 flex flex-col items-center max-w-lg">
                <div className="w-16 h-16 rounded-2xl bg-[#1a232b] border border-[#d4af37]/40 flex items-center justify-center mb-4">
                  <Camera className="w-8 h-8 text-[#d4af37]" />
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#d4af37]/15 border border-[#d4af37]/30 text-amber-200 text-xs font-semibold tracking-wider uppercase mb-3">
                  Photograph Placeholder Slot
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
                  {currentImage.caption || currentImage.alt}
                </h3>
                <p className="text-sm text-slate-400">
                  Real photograph can be linked by adding a URL to{' '}
                  <code className="text-amber-300 font-mono text-xs px-1.5 py-0.5 rounded bg-black/50">
                    src/config/images.ts
                  </code>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Caption & Metadata Bar */}
        <div className="w-full p-4 sm:p-5 bg-[#12181f] border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm">
          <div className="space-y-1">
            <h4 className="font-semibold text-slate-100 flex items-center gap-2">
              <span>{currentImage.alt}</span>
              {currentImage.category && (
                <span className="text-xs uppercase font-medium text-amber-300/80 flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  {currentImage.category}
                </span>
              )}
            </h4>
            <p className="text-xs text-slate-400 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Sumur, Nubra Valley, Ladakh, India</span>
              {currentImage.credit && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{currentImage.credit}</span>
                </>
              )}
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-400 shrink-0">
            <span>
              Image <span className="font-mono text-amber-300">{currentIndex + 1}</span> of{' '}
              <span className="font-mono text-slate-300">{images.length}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
