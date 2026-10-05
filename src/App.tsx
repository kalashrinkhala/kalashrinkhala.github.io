/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageView, ArtworkCategory, Artwork } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { TheArtistView } from './components/TheArtistView';
import { ArtWorksView } from './components/ArtWorksView';
import { PublishedView } from './components/PublishedView';
import { ContactView } from './components/ContactView';
import { ArtworkShowcaseModal } from './components/ArtworkShowcaseModal';
import { CATEGORIES, ARTWORKS_DATA } from './data/artworksData';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedCategory, setSelectedCategory] = useState<ArtworkCategory>(CATEGORIES[0].id);

  // Artwork Showcase state
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [isShowcaseOpen, setIsShowcaseOpen] = useState(false);

  // Inquiry form prefill state
  const [inquirySubject, setInquirySubject] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');

  // Scroll to top on page change
  const handleNavigate = (page: PageView, category?: ArtworkCategory | null) => {
    setCurrentPage(page);
    if (category) {
      setSelectedCategory(category);
    } else if (page === 'artworks' && !selectedCategory) {
      setSelectedCategory(CATEGORIES[0].id);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenArtworkShowcase = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
    setIsShowcaseOpen(true);
  };

  const handleCloseArtworkShowcase = () => {
    setIsShowcaseOpen(false);
  };

  const handleInquireArtwork = (artwork: Artwork) => {
    setInquirySubject(`Acquisition Inquiry: ${artwork.title} (${artwork.year})`);
    setInquiryMessage(
      `Dear Kala Shrinkhala Studio,\n\nI would like to inquire about the provenance, availability, and acquisition details for the original artwork "${artwork.title}" (${artwork.medium}, ${artwork.dimensions}).\n\nKind regards,`
    );
    handleNavigate('contact');
  };

  // Determine active list of artworks for the showcase carousel
  const activeShowcaseList = selectedCategory
    ? ARTWORKS_DATA.filter((art) => art.category === selectedCategory)
    : ARTWORKS_DATA;

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f6] text-stone-900 selection:bg-[#A6533B]/25 selection:text-stone-900 antialiased overflow-x-clip font-sans">
      {/* Locked Fixed Header with Scroll Compression and Artwork Dropdown */}
      <Navbar
        currentPage={currentPage}
        selectedCategory={selectedCategory}
        onNavigate={handleNavigate}
      />

      {/* Main Page View with Animated Transitions */}
      <main className="flex-grow w-full">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="page-home"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <HomeView
                onNavigate={handleNavigate}
                onSelectArtwork={handleOpenArtworkShowcase}
              />
            </motion.div>
          )}

          {currentPage === 'artist' && (
            <motion.div
              key="page-artist"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <TheArtistView onNavigate={handleNavigate} />
            </motion.div>
          )}

          {currentPage === 'artworks' && (
            <motion.div
              key="page-artworks"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <ArtWorksView
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                onSelectArtwork={handleOpenArtworkShowcase}
              />
            </motion.div>
          )}

          {currentPage === 'published' && (
            <motion.div
              key="page-published"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <PublishedView />
            </motion.div>
          )}

          {currentPage === 'contact' && (
            <motion.div
              key="page-contact"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <ContactView
                initialSubject={inquirySubject}
                initialMessage={inquiryMessage}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Persistent Footer with Signature and Copyright */}
      <Footer onNavigate={handleNavigate} />

      {/* Global Artwork Showcase Modal */}
      <ArtworkShowcaseModal
        artwork={selectedArtwork}
        artworksList={activeShowcaseList}
        isOpen={isShowcaseOpen}
        onClose={handleCloseArtworkShowcase}
        onSelectArtwork={setSelectedArtwork}
        onInquire={handleInquireArtwork}
      />
    </div>
  );
}
