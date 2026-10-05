import { Artwork, ArtworkCategory, CategoryMeta, CritiqueQuote } from '../types';

// ============================================================================
// 1. CATEGORY DEFINITIONS & METADATA
// ============================================================================
export const CATEGORIES: CategoryMeta[] = [
  {
    id: 'graphics',
    name: 'GRAPHICS',
    hindiName: 'ग्राफिक्स',
    tagline: 'Printmaking, Linocuts, Woodblocks & Serigraphs',
    description: 'Explorations in graphic textures, relief block prints, and structured abstract geometry celebrating raw pigmented resonance.',
    featuredImage: '/images/categories/graphics.jpg',
    count: 4,
  },
  {
    id: 'drawings',
    name: 'DRAWINGS',
    hindiName: 'रेखाचित्र',
    tagline: 'Charcoal, Sumi Ink, Conté & Graphite',
    description: 'Dynamic gestural strokes, kinetic galloping figures, and quiet linear studies capturing the soul of form in rapid motion.',
    featuredImage: '/images/artworks/drawings/Dadi ji.jpg',
    count: 6,
  },
  {
    id: 'oil-colors',
    name: 'OIL COLORS',
    hindiName: 'तैल चित्र',
    tagline: 'Impasto, Glazes & Figurative Narratives',
    description: 'Luminous layered oil compositions portraying intimate rural dialogues, classical feminine grace, and contemplative human moments.',
    featuredImage: '/images/categories/oil-colors.jpg',
    count: 4,
  },
  {
    id: 'acrylic-colors',
    name: 'ACRYLIC COLORS',
    hindiName: 'एक्रिलिक रंग',
    tagline: 'Dynamic Textures & Expressive Currents',
    description: 'Swirling chromatic tempests, elemental forces of nature, oceanic waves, and vivid textured acrylic canvases.',
    featuredImage: '/images/categories/acrylic-colors.jpg',
    count: 4,
  },
  {
    id: 'water-colors',
    name: 'WATER COLORS',
    hindiName: 'जल रंग',
    tagline: 'Atmospheric Washes & Heritage Landscapes',
    description: 'Delicate wet-on-wet watercolor evocations of misty riversides, the timeless Ghats of Varanasi, and dawn over monumental heritage.',
    featuredImage: '/images/categories/water-colors.jpg',
    count: 4,
  },
  {
    id: 'composition',
    name: 'COMPOSITION',
    hindiName: 'संयोजन',
    tagline: 'Monochromatic Tonalism & Spatial Drama',
    description: 'Explosive ink washes, contrasting negative space, and evocative rhythmic arrangements fusing traditional aesthetics with modern abstraction.',
    featuredImage: '/images/categories/composition.jpg',
    count: 6,
  },
  {
    id: 'caricatures',
    name: 'CARICATURES',
    hindiName: 'व्यक्तिचित्र / व्यंग्य',
    tagline: 'Character Studies & Personality Portraits',
    description: 'Warm, penetrating observational portraits capturing the idiosyncratic warmth, wit, and wisdom of prominent literary and cultural stalwarts.',
    featuredImage: '/images/artworks/caricatures/IMG_001.jpg',
    count: 4,
  },
  {
    id: 'collages',
    name: 'COLLAGES',
    hindiName: 'कोलाज',
    tagline: 'Mixed Media, Torn Parchment & Urban Textures',
    description: 'Assembled fragments of handcrafted paper, newspaper, textiles, and earthy pigments depicting humble village architecture and life.',
    featuredImage: '/images/categories/collages.jpg',
    count: 4,
  },
  {
    id: 'cartoons',
    name: 'CARTOONS',
    hindiName: 'कार्टून / व्यंग्य रेखा',
    tagline: 'Social Commentary & Satirical Sketches',
    description: 'Sharp, compassionate, and humorous social critiques depicting the ironies of daily life, political paradoxes, and rural folklore.',
    featuredImage: '/images/artworks/cartoons/aabohawa - 01_2.jpg',
    count: 4,
  },
  {
    id: 'illustration',
    name: 'ILLUSTRATION',
    hindiName: 'रेखांकन / चित्रांकन',
    tagline: 'Architectural Etchings & Book Illustrations',
    description: 'Intricate pen-and-ink cross-hatchings detailing ancient Indian temple architecture, forgotten cenotaphs, and classic literature.',
    featuredImage: '/images/artworks/illustration/DSC_0001.JPG',
    count: 4,
  },
  {
    id: 'logo-symbol-design',
    name: 'LOGO & SYMBOL DESIGN',
    hindiName: 'प्रतीक एवं चिन्ह रचना',
    tagline: 'Minimalist Glyphs, Identity & Typography',
    description: 'Thoughtful visual identities, timeless emblem designs, and semiotic motifs crafted for cultural institutions and academic bodies.',
    featuredImage: '/images/categories/logo-symbol-design.jpg',
    count: 3,
  },
  {
    id: 'poster',
    name: 'POSTER',
    hindiName: 'पोस्टर कला',
    tagline: 'Social Advocacy, Theater & Cultural Movements',
    description: 'Striking high-contrast silkscreen and relief posters advocating peace, human liberation, poetic solidarity, and theatrical festivals.',
    featuredImage: '/images/artworks/poster/Dsc_0162.jpg',
    count: 4,
  },
];

