import React, { useState, useMemo } from 'react';
import { PageView, ArtworkCategory } from '../types';
import {
  ARTIST_BIOGRAPHY,
  TIMELINE_MILESTONES,
  ARCHIVAL_IMAGES,
  ARCHIVAL_CAROUSEL_ITEMS,
  CV_EDUCATION,
  CV_SOLO_EXHIBITIONS,
  CV_PAINTING_EXHIBITIONS,
  CV_GRAPHIC_PRINTS,
  CV_PHOTOGRAPHY,
  CV_POSTERS,
  CV_LOGO_DESIGNS,
  CV_COVER_DESIGNS,
  CV_AWARDS,
  CV_SPECIAL_PRESENTATIONS,
  CV_EDITORIAL,
  CV_PUBLICATIONS,
  CV_MISCELLANEOUS,
  CV_COLLECTIONS,
  CV_STAGE_THEATER,
  CV_ORGANIZER,
  CV_MEMBERSHIPS,
  CV_SEMINARS_WORKSHOPS,
} from '../data/artistData';
import {
  Award,
  GraduationCap,
  Palette,
  ChevronDown,
  ChevronUp,
  MapPin,
  Calendar,
  Sparkles,
  BookOpen,
  Camera,
  Layers,
  FileText,
  Building2,
  Users,
  Search,
  Phone,
  Mail,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ArchivalCarousel } from './ArchivalCarousel';

interface TheArtistViewProps {
  onNavigate: (page: PageView, category?: ArtworkCategory | null) => void;
}

// Reusable Lazy Archival Image with Skeleton Shimmer and Smooth Fade-in
const LazyArchivalImage: React.FC<{
  src: string;
  alt: string;
  aspectRatio?: string;
  hoverScale?: string;
  className?: string;
}> = ({
  src,
  alt,
  aspectRatio = 'aspect-4/3',
  hoverScale = 'hover:scale-102',
  className = '',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative ${aspectRatio} overflow-hidden bg-stone-200`}>
      {/* Shimmer skeleton while image loads */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-stone-200 via-stone-100 to-stone-200 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover filter grayscale contrast-105 transition-all duration-700 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0 scale-102'
        } ${hoverScale} ${className}`}
      />
    </div>
  );
};

type CVTab =
  | 'education'
  | 'awards'
  | 'exhibitions'
  | 'logos-covers'
  | 'collections-works'
  | 'editorial-seminars'
  | 'contact';

