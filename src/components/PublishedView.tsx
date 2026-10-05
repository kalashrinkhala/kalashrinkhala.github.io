import React, { useState, useEffect } from 'react';
import { Publication } from '../types';
import { PUBLICATIONS_DATA } from '../data/publicationsData';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type FilterType = 'All' | 'Press Feature' | 'Exhibition';

export const PublishedView: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');
  const [selectedPublication, setSelectedPublication] = useState<Publication | null>(null);

  const filteredPublications = PUBLICATIONS_DATA.filter((pub) => {
    if (activeFilter === 'All') return true;
    return pub.type === activeFilter;
  });

  // Lightbox keyboard navigation
  useEffect(() => {
    if (!selectedPublication) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPublication(null);
      } else if (e.key === 'ArrowRight') {
        const curIdx = filteredPublications.findIndex((p) => p.id === selectedPublication.id);
        if (curIdx !== -1) {
          const nextIdx = (curIdx + 1) % filteredPublications.length;
          setSelectedPublication(filteredPublications[nextIdx]);
        }
      } else if (e.key === 'ArrowLeft') {
        const curIdx = filteredPublications.findIndex((p) => p.id === selectedPublication.id);
        if (curIdx !== -1) {
          const prevIdx = (curIdx - 1 + filteredPublications.length) % filteredPublications.length;
          setSelectedPublication(filteredPublications[prevIdx]);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPublication, filteredPublications]);

  return (
    <div id="published-view" className="w-full bg-[#faf9f6] min-h-screen">
      {/* Header Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-2 text-center sm:text-left"
        >
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="font-cinzel text-xs uppercase tracking-widest text-[#A6533B] font-semibold">
              Archival Press &amp; Exhibitions
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 leading-tight">
            Press Features &amp; Exhibitions
          </h1>

          <p className="text-stone-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Documented newspaper features, retrospective press archives, and archival exhibition records of Dr. Shivendra Singh.
          </p>
        </motion.div>
      </section>

      {/* Filter Tabs (Only 2 categories: Press Feature & Exhibition, plus All) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-center sm:justify-start gap-2 overflow-x-auto pb-2">
          {(['All', 'Press Feature', 'Exhibition'] as const).map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                activeFilter === filter
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-white text-stone-700 border border-stone-200 hover:border-stone-400'
              }`}
            >
              {filter === 'All' ? 'All Records' : filter}
            </button>
          ))}
        </div>
      </section>

      {/* Publications / Press Grid - Single line caption only */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPublications.map((pub, idx) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              onClick={() => setSelectedPublication(pub)}
              className="cursor-pointer bg-white p-3 sm:p-4 rounded-sm border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-stone-50 rounded-xs border border-stone-200/80">
                <img
                  src={pub.coverImage}
                  alt={pub.title}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain p-1 filter contrast-105 transition-all duration-500 group-hover:scale-103"
                />

                {/* Badge for Type */}
                <div className="absolute top-2 left-2 bg-stone-900/85 backdrop-blur-xs text-white text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-xs">
                  {pub.type}
                </div>

                {/* Badge for Year if available */}
                {pub.year && (
                  <div className="absolute top-2 right-2 bg-white/90 text-stone-800 text-[10px] font-mono font-medium px-1.5 py-0.5 rounded-xs shadow-xs">
                    {pub.year}
                  </div>
                )}

                {/* Quick Enlarge Hint */}
                <div className="absolute bottom-2 right-2 p-1 rounded-sm bg-stone-900/75 text-stone-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md flex items-center gap-1 text-[10px] font-mono">
                  <Maximize2 className="w-3 h-3" />
                  <span className="hidden sm:inline">Enlarge</span>
                </div>
              </div>

              {/* Single Line Caption Only */}
              <p className="text-xs sm:text-[13px] font-serif font-medium text-stone-800 text-center truncate pt-3 px-1 group-hover:text-amber-900 transition-colors">
                {pub.title}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal for Uncropped Reading & Viewing */}
      <AnimatePresence>
        {selectedPublication && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/85 backdrop-blur-xs p-3 sm:p-6"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedPublication(null);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-sm w-full max-w-4xl shadow-2xl border border-stone-200 flex flex-col max-h-[92vh] overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-stone-50 border-b border-stone-200">
                <div className="flex items-center gap-2 overflow-hidden pr-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-stone-900 text-white font-medium shrink-0">
                    {selectedPublication.type}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-stone-800 truncate">
                    {selectedPublication.title}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedPublication(null)}
                  className="p-1.5 rounded hover:bg-stone-200 text-stone-600 hover:text-stone-900 transition-colors shrink-0"
                  aria-label="Close preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Image Container */}
              <div className="relative bg-stone-900 flex items-center justify-center overflow-hidden flex-1 min-h-[300px] max-h-[72vh] p-2">
                <img
                  src={selectedPublication.coverImage}
                  alt={selectedPublication.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[70vh] w-auto max-w-full object-contain filter contrast-105"
                />
              </div>

              {/* Modal Footer with Single Line Caption & Navigation */}
              <div className="p-3 sm:p-4 bg-white border-t border-stone-200 flex items-center justify-between text-xs text-stone-600">
                <span className="font-serif font-medium text-stone-800 truncate pr-4">
                  {selectedPublication.title}
                </span>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={() => {
                      const cur = filteredPublications.findIndex((p) => p.id === selectedPublication.id);
                      if (cur !== -1) {
                        const prev = (cur - 1 + filteredPublications.length) % filteredPublications.length;
                        setSelectedPublication(filteredPublications[prev]);
                      }
                    }}
                    className="hover:text-amber-800 transition-colors inline-flex items-center gap-0.5"
                  >
                    <ChevronLeft className="w-4 h-4" /> Prev
                  </button>
                  <span>•</span>
                  <button
                    type="button"
                    onClick={() => {
                      const cur = filteredPublications.findIndex((p) => p.id === selectedPublication.id);
                      if (cur !== -1) {
                        const next = (cur + 1) % filteredPublications.length;
                        setSelectedPublication(filteredPublications[next]);
                      }
                    }}
                    className="hover:text-amber-800 transition-colors inline-flex items-center gap-0.5"
                  >
                    Next <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