// ============================================================================
// 2. CATEGORY-BASED ARTWORK DATASETS (Local Assets from /public/images)
// ============================================================================

export const graphicsArtworks: Artwork[] = [
  {
    id: 'art-g-1',
    title: 'Graphics Study I',
    hindiTitle: 'ग्राफिक्स अध्ययन I',
    category: 'graphics',
    categoryName: 'GRAPHICS',
    year: '2005',
    medium: 'Printmaking & Graphic Art',
    dimensions: '28 × 15 inches',
    image: '/images/artworks/graphics/Dsc_0141.jpg',
    aspectRatio: '16/9',
    isFeaturedHome: true,
    featuredOrder: 1,
    tags: ['Graphics', 'Printmaking', 'Contemporary Art']
  },
  {
    id: 'art-g-2',
    title: 'Graphics Study II',
    hindiTitle: 'ग्राफिक्स अध्ययन II',
    category: 'graphics',
    categoryName: 'GRAPHICS',
    year: '2005',
    medium: 'Printmaking & Graphic Art',
    dimensions: '24 × 15 inches',
    image: '/images/artworks/graphics/Dsc_0142.jpg',
    aspectRatio: '16/10'
  },
  {
    id: 'art-g-3',
    title: 'Graphics Study III',
    hindiTitle: 'ग्राफिक्स अध्ययन III',
    category: 'graphics',
    categoryName: 'GRAPHICS',
    year: '2005',
    medium: 'Printmaking & Graphic Art',
    dimensions: '20 × 31 inches',
    image: '/images/artworks/graphics/Dsc_0143.jpg',
    aspectRatio: '2/3'
  },
  {
    id: 'art-g-4',
    title: 'Graphics Study IV',
    hindiTitle: 'ग्राफिक्स अध्ययन IV',
    category: 'graphics',
    categoryName: 'GRAPHICS',
    year: '2005',
    medium: 'Printmaking & Graphic Art',
    dimensions: '20 × 22 inches',
    image: '/images/artworks/graphics/Dsc_0168.jpg',
    aspectRatio: '4/5'
  },
];

export const drawingsArtworks: Artwork[] = [
  {
    id: 'art-d-1',
    title: 'Dadi Ji (Matriarch Portrait)',
    hindiTitle: 'दादी जी - व्यक्ति चित्र',
    category: 'drawings',
    categoryName: 'DRAWINGS',
    year: '2004',
    medium: 'Pencil & Charcoal on Paper',
    dimensions: '24 × 18 inches',
    image: '/images/artworks/drawings/Dadi ji.jpg',
    aspectRatio: '3/4',
    isFeaturedHome: true,
    featuredOrder: 2,
    series: 'Figurative & Portrait Studies',
    tags: ['Drawing', 'Portrait', 'Pencil', 'Charcoal', 'Figurative']
  },
  {
    id: 'art-d-2',
    title: 'Drawing Study I',
    hindiTitle: 'रेखाचित्र अध्ययन I',
    category: 'drawings',
    categoryName: 'DRAWINGS',
    year: '2004',
    medium: 'Charcoal & Ink on Paper',
    dimensions: '28 × 16 inches',
    image: '/images/artworks/drawings/19.jpg',
    aspectRatio: '9/16',
    series: 'Linear & Form Studies',
    tags: ['Drawing', 'Conté', 'Linear Study']
  },
  {
    id: 'art-d-3',
    title: 'Drawing Study II',
    hindiTitle: 'रेखाचित्र अध्ययन II',
    category: 'drawings',
    categoryName: 'DRAWINGS',
    year: '2004',
    medium: 'Graphite & Charcoal on Archival Sheet',
    dimensions: '26 × 22 inches',
    image: '/images/artworks/drawings/50.jpg',
    aspectRatio: '4/5',
    series: 'Linear & Form Studies',
    tags: ['Drawing', 'Graphite', 'Form Study']
  },
  {
    id: 'art-d-4',
    title: 'Drawing Study III',
    hindiTitle: 'रेखाचित्र अध्ययन III',
    category: 'drawings',
    categoryName: 'DRAWINGS',
    year: '2005',
    medium: 'Ink Line & Wash on Paper',
    dimensions: '28 × 18 inches',
    image: '/images/artworks/drawings/60.jpg',
    aspectRatio: '2/3',
    series: 'Linear & Form Studies',
    tags: ['Drawing', 'Ink', 'Gestural']
  },
  {
    id: 'art-d-5',
    title: 'Drawing Study IV',
    hindiTitle: 'रेखाचित्र अध्ययन IV',
    category: 'drawings',
    categoryName: 'DRAWINGS',
    year: '2005',
    medium: 'Charcoal & Conté Crayon on Paper',
    dimensions: '26 × 19 inches',
    image: '/images/artworks/drawings/71.jpg',
    aspectRatio: '3/4',
    series: 'Linear & Form Studies',
    tags: ['Drawing', 'Charcoal', 'Tonal']
  },
  {
    id: 'art-d-6',
    title: 'Drawing Study V',
    hindiTitle: 'रेखाचित्र अध्ययन V',
    category: 'drawings',
    categoryName: 'DRAWINGS',
    year: '2006',
    medium: 'Pen & Ink Study on Paper',
    dimensions: '22 × 15 inches',
    image: '/images/artworks/drawings/a.jpg',
    aspectRatio: '2/3',
    series: 'Linear & Form Studies',
    tags: ['Drawing', 'Pen & Ink', 'Sketch']
  },
];