export const TheArtistView: React.FC<TheArtistViewProps> = ({ onNavigate }) => {
  const [isPortraitLoaded, setIsPortraitLoaded] = useState(false);
  const [activeCvTab, setActiveCvTab] = useState<CVTab>('education');
  const [cvSearchQuery, setCvSearchQuery] = useState('');
  const [isCvExpanded, setIsCvExpanded] = useState(true);

  // Group milestones by chronological eras for visual pacing
  const earlyMilestones = useMemo(() => TIMELINE_MILESTONES.slice(0, 9), []); // 1946 to 1981
  const middleMilestones = useMemo(() => TIMELINE_MILESTONES.slice(9, 13), []); // 1982 to 1999
  const lateMilestones = useMemo(() => TIMELINE_MILESTONES.slice(13), []); // 2000 to 2022

  // Filter helper for awards
  const filteredAwards = useMemo(() => {
    if (!cvSearchQuery.trim()) return CV_AWARDS;
    const q = cvSearchQuery.toLowerCase();
    return CV_AWARDS.filter(
      (a) =>
        a.year.toLowerCase().includes(q) ||
        a.award.toLowerCase().includes(q) ||
        a.organization.toLowerCase().includes(q) ||
        a.location.toLowerCase().includes(q)
    );
  }, [cvSearchQuery]);

  // Filter helper for painting exhibitions
  const filteredPaintings = useMemo(() => {
    if (!cvSearchQuery.trim()) return CV_PAINTING_EXHIBITIONS;
    const q = cvSearchQuery.toLowerCase();
    return CV_PAINTING_EXHIBITIONS.filter(
      (e) =>
        e.year.toLowerCase().includes(q) ||
        e.title.toLowerCase().includes(q) ||
        e.venue.toLowerCase().includes(q) ||
        e.location.toLowerCase().includes(q)
    );
  }, [cvSearchQuery]);

  // Filter helper for logos
  const filteredLogos = useMemo(() => {
    if (!cvSearchQuery.trim()) return CV_LOGO_DESIGNS;
    const q = cvSearchQuery.toLowerCase();
    return CV_LOGO_DESIGNS.filter(
      (l) =>
        (l.year && l.year.toLowerCase().includes(q)) ||
        l.title.toLowerCase().includes(q) ||
        l.location.toLowerCase().includes(q)
    );
  }, [cvSearchQuery]);

  return (
    <div id="the-artist-view" className="w-full bg-[#faf9f6] text-stone-900 pb-24">
      {/* 1. TOP HERO CARD - CHARCOAL & TERRACOTTA PROFILE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="bg-[#242628] rounded-xl sm:rounded-2xl p-6 sm:p-10 lg:p-12 text-white shadow-xl border border-stone-800"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Artist Portrait with Progressive CDN Loading & Skeleton */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-sm aspect-4/5 rounded-lg overflow-hidden border border-stone-700/80 shadow-2xl bg-stone-900">
                {!isPortraitLoaded && (
                  <div className="absolute inset-0 bg-stone-800 animate-pulse flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full border-2 border-stone-600 border-t-[#d66d4f] animate-spin" />
                  </div>
                )}
                <img
                  src={ARTIST_BIOGRAPHY.profileImage}
                  alt="Dr. Shivendra Singh — Portrait"
                  loading="eager"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onLoad={() => setIsPortraitLoaded(true)}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== ARTIST_BIOGRAPHY.profileImageFallback) {
                      target.src = ARTIST_BIOGRAPHY.profileImageFallback;
                    }
                  }}
                  className={`w-full h-full object-cover object-top filter grayscale contrast-105 transition-opacity duration-500 ease-out ${
                    isPortraitLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            </div>

            {/* Right Column: Artist Identity, Academic Pedigree & Biography */}
            <div className="lg:col-span-8 space-y-4 sm:space-y-6">
              <div>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
                  {ARTIST_BIOGRAPHY.name}
                </h1>
                <p className="text-stone-300 text-xs sm:text-sm font-medium mt-1">
                  {ARTIST_BIOGRAPHY.designation}
                </p>
              </div>

              {/* Distinction Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
                <div className="bg-stone-800/80 border border-stone-700/60 rounded p-2 text-stone-300">
                  <div className="text-[#d66d4f] font-bold">Gold Medalist '68</div>
                  <div className="text-[11px] text-stone-400">Lucknow Art College</div>
                </div>
                <div className="bg-stone-800/80 border border-stone-700/60 rounded p-2 text-stone-300">
                  <div className="text-[#d66d4f] font-bold">Gold Medalist '73</div>
                  <div className="text-[11px] text-stone-400">Banaras Hindu University</div>
                </div>
                <div className="bg-stone-800/80 border border-stone-700/60 rounded p-2 text-stone-300 col-span-2 sm:col-span-1">
                  <div className="text-[#d66d4f] font-bold">Ph.D. (1999)</div>
                  <div className="text-[11px] text-stone-400">Vidhya-Vachaspati, D.E.I.</div>
                </div>
              </div>

              <p className="text-stone-300 text-[14px] sm:text-[15px] font-light leading-relaxed tracking-wide text-justify sm:text-left">
                {ARTIST_BIOGRAPHY.heroBio}
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. SPECIAL RECOGNITION & PRIME MINISTER PRESENTATION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CV_SPECIAL_PRESENTATIONS.map((pres, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-4 sm:p-5 rounded-lg bg-white border border-stone-200/90 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-full bg-[#A6533B]/10 text-[#A6533B] flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-[#A6533B]">
                    Special Distinction
                  </span>
                </div>
                <h3 className="font-bold text-stone-900 text-sm leading-snug">
                  {pres.title}
                </h3>
                <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                  {pres.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. SECTION HEADER: A JOURNEY THROUGH ART & TIME */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#A6533B] font-normal tracking-tight">
            A Journey through Art &amp; Time
          </h2>
          <p className="text-stone-800 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mt-3 font-normal leading-relaxed">
            {ARTIST_BIOGRAPHY.subtitle}
          </p>
        </motion.div>
      </section>

      {/* 5. VISUAL TIMELINE & ARCHIVAL PHOTOGRAPHS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* MOVEMENT 1: 1946 - 1981 WITH STUDIO CLASSROOM ARCHIVE */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Studio / Classroom Photo */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="bg-white p-3 sm:p-4 rounded-sm border border-stone-200/90 shadow-md sticky top-24">
              <LazyArchivalImage
                src={ARCHIVAL_IMAGES.studioClassroom}
                alt="Archival Studio Class - Lucknow Art College"
                aspectRatio="aspect-square"
                hoverScale="hover:scale-102"
              />
              <div className="pt-3 px-1">
                <p className="text-[11px] uppercase tracking-widest text-stone-500 font-semibold font-mono">
                  Atelier &amp; Studio • Circa 1960s–70s
                </p>
                <p className="text-xs text-stone-700 mt-0.5">
                  Academic life studies and graphic printmaking atelier at Government College of Arts and Crafts, Lucknow.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Milestones (1946 to 1981) */}
          <div className="lg:col-span-7 relative">
            <div className="space-y-8 sm:space-y-10">
              {earlyMilestones.map((milestone, idx) => (
                <motion.div
                  key={milestone.year + idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  className="flex items-start gap-4 sm:gap-6 group"
                >
                  <div className="w-16 sm:w-20 shrink-0 text-right font-serif text-2xl sm:text-3xl text-stone-900 font-semibold tracking-tight pt-0.5">
                    {milestone.year}
                  </div>
                  <div className="flex flex-col items-center self-stretch shrink-0 relative pt-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#A6533B] border-2 border-white ring-2 ring-[#A6533B]/40 z-10 transition-transform group-hover:scale-125" />
                    {idx < earlyMilestones.length - 1 && (
                      <div className="w-0.5 bg-stone-300 grow mt-2 min-h-14" />
                    )}
                  </div>
                  <div className="grow pb-2">
                    <h3 className="font-bold text-stone-950 text-base sm:text-lg tracking-tight">
                      {milestone.title}
                    </h3>
                    <p className="text-xs font-mono text-[#A6533B] font-semibold mt-0.5">
                      {milestone.subtitle}
                    </p>
                    <p className="text-stone-600 text-[13.5px] sm:text-[14px] leading-relaxed mt-1">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FULL-WIDTH PANORAMIC ARCHIVAL BANNER */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white p-3 sm:p-5 rounded-sm border border-stone-300 shadow-md">
            <LazyArchivalImage
              src={ARCHIVAL_IMAGES.panoramicGroup}
              alt="Archival Convocation and Art Masters Gathering"
              aspectRatio="aspect-[1437/947]"
              hoverScale="hover:scale-101"
            />
            <div className="pt-3 px-1 text-center">
              <p className="text-[11px] uppercase tracking-widest text-stone-500 font-semibold font-mono">
                Historical Conclave &amp; Master Artist Assembly
              </p>
              <p className="text-xs text-stone-700 mt-0.5">
                Dr. Shivendra Singh with distinguished gurus, senior academicians, and cultural patrons on stage during a landmark national academy assembly.
              </p>
            </div>
          </div>
        </motion.section>

        {/* MOVEMENT 2: 1982 - 1999 WITH EXHIBITION PHOTO */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Solo Exhibition Photo */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="bg-white p-3 sm:p-4 rounded-sm border border-stone-200/90 shadow-md sticky top-24">
              <LazyArchivalImage
                src={ARCHIVAL_IMAGES.soloExhibition}
                alt="Dr. Shivendra Singh beside his masterwork canvas"
                aspectRatio="aspect-square"
                hoverScale="hover:scale-102"
              />
              <div className="pt-3 px-1">
                <p className="text-[11px] uppercase tracking-widest text-stone-500 font-semibold font-mono">
                  Solo Exhibition &amp; Gallery Debut • 1980s
                </p>
                <p className="text-xs text-stone-700 mt-0.5">
                  Dr. Shivendra Singh standing alongside his large monumental abstract expressionist painting.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Milestones (1982 to 1999) */}
          <div className="lg:col-span-7 relative">
            <div className="space-y-8 sm:space-y-10">
              {middleMilestones.map((milestone, idx) => (
                <motion.div
                  key={milestone.year + idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  className="flex items-start gap-4 sm:gap-6 group"
                >
                  <div className="w-16 sm:w-20 shrink-0 text-right font-serif text-2xl sm:text-3xl text-stone-900 font-semibold tracking-tight pt-0.5">
                    {milestone.year}
                  </div>
                  <div className="flex flex-col items-center self-stretch shrink-0 relative pt-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#A6533B] border-2 border-white ring-2 ring-[#A6533B]/40 z-10 transition-transform group-hover:scale-125" />
                    {idx < middleMilestones.length - 1 && (
                      <div className="w-0.5 bg-stone-300 grow mt-2 min-h-14" />
                    )}
                  </div>
                  <div className="grow pb-2">
                    <h3 className="font-bold text-stone-950 text-base sm:text-lg tracking-tight">
                      {milestone.title}
                    </h3>
                    <p className="text-xs font-mono text-[#A6533B] font-semibold mt-0.5">
                      {milestone.subtitle}
                    </p>
                    <p className="text-stone-600 text-[13.5px] sm:text-[14px] leading-relaxed mt-1">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ARCHIVAL PHOTOGRAPHIC CAROUSEL (EXPANDED & CLEAN AUTO-MOVING) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl xl:max-w-7xl mx-auto px-3 sm:px-6 my-8 sm:my-12"
        >
          <ArchivalCarousel items={ARCHIVAL_CAROUSEL_ITEMS} autoPlayInterval={3800} />
        </motion.section>

        {/* MOVEMENT 3: 2000 - 2022 MILESTONES */}
        <section className="max-w-4xl mx-auto">
          <div className="space-y-8 sm:space-y-10">
            {lateMilestones.map((milestone, idx) => (
              <motion.div
                key={milestone.year + idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="flex items-start gap-4 sm:gap-6 group"
              >
                <div className="w-16 sm:w-20 shrink-0 text-right font-serif text-2xl sm:text-3xl text-stone-900 font-semibold tracking-tight pt-0.5">
                  {milestone.year}
                </div>
                <div className="flex flex-col items-center self-stretch shrink-0 relative pt-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#A6533B] border-2 border-white ring-2 ring-[#A6533B]/40 z-10 transition-transform group-hover:scale-125" />
                  {idx < lateMilestones.length - 1 && (
                    <div className="w-0.5 bg-stone-300 grow mt-2 min-h-14" />
                  )}
                </div>
                <div className="grow pb-2">
                  <h3 className="font-bold text-stone-950 text-base sm:text-lg tracking-tight">
                    {milestone.title}
                  </h3>
                  <p className="text-xs font-mono text-[#A6533B] font-semibold mt-0.5">
                    {milestone.subtitle}
                  </p>
                  <p className="text-stone-600 text-[13.5px] sm:text-[14px] leading-relaxed mt-1">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* 6. COMPLETE CURRICULUM VITAE ARCHIVE SECTION (PDF FINAL CONTENT) */}
      <section
        id="cv-archives-section"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28"
      >
        <div className="bg-white rounded-2xl border border-stone-200 shadow-md overflow-hidden">
          {/* Section Banner Header */}
          <div className="bg-stone-900 text-white p-6 sm:p-8 lg:p-10 border-b border-stone-800">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-[#d66d4f] font-bold">
                  Official Document Records
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal mt-1">
                  Curriculum Vitae — Dr. Shivendra Singh
                </h2>
                <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-2xl">
                  Comprehensive academic qualifications, awards, solo exhibitions, graphic print tours, published articles, and institutional collections.
                </p>
              </div>

              {/* Live Filter / Search Input */}
              <div className="w-full sm:w-72 relative">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={cvSearchQuery}
                  onChange={(e) => setCvSearchQuery(e.target.value)}
                  placeholder="Filter records (e.g. Lucknow, BHU, 1987)..."
                  className="w-full pl-9 pr-3 py-2 bg-stone-800 border border-stone-700 rounded-lg text-xs text-white placeholder-stone-400 focus:outline-none focus:border-[#d66d4f] transition-colors"
                />
              </div>
            </div>

            {/* Navigation Tabs for CV Categories */}
            <div className="flex flex-wrap items-center gap-1.5 mt-6 pt-4 border-t border-stone-800 text-xs font-semibold">
              <button
                onClick={() => setActiveCvTab('education')}
                className={`px-3.5 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeCvTab === 'education'
                    ? 'bg-[#d66d4f] text-white shadow-sm'
                    : 'text-stone-300 hover:text-white hover:bg-stone-800'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Education ({CV_EDUCATION.length})</span>
              </button>

              <button
                onClick={() => setActiveCvTab('awards')}
                className={`px-3.5 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeCvTab === 'awards'
                    ? 'bg-[#d66d4f] text-white shadow-sm'
                    : 'text-stone-300 hover:text-white hover:bg-stone-800'
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>Awards &amp; Honors ({CV_AWARDS.length})</span>
              </button>

              <button
                onClick={() => setActiveCvTab('exhibitions')}
                className={`px-3.5 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeCvTab === 'exhibitions'
                    ? 'bg-[#d66d4f] text-white shadow-sm'
                    : 'text-stone-300 hover:text-white hover:bg-stone-800'
                }`}
              >
                <Palette className="w-3.5 h-3.5" />
                <span>Exhibitions ({CV_PAINTING_EXHIBITIONS.length + CV_GRAPHIC_PRINTS.length + CV_SOLO_EXHIBITIONS.length})</span>
              </button>

              <button
                onClick={() => setActiveCvTab('logos-covers')}
                className={`px-3.5 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeCvTab === 'logos-covers'
                    ? 'bg-[#d66d4f] text-white shadow-sm'
                    : 'text-stone-300 hover:text-white hover:bg-stone-800'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Logos &amp; Cover Designs ({CV_LOGO_DESIGNS.length + CV_COVER_DESIGNS.length})</span>
              </button>

              <button
                onClick={() => setActiveCvTab('collections-works')}
                className={`px-3.5 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeCvTab === 'collections-works'
                    ? 'bg-[#d66d4f] text-white shadow-sm'
                    : 'text-stone-300 hover:text-white hover:bg-stone-800'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>Collections &amp; Monumental Works</span>
              </button>

              <button
                onClick={() => setActiveCvTab('editorial-seminars')}
                className={`px-3.5 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeCvTab === 'editorial-seminars'
                    ? 'bg-[#d66d4f] text-white shadow-sm'
                    : 'text-stone-300 hover:text-white hover:bg-stone-800'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Editorial, Press &amp; Memberships</span>
              </button>

              <button
                onClick={() => setActiveCvTab('contact')}
                className={`px-3.5 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeCvTab === 'contact'
                    ? 'bg-[#d66d4f] text-white shadow-sm'
                    : 'text-stone-300 hover:text-white hover:bg-stone-800'
                }`}
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Studio Contact</span>
              </button>
            </div>
          </div>

          {/* Tab Content Panels */}
          <div className="p-6 sm:p-8 lg:p-10 bg-stone-50/50">
            {/* TAB 1: EDUCATION */}
            {activeCvTab === 'education' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-stone-900 font-semibold">
                    Academic Qualifications &amp; Music Pedigree
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Formal academic degrees, double gold medals, and musical training
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {CV_EDUCATION.map((edu, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-xl bg-white border border-stone-200 shadow-sm relative overflow-hidden"
                    >
                      {edu.honor && (
                        <span className="absolute top-4 right-4 px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider bg-[#A6533B]/10 text-[#A6533B] rounded">
                          {edu.honor}
                        </span>
                      )}
                      <span className="font-mono text-xs font-bold text-[#A6533B]">
                        {edu.year}
                      </span>
                      <h4 className="font-bold text-stone-900 text-sm sm:text-base mt-1 pr-16">
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-stone-600 mt-1">
                        {edu.institution}
                      </p>
                      {edu.notes && (
                        <p className="text-[11px] text-stone-500 mt-2 italic bg-stone-50 p-2 rounded border border-stone-100">
                          {edu.notes}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: AWARDS & HONORS */}
            {activeCvTab === 'awards' && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-stone-900 font-semibold">
                      Chronological Awards &amp; Honors (1959 – 2022)
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">
                      State Lalit Kala Academy awards, national honors, BHU merit prizes, and society citations
                    </p>
                  </div>
                  <span className="text-xs font-mono text-stone-500">
                    Showing {filteredAwards.length} of {CV_AWARDS.length} accolades
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {filteredAwards.map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-3.5 sm:p-4 rounded-lg bg-white border transition-all ${
                        item.highlight
                          ? 'border-[#A6533B]/40 shadow-sm bg-gradient-to-r from-white to-[#A6533B]/5'
                          : 'border-stone-200'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="grow">
                          <span className="text-xs font-mono font-bold text-[#A6533B]">
                            {item.year}
                          </span>
                          <h4 className="font-bold text-stone-900 text-sm mt-0.5">
                            {item.award}
                          </h4>
                          <p className="text-xs text-stone-600 mt-0.5">
                            {item.organization}
                          </p>
                        </div>
                        <span className="text-[11px] font-mono text-stone-400 shrink-0 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: EXHIBITIONS ARCHIVE */}
            {activeCvTab === 'exhibitions' && (
              <div className="space-y-10">
                {/* Solo Exhibitions */}
                <div className="space-y-4">
                  <h3 className="font-serif text-xl sm:text-2xl text-stone-900 font-semibold flex items-center gap-2">
                    <Palette className="w-5 h-5 text-[#A6533B]" />
                    <span>Solo Painting Exhibitions</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {CV_SOLO_EXHIBITIONS.map((solo, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-white border border-[#A6533B]/30 shadow-sm"
                      >
                        <span className="font-mono text-xs font-bold text-[#A6533B]">
                          {solo.year} • Solo
                        </span>
                        <h4 className="font-bold text-stone-900 text-sm mt-1">
                          {solo.title}
                        </h4>
                        <p className="text-xs text-stone-600 mt-1">
                          {solo.venue}, {solo.city}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Graphic Prints Exhibited */}
                <div className="space-y-4">
                  <h3 className="font-serif text-xl sm:text-2xl text-stone-900 font-semibold flex items-center gap-2">
                    <Layers className="w-5 h-5 text-[#A6533B]" />
                    <span>Graphic Prints Exhibited (Printmaking Series)</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                    {CV_GRAPHIC_PRINTS.map((print, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-lg bg-white border border-stone-200"
                      >
                        <span className="font-mono text-xs font-bold text-[#A6533B]">
                          {print.year}
                        </span>
                        <h5 className="font-bold text-stone-900 text-xs mt-0.5">
                          {print.title}
                        </h5>
                        <p className="text-[11px] text-stone-500 mt-0.5">
                          {print.venue}, {print.location}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Photography & Applied Art Displays */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wider flex items-center gap-2 font-mono text-[#A6533B]">
                      <Camera className="w-4 h-4" />
                      <span>Photography Exhibitions</span>
                    </h4>
                    <ul className="space-y-2">
                      {CV_PHOTOGRAPHY.map((p, idx) => (
                        <li
                          key={idx}
                          className="p-3 rounded-lg bg-white border border-stone-200 text-xs"
                        >
                          <div className="flex justify-between font-bold text-stone-900">
                            <span>{p.title}</span>
                            <span className="text-[#A6533B] font-mono">{p.year}</span>
                          </div>
                          <p className="text-stone-500 mt-0.5">
                            {p.venue}, {p.location}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wider flex items-center gap-2 font-mono text-[#A6533B]">
                      <FileText className="w-4 h-4" />
                      <span>Applied Art &amp; Poster Displays</span>
                    </h4>
                    <ul className="space-y-2">
                      {CV_POSTERS.map((post, idx) => (
                        <li
                          key={idx}
                          className="p-3 rounded-lg bg-white border border-stone-200 text-xs"
                        >
                          <div className="flex justify-between font-bold text-stone-900">
                            <span>{post.title}</span>
                            <span className="text-[#A6533B] font-mono">{post.year}</span>
                          </div>
                          <p className="text-stone-500 mt-0.5">
                            {post.venue}, {post.location}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Comprehensive Painting Exhibitions (1965 - 2011) */}
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-t border-stone-200 pt-6">
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl text-stone-900 font-semibold">
                        State, National &amp; International Painting Exhibitions (1965 – 2011)
                      </h3>
                      <p className="text-xs text-stone-500 mt-0.5">
                        U.P. State Lalit Kala Academy, AIFACS New Delhi, Kathmandu Nepal, Shantiniketan, Jaipur, Bhopal
                      </p>
                    </div>
                    <span className="text-xs font-mono text-stone-500">
                      {filteredPaintings.length} exhibitions listed
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {filteredPaintings.map((ex, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-white border border-stone-200 text-xs"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono font-bold text-[#A6533B]">
                            {ex.year}
                          </span>
                          <span className="text-[11px] text-stone-400 font-mono">
                            {ex.location}
                          </span>
                        </div>
                        <h5 className="font-bold text-stone-900 mt-1">
                          {ex.title}
                        </h5>
                        <p className="text-stone-500 mt-0.5">
                          {ex.venue}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: LOGOS & COVER DESIGNS */}
            {activeCvTab === 'logos-covers' && (
              <div className="space-y-10">
                {/* Logo Design Masterpieces */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-stone-900 font-semibold">
                      Important Institutional Logo &amp; Symbol Designs
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Historic identity marks designed for academic institutes, banks, art societies, and government forums
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {filteredLogos.map((logo, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-lg bg-white border border-stone-200 shadow-2xs"
                      >
                        <div className="flex items-center justify-between text-[11px] font-mono text-[#A6533B]">
                          <span>{logo.year}</span>
                          <span className="text-stone-400">{logo.location}</span>
                        </div>
                        <h4 className="font-bold text-stone-900 text-xs sm:text-sm mt-1">
                          {logo.title}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Historic Book & Album Cover Designs */}
                <div className="space-y-4 border-t border-stone-200 pt-6">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-stone-900 font-semibold">
                      Book, Journal &amp; Gramophone Record Cover Designs
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Record covers for Bharat Ratna Ustad Bismillah Khan, encyclopedias, and annual institute publications
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {CV_COVER_DESIGNS.map((cov, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-white border border-stone-200"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-[#A6533B]">
                            {cov.year}
                          </span>
                          <span className="px-2 py-0.5 text-[10px] font-mono uppercase bg-stone-100 text-stone-600 rounded">
                            Cover Design
                          </span>
                        </div>
                        <h4 className="font-bold text-stone-900 text-sm mt-1.5">
                          {cov.title}
                        </h4>
                        <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                          {cov.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 5: COLLECTIONS & MONUMENTAL WORKS */}
            {activeCvTab === 'collections-works' && (
              <div className="space-y-10">
                {/* Permanent Institutional Collections */}
                <div className="space-y-4">
                  <h3 className="font-serif text-xl sm:text-2xl text-stone-900 font-semibold flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-[#A6533B]" />
                    <span>Permanent Public &amp; Institutional Collections</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {CV_COLLECTIONS.institutions.map((inst, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-lg bg-white border border-stone-200 flex items-center gap-2.5"
                      >
                        <div className="w-2 h-2 rounded-full bg-[#A6533B]" />
                        <span className="text-xs sm:text-sm font-semibold text-stone-900">
                          {inst}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Personal & Private Collections Worldwide */}
                <div className="p-4 sm:p-5 rounded-xl bg-white border border-stone-200">
                  <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wider font-mono text-[#A6533B] mb-2">
                    Private &amp; Personal Collections (National &amp; International)
                  </h4>
                  <p className="text-xs text-stone-600 mb-3">
                    Paintings and graphic prints held in private collections of connoisseurs across India and abroad:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {CV_COLLECTIONS.privateLocations.map((loc, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-stone-100 text-stone-800 text-xs font-medium border border-stone-200"
                      >
                        📍 {loc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Miscellaneous Creative & Monumental Works */}
                <div className="space-y-4 border-t border-stone-200 pt-6">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-stone-900 font-semibold">
                      Monumental Canvases, Restorations &amp; Caricature Series
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">
                      16-foot canvas, presidential hall restorations, Gandhi/Nehru portraits for UGC, and daily political cartoons
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {CV_MISCELLANEOUS.map((misc, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-white border border-stone-200"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-bold text-[#A6533B]">
                            {misc.year}
                          </span>
                        </div>
                        <h4 className="font-bold text-stone-900 text-sm mt-1">
                          {misc.title}
                        </h4>
                        <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                          {misc.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 6: EDITORIAL, SEMINARS & MEMBERSHIPS */}
            {activeCvTab === 'editorial-seminars' && (
              <div className="space-y-10">
                {/* Editorial Roles & Publications */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wider font-mono text-[#A6533B] flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      <span>Editorial Leadership</span>
                    </h4>
                    <ul className="space-y-2.5">
                      {CV_EDITORIAL.map((ed, idx) => (
                        <li
                          key={idx}
                          className="p-3 rounded-lg bg-white border border-stone-200 text-xs"
                        >
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold bg-[#A6533B]/10 text-[#A6533B]">
                            {ed.role}
                          </span>
                          <h5 className="font-bold text-stone-900 mt-1.5">
                            {ed.journal}
                          </h5>
                          <p className="text-stone-500 font-mono text-[11px] mt-0.5">
                            {ed.years}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wider font-mono text-[#A6533B] flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <span>Autobiographical &amp; Works Published</span>
                    </h4>
                    <ul className="space-y-2.5">
                      {CV_PUBLICATIONS.map((pub, idx) => (
                        <li
                          key={idx}
                          className="p-3 rounded-lg bg-white border border-stone-200 text-xs"
                        >
                          <div className="flex justify-between font-mono text-stone-400">
                            <span>{pub.year}</span>
                          </div>
                          <h5 className="font-bold text-stone-900 mt-0.5">
                            {pub.title}
                          </h5>
                          <p className="text-stone-500 text-[11px] mt-0.5">
                            {pub.publisher}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Professional Memberships */}
                <div className="space-y-3 border-t border-stone-200 pt-6">
                  <h4 className="font-serif text-xl text-stone-900 font-semibold flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#A6533B]" />
                    <span>Academic &amp; Professional Body Memberships</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {CV_MEMBERSHIPS.map((mem, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-white border border-stone-200 text-xs text-stone-800 flex items-start gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#A6533B] shrink-0 mt-0.5" />
                        <span>{mem}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Seminars, Workshops & Camps */}
                <div className="space-y-4 border-t border-stone-200 pt-6">
                  <div className="flex justify-between items-center">
                    <h4 className="font-serif text-xl text-stone-900 font-semibold">
                      Seminars, Workshops &amp; Artist Camps (1978 – 2012)
                    </h4>
                    <span className="text-xs font-mono text-stone-500">
                      {CV_SEMINARS_WORKSHOPS.length} documented
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {CV_SEMINARS_WORKSHOPS.map((sem, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-white border border-stone-200 text-xs"
                      >
                        <span className="font-mono font-bold text-[#A6533B]">
                          {sem.year}
                        </span>
                        <h5 className="font-bold text-stone-900 mt-0.5">
                          {sem.title}
                        </h5>
                        <p className="text-stone-500 text-[11px] mt-0.5">
                          {sem.organizer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stage Decoration & Theatrical Work */}
                <div className="space-y-3 border-t border-stone-200 pt-6">
                  <h4 className="font-serif text-xl text-stone-900 font-semibold">
                    Stage Decoration, Theatrical Sets &amp; Makeup Work
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {CV_STAGE_THEATER.map((st, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-white border border-stone-200 text-xs"
                      >
                        <span className="font-mono font-bold text-[#A6533B]">
                          {st.period}
                        </span>
                        <h5 className="font-bold text-stone-900 mt-0.5">
                          {st.venue}
                        </h5>
                        <p className="text-stone-500 text-[11px] mt-0.5">
                          {st.location}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 7: STUDIO & RESIDENTIAL CONTACT */}
            {activeCvTab === 'contact' && (
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="text-center">
                  <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-semibold">
                    Studio &amp; Residential Address
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Direct contact for retrospective inquiries, academic publications, and collectors
                  </p>
                </div>

                <div className="p-6 sm:p-8 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#A6533B] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-stone-900 text-base">
                        Dr. Shivendra Singh
                      </h4>
                      <p className="text-sm text-stone-600 mt-1">
                        178, Ansal Courtyard, Dhahtora, Shastripurum,<br />
                        Agra – 282007, Uttar Pradesh, India
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-stone-100 pt-4 flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#A6533B] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-stone-900 text-sm">
                        Telephone / Mobile
                      </h4>
                      <div className="flex flex-wrap gap-3 mt-1 text-sm text-stone-700">
                        <a
                          href="tel:+919412487718"
                          className="hover:text-[#A6533B] underline underline-offset-2 transition-colors"
                        >
                          +91 94124 87718
                        </a>
                        <span>•</span>
                        <a
                          href="tel:+919412342466"
                          className="hover:text-[#A6533B] underline underline-offset-2 transition-colors"
                        >
                          +91 94123 42466
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-stone-100 pt-4 flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#A6533B] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-stone-900 text-sm">
                        Official Email
                      </h4>
                      <a
                        href="mailto:shivendraagra@gmail.com"
                        className="text-sm text-[#A6533B] hover:underline mt-1 block font-medium"
                      >
                        shivendraagra@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onNavigate('contact')}
                      className="w-full py-3 bg-[#A6533B] hover:bg-[#8F442F] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-all shadow-sm cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open Contact Message Form</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};
