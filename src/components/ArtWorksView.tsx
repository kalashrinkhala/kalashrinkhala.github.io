import React, { useState, useMemo } from 'react';
import { Artwork, ArtworkCategory } from '../types';
import { CATEGORIES, ARTWORKS_DATA } from '../data/artworksData';
import { ArtworkCard } from './ArtworkCard';
import {
  Filter,
  Search,
  SlidersHorizontal,
  ChevronDown,
  RotateCcw,
  Sparkles,
  Layers,
  ArrowDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ArtWorksViewProps {
  selectedCategory: ArtworkCategory | null;
  onSelectCategory: (category: ArtworkCategory) => void;
  onSelectArtwork: (artwork: Artwork) => void;
}

const ITEMS_PER_PAGE = 6;

export const ArtWorksView: React.FC<ArtWorksViewProps> = ({
  selectedCategory,
  onSelectCategory,
  onSelectArtwork,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'chronological-desc' | 'chronological-asc' | 'title'>('chronological-desc');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // Active category metadata (always falls back to first category)
  const currentCategoryMeta = useMemo(() => {
    const activeCatId = selectedCategory || CATEGORIES[0].id;
    return CATEGORIES.find((c) => c.id === activeCatId) || CATEGORIES[0];
  }, [selectedCategory]);

  // Filter and sort artworks
  const filteredArtworks = useMemo(() => {
    const activeCatId = selectedCategory || CATEGORIES[0].id;
    let list = ARTWORKS_DATA.filter((art) => art.category === activeCatId);

    // Filter by Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (art) =>
          art.title.toLowerCase().includes(q) ||
          art.categoryName.toLowerCase().includes(q) ||
          art.medium.toLowerCase().includes(q) ||
          (art.description && art.description.toLowerCase().includes(q)) ||
          (art.hindiTitle && art.hindiTitle.toLowerCase().includes(q)) ||
          (art.series && art.series.toLowerCase().includes(q))
      );
    }

    // Sort
    return [...list].sort((a, b) => {
      if (sortBy === 'chronological-desc') {
        return Number(b.year) - Number(a.year);
      }
      if (sortBy === 'chronological-asc') {
        return Number(a.year) - Number(b.year);
      }
      return a.title.localeCompare(b.title);
    });
  }, [selectedCategory, searchQuery, sortBy]);

  // Artworks currently visible based on "Load More" pagination
  const visibleArtworks = useMemo(() => {
    return filteredArtworks.slice(0, visibleCount);
  }, [filteredArtworks, visibleCount]);

  const hasMore = visibleCount < filteredArtworks.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  const handleCategoryClick = (catId: ArtworkCategory) => {
    onSelectCategory(catId);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  return (
    <div id="artworks-gallery-view" className="w-full bg-[#faf9f6] min-h-screen">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-3"
        >
          <div className="flex items-center gap-2">
            <span className="font-cinzel text-xs uppercase tracking-widest text-[#A6533B] font-semibold">
              Curated Retrospective Archive
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-stone-900 leading-tight">
            {currentCategoryMeta.name}
          </h1>

          <p className="text-stone-600 text-sm sm:text-base max-w-3xl leading-relaxed">
            {currentCategoryMeta.tagline} — {currentCategoryMeta.description}
          </p>
        </motion.div>
      </section>

      {/* Category Pills Filter Bar */}
      <section className="sticky top-20 z-30 bg-[#faf9f6]/95 backdrop-blur-md border-y border-stone-200 py-4 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {/* 12 Category Pills */}
            {CATEGORIES.map((cat) => {
              const isSelected = (selectedCategory || CATEGORIES[0].id) === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`category-pill-${cat.id}`}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer shrink-0 flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'bg-white text-stone-700 border border-stone-200 hover:border-stone-400 hover:bg-stone-50'
                  }`}
                >
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Search & Sort Controls Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              id="artwork-search-input"
              type="text"
              placeholder="Search by title, medium, series..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(ITEMS_PER_PAGE);
              }}
              className="w-full pl-10 pr-4 py-2 bg-white border border-stone-200 rounded-lg text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
              >
                Clear
              </button>
            )}
          </div>

          {/* Results Count & Sort Dropdown */}
          <div className="flex items-center justify-between w-full sm:w-auto gap-4">
            <span className="text-xs text-stone-500 font-medium">
              Showing {visibleArtworks.length} of {filteredArtworks.length} artworks
            </span>

            <div className="flex items-center gap-2">
              <span className="text-xs text-stone-500 hidden md:inline">Sort:</span>
              <select
                id="artwork-sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white border border-stone-200 text-stone-800 text-xs py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-400 cursor-pointer"
              >
                <option value="chronological-desc">Newest First</option>
                <option value="chronological-asc">Oldest / Vintage First</option>
                <option value="title">Alphabetical (A–Z)</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Main Artworks Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredArtworks.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-xl border border-stone-200 p-8 space-y-4">
            <Layers className="w-10 h-10 text-stone-300 mx-auto" />
            <h3 className="font-serif text-xl text-stone-800 font-semibold">
              No artworks match your search
            </h3>
            <p className="text-sm text-stone-500 max-w-md mx-auto">
              Try adjusting your search terms or clearing the active category filters to explore the complete retrospective collection.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                onSelectCategory(null);
              }}
              className="px-4 py-2 bg-stone-900 text-white text-xs font-semibold rounded-lg uppercase tracking-wider hover:bg-stone-800 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <>
            {/* Responsive Grid:
                Desktop (1280px+): 3–4 columns
                Tablet (768px-1024px): 2–3 columns
                Mobile (320px-430px): 1–2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8">
              {visibleArtworks.map((artwork, idx) => (
                <motion.div
                  key={artwork.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: (idx % 6) * 0.05 }}
                >
                  <ArtworkCard
                    artwork={artwork}
                    onSelect={onSelectArtwork}
                    showCategoryLabel={!selectedCategory}
                    priority={idx < 3}
                  />
                </motion.div>
              ))}
            </div>

            {/* Dynamic LOAD MORE Button */}
            {hasMore && (
              <div className="mt-16 text-center">
                <button
                  id="load-more-artworks-button"
                  onClick={handleLoadMore}
                  className="px-8 py-3.5 bg-stone-900 hover:bg-stone-800 active:bg-stone-950 text-white text-xs font-bold uppercase tracking-[0.16em] rounded-lg shadow-sm hover:shadow transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>LOAD MORE ARTWORK</span>
                  <ArrowDown className="w-4 h-4" />
                </button>
                <p className="text-xs text-stone-400 mt-2">
                  Displaying {visibleArtworks.length} of {filteredArtworks.length} pieces in this collection
                </p>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
};