export const oilColorsArtworks: Artwork[] = [
  {
    id: 'art-o-1',
    title: 'Three Companions',
    hindiTitle: 'माँ / मातृत्व / वृद्धा',
    category: 'oil-colors',
    categoryName: 'OIL COLORS',
    year: '2000',
    medium: 'Oil on canvas',
    dimensions: '24 × 30 inches',
    image: '/images/artworks/oil-colors/6.jpg',
    aspectRatio: '4/5',
    isFeaturedHome: true,
    featuredOrder: 3,
    tags: ['Oil', 'Figurative', 'Portraits', 'Indian Art']
  },
  {
    id: 'art-o-2',
    title: 'Evening Prayer at Manikarnika',
    hindiTitle: 'मणिकर्णिका पर संध्या आरती',
    category: 'oil-colors',
    categoryName: 'OIL COLORS',
    year: '1993',
    medium: 'Oil on canvas with palette knife',
    dimensions: '54 × 40 inches',
    image: '/images/artworks/oil-colors/15.jpg',
    series: 'Varanasi Chronicles'
  },
  {
    id: 'art-o-3',
    title: 'The Potter of Chunar',
    hindiTitle: 'चुनार का कुम्हार',
    category: 'oil-colors',
    categoryName: 'OIL COLORS',
    year: '1999',
    medium: 'Oil on stretched canvas',
    dimensions: '36 × 30 inches',
    image: '/images/artworks/oil-colors/17.jpg',
    series: 'Artisans of the Soil'
  },
  {
    id: 'art-o-4',
    title: 'Monsoon Clouds over Kashi',
    hindiTitle: 'काशी पर मेघ मल्हार',
    category: 'oil-colors',
    categoryName: 'OIL COLORS',
    year: '2007',
    medium: 'Impasto oil on heavy canvas',
    dimensions: '42 × 32 inches',
    image: '/images/artworks/oil-colors/18.jpg',
    series: 'Varanasi Chronicles'
  },
];

export const acrylicColorsArtworks: Artwork[] = [
  {
    id: 'art-a-1',
    title: 'Acrylic Study I',
    hindiTitle: 'एक्रिलिक अध्ययन I',
    category: 'acrylic-colors',
    categoryName: 'ACRYLIC COLORS',
    year: '2005',
    medium: 'Acrylic & Mixed Pigments on Canvas',
    dimensions: '32 × 16 inches',
    image: '/images/artworks/acrylic-colors/DSC_0142.JPG',
    aspectRatio: '1/2',
    isFeaturedHome: true,
    featuredOrder: 4,
    series: 'Acrylic Expressions',
    tags: ['Acrylic', 'Contemporary', 'Abstract Expression']
  },
  {
    id: 'art-a-2',
    title: 'Acrylic Study II',
    hindiTitle: 'एक्रिलिक अध्ययन II',
    category: 'acrylic-colors',
    categoryName: 'ACRYLIC COLORS',
    year: '2005',
    medium: 'Acrylic on Canvas',
    dimensions: '30 × 19 inches',
    image: '/images/artworks/acrylic-colors/DSC_0143.JPG',
    aspectRatio: '9/16',
    series: 'Acrylic Expressions',
    tags: ['Acrylic', 'Texture', 'Pigment']
  },
  {
    id: 'art-a-3',
    title: 'Acrylic Study III',
    hindiTitle: 'एक्रिलिक अध्ययन III',
    category: 'acrylic-colors',
    categoryName: 'ACRYLIC COLORS',
    year: '2006',
    medium: 'Acrylic on Board / Canvas',
    dimensions: '24 × 32 inches',
    image: '/images/artworks/acrylic-colors/DSC_0144.JPG',
    aspectRatio: '4/3',
    series: 'Acrylic Expressions',
    tags: ['Acrylic', 'Vibrant', 'Color Study']
  },
  {
    id: 'art-a-4',
    title: 'Acrylic Study IV',
    hindiTitle: 'एक्रिलिक अध्ययन IV',
    category: 'acrylic-colors',
    categoryName: 'ACRYLIC COLORS',
    year: '2006',
    medium: 'Acrylic on Canvas Board',
    dimensions: '28 × 20 inches',
    image: '/images/artworks/acrylic-colors/DSC_0145.JPG',
    aspectRatio: '3/4',
    series: 'Acrylic Expressions',
    tags: ['Acrylic', 'Expression', 'Composition']
  },
];

