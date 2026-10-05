import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ArchivalCarouselItem } from '../data/artistData';

interface ArchivalCarouselProps {
  items: ArchivalCarouselItem[];
  autoPlayInterval?: number;
}

export const ArchivalCarousel: React.FC<ArchivalCarouselProps> = ({
  items,
  autoPlayInterval = 3800,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const [activeModalItem, setActiveModalItem] = useState<ArchivalCarouselItem | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const touchStartXRef = useRef<number | null>(null);

  // Responsive: 1 on mobile, 2 on tablet, 3 on desktop
  useEffect(() => {
    const updateVisible = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCount(1);
      } else if (width < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    updateVisible();
    window.addEventListener('resize', updateVisible);
    return () => window.removeEventListener('resize', updateVisible);
  }, []);

  const maxIndex = Math.max(0, items.length - visibleCount);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-slide effect (pauses when user hovers or opens photo modal)
  useEffect(() => {
    if (isHovered || activeModalItem !== null) return;
    const timer = setInterval(() => {
      handleNext();
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [isHovered, activeModalItem, handleNext, autoPlayInterval]);

  // Lightbox keyboard controls
  useEffect(() => {
    if (!activeModalItem) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalItem(null);
      } else if (e.key === 'ArrowRight') {
        const curIdx = items.findIndex((it) => it.id === activeModalItem.id);
        const nextIdx = (curIdx + 1) % items.length;
        setActiveModalItem(items[nextIdx]);
      } else if (e.key === 'ArrowLeft') {
        const curIdx = items.findIndex((it) => it.id === activeModalItem.id);
        const prevIdx = (curIdx - 1 + items.length) % items.length;
        setActiveModalItem(items[prevIdx]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalItem, items]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsHovered(true);
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsHovered(false);
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
    touchStartXRef.current = null;
  };

  const markImageLoaded = (id: string) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-label="Archival Photo Carousel"
    >
      {/* CAROUSEL TRACK WITH NAVIGATION CONTROLS */}
      <div className="relative group/carousel">
        {/* Previous Button (Left Arrow) */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/95 hover:bg-white text-stone-700 hover:text-stone-900 border border-stone-300 shadow-md flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
          title="Previous photos"
          aria-label="Previous photos"
        >
          <ChevronLeft className="w-5 h-5 text-stone-700" />
        </button>

        {/* Next Button (Right Arrow) */}
        <button
          type="button"
          onClick={handleNext}
          className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/95 hover:bg-white text-stone-700 hover:text-stone-900 border border-stone-300 shadow-md flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
          title="Next photos"
          aria-label="Next photos"
        >
          <ChevronRight className="w-5 h-5 text-stone-700" />
        </button>

        {/* Viewport */}
        <div
          className="overflow-hidden py-1 px-0.5"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {items.map((item) => {
              const isLoaded = loadedImages[item.id];
              return (
                <div
                  key={item.id}
                  className="shrink-0 px-2 sm:px-3"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div
                    onClick={() => setActiveModalItem(item)}
                    className="cursor-pointer bg-white p-2.5 sm:p-3.5 rounded-sm border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full group"
                  >
                    {/* Archival Photo Container */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone-100 rounded-xs border border-stone-200/80">
                      {!isLoaded && (
                        <div className="absolute inset-0 bg-gradient-to-r from-stone-200 via-stone-100 to-stone-200 animate-pulse" />
                      )}
                      <img
                        src={item.src}
                        alt={item.alt}
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        onLoad={() => markImageLoaded(item.id)}
                        className={`w-full h-full object-cover filter contrast-105 transition-all duration-500 group-hover:scale-103 ${
                          isLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    </div>

                    {/* Single-Line Clean Caption */}
                    <p className="text-xs sm:text-[13px] text-stone-700 font-medium text-center truncate pt-2.5 px-1 group-hover:text-amber-900 transition-colors">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* MINIMAL DOT INDICATORS */}
      <div className="flex items-center justify-center gap-1.5 mt-4" role="tablist" aria-label="Photo carousel pagination">
        {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => {
          const isActive = dotIdx === currentIndex;
          return (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setCurrentIndex(dotIdx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                isActive ? 'w-6 bg-amber-700' : 'w-2 bg-stone-300 hover:bg-stone-400'
              }`}
              title={`Go to slide ${dotIdx + 1}`}
              aria-label={`Go to slide ${dotIdx + 1}`}
              aria-selected={isActive}
              role="tab"
            />
          );
        })}
      </div>

      {/* LIGHTBOX FOR FULL VIEW */}
      <AnimatePresence>
        {activeModalItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/85 backdrop-blur-sm"
            onClick={() => setActiveModalItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-sm max-w-4xl w-full overflow-hidden shadow-2xl border border-stone-200 flex flex-col max-h-[92vh]"
            >
              <div className="flex items-center justify-between px-4 py-3 bg-stone-50 border-b border-stone-200">
                <span className="text-xs sm:text-sm font-medium text-stone-800 truncate pr-3">
                  {activeModalItem.title}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveModalItem(null)}
                  className="p-1 rounded hover:bg-stone-200 text-stone-600 transition-colors shrink-0"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative bg-stone-900 flex items-center justify-center overflow-hidden flex-1 min-h-[300px] max-h-[72vh]">
                <img
                  src={activeModalItem.src}
                  alt={activeModalItem.alt}
                  className="max-h-[72vh] w-auto max-w-full object-contain filter contrast-105"
                />
              </div>

              <div className="p-3 sm:p-4 bg-white border-t border-stone-200 flex items-center justify-between text-xs text-stone-600">
                <span className="truncate">{activeModalItem.title}</span>
                <div className="flex items-center gap-3 shrink-0 ml-2">
                  <button
                    type="button"
                    onClick={() => {
                      const cur = items.findIndex((it) => it.id === activeModalItem.id);
                      const prev = (cur - 1 + items.length) % items.length;
                      setActiveModalItem(items[prev]);
                    }}
                    className="hover:text-amber-800 transition-colors"
                  >
                    &larr; Prev
                  </button>
                  <span>•</span>
                  <button
                    type="button"
                    onClick={() => {
                      const cur = items.findIndex((it) => it.id === activeModalItem.id);
                      const next = (cur + 1) % items.length;
                      setActiveModalItem(items[next]);
                    }}
                    className="hover:text-amber-800 transition-colors"
                  >
                    Next &rarr;
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
