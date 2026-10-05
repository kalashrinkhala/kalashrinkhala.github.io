export type ArtworkCategory =
  | 'graphics'
  | 'drawings'
  | 'oil-colors'
  | 'acrylic-colors'
  | 'water-colors'
  | 'composition'
  | 'caricatures'
  | 'collages'
  | 'cartoons'
  | 'illustration'
  | 'logo-symbol-design'
  | 'poster';

export interface CategoryMeta {
  id: ArtworkCategory;
  name: string; // e.g. "GRAPHICS", "OIL COLORS", etc.
  hindiName: string;
  tagline: string;
  description: string;
  featuredImage: string;
  count: number;
}

export interface Artwork {
  id: string;
  title: string;
  hindiTitle?: string;
  category: ArtworkCategory;
  categoryName: string;
  year: number | string;
  medium: string;
  dimensions: string;
  image: string;
  aspectRatio?: string; // e.g. "4/3", "3/4", "1/1", "16/9"
  description?: string;
  curatorNotes?: string;
  isFeaturedHome?: boolean;
  featuredOrder?: number;
  tags?: string[];
  series?: string;
  collectionLocation?: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  location: string;
  category: 'education' | 'exhibition' | 'award' | 'publication' | 'retrospective';
  highlight?: boolean;
}

export interface Publication {
  id: string;
  title: string;
  type: 'Press Feature' | 'Exhibition' | 'Book' | 'Exhibition Catalogue' | 'Journal & Research';
  year?: string;
  publisher?: string;
  description?: string;
  coverImage: string;
  pages?: string;
  isbn?: string;
  downloadablePreview?: boolean;
}

export interface CritiqueQuote {
  id: string;
  quote: string;
  author: string;
  designation: string;
  publication: string;
}

export type PageView = 'home' | 'artist' | 'artworks' | 'published' | 'contact';

export interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  inquiryType: string;
  subject: string;
  message: string;
}