export const waterColorsArtworks: Artwork[] = [
  {
    id: 'art-w-1',
    title: 'Watercolor Study I',
    hindiTitle: 'जल रंग अध्ययन I',
    category: 'water-colors',
    categoryName: 'WATER COLORS',
    year: '2004',
    medium: 'Transparent Watercolor on Archival Paper',
    dimensions: '22 × 34 inches',
    image: '/images/artworks/water-colors/2.jpg',
    aspectRatio: '3/2',
    isFeaturedHome: true,
    featuredOrder: 5,
    series: 'Atmospheric Landscapes & Washes',
    tags: ['Watercolor', 'Landscape', 'Wash', 'Aura']
  },
  {
    id: 'art-w-2',
    title: 'Watercolor Study II',
    hindiTitle: 'जल रंग अध्ययन II',
    category: 'water-colors',
    categoryName: 'WATER COLORS',
    year: '2004',
    medium: 'Transparent Watercolor on Cold-Pressed Sheet',
    dimensions: '22 × 32 inches',
    image: '/images/artworks/water-colors/3.jpg',
    aspectRatio: '3/2',
    series: 'Atmospheric Landscapes & Washes',
    tags: ['Watercolor', 'Atmospheric', 'Light & Shade']
  },
  {
    id: 'art-w-3',
    title: 'Watercolor Study III',
    hindiTitle: 'जल रंग अध्ययन III',
    category: 'water-colors',
    categoryName: 'WATER COLORS',
    year: '2005',
    medium: 'Watercolor & Gouache Wash on Paper',
    dimensions: '30 × 20 inches',
    image: '/images/artworks/water-colors/4.jpg',
    aspectRatio: '2/3',
    series: 'Atmospheric Landscapes & Washes',
    tags: ['Watercolor', 'Figurative', 'Fluidity']
  },
  {
    id: 'art-w-4',
    title: 'Watercolor Study IV',
    hindiTitle: 'जल रंग अध्ययन IV',
    category: 'water-colors',
    categoryName: 'WATER COLORS',
    year: '2005',
    medium: 'Watercolor on Heavy Rag Paper',
    dimensions: '30 × 20 inches',
    image: '/images/artworks/water-colors/5.jpg',
    aspectRatio: '2/3',
    series: 'Atmospheric Landscapes & Washes',
    tags: ['Watercolor', 'Vibrant', 'Heritage']
  },
];

export const compositionArtworks: Artwork[] = [
  {
    id: 'art-c-1',
    title: 'Composition Study I',
    hindiTitle: 'संयोजन अध्ययन I',
    category: 'composition',
    categoryName: 'COMPOSITION',
    year: '2004',
    medium: 'Ink wash, charcoal & mixed pigments on paper',
    dimensions: '24 × 32 inches',
    image: '/images/artworks/composition/9.jpg',
    aspectRatio: '4/3',
    isFeaturedHome: true,
    featuredOrder: 6,
    series: 'Spatial Composition Series',
    tags: ['Composition', 'Spatial Form', 'Tonalism']
  },
  {
    id: 'art-c-2',
    title: 'Composition Study II',
    hindiTitle: 'संयोजन अध्ययन II',
    category: 'composition',
    categoryName: 'COMPOSITION',
    year: '2004',
    medium: 'Mixed media & ink wash on tinted board',
    dimensions: '26 × 22 inches',
    image: '/images/artworks/composition/50.jpg',
    aspectRatio: '4/5',
    series: 'Spatial Composition Series',
    tags: ['Composition', 'Contrast', 'Abstract Form']
  },
  {
    id: 'art-c-3',
    title: 'Composition Study III',
    hindiTitle: 'संयोजन अध्ययन III',
    category: 'composition',
    categoryName: 'COMPOSITION',
    year: '2005',
    medium: 'Charcoal, ink wash & pigments',
    dimensions: '28 × 20 inches',
    image: '/images/artworks/composition/73.jpg',
    aspectRatio: '3/4',
    series: 'Spatial Composition Series',
    tags: ['Composition', 'Form & Space', 'Minimalist']
  },
  {
    id: 'art-c-4',
    title: 'Composition Study IV',
    hindiTitle: 'संयोजन अध्ययन IV',
    category: 'composition',
    categoryName: 'COMPOSITION',
    year: '2005',
    medium: 'Ink, wash & mixed media on handmade sheet',
    dimensions: '24 × 32 inches',
    image: '/images/artworks/composition/aaa.jpg',
    aspectRatio: '4/3',
    series: 'Spatial Composition Series',
    tags: ['Composition', 'Rhythm', 'Dynamic Space']
  },
  {
    id: 'art-c-5',
    title: 'Composition Study V',
    hindiTitle: 'संयोजन अध्ययन V',
    category: 'composition',
    categoryName: 'COMPOSITION',
    year: '2006',
    medium: 'Ink wash & graphite on paper',
    dimensions: '24 × 18 inches',
    image: '/images/artworks/composition/DSC_0013.JPG',
    aspectRatio: '3/4',
    series: 'Spatial Composition Series',
    tags: ['Composition', 'Linear Harmony', 'Ink Wash']
  },
  {
    id: 'art-c-6',
    title: 'Composition Study VI',
    hindiTitle: 'संयोजन अध्ययन VI',
    category: 'composition',
    categoryName: 'COMPOSITION',
    year: '2006',
    medium: 'Carbon ink wash & mixed pigments',
    dimensions: '24 × 17 inches',
    image: '/images/artworks/composition/DSC_0015.JPG',
    aspectRatio: '3/4',
    series: 'Spatial Composition Series',
    tags: ['Composition', 'Negative Space', 'Balance']
  },
];

