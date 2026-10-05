import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { PageView, ArtworkCategory } from '../types';
import { CATEGORIES } from '../data/artworksData';
import { KalaLogo } from './KalaLogo';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentPage: PageView;
  selectedCategory: ArtworkCategory | null;
  onNavigate: (page: PageView, category?: ArtworkCategory | null) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  selectedCategory,
  onNavigate,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isArtworkDropdownOpen, setIsArtworkDropdownOpen] = useState(false);
  const [isMobileArtworkAccordionOpen, setIsMobileArtworkAccordionOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Monitor vertical scroll position to lock and shrink navbar by ~30%
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsArtworkDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsArtworkDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleMouseEnterDropdown = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsArtworkDropdownOpen(true);
  };

  const handleMouseLeaveDropdown = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsArtworkDropdownOpen(false);
    }, 200);
  };

  const handleCategorySelect = (category: ArtworkCategory) => {
    setIsArtworkDropdownOpen(false);
    setIsMobileMenuOpen(false);
    onNavigate('artworks', category);
  };

  const handlePageSelect = (page: PageView) => {
    setIsArtworkDropdownOpen(false);
    setIsMobileMenuOpen(false);
    onNavigate(page, page === 'artworks' ? (selectedCategory || CATEGORIES[0].id) : null);
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 bg-[#faf9f6]/95 backdrop-blur-md border-b transition-all duration-300 ease-in-out ${
          isScrolled
            ? 'shadow-md border-stone-200/95'
            : 'shadow-none border-stone-200/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-300 ease-in-out ${
              isScrolled ? 'h-14 sm:h-15' : 'h-20 sm:h-22'
            }`}
          >
            {/* Brand Logo with Smooth Proportional Scale */}
            <div
              className={`transition-transform origin-left duration-300 ease-in-out ${
                isScrolled ? 'scale-[0.82] sm:scale-[0.88]' : 'scale-100'
              }`}
            >
              <KalaLogo
                size="md"
                onClick={() => handlePageSelect('home')}
                className="py-1"
              />
            </div>

          {/* Desktop & Tablet Navigation */}
          <nav
            id="desktop-nav"
            className="hidden md:flex items-center space-x-6 lg:space-x-10 text-[14px] lg:text-[15px] font-medium tracking-wide text-stone-700"
            aria-label="Main Navigation"
          >
            {/* Home Link */}
            <button
              id="nav-link-home"
              onClick={() => handlePageSelect('home')}
              className={`relative py-2 transition-colors duration-200 cursor-pointer ${
                currentPage === 'home'
                  ? 'text-stone-950 font-semibold border-b-2 border-stone-900'
                  : 'hover:text-stone-950'
              }`}
            >
              Home
            </button>

            {/* The Artist Link */}
            <button
              id="nav-link-artist"
              onClick={() => handlePageSelect('artist')}
              className={`relative py-2 transition-colors duration-200 cursor-pointer ${
                currentPage === 'artist'
                  ? 'text-stone-950 font-semibold border-b-2 border-stone-900'
                  : 'hover:text-stone-950'
              }`}
            >
              The Artist
            </button>

            {/* Art Works with Desktop Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnterDropdown}
              onMouseLeave={handleMouseLeaveDropdown}
            >
              <button
                id="nav-link-artworks-dropdown"
                onClick={() => {
                  if (currentPage !== 'artworks') {
                    handlePageSelect('artworks');
                  } else {
                    setIsArtworkDropdownOpen(!isArtworkDropdownOpen);
                  }
                }}
                className={`flex items-center gap-1.5 py-2 transition-colors duration-200 cursor-pointer ${
                  currentPage === 'artworks'
                    ? 'text-stone-950 font-semibold border-b-2 border-stone-900'
                    : 'hover:text-stone-950'
                }`}
                aria-expanded={isArtworkDropdownOpen}
                aria-haspopup="true"
              >
                <span>Art Works</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isArtworkDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Desktop Dropdown Panel - Simple One-Column */}
              <AnimatePresence>
                {isArtworkDropdownOpen && (
                  <motion.div
                    id="desktop-artworks-dropdown-menu"
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-stone-200 py-2 z-50 overflow-hidden"
                  >
                    <div className="px-4 py-2 border-b border-stone-100">
                      <span className="text-[11px] font-semibold tracking-wider uppercase text-stone-400">
                        Categories
                      </span>
                    </div>

                    {/* Single-Column List of 12 Categories */}
                    <div className="py-1 max-h-[70vh] overflow-y-auto">
                      {CATEGORIES.map((cat) => {
                        const isCurrentCat =
                          currentPage === 'artworks' && selectedCategory === cat.id;
                        return (
                          <button
                            key={cat.id}
                            id={`dropdown-category-${cat.id}`}
                            onClick={() => handleCategorySelect(cat.id)}
                            className={`w-full flex items-center justify-between px-4 py-2 text-left text-[13px] transition-colors cursor-pointer ${
                              isCurrentCat
                                ? 'bg-stone-900 text-white font-medium'
                                : 'text-stone-700 hover:bg-stone-100 hover:text-stone-950'
                            }`}
                          >
                            <span className="font-medium tracking-wide">
                              {cat.name}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Published Link */}
            <button
              id="nav-link-published"
              onClick={() => handlePageSelect('published')}
              className={`relative py-2 transition-colors duration-200 cursor-pointer ${
                currentPage === 'published'
                  ? 'text-stone-950 font-semibold border-b-2 border-stone-900'
                  : 'hover:text-stone-950'
              }`}
            >
              Published
            </button>

            {/* Contact Link */}
            <button
              id="nav-link-contact"
              onClick={() => handlePageSelect('contact')}
              className={`relative py-2 transition-colors duration-200 cursor-pointer ${
                currentPage === 'contact'
                  ? 'text-stone-950 font-semibold border-b-2 border-stone-900'
                  : 'hover:text-stone-950'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              id="mobile-menu-toggle-button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-lg text-stone-800 hover:bg-stone-100 transition-colors focus:outline-none focus:ring-2 focus:ring-stone-400 cursor-pointer"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>

    {/* Spacer to prevent page content jump beneath locked fixed header */}
    <div
      id="header-height-spacer"
      className="h-20 sm:h-22 shrink-0 pointer-events-none"
      aria-hidden="true"
    />

    {/* Mobile Navigation Drawer / Slide-Over (Mounted via Portal outside fixed header to avoid containing block cutoff) */}
    {typeof document !== 'undefined' &&
      createPortal(
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                id="mobile-menu-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`fixed inset-0 bg-stone-950/50 backdrop-blur-xs z-40 md:hidden transition-all duration-300 ${
                  isScrolled ? 'top-14 sm:top-[60px]' : 'top-20 sm:top-[88px]'
                }`}
              />

              {/* Mobile Sheet Panel */}
              <motion.div
                id="mobile-nav-panel"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className={`fixed inset-x-0 bottom-0 bg-[#faf9f6] z-40 md:hidden flex flex-col overflow-y-auto px-5 sm:px-6 py-6 border-t border-stone-200/90 shadow-2xl pb-24 transition-all duration-300 ${
                  isScrolled
                    ? 'top-14 sm:top-[60px] h-[calc(100dvh-3.5rem)] sm:h-[calc(100dvh-3.75rem)]'
                    : 'top-20 sm:top-[88px] h-[calc(100dvh-5rem)] sm:h-[calc(100dvh-5.5rem)]'
                }`}
              >
                <div className="space-y-3.5 max-w-md mx-auto w-full">
                  {/* Home */}
                  <button
                    id="mobile-nav-home"
                    onClick={() => handlePageSelect('home')}
                    className={`w-full text-left py-3.5 px-4 rounded-xl text-lg font-medium transition-colors cursor-pointer ${
                      currentPage === 'home'
                        ? 'bg-stone-900 text-white font-semibold shadow-xs'
                        : 'text-stone-800 hover:bg-stone-200/60 active:bg-stone-200'
                    }`}
                  >
                    Home
                  </button>

                  {/* The Artist */}
                  <button
                    id="mobile-nav-artist"
                    onClick={() => handlePageSelect('artist')}
                    className={`w-full text-left py-3.5 px-4 rounded-xl text-lg font-medium transition-colors cursor-pointer ${
                      currentPage === 'artist'
                        ? 'bg-stone-900 text-white font-semibold shadow-xs'
                        : 'text-stone-800 hover:bg-stone-200/60 active:bg-stone-200'
                    }`}
                  >
                    The Artist
                  </button>

                  {/* Art Works Accordion */}
                  <div className="border border-stone-200/90 rounded-2xl overflow-hidden bg-white shadow-xs">
                    <div className="flex items-center justify-between p-3.5 hover:bg-stone-50/60 transition-colors">
                      <button
                        id="mobile-nav-artworks-main"
                        onClick={() => handlePageSelect('artworks')}
                        className={`text-left text-lg font-medium flex-1 cursor-pointer ${
                          currentPage === 'artworks'
                            ? 'text-stone-950 font-bold'
                            : 'text-stone-800'
                        }`}
                      >
                        Art Works
                      </button>
                      <button
                        id="mobile-artwork-accordion-toggle"
                        onClick={() =>
                          setIsMobileArtworkAccordionOpen(!isMobileArtworkAccordionOpen)
                        }
                        className="p-2 -mr-1 text-stone-500 hover:text-stone-950 cursor-pointer rounded-lg hover:bg-stone-100"
                        aria-label="Toggle artwork categories"
                      >
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${
                            isMobileArtworkAccordionOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {/* Accordion Categories */}
                    <AnimatePresence>
                      {isMobileArtworkAccordionOpen && (
                        <motion.div
                          id="mobile-artwork-categories-list"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="border-t border-stone-100 bg-stone-50/80 px-3 py-2 space-y-1"
                        >
                          {CATEGORIES.map((cat) => (
                            <button
                              key={cat.id}
                              id={`mobile-category-${cat.id}`}
                              onClick={() => handleCategorySelect(cat.id)}
                              className={`w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-sm text-left cursor-pointer transition-colors ${
                                currentPage === 'artworks' &&
                                selectedCategory === cat.id
                                  ? 'bg-stone-900 text-white font-medium'
                                  : 'text-stone-700 hover:bg-stone-200/70'
                              }`}
                            >
                              <span>{cat.name}</span>
                              <span className="text-xs font-devanagari opacity-70">
                                {cat.hindiName}
                              </span>
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Published */}
                  <button
                    id="mobile-nav-published"
                    onClick={() => handlePageSelect('published')}
                    className={`w-full text-left py-3.5 px-4 rounded-xl text-lg font-medium transition-colors cursor-pointer ${
                      currentPage === 'published'
                        ? 'bg-stone-900 text-white font-semibold shadow-xs'
                        : 'text-stone-800 hover:bg-stone-200/60 active:bg-stone-200'
                    }`}
                  >
                    Published
                  </button>

                  {/* Contact */}
                  <button
                    id="mobile-nav-contact"
                    onClick={() => handlePageSelect('contact')}
                    className={`w-full text-left py-3.5 px-4 rounded-xl text-lg font-medium transition-colors cursor-pointer ${
                      currentPage === 'contact'
                        ? 'bg-stone-900 text-white font-semibold shadow-xs'
                        : 'text-stone-800 hover:bg-stone-200/60 active:bg-stone-200'
                    }`}
                  >
                    Contact
                  </button>

                  {/* Bottom Signature in Drawer */}
                  <div className="pt-8 mt-6 border-t border-stone-200 text-center">
                    <KalaLogo size="sm" className="justify-center mb-2" />
                    <p className="text-xs text-stone-500">
                      Dr. Shivendra Singh Retrospective Portfolio
                    </p>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
  </>
);
};
