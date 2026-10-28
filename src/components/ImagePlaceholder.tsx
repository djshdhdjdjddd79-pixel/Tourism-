import React, { useState } from 'react';
import { Camera, Image as ImageIcon, MapPin, Eye } from 'lucide-react';

interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  caption?: string;
  credit?: string;
  aspectRatio?: '16/9' | '4/3' | '3/2' | '1/1' | '21/9' | 'auto';
  placeholderTitle?: string;
  category?: string;
  className?: string;
  onClick?: () => void;
  showCaptionBelow?: boolean;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  src,
  alt,
  caption,
  credit,
  aspectRatio = '16/9',
  placeholderTitle,
  category,
  className = '',
  onClick,
  showCaptionBelow = true,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const isPlaceholder = !src || src.trim() === '' || hasError;

  // Aspect ratio mapping
  const ratioClasses: Record<string, string> = {
    '16/9': 'aspect-[16/9]',
    '4/3': 'aspect-[4/3]',
    '3/2': 'aspect-[3/2]',
    '1/1': 'aspect-square',
    '21/9': 'aspect-[21/9]',
    'auto': '',
  };

  const ratioClass = ratioClasses[aspectRatio] || 'aspect-[16/9]';
  const displayTitle = placeholderTitle || caption || alt;

  return (
    <figure className={`group relative flex flex-col w-full overflow-hidden ${className}`}>
      {/* Visual Frame */}
      <div
        onClick={onClick}
        className={`relative w-full overflow-hidden rounded-xl bg-[#0d1216] border border-white/10 ${ratioClass} ${
          onClick ? 'cursor-pointer' : ''
        }`}
      >
        {!isPlaceholder ? (
          <>
            <img
              src={src}
              alt={alt}
              loading="lazy"
              referrerPolicy="no-referrer"
              onLoad={() => setIsLoaded(true)}
              onError={() => setHasError(true)}
              className={`w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-102 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
            {/* View Full Button */}
            {onClick && (
              <div className="absolute top-3 right-3 p-2 rounded-lg bg-black/70 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 text-xs font-medium shadow-lg">
                <Eye className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>View Full Photo</span>
              </div>
            )}
          </>
        ) : (
          /* Attractive Black-Themed Mountain Vector Placeholder */
          <div className="absolute inset-0 flex flex-col items-center justify-between p-6 bg-gradient-to-b from-[#141b21] via-[#0d1216] to-[#090c0e] text-center select-none overflow-hidden">
            {/* Mountain Silhouettes Vector in Background */}
            <svg
              className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 400"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="grad-mtn-1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#d4af37" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#090c0e" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="grad-mtn-2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#090c0e" stopOpacity="0.95" />
                </linearGradient>
              </defs>
              {/* Back Karakoram range */}
              <polygon
                points="0,400 0,210 120,130 240,230 380,80 510,190 640,110 760,200 800,170 800,400"
                fill="url(#grad-mtn-1)"
              />
              {/* Front ridge */}
              <polygon
                points="0,400 0,260 160,190 280,270 430,170 580,260 710,190 800,240 800,400"
                fill="url(#grad-mtn-2)"
              />
              {/* Subtle sun/stupa orb */}
              <circle cx="380" cy="80" r="24" fill="#d4af37" opacity="0.15" />
            </svg>

            {/* Top Bar inside placeholder */}
            <div className="relative z-10 w-full flex items-center justify-between text-xs">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#090c0e]/80 border border-white/10 text-amber-200/90 font-medium tracking-wide">
                <Camera className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>PHOTO PLACEHOLDER</span>
              </span>

              {category && (
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                  {category}
                </span>
              )}
            </div>

            {/* Center Content */}
            <div className="relative z-10 my-auto max-w-md px-2 flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-[#1a232b] border border-[#d4af37]/30 flex items-center justify-center mb-3 shadow-lg group-hover:border-[#d4af37] transition-colors">
                <ImageIcon className="w-6 h-6 text-[#d4af37]" />
              </div>
              <h4 className="text-sm md:text-base font-semibold text-slate-100 tracking-wide line-clamp-2">
                {displayTitle}
              </h4>
              <p className="mt-1 text-xs text-slate-400">
                Sumur, Nubra Valley · Ladakh
              </p>
            </div>

            {/* Bottom Indicator */}
            <div className="relative z-10 w-full flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-white/5">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#d4af37]" />
                <span>Aspect ratio {aspectRatio}</span>
              </span>
              <span className="italic text-slate-400">
                Ready for real photo URL
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Caption & Credit Below Image (if enabled) */}
      {showCaptionBelow && (caption || credit) && (
        <figcaption className="mt-2.5 px-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs text-slate-400">
          {caption && <span className="line-clamp-2 text-slate-300">{caption}</span>}
          {credit && (
            <span className="text-slate-400 text-[11px] shrink-0 sm:ml-auto">
              Credit: {credit}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
};