export const caricaturesArtworks: Artwork[] = [
  {
    id: 'art-car-1',
    title: 'Caricature Study I (Character Study)',
    hindiTitle: 'व्यक्तिचित्र / व्यंग्य चित्र I',
    category: 'caricatures',
    categoryName: 'CARICATURES',
    year: '1988',
    medium: 'Pen, Brush & Indian Ink on Paper',
    dimensions: '22 × 16 inches',
    image: '/images/artworks/caricatures/IMG_001.jpg',
    aspectRatio: '3/4',
    isFeaturedHome: true,
    featuredOrder: 7,
    series: 'Portraits & Character Studies',
    collectionLocation: 'Artist Permanent Archive',
    tags: ['Caricature', 'Portrait', 'Pen & Ink', 'Character Study']
  },
  {
    id: 'art-car-2',
    title: 'Caricature Study II (Pen & Ink)',
    hindiTitle: 'व्यक्तिचित्र / व्यंग्य चित्र II',
    category: 'caricatures',
    categoryName: 'CARICATURES',
    year: '1989',
    medium: 'Dip Pen & Indian Ink on Archival Paper',
    dimensions: '20 × 15 inches',
    image: '/images/artworks/caricatures/IMG_002.jpg',
    aspectRatio: '3/4',
    series: 'Portraits & Character Studies',
    collectionLocation: 'Artist Permanent Archive',
    tags: ['Caricature', 'Pen & Ink', 'Observational']
  },
  {
    id: 'art-car-3',
    title: 'Caricature Study III (Observational Study)',
    hindiTitle: 'व्यक्तिचित्र / व्यंग्य चित्र III',
    category: 'caricatures',
    categoryName: 'CARICATURES',
    year: '1992',
    medium: 'Brush & Black Drawing Ink on Paper',
    dimensions: '24 × 18 inches',
    image: '/images/artworks/caricatures/IMG_004.jpg',
    aspectRatio: '3/4',
    series: 'Portraits & Character Studies',
    collectionLocation: 'Artist Permanent Archive',
    tags: ['Caricature', 'Brush & Ink', 'Stalwarts']
  },
  {
    id: 'art-car-4',
    title: 'Caricature Study IV (Expressive Lines)',
    hindiTitle: 'व्यक्तिचित्र / व्यंग्य चित्र IV',
    category: 'caricatures',
    categoryName: 'CARICATURES',
    year: '1995',
    medium: 'Pen, Ink Line & Wash on Paper',
    dimensions: '22 × 17 inches',
    image: '/images/artworks/caricatures/IMG_005.jpg',
    aspectRatio: '3/4',
    series: 'Portraits & Character Studies',
    collectionLocation: 'Artist Permanent Archive',
    tags: ['Caricature', 'Expressive', 'Pen & Ink']
  },
];

export const collagesArtworks: Artwork[] = [
  {
    id: 'art-col-1',
    title: 'Collage Study I',
    hindiTitle: 'कोलाज अध्ययन I',
    category: 'collages',
    categoryName: 'COLLAGES',
    year: '2003',
    medium: 'Handmade Paper, Newspaper & Pigment Collage',
    dimensions: '20 × 34 inches',
    image: '/images/artworks/collages/24.jpg',
    aspectRatio: '16/9',
    isFeaturedHome: true,
    featuredOrder: 8,
    series: 'Paper & Mixed Media Collage',
    tags: ['Collage', 'Paper Art', 'Mixed Media', 'Texture']
  },
  {
    id: 'art-col-2',
    title: 'Collage Study II',
    hindiTitle: 'कोलाज अध्ययन II',
    category: 'collages',
    categoryName: 'COLLAGES',
    year: '2004',
    medium: 'Handcrafted Paper & Mixed Media on Board',
    dimensions: '28 × 20 inches',
    image: '/images/artworks/collages/54.jpg',
    aspectRatio: '3/4',
    series: 'Paper & Mixed Media Collage',
    tags: ['Collage', 'Handmade Paper', 'Texture']
  },
  {
    id: 'art-col-3',
    title: 'Collage Study III',
    hindiTitle: 'कोलाज अध्ययन III',
    category: 'collages',
    categoryName: 'COLLAGES',
    year: '2005',
    medium: 'Torn Paper & Acrylic Glaze Collage',
    dimensions: '28 × 20 inches',
    image: '/images/artworks/collages/DSC_0141.JPG',
    aspectRatio: '3/4',
    series: 'Paper & Mixed Media Collage',
    tags: ['Collage', 'Torn Paper', 'Abstract']
  },
  {
    id: 'art-col-4',
    title: 'Collage Study IV',
    hindiTitle: 'कोलाज अध्ययन IV',
    category: 'collages',
    categoryName: 'COLLAGES',
    year: '2005',
    medium: 'Mixed Paper & Pigment Assemblage',
    dimensions: '30 × 20 inches',
    image: '/images/artworks/collages/DSC_0235.JPG',
    aspectRatio: '2/3',
    series: 'Paper & Mixed Media Collage',
    tags: ['Collage', 'Assemblage', 'Earthy Tones']
  },
];

