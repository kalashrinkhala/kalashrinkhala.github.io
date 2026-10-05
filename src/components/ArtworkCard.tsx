import React, { useState } from 'react';
import { Artwork } from '../types';
import { Eye, Sparkles } from 'lucide-react';

interface ArtworkCardProps {
  artwork: Artwork;
  onSelect: (artwork: Artwork) => void;
  showCategoryLabel?: boolean;
  priority?: boolean;
}

export const ArtworkCard: React.FC<ArtworkCardProps> = ({
  artwork,
  onSelect,
  showCategoryLabel = true,
  priority = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      id={`artwork-card-${artwork.id}`}
      onClick={() => onSelect(artwork)}
      className="group relative cursor-pointer flex flex-col bg-white rounded-lg overflow-hidden border border-stone-200/90 shadow-xs transition-all duration-300 hover:shadow-lg hover:border-stone-400/80 focus-within:ring-2 focus-within:ring-[#A6533B] focus:outline-none"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(artwork);
        }
      }}
      aria-label={`View artwork ${artwork.title}`}
    >
      {/* Artwork Image Container with contain/aspect ratio preservation */}
      <div className="relative w-full aspect-4/3 overflow-hidden bg-stone-100 flex items-center justify-center">
        {/* Placeholder / Loading shimmer */}
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 bg-stone-200 animate-pulse flex items-center justify-center text-stone-400">
            <span className="text-xs tracking-wider uppercase">Loading Artwork...</span>
          </div>
        )}

        {/* Real artwork image with subtle hover scale (1.02–1.04) */}
        <img
          src={artwork.image}
          alt={artwork.title}
          loading={priority ? 'eager' : 'lazy'}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setHasError(true);
            setIsLoaded(true);
          }}
          className={`w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-103 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Subtle Dark Gradient Overlay on Hover for Preview Cue */}
        <div className="absolute inset-0 bg-stone-950/25 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
          <div className="bg-white/95 text-stone-900 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider flex items-center gap-1.5 shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
            <Eye className="w-3.5 h-3.5" />
            <span>VIEW SHOWCASE</span>
          </div>
        </div>

        {/* Year Pill Top-Right */}
        <div className="absolute top-2.5 right-2.5 bg-stone-950/75 backdrop-blur-xs text-white text-[11px] font-mono px-2 py-0.5 rounded shadow-xs tracking-wider">
          {artwork.year}
        </div>
      </div>

      {/* Artwork Details Footer on Card */}
      <div className="p-3.5 sm:p-4 flex flex-col flex-grow justify-between bg-white border-t border-stone-100">
        <div>
          {showCategoryLabel && (
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#A6533B] mb-1">
              {artwork.categoryName}
            </p>
          )}
          <h3 className="font-serif text-base sm:text-lg font-semibold text-stone-900 line-clamp-1 group-hover:text-[#A6533B] transition-colors">
            {artwork.title}
          </h3>
          {artwork.hindiTitle && (
            <p className="font-devanagari text-xs text-stone-500 line-clamp-1 mt-0.5">
              {artwork.hindiTitle}
            </p>
          )}
        </div>

        <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
          <span className="truncate pr-2">{artwork.medium}</span>
          <span className="shrink-0 font-medium">{artwork.dimensions.split('(')[0].trim()}</span>
        </div>
      </div>
    </div>
  );
};
