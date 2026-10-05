import React from 'react';
import { PageView, ArtworkCategory, Artwork } from '../types';
import { CATEGORIES, ARTWORKS_DATA, EDITORIAL_CRITIQUES } from '../data/artworksData';
import { ARTIST_BIOGRAPHY } from '../data/artistData';
import { ArrowRight, Sparkles, Award, BookOpen, Brush } from 'lucide-react';
import { motion } from 'motion/react';

interface HomeViewProps {
  onNavigate: (page: PageView, category?: ArtworkCategory | null) => void;
  onSelectArtwork: (artwork: Artwork) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onSelectArtwork,
}) => {
  // Get the featured artwork matching each category in order (1 to 12)
  const homeCategoryCards = CATEGORIES.map((category) => {
    const matchingArtwork =
      ARTWORKS_DATA.find((art) => art.category === category.id && art.isFeaturedHome) ||
      ARTWORKS_DATA.find((art) => art.category === category.id);

    const imageSrc = matchingArtwork?.image || category.featuredImage;

    return {
      category,
      artwork: matchingArtwork,
      imageSrc,
    };
  });

  return (
    <div id="home-view" className="w-full bg-[#faf9f6]">
      {/* Top Hero / Intro Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl"
        >
          <h1
            id="artist-main-heading"
            className="font-newsreader font-medium text-[29px] sm:text-[38px] lg:text-[48px] text-stone-900 tracking-tight leading-tight"
            style={{ fontFamily: "'Newsreader', Georgia, serif", fontWeight: 500 }}
          >
            Dr. Shivendra Singh
          </h1>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            Fine artist, painter, printmaker, and scholar with over four decades of visual storytelling across diverse mediums — exploring the quiet dignity of human existence, folk idioms, and modern abstraction.
          </p>
        </motion.div>
      </section>

      {/* Main 12 Artwork Categories Grid matching reference Home.jpg */}
      <section
        id="home-artwork-grid-section"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24"
      >
        {/* Responsive Grid: 3-4 cols Desktop, 2-3 cols Tablet, 1-2 cols Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 sm:gap-y-14">
          {homeCategoryCards.map(({ category, artwork, imageSrc }, index) => (
            <motion.div
              key={category.id}
              id={`home-category-card-${category.id}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: (index % 3) * 0.08 }}
              className="flex flex-col group cursor-pointer"
              onClick={() => onNavigate('artworks', category.id)}
            >
              {/* Image Frame with hover scale */}
              <div className="relative w-full aspect-4/3 overflow-hidden bg-stone-200 shadow-sm border border-stone-200/80 rounded-sm">
                <img
                  src={imageSrc}
                  alt={category.name}
                  referrerPolicy="no-referrer"
                  loading={index < 6 ? 'eager' : 'lazy'}
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-104"
                />

                {/* Direct click badge to preview or enter */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <span className="bg-white/95 text-stone-900 text-xs font-semibold px-3 py-1.5 rounded tracking-wider shadow">
                    EXPLORE GALLERY
                  </span>
                </div>
              </div>

              {/* Exact Category Title matching reference layout */}
              <div className="mt-3.5 flex items-baseline justify-between">
                <h2 className="font-sans text-[13px] sm:text-[14px] font-bold tracking-[0.14em] text-stone-900 uppercase group-hover:text-[#A6533B] transition-colors">
                  {category.name}
                </h2>
                <span className="text-xs text-stone-400 font-devanagari">
                  {category.hindiName}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Poetic Hindi Shayari Section matching reference layout */}
      <section
        id="home-poetry-section"
        className="w-full py-14 sm:py-20 px-3 sm:px-6 bg-[#faf9f6] border-t border-b border-stone-200/80"
      >
        <div className="max-w-6xl mx-auto text-center space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="font-hindi-handwriting text-base min-[400px]:text-[17px] sm:text-xl md:text-2xl lg:text-[27px] xl:text-[29px] text-stone-800 leading-relaxed font-normal tracking-wide space-y-1 sm:space-y-2">
              <p className="whitespace-nowrap overflow-hidden text-ellipsis sm:overflow-visible">
                नज़र में ढलके उभरते है दिल के अफ़साने, वो बात और है दुनिया नज़र न पहचाने
              </p>
              <p className="whitespace-nowrap overflow-hidden text-ellipsis sm:overflow-visible">
                वो बज़्म देखी है मेरी नज़र ने कि जहां, बग़ैर शम्मा भी जलते रहे हैं परवाने
              </p>
            </div>

            <div className="pt-2">
              <div className="w-12 h-0.5 bg-[#A6533B] mx-auto mb-2.5" />
              <p className="font-hindi-handwriting text-lg sm:text-xl md:text-2xl text-stone-700 font-medium">
                — {ARTIST_BIOGRAPHY.quoteHindiAuthor}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3 Editorial Critique Columns matching reference layout */}
      <section
        id="home-critiques-section"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {EDITORIAL_CRITIQUES.map((critique, idx) => (
            <motion.div
              key={critique.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`flex flex-col justify-between space-y-6 ${
                idx !== 0 ? 'md:border-l md:border-[#A6533B]/40 md:pl-8 lg:pl-10' : ''
              }`}
            >
              <p className="text-stone-700 text-sm sm:text-[15px] leading-relaxed italic">
                "{critique.quote}"
              </p>

              <div className="pt-4 border-t border-stone-200/60">
                <p className="text-xs font-semibold tracking-widest text-stone-900 uppercase">
                  {critique.author}
                </p>
                <p className="text-xs text-stone-500 mt-0.5">
                  {critique.designation} • {critique.publication}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Terracotta #A6533B "KNOW MORE ABOUT ARTIST" Button matching reference layout */}
        <div className="mt-16 sm:mt-20 flex justify-center">
          <button
            id="know-more-artist-button"
            onClick={() => onNavigate('artist')}
            className="px-8 sm:px-10 py-3.5 sm:py-4 bg-[#A6533B] hover:bg-[#8F442F] active:bg-[#7A3623] text-white font-sans text-xs sm:text-sm font-bold tracking-[0.16em] uppercase rounded-xs shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-3 cursor-pointer"
          >
            <span>KNOW MORE ABOUT ARTIST</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