export const cartoonsArtworks: Artwork[] = [
  {
    id: 'art-crt-1',
    title: 'Aabohawa (Editorial Cartoon 01)',
    hindiTitle: 'आबोहवा - व्यंग्य चित्र 01',
    category: 'cartoons',
    categoryName: 'CARTOONS',
    year: '1985',
    medium: 'Pen, Indian Ink & Line Wash on Paper',
    dimensions: '22 × 16 inches',
    image: '/images/artworks/cartoons/aabohawa - 01_2.jpg',
    aspectRatio: '3/4',
    isFeaturedHome: true,
    featuredOrder: 9,
    series: 'Aabohawa Series (आबोहवा)',
    collectionLocation: 'Press & Media Guild Archive',
    description: 'A poignant editorial cartoon from the acclaimed Aabohawa series published in leading periodicals, delivering sharp sociopolitical commentary through masterly black ink line work and nuanced satire.',
    tags: ['Cartoon', 'Aabohawa', 'Editorial', 'Satire', 'Pen & Ink']
  },
  {
    id: 'art-crt-2',
    title: 'Aabohawa (17 July 1985)',
    hindiTitle: 'आबोहवा - 17 जुलाई 1985',
    category: 'cartoons',
    categoryName: 'CARTOONS',
    year: '1985',
    medium: 'Pen & Indian Ink Editorial Cartoon',
    dimensions: '22 × 17 inches',
    image: '/images/artworks/cartoons/aabohawa - 17 July 1985.jpg',
    aspectRatio: '3/4',
    series: 'Aabohawa Series (आबोहवा)',
    collectionLocation: 'Press & Media Guild Archive',
    description: 'Published on 17 July 1985, this editorial cartoon highlights administrative irony and public sentiment through expressive character draftsmanship and crisp satirical punchlines.',
    tags: ['Cartoon', 'Aabohawa', 'Satire', 'Editorial', 'Press']
  },
  {
    id: 'art-crt-3',
    title: 'Aabohawa (20 July 1985)',
    hindiTitle: 'आबोहवा - 20 जुलाई 1985',
    category: 'cartoons',
    categoryName: 'CARTOONS',
    year: '1985',
    medium: 'Pen & Indian Ink on Newsprint / Paper',
    dimensions: '20 × 16 inches',
    image: '/images/artworks/cartoons/aabohawa - 20July 1985.jpg',
    aspectRatio: '3/4',
    series: 'Aabohawa Series (आबोहवा)',
    collectionLocation: 'Press & Media Guild Archive',
    description: 'Published on 20 July 1985, capturing the pulse of the common citizen and socio-economic paradoxes with evocative ink lines and insightful humor.',
    tags: ['Cartoon', 'Aabohawa', 'Satire', 'Editorial', 'Newspaper']
  },
  {
    id: 'art-crt-4',
    title: 'Aabohawa (27 Dec 1985)',
    hindiTitle: 'आबोहवा - 27 दिसम्बर 1985',
    category: 'cartoons',
    categoryName: 'CARTOONS',
    year: '1985',
    medium: 'Pen & Indian Ink on Newsprint / Paper',
    dimensions: '22 × 17 inches',
    image: '/images/artworks/cartoons/aabohawa2 - 27 Dec 1985.jpg',
    aspectRatio: '3/4',
    series: 'Aabohawa Series (आबोहवा)',
    collectionLocation: 'Press & Media Guild Archive',
    description: 'A year-end reflection published on 27 December 1985, exploring seasonal social issues and bureaucratic delays with distinctive caricatural wit and ink textures.',
    tags: ['Cartoon', 'Aabohawa', 'Satire', 'Editorial', 'Winter 1985']
  },
];

export const illustrationArtworks: Artwork[] = [
  {
    id: 'art-ill-1',
    title: 'Illustration Study I (Heritage & Architecture)',
    hindiTitle: 'चित्रांकन अध्ययन I (धरोहर एवं स्थापत्य)',
    category: 'illustration',
    categoryName: 'ILLUSTRATION',
    year: '1992',
    medium: 'Fine-nib Pen & Waterproof Pigment Ink on Bristol Sheet',
    dimensions: '24 × 18 inches',
    image: '/images/artworks/illustration/DSC_0001.JPG',
    aspectRatio: '4/3',
    isFeaturedHome: true,
    featuredOrder: 10,
    series: 'Architectural & Heritage Illustration',
    collectionLocation: 'Artist Studio Archive',
    description: 'Intricate architectural illustration demonstrating Dr. Shivendra Singh\'s mastery over perspective, fine linear cross-hatching, and architectural textures.',
    tags: ['Illustration', 'Pen & Ink', 'Architecture', 'Heritage', 'Linear Study']
  },
  {
    id: 'art-ill-2',
    title: 'Illustration Study II (Figurative & Folk Narrative)',
    hindiTitle: 'चित्रांकन अध्ययन II (मानवाकृति एवं लोककथा)',
    category: 'illustration',
    categoryName: 'ILLUSTRATION',
    year: '1995',
    medium: 'Black Ink, Fine Brush & Dip Pen on Paper',
    dimensions: '22 × 16 inches',
    image: '/images/artworks/illustration/DSC_0002.JPG',
    aspectRatio: '3/4',
    series: 'Figurative & Book Illustration',
    collectionLocation: 'Artist Studio Archive',
    description: 'A delicate portrait-oriented illustrative composition combining rhythmic contour lines with expressive tonal shading, created for literary and editorial publication.',
    tags: ['Illustration', 'Figurative', 'Ink Drawing', 'Narrative Art']
  },
  {
    id: 'art-ill-3',
    title: 'Illustration Study III (Spatial & Form Study)',
    hindiTitle: 'चित्रांकन अध्ययन III (संरचनात्मक रेखांकन)',
    category: 'illustration',
    categoryName: 'ILLUSTRATION',
    year: '1998',
    medium: 'Pen, Indian Ink & Tonal Wash on Archival Card',
    dimensions: '24 × 18 inches',
    image: '/images/artworks/illustration/DSC_0014.JPG',
    aspectRatio: '4/3',
    series: 'Spatial Composition & Linear Dynamics',
    collectionLocation: 'Artist Studio Archive',
    description: 'Panoramic linear study balancing dense ink textures and expansive negative space, reflecting deep classical aesthetic discipline.',
    tags: ['Illustration', 'Pen & Ink', 'Composition', 'Cross-hatch']
  },
  {
    id: 'art-ill-4',
    title: 'Illustration Study IV (Cultural Symbolism)',
    hindiTitle: 'चित्रांकन अध्ययन IV (सांस्कृतिक प्रतीक)',
    category: 'illustration',
    categoryName: 'ILLUSTRATION',
    year: '2001',
    medium: 'Indian Ink and Fine Brushwork on Board',
    dimensions: '22 × 17 inches',
    image: '/images/artworks/illustration/DSC_0020.JPG',
    aspectRatio: '3/4',
    series: 'Cultural Symbolism & Heritage',
    collectionLocation: 'Artist Studio Archive',
    description: 'Detailed illustrative study focusing on symbolic motifs, traditional drapery rhythms, and evocative figurative detailing.',
    tags: ['Illustration', 'Symbolism', 'Indian Art', 'Brush & Ink']
  },
];

