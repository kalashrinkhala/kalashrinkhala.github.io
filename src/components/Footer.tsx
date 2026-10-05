import React from 'react';
import { PageView, ArtworkCategory } from '../types';
import { KalaLogo } from './KalaLogo';
import { Facebook, Twitter, Instagram, ArrowUp, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageView, category?: ArtworkCategory | null) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="w-full">
      {/* Pre-footer Signature Glyph */}
      <div className="py-12 bg-[#faf9f6] flex flex-col items-center justify-center border-t border-stone-200/60">
        <KalaLogo
          size="md"
          onClick={scrollToTop}
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Deep Black Footer Bar matching reference */}
      <div className="bg-black text-stone-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center space-y-6">
          {/* Main Copyright Notice */}
          <div className="text-center">
            <p
              id="footer-copyright-text"
              className="text-[12px] sm:text-[13px] tracking-[0.18em] uppercase text-stone-300 font-medium"
            >
              ALL ARTWORK © COPYRIGHT BY DR. SHIVENDRA SINGH'S
            </p>
            <p className="text-[11px] text-stone-500 tracking-widest mt-1 uppercase">
              All Rights Reserved • Fine Art Archive & Studio
            </p>
          </div>

          {/* Social Media Links */}
          <div id="footer-social-links" className="flex items-center space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 hover:text-white hover:bg-stone-800 hover:border-stone-700 transition-all cursor-pointer"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 hover:text-white hover:bg-stone-800 hover:border-stone-700 transition-all cursor-pointer"
              aria-label="Twitter / X"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 hover:text-white hover:bg-stone-800 hover:border-stone-700 transition-all cursor-pointer"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          {/* Secondary Footer Nav */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-stone-400 pt-4 border-t border-stone-900/90 w-full max-w-lg">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-stone-200 transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate('artist')}
              className="hover:text-stone-200 transition-colors cursor-pointer"
            >
              The Artist
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate('artworks')}
              className="hover:text-stone-200 transition-colors cursor-pointer"
            >
              Art Works Gallery
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate('published')}
              className="hover:text-stone-200 transition-colors cursor-pointer"
            >
              Published
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-stone-200 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-white transition-colors pt-2 cursor-pointer"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
