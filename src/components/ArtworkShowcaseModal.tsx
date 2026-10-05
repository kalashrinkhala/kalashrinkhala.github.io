import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Artwork } from '../types';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Calendar,
  Layers,
  Ruler,
  MapPin,
  MessageSquare,
  Share2,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ArtworkShowcaseModalProps {
  artwork: Artwork | null;
  artworksList: Artwork[];
  isOpen: boolean;
  onClose: () => void;
  onSelectArtwork: (artwork: Artwork) => void;
  onInquire: (artwork: Artwork) => void;
}

export const ArtworkShowcaseModal: React.FC<ArtworkShowcaseModalProps> = ({
  artwork,
  artworksList,
  isOpen,
  onClose,
  onSelectArtwork,
  onInquire,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Touch coordinates for mobile swipe detection
  const touchStartXRef = useRef<number>(0);
  const touchEndXRef = useRef<number>(0);
  const touchStartYRef = useRef<number>(0);
  const touchEndYRef = useRef<number>(0);

  // Find index of current artwork in the active list
  const currentIndex = artworksList.findIndex((item) => item.id === artwork?.id);
  const totalCount = artworksList.length;

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setImageLoaded(false);
      setIsZoomed(false);
      onSelectArtwork(artworksList[currentIndex - 1]);
    } else if (totalCount > 1) {
      setImageLoaded(false);
      setIsZoomed(false);
      onSelectArtwork(artworksList[totalCount - 1]);
    }
  }, [currentIndex, totalCount, artworksList, onSelectArtwork]);

  const handleNext = useCallback(() => {
    if (currentIndex < totalCount - 1) {
      setImageLoaded(false);
      setIsZoomed(false);
      onSelectArtwork(artworksList[currentIndex + 1]);
    } else if (totalCount > 1) {
      setImageLoaded(false);
      setIsZoomed(false);
      onSelectArtwork(artworksList[0]);
    }
  }, [currentIndex, totalCount, artworksList, onSelectArtwork]);

  // Keyboard navigation: Left Arrow (Prev), Right Arrow (Next), ESC (Close)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handlePrev, handleNext, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Mobile Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
    touchStartYRef.current = e.targetTouches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
    touchEndYRef.current = e.targetTouches[0].clientY;
  };

  const handleTouchEnd = () => {
    const deltaX = touchStartXRef.current - touchEndXRef.current;
    const deltaY = touchStartYRef.current - touchEndYRef.current;

    if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
      if (deltaX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const handleShare = () => {
    if (navigator.clipboard && artwork) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  if (!isOpen || !artwork) return null;

  return (
    <AnimatePresence>
      {/* Dark Blurry Glass Overlay in the outside space */}
      <div
        id="artwork-showcase-overlay"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xl p-2 sm:p-4 md:p-6 lg:p-8"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {/* Floating Crisp Glass Close Button outside on top-right */}
        <button
          id="showcase-close-button-outside"
          onClick={onClose}
          className="fixed top-3 right-3 sm:top-5 sm:right-6 z-60 p-2.5 sm:p-3 rounded-full bg-black/50 hover:bg-white text-white hover:text-stone-900 border border-white/20 backdrop-blur-md transition-all duration-200 cursor-pointer shadow-2xl hover:scale-110 active:scale-95"
          title="Close (Esc)"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
        </button>

        {/* Split Detail Preview Box (Reduced width by 15%) */}
        <motion.div
          id="artwork-showcase-container"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="relative w-full max-w-[88vw] md:max-w-[76vw] lg:max-w-[72vw] xl:max-w-[1120px] 2xl:max-w-[1200px] h-[86vh] max-h-[850px] bg-white text-stone-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto border border-white/15"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex-1 w-full grid grid-cols-1 lg:grid-cols-12 overflow-y-auto lg:overflow-hidden min-h-0">
            {/* Left: Large Artwork Display Stage on Light 5% Black (#f3f3f0) */}
            <div className="lg:col-span-7 xl:col-span-8 bg-[#f3f3f0] p-4 sm:p-6 lg:p-8 flex items-center justify-center relative select-none border-b lg:border-b-0 lg:border-r border-stone-200/80 min-h-[380px] lg:min-h-full">
              {/* Previous Button */}
              <button
                id="showcase-prev-button"
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-white text-stone-800 flex items-center justify-center shadow-lg transition-all hover:scale-105 active:scale-95 border border-stone-200 cursor-pointer"
                aria-label="Previous artwork"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                id="showcase-next-button"
                onClick={handleNext}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-white text-stone-800 flex items-center justify-center shadow-lg transition-all hover:scale-105 active:scale-95 border border-stone-200 cursor-pointer"
                aria-label="Next artwork"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Quick Image Tools: Zoom & Share floating subtly inside stage */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-1.5 z-10 bg-white/90 backdrop-blur-md p-1 rounded-lg border border-stone-200 shadow-xs">
                <button
                  id="showcase-share-button"
                  onClick={handleShare}
                  className="p-1.5 rounded hover:bg-stone-100 text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
                  title="Copy link"
                  aria-label="Share artwork link"
                >
                  {copiedLink ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Share2 className="w-4 h-4" />
                  )}
                </button>
                <button
                  id="showcase-zoom-button"
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="p-1.5 rounded hover:bg-stone-100 text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
                  title={isZoomed ? 'Reset View' : 'Zoom In'}
                  aria-label="Toggle zoom"
                >
                  {isZoomed ? (
                    <Minimize2 className="w-4 h-4" />
                  ) : (
                    <Maximize2 className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Centered Large Artwork Image Stage */}
              <div
                className={`relative flex items-center justify-center w-full h-full max-h-[82vh] transition-transform duration-300 ${
                  isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              >
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center text-stone-400 text-xs">
                    <span className="animate-pulse">Loading artwork...</span>
                  </div>
                )}
                <img
                  key={artwork.id}
                  src={artwork.image}
                  alt={artwork.title}
                  onLoad={() => setImageLoaded(true)}
                  className={`w-auto h-auto max-w-full max-h-[76vh] lg:max-h-[82vh] object-contain rounded-xs shadow-[0_12px_36px_rgba(0,0,0,0.12)] border border-stone-200/90 transition-opacity duration-300 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>

              {/* Mobile Swipe Hint */}
              <div className="absolute bottom-2 inset-x-0 flex justify-center lg:hidden pointer-events-none">
                <span className="text-[10px] text-stone-600 bg-white/90 backdrop-blur-md border border-stone-200 px-2.5 py-0.5 rounded-full shadow-xs">
                  Swipe left / right to browse
                </span>
              </div>
            </div>

            {/* Right: Curatorial Details Panel */}
            <div className="lg:col-span-5 xl:col-span-4 bg-white p-5 sm:p-6 lg:p-7 flex flex-col justify-between overflow-y-auto">
              <div className="space-y-4 sm:space-y-5">
                {/* Category & Counter */}
                <div className="flex items-center justify-between text-xs text-stone-500 pb-2 border-b border-stone-100">
                  <span className="font-semibold tracking-widest uppercase text-[#A6533B]">
                    {artwork.categoryName}
                  </span>
                  <span className="font-mono text-stone-500 font-medium">
                    {currentIndex + 1} / {totalCount}
                  </span>
                </div>

                {/* Artwork Titles */}
                <div>
                  {artwork.series && (
                    <span className="text-[11px] font-mono tracking-widest text-[#A6533B] uppercase font-semibold block mb-1">
                      {artwork.series}
                    </span>
                  )}
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                    {artwork.title}
                  </h2>
                  {artwork.hindiTitle && (
                    <p className="font-devanagari text-stone-600 text-sm sm:text-base mt-1">
                      {artwork.hindiTitle}
                    </p>
                  )}
                </div>

                {/* Structured Artwork Specs */}
                <div className="space-y-3 pt-3 border-t border-stone-200 text-xs sm:text-sm text-stone-700">
                  <div className="flex items-start gap-2.5">
                    <Calendar className="w-4 h-4 text-[#A6533B] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-stone-500">Year: </span>
                      <span className="text-stone-900 font-medium">{artwork.year}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Layers className="w-4 h-4 text-[#A6533B] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-stone-500">Medium: </span>
                      <span className="text-stone-900 font-medium">{artwork.medium}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Ruler className="w-4 h-4 text-[#A6533B] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-stone-500">Dimensions: </span>
                      <span className="text-stone-900 font-medium">{artwork.dimensions}</span>
                    </div>
                  </div>

                  {artwork.collectionLocation && (
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#A6533B] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-stone-500">Collection: </span>
                        <span className="text-stone-900 font-medium">{artwork.collectionLocation}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 mt-5 border-t border-stone-200 space-y-3 shrink-0">
                <button
                  id="showcase-inquire-button"
                  onClick={() => {
                    onInquire(artwork);
                    onClose();
                  }}
                  className="w-full py-3 px-4 bg-[#A6533B] hover:bg-[#8F442F] active:bg-[#7A3623] text-white font-semibold text-xs tracking-widest uppercase rounded shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Inquire About Artwork</span>
                </button>

                <p className="text-[11px] text-center text-stone-400">
                  Use ← → arrow keys to navigate • Esc to close
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