export const logoSymbolArtworks: Artwork[] = [
  {
    id: 'art-log-1',
    title: 'Kala Shrinkhala Emblem (The Golden Chain of Art)',
    hindiTitle: 'कला श्रृंखला प्रतीक चिन्ह',
    category: 'logo-symbol-design',
    categoryName: 'LOGO & SYMBOL DESIGN',
    year: '1987',
    medium: 'Graphic Ink glyph & Gold foil imprint on parchment',
    dimensions: '20 × 20 inches (51 × 51 cm)',
    image: '/images/artworks/logo-symbol-design/kala_shrinkhala_emblem.jpg',
    aspectRatio: '1/1',
    isFeaturedHome: true,
    featuredOrder: 11,
    series: 'Identity & Semiotics',
    collectionLocation: 'Studio Archive',
    tags: ['Logo', 'Branding', 'Minimalist', 'Devanagari']
  },
  {
    id: 'art-log-2',
    title: 'Emblem for Kashi Sangeet Samaj',
    hindiTitle: 'काशी संगीत समाज प्रतीक चिन्ह',
    category: 'logo-symbol-design',
    categoryName: 'LOGO & SYMBOL DESIGN',
    year: '2004',
    medium: 'Ink glyph and golden ratio geometry',
    dimensions: '18 × 18 inches',
    image: '/images/artworks/logo-symbol-design/cultural_academy_insignia.jpg',
    series: 'Identity & Semiotics'
  },
  {
    id: 'art-log-3',
    title: 'Seal of the Fine Arts Conclave',
    hindiTitle: 'ललित कला संगम मुद्रा',
    category: 'logo-symbol-design',
    categoryName: 'LOGO & SYMBOL DESIGN',
    year: '2014',
    medium: 'Monochromatic relief stamp',
    dimensions: '16 × 16 inches',
    image: '/images/artworks/logo-symbol-design/heritage_trust_seal.jpg',
    series: 'Identity & Semiotics'
  },
];

export const posterArtworks: Artwork[] = [
  {
    id: 'art-pos-1',
    title: 'Poster Study I (Social & Cultural Advocacy)',
    hindiTitle: 'पोस्टर अध्ययन I (सामाजिक एवं सांस्कृतिक चेतना)',
    category: 'poster',
    categoryName: 'POSTER',
    year: '1989',
    medium: 'Screen-print & Graphic Silkscreen on Heavy Card',
    dimensions: '36 × 24 inches',
    image: '/images/artworks/poster/Dsc_0162.jpg',
    aspectRatio: '2/3',
    isFeaturedHome: true,
    featuredOrder: 12,
    series: 'Posters of Conscience & Culture',
    collectionLocation: 'National Poster Archive / Studio Collection',
    description: 'Striking high-impact poster artwork designed for cultural movements, combining bold graphic forms, expressive typography, and contrasting color fields.',
    tags: ['Poster', 'Screenprint', 'Silkscreen', 'Graphic Art', 'Advocacy']
  },
  {
    id: 'art-pos-2',
    title: 'Poster Study II (Theater & Performance)',
    hindiTitle: 'पोस्टर अध्ययन II (रंगमंच एवं नाट्य उत्सव)',
    category: 'poster',
    categoryName: 'POSTER',
    year: '1993',
    medium: 'Two-color Silkscreen & Hand-drawn Typography',
    dimensions: '36 × 24 inches',
    image: '/images/artworks/poster/Dsc_0163.jpg',
    aspectRatio: '2/3',
    series: 'Theater & Performance Posters',
    collectionLocation: 'Studio Archive',
    description: 'Dynamic theatrical poster capturing dramatic presence and movement through stark contrasting shapes, designed for theatrical production announcements.',
    tags: ['Poster', 'Theater', 'Natya', 'Silkscreen', 'Typography']
  },
  {
    id: 'art-pos-3',
    title: 'Poster Study III (Heritage & Literary Forum)',
    hindiTitle: 'पोस्टर अध्ययन III (साहित्य एवं विचार मंच)',
    category: 'poster',
    categoryName: 'POSTER',
    year: '1998',
    medium: 'Silkscreen & Relief Print on Poster Board',
    dimensions: '38 × 25 inches',
    image: '/images/artworks/poster/Dsc_0175.jpg',
    aspectRatio: '2/3',
    series: 'Literary & Ideological Conclaves',
    collectionLocation: 'Studio Archive',
    description: 'Monumental graphic poster created for literary seminars and intellectual conclaves, with structured layout geometry and rhythmic visual hierarchy.',
    tags: ['Poster', 'Literary', 'Heritage', 'Graphic Design']
  },
  {
    id: 'art-pos-4',
    title: 'Poster Study IV (Environmental & Social Harmony)',
    hindiTitle: 'पोस्टर अध्ययन IV (पर्यावरण एवं जन चेतना)',
    category: 'poster',
    categoryName: 'POSTER',
    year: '2004',
    medium: 'Graphic Ink & Silkscreen on Archival Poster Sheet',
    dimensions: '36 × 24 inches',
    image: '/images/artworks/poster/Dsc_0176.jpg',
    aspectRatio: '2/3',
    series: 'Posters of Conscience & Culture',
    collectionLocation: 'Studio Archive',
    description: 'An evocative poster promoting social awareness, communal harmony, and ecological stewardship through clean visual metaphor and commanding graphics.',
    tags: ['Poster', 'Social Awareness', 'Silkscreen', 'Environment']
  },
];

// ============================================================================
// 3. MASTER CATEGORY MAP & AGGREGATED EXPORTS
// ============================================================================

export const ARTWORKS_BY_CATEGORY: Record<ArtworkCategory, Artwork[]> = {
  graphics: graphicsArtworks,
  drawings: drawingsArtworks,
  'oil-colors': oilColorsArtworks,
  'acrylic-colors': acrylicColorsArtworks,
  'water-colors': waterColorsArtworks,
  composition: compositionArtworks,
  caricatures: caricaturesArtworks,
  collages: collagesArtworks,
  cartoons: cartoonsArtworks,
  illustration: illustrationArtworks,
  'logo-symbol-design': logoSymbolArtworks,
  poster: posterArtworks,
};

/**
 * Flat array of all artworks across all categories.
 * Easy to extend by adding new entries to any category array above.
 */
export const ARTWORKS_DATA: Artwork[] = Object.values(ARTWORKS_BY_CATEGORY).flat();

// ============================================================================
// 4. DATA ACCESSOR HELPERS (Encapsulating data queries)
// ============================================================================

export const getArtworksByCategory = (category: ArtworkCategory): Artwork[] => {
  return ARTWORKS_BY_CATEGORY[category] || [];
};

export const getCategoryMeta = (categoryId: ArtworkCategory): CategoryMeta | undefined => {
  return CATEGORIES.find((c) => c.id === categoryId);
};

export const getArtworkById = (id: string): Artwork | undefined => {
  return ARTWORKS_DATA.find((art) => art.id === id);
};

export const getFeaturedHomeArtworks = (): Artwork[] => {
  return ARTWORKS_DATA.filter((art) => art.isFeaturedHome).sort(
    (a, b) => (a.featuredOrder || 99) - (b.featuredOrder || 99)
  );
};

// ============================================================================
// 5. CRITIQUE QUOTES & SCHOLARLY REVIEWS
// ============================================================================
export const EDITORIAL_CRITIQUES: CritiqueQuote[] = [
  {
    id: 'crit-1',
    quote: 'In a time when visuals move too fast, Dr. Shivendra Singh\'s paintings ask the viewer to slow down. His art reflects a thoughtful mind—one that believes art should not just be seen, but experienced and reflected upon.',
    author: 'Sunil K. Srivastava',
    designation: 'Senior Art Editor',
    publication: 'National Daily Art Chronicle'
  },
  {
    id: 'crit-2',
    quote: 'What makes Dr. Shivendra Singh\'s art compelling is the clarity of thought behind every stroke. His works reveal an artist who observes quietly but expresses boldly. There is a poetic simplicity in his visuals that lingers in the mind long after one leaves the gallery.',
    author: 'Dr. Madhura Sen',
    designation: 'Culture & Arts Columnist',
    publication: 'Contemporary Aesthetics Quarterly'
  },
  {
    id: 'crit-3',
    quote: 'Dr. Shivendra Singh paints with the sensitivity of a storyteller. His work carries the quiet power of observation—turning ordinary moments into thoughtful visual narratives. In his paintings, the artist\'s belief that art is a reflection of life itself shines with rare authenticity.',
    author: 'Prof. Arvind N. Roy',
    designation: 'Art Feature Editor & Critic',
    publication: 'Indian Modernist Review'
  }
];
