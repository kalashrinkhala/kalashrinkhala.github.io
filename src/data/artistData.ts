import { TimelineMilestone } from '../types';

export interface ArchivalCarouselItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  caption?: string;
  year?: string;
}

export const ARCHIVAL_IMAGES = {
  studioClassroom: '/Others image/ChatGPT Image Sep 19, 2026, 11_46_49 AM.png',
  panoramicGroup: '/Others image/kj-122 2.png',
  soloExhibition: '/Others image/Untitled-4-new.jpg',
  sculptureGarden: '/Others image/Untitled-11-new.jpg',
  mastersConclave: '/Others image/kj-4 2.png',
  colleaguesStudio: '/Others image/kj-133 2.png',
  academicSymposium: '/Others image/kj-8 new.png',
  atelierDiscourse: '/Others image/kj-62 new.png',
};

export const ARCHIVAL_CAROUSEL_ITEMS: ArchivalCarouselItem[] = [
  {
    id: 'sculpture-park',
    src: '/Others image/Untitled-11-new.jpg',
    alt: 'Sculpture park & monumental stone symposium',
    title: 'Sculpture park & monumental stone symposium',
  },
  {
    id: 'masters-conclave',
    src: '/Others image/kj-4 2.png',
    alt: 'National art conclave & academic delegation',
    title: 'National art conclave & academic delegation',
  },
  {
    id: 'colleagues-fellowship',
    src: '/Others image/kj-133 2.png',
    alt: 'Fine arts colleagues & printmakers fellowship',
    title: 'Fine arts colleagues & printmakers fellowship',
  },
  {
    id: 'academic-symposium',
    src: '/Others image/kj-8 new.png',
    alt: 'Academic convocation & faculty assembly',
    title: 'Academic convocation & faculty assembly',
  },
  {
    id: 'atelier-discourse',
    src: '/Others image/kj-62 new.png',
    alt: 'Creative atelier & master artists forum',
    title: 'Creative atelier & master artists forum',
  },
];

export const ARTIST_BIOGRAPHY = {
  name: 'Dr. Shivendra Singh',
  hindiName: 'डॉ. शिवेन्द्र सिंह',
  birthYear: '1946',
  birthDate: '1st July 1946',
  birthPlace: 'Sikandara Rao, Aligarh, U.P.',
  profileImage: '/Others image/Profile 1.png',
  profileImageFallback: '/Others image/Profile 1.png',
  title: 'Eminent Fine Artist, Painter, Printmaker & Scholar',
  designation: 'Ex-Faculty, Dept. of Drawing & Painting, Faculty of Arts, D.E.I., Dayalbagh, Agra',
  subtitle: 'A lifelong odyssey in Indian contemporary fine arts, printmaking, classical music, and aesthetic scholarship.',
  heroBio: 'Dr. Shivendra Singh was born on 1st July 1946 in Sikandara Rao, Aligarh, U.P. A double Gold Medalist in Fine and Commercial Arts — from the Government College of Arts and Crafts, Lucknow (1968) and Banaras Hindu University, Varanasi (1973) — he holds a Ph.D. (Vidhya-Vachaspati) from Dayalbagh Educational Institute (D.E.I.), Agra. His vast creative oeuvre across more than five decades spans graphic printmaking, oils, watercolors, photography, typography, and satirical cartoons. Honored with presentation at the residence of Prime Minister Shri Rajiv Gandhi, national awards from Lalit Kala Akademi, and works held in esteemed permanent collections across India and worldwide.',
  quoteHindi: 'नज़र में ढलके उभरते है दिल के अफ़साने, वो बात और है दुनिया नज़र न पहचाने\nवो बज़्म देखी है मेरी नज़र ने कि जहां, बग़ैर शम्मा भी जलते रहे हैं परवाने',
  quoteHindiAuthor: 'शिवेन्द्र सिंह',
  contact: {
    address: '178, Ansal Courtyard, Dhahtora, Shastripurum, Agra – 282007, Uttar Pradesh',
    phones: ['+91 94124 87718', '+91 94123 42466'],
    email: 'shivendraagra@gmail.com',
  },
};

// ==========================================
// AUTHENTIC CURRICULUM VITAE DATA FROM PDF
// ==========================================

export interface CVEducationItem {
  year: string;
  degree: string;
  institution: string;
  honor?: string;
  notes?: string;
}

export const CV_EDUCATION: CVEducationItem[] = [
  {
    year: '1961',
    degree: 'High School',
    institution: 'U.P. Board',
  },
  {
    year: '1963',
    degree: 'Intermediate',
    institution: 'U.P. Board',
  },
  {
    year: '1968',
    degree: 'National Diploma in Commercial Art (Five Years)',
    institution: 'Government College of Arts and Crafts, Lucknow',
    honor: 'Gold Medalist',
  },
  {
    year: '1968',
    degree: 'Madhyama (Tabla Vadan)',
    institution: 'Bhatkhande Music College, Lucknow',
    notes: 'Classical Hindustani percussion mastery alongside visual arts',
  },
  {
    year: '1969',
    degree: 'Post Diploma in Commercial Art (Book Illustration)',
    institution: 'Government College of Arts and Crafts, Lucknow',
  },
  {
    year: '1973',
    degree: 'Bachelor of Fine Art (BFA - Five Year)',
    institution: 'Banaras Hindu University (B.H.U.), Varanasi',
    honor: 'Gold Medalist',
  },
  {
    year: '1999',
    degree: 'Vidhya-Vachaspati (Ph.D.)',
    institution: 'Dayalbagh Educational Institute (D.E.I.), Dayalbagh, Agra',
    honor: 'Doctorate in Drawing & Painting / Visual Arts',
  },
];

export interface CVSoloExhibition {
  year: string;
  title: string;
  venue: string;
  city: string;
}

export const CV_SOLO_EXHIBITIONS: CVSoloExhibition[] = [
  {
    year: '1981',
    title: 'Drishya Chitran',
    venue: 'Tejpunj, Dayal Bagh',
    city: 'Agra',
  },
  {
    year: '1991',
    title: 'Acrylic and Water Color Composition',
    venue: 'Faculty of Arts, D.E.I., Dayalbagh',
    city: 'Agra',
  },
  {
    year: '2002',
    title: 'Kala Mela Solo Display',
    venue: 'Kala Sanskar, Soorsadan',
    city: 'Agra',
  },
];

export interface CVExhibition {
  year: string;
  title: string;
  venue: string;
  location: string;
  note?: string;
}

export const CV_PAINTING_EXHIBITIONS: CVExhibition[] = [
  { year: '1965', title: 'State Art Exhibition', venue: 'U.P. State Lalit Kala Academy', location: 'Lucknow' },
  { year: '1966', title: 'Annual Art Exhibition', venue: 'U.P. State Lalit Kala Academy', location: 'Lucknow' },
  { year: '1969', title: 'Annual Exhibition', venue: 'U.P. Artist Association', location: 'Lucknow' },
  { year: '1971', title: 'State Art Exhibition', venue: 'U.P. State Lalit Kala Academy', location: 'Lucknow' },
  { year: '1972', title: 'State Art Exhibition', venue: 'U.P. State Lalit Kala Academy', location: 'Lucknow' },
  { year: '1973', title: 'Annual Art Exhibition', venue: 'U.P. State Lalit Kala Academy', location: 'Lucknow' },
  { year: '1977', title: 'Annual Art Exhibition', venue: 'Agra Artist Association', location: 'Agra' },
  { year: '1980', title: 'Sanskar Bharati Art Exhibition', venue: 'Sanskar Bharati', location: 'Agra' },
  { year: '1982', title: 'Rashtriya Kala Mela (National Art Fair)', venue: 'Lalit Kala Akademi', location: 'New Delhi' },
  { year: '1983', title: 'Rashtriya Kala Mela', venue: 'Triye & U.P. Lalit Kala Academy', location: 'New Delhi' },
  { year: '1984', title: 'Rashtriya Kala Mela (National Art Fair)', venue: 'Lalit Kala Akademi', location: 'New Delhi' },
  { year: '1985', title: 'Annual Art Exhibition', venue: 'Triye Art Forum', location: 'Agra' },
  { year: '1986', title: 'Rashtriya Kala Mela', venue: 'Triye & U.P. Lalit Kala Academy', location: 'New Delhi' },
  { year: '1987', title: 'Faculty Art Exhibition', venue: 'Dayalbagh Educational Institute (D.E.I.)', location: 'Dayalbagh, Agra' },
  { year: '1987', title: 'Art Exhibition', venue: 'Madhya Pradesh Kala Parishad', location: 'Bhopal, M.P.' },
  { year: '1987', title: 'Utkarsh Fankar Society Exhibition', venue: 'Utkarsh Fankar Society', location: 'Aligarh' },
  { year: '1987', title: 'Art Exhibition', venue: 'Hindustani Academy', location: 'Allahabad' },
  { year: '1987', title: 'All India Fine Art and Craft Exhibition (10 Jan)', venue: 'AIFACS', location: 'New Delhi' },
  { year: '1987', title: 'State Art Exhibition (22 Jan)', venue: 'U.P. State Lalit Kala Academy', location: 'Lucknow' },
  { year: '1987', title: 'State Art Exhibition (12 May)', venue: 'U.P. State Lalit Kala Academy', location: 'Lucknow' },
  { year: '1987', title: 'Annual Exhibition', venue: 'U.P. State Lalit Kala Academy', location: 'Lucknow' },
  { year: '1988', title: 'Art Exhibition (July)', venue: 'Sanskar Bharati (Nagri Pracharini Sabha)', location: 'Agra' },
  { year: '1988', title: '30th Annual Exhibition', venue: 'Utkarsh Fankar Society', location: 'Aligarh' },
  { year: '1988', title: 'State Art Exhibition', venue: 'U.P. State Lalit Kala Academy', location: 'Lucknow' },
  { year: '1988', title: 'All India Fine Art and Craft Exhibition', venue: 'AIFACS', location: 'New Delhi' },
  { year: '1989', title: 'Kala Vithika “Padav”', venue: 'Kala Vithika', location: 'Gwalior, M.P.' },
  { year: '1990', title: '2nd North Regional Art Exhibition', venue: 'North Regional Art Forum', location: 'Agra' },
  { year: '1990', title: '5th Akhil Bharati Art Exhibition', venue: 'Akhil Bharati Art Committee', location: 'Lucknow' },
  { year: '1990', title: 'Faculty Art Exhibition', venue: 'Art Faculty, D.E.I., Dayalbagh', location: 'Agra' },
  { year: '1990', title: 'International Cultural Exhibition', venue: 'Nepal-Bharat Sanskritik Cultural Bhawan', location: 'Kathmandu, Nepal' },
  { year: '1991', title: '4th Rashtriya Kala Mela', venue: 'U.P. and Sankalp Art Society', location: 'New Delhi' },
  { year: '1992', title: 'A.S.R.N. Group Exhibition', venue: 'A.S.R.N. Gallery', location: 'Kanpur' },
  { year: '1992', title: 'Kala Mela', venue: 'Rajasthan Lalit Kala Academy', location: 'Jaipur' },
  { year: '1992', title: '2nd All India Art Exhibition', venue: 'Banaras Hindu University / City Forum', location: 'Varanasi' },
  { year: '1992', title: 'Akhil Bharati Kala Pradarshini (Ram Rajya Ki Pukar)', venue: 'National Exhibition', location: 'Jaipur' },
  { year: '1993', title: 'Working Artists of Varanasi', venue: 'Artists Guild', location: 'Varanasi' },
  { year: '1993', title: 'Maha Kaushal Kala Parishad Exhibition', venue: 'Maha Kaushal Kala Parishad', location: 'Raipur, M.P.' },
  { year: '1994', title: 'State Art Exhibition', venue: 'Orissa State Lalit Kala Academy', location: 'Bhubaneswar, Odisha' },
  { year: '1994', title: 'All India Art Exhibition', venue: 'National Forum', location: 'New Delhi' },
  { year: '1994', title: 'State Art Exhibition', venue: 'U.P. State Lalit Kala Academy', location: 'Lucknow' },
  { year: '1995', title: 'State Art Exhibition & Annual Show', venue: 'U.P. State Lalit Kala Academy', location: 'Lucknow' },
  { year: '1996', title: 'Art Exhibition', venue: 'Hotel Madhuban', location: 'Mathura' },
  { year: '1997', title: 'Agra College Chitran Shivir Exhibition', venue: 'Agra College', location: 'Agra' },
  { year: '1997', title: 'Jahanara Art Gallery (Taj Mahotsav)', venue: 'Shilpagram', location: 'Agra' },
  { year: '1997', title: '9th North Regional Art Exhibition', venue: 'North Zone Cultural Centre', location: 'Patiala, Punjab' },
  { year: '1998', title: '“Sanyog” Group of Contemporary Artists', venue: 'Nandan Gallery, Shantiniketan', location: 'West Bengal' },
  { year: '1998', title: '‘Sam Samayik Kala Vishayak’ Regional Exhibition', venue: 'Dr. B.R. Ambedkar University', location: 'Agra' },
  { year: '1998', title: '“Swarn Jayanti Kala Pradarshani” (Golden Jubilee)', venue: 'U.P. State Lalit Kala Academy', location: 'Lucknow' },
  { year: '2000', title: '“Rashtra Raksha” Painting Exhibition', venue: 'Shastripuram', location: 'Agra' },
  { year: '2002', title: 'Regional Kala Pradarshani (Agra Art Fair)', venue: 'U.P. State Lalit Kala Academy', location: 'Agra' },
  { year: '2002', title: '23rd Annual Art Exhibition', venue: 'U.P. State Lalit Kala Academy', location: 'Lucknow' },
  { year: '2002', title: 'Sangraha Pradarshini (Permanent Collection)', venue: 'U.P. State Lalit Kala Academy', location: 'Agra' },
  { year: '2003', title: 'All India Annual Art Exhibition', venue: 'AIFACS', location: 'New Delhi' },
  { year: '2003', title: 'State Art Exhibition', venue: 'U.P. State Lalit Kala Academy', location: 'Lucknow' },
  { year: '2011', title: '100th Anniversary Centenary Function (10 Oct)', venue: 'Government College of Arts & Crafts (Lucknow Art College)', location: 'Lucknow' },
];

export const CV_GRAPHIC_PRINTS: CVExhibition[] = [
  { year: '1968', title: 'Annual Art Exhibition', venue: 'Lucknow Art College', location: 'Lucknow' },
  { year: '1971', title: 'Exhibition of Prints', venue: 'Banaras Hindu University (B.H.U.)', location: 'Varanasi' },
  { year: '1972', title: 'Annual Exhibition', venue: 'Banaras Hindu University (B.H.U.)', location: 'Varanasi' },
  { year: '1977', title: 'Print Making in U.P. Tour', venue: 'U.P. State Lalit Kala Academy', location: 'Lucknow' },
  { year: '1977', title: 'Print Making in U.P. Tour', venue: 'U.P. State Lalit Kala Academy', location: 'Hyderabad' },
  { year: '1977', title: 'Print Making in U.P. Tour', venue: 'U.P. State Lalit Kala Academy', location: 'Madras (Chennai)' },
  { year: '1977', title: 'Print Making in U.P. Tour', venue: 'Government College of Art', location: 'Calcutta (Kolkata)' },
  { year: '1994', title: 'National Graphics Exhibition', venue: 'Orissa State Lalit Kala Academy', location: 'Bhubaneswar' },
];

export const CV_PHOTOGRAPHY: CVExhibition[] = [
  { year: '1967', title: 'Photography Exhibition', venue: 'Soochana Kendra', location: 'Lucknow' },
  { year: '1970', title: '2nd All India Inter-University Photography Competition', venue: 'Inter-University Board', location: 'Varanasi' },
  { year: '1970', title: 'Student Welfare Society Exhibition', venue: 'B.H.U.', location: 'Varanasi' },
  { year: '1972', title: 'M.R.C. Photo Exhibition', venue: 'Banaras Hindu University', location: 'Varanasi' },
  { year: '2001', title: 'Kala Sanskar Photography Show', venue: 'Community Hall', location: 'New Agra' },
];

export const CV_POSTERS: CVExhibition[] = [
  { year: '1968', title: '“Art and Craft” Exhibition', venue: 'Lucknow Art College', location: 'Lucknow' },
  { year: '1968', title: 'Lucknow Annual Art Exhibition', venue: 'Art College Galleries', location: 'Lucknow' },
  { year: '2000', title: 'Applied Art Exhibition', venue: 'U.P. State Lalit Kala Academy', location: 'Lucknow' },
  { year: '2002', title: 'Applied Art Exhibition', venue: 'U.P. State Lalit Kala Academy', location: 'Lucknow' },
  { year: '2003', title: 'Applied Art Exhibition', venue: 'U.P. State Lalit Kala Academy', location: 'Lucknow' },
];

export interface CVLogoItem {
  year?: string;
  title: string;
  location: string;
}

export const CV_LOGO_DESIGNS: CVLogoItem[] = [
  { year: '1966', title: 'Uttar Pradesh Sangeet Natya Bharati', location: 'Lucknow' },
  { year: '1967', title: '“Gunjan” Bhartiya Sangeet ki Trimasik', location: 'Lucknow' },
  { year: '1973', title: 'S.R. Group of Industries', location: 'Agra' },
  { year: '1976', title: 'Agra Kalakar Sangh', location: 'Agra' },
  { year: '1977', title: '“Triya” Agra Artist Association', location: 'Agra' },
  { year: '1978', title: 'The Radha Soami Urban Co-operative Bank Ltd.', location: 'Dayal Bagh, Agra' },
  { year: '1980', title: 'Dayalbagh Educational Institute (D.E.I.)', location: 'Agra' },
  { year: '1986', title: 'Sanskar Bharati Natya Kendra', location: 'Agra' },
  { year: '1988', title: 'Sankalp Art Society', location: 'Agra' },
  { year: '1989', title: 'Rock Art Society of India (RASI)', location: 'Agra' },
  { year: '1989', title: 'Futurology Seminar Eng. (Logo & Poster), D.E.I.', location: 'Agra' },
  { year: '1991', title: 'Ashirani (Artist Group)', location: 'Agra' },
  { year: '1993', title: 'Vakankar Kala Kendra', location: 'Agra' },
  { year: '1993', title: 'Set Syam Ratnar (Group of Girl Students of Arts Side)', location: 'Agra' },
  { year: '1994', title: 'S.M.T. (Sterling Machine Tools)', location: 'Agra' },
  { year: '—', title: 'Agra Schools and Colleges Drama Society', location: 'Agra' },
  { year: '—', title: 'Ritu Sambhar Kala Vithika', location: 'Agra' },
  { year: '—', title: 'Dept. of Drawing and Painting, D.E.I.', location: 'Dayalbagh, Agra' },
  { year: '2009', title: 'Kriti Kala Kendra', location: 'Agra' },
  { year: '2011', title: 'Shri Ram Child Welfare Foundation', location: 'Agra' },
  { year: '2012', title: 'Music Dept. D.E.I.', location: 'Dayal Bagh, Agra' },
];

export interface CVCoverDesign {
  year?: string;
  title: string;
  description: string;
}

export const CV_COVER_DESIGNS: CVCoverDesign[] = [
  { year: '1971', title: 'Record Cover of Shehnai Maestro Ustad Bismillah Khan', description: 'Gramophone record sleeve design for the legendary Bharat Ratna maestro' },
  { year: '1972', title: 'Shri Tyag Brahm Gurukulum Smarika', description: 'Memorial souvenir cover publication, Varanasi' },
  { year: '1982, 83, 86', title: 'Sanskar Bharati (Smarika)', description: 'Annual cultural souvenirs & journal covers, Agra' },
  { year: '1983', title: 'Vikas Sheel Bharat (Daily Newspaper)', description: 'Cover designs and daily masthead formatting' },
  { year: '—', title: '“Braj Vibhav” (Vishwakosh)', description: 'Comprehensive encyclopedia compiled by Padma Shri Gopal Prasad Vyas' },
  { year: '1985–88', title: 'D.E.I. Magazine', description: 'Official annual academic magazines of Dayalbagh Educational Institute' },
  { year: '1981–2011', title: 'D.E.I. Newsletter', description: 'Three decades of masthead & layout design for Dayalbagh Educational Institute' },
  { year: '1995', title: 'Eighteenth National Systems Conference (NSC)', description: 'Proceedings and souvenir volume design for D.E.I.' },
  { year: '—', title: 'Shruti Mandal 31st and 32nd Death Anniversary (Smarika)', description: 'Memorial music souvenir publication, Lucknow' },
];

export interface CVAwardItem {
  year: string;
  award: string;
  organization: string;
  location: string;
  highlight?: boolean;
}

export const CV_AWARDS: CVAwardItem[] = [
  { year: '1959', award: '1st Prize', organization: 'Mujjamal Islamia College', location: 'Sikandra Rao, Aligarh', highlight: true },
  { year: '1964', award: '1st Vyaparik Kala Puruskar', organization: 'Govt. Art and Craft College', location: 'Lucknow' },
  { year: '1967', award: 'Vyaparik Kala Puruskar', organization: 'Govt. Art and Craft College', location: 'Lucknow' },
  { year: '1968', award: 'Poster Puruskar', organization: 'Govt. Art and Craft College', location: 'Lucknow' },
  { year: '1968', award: 'Graphic Vishesh Yogyata Puruskar (Special Merit)', organization: 'Govt. Art and Craft College', location: 'Lucknow', highlight: true },
  { year: '1969', award: 'Painting Award', organization: 'Music and Fine Art Faculty, B.H.U.', location: 'Varanasi' },
  { year: '1969', award: 'Sanyojan (Composition) 1st Prize', organization: 'Music and Fine Art Faculty, B.H.U.', location: 'Varanasi' },
  { year: '1970', award: 'Photography Award', organization: 'Chatra Kalyan Parishad, B.H.U.', location: 'Varanasi' },
  { year: '1970', award: 'Portrait Award', organization: 'Music and Fine Art Unit, B.H.U.', location: 'Varanasi' },
  { year: '1971', award: 'Painting Award', organization: 'Music and Fine Art Faculty, B.H.U.', location: 'Varanasi' },
  { year: '1972', award: 'Vyakti Chitran (Portraiture) 1st Award', organization: 'Music and Fine Art Faculty, B.H.U.', location: 'Varanasi' },
  { year: '1972', award: 'Graphic Award', organization: 'Music and Fine Art Faculty, B.H.U.', location: 'Varanasi' },
  { year: '1972', award: 'Photo Award', organization: 'Maharaja Ruiya Chhatravas, B.H.U.', location: 'Varanasi' },
  { year: '1972', award: 'Outstanding Merit Sketching Award', organization: 'Faculty of Music and Fine Art, B.H.U.', location: 'Varanasi', highlight: true },
  { year: '1973', award: 'Sanyojan (Composition) 1st Prize', organization: 'Music and Fine Art Faculty, B.H.U.', location: 'Varanasi' },
  { year: '1973', award: 'Rekha Chitran mein Vareyata Award (Line Drawing)', organization: 'Music and Fine Art Faculty, B.H.U.', location: 'Varanasi' },
  { year: '1980', award: 'Samman Patra', organization: 'Sanskar Bharati', location: 'Agra' },
  { year: '1983', award: 'Samman Patra', organization: 'Akhil Bharati Natya Mahotsav', location: 'Delhi' },
  { year: '1984', award: 'Drishya Chitran 1st Prize (Landscape Painting)', organization: 'Sanskar Bharati', location: 'Agra' },
  { year: '1988', award: 'Gurujan Samman Samaroh (Chitrakala Samman Patra)', organization: 'Sanskar Bharati', location: 'Agra' },
  { year: '1992', award: 'Painting Award (Ram Rajya Ki Pukar)', organization: 'Akhil Bharatiya Kala Pradarshani', location: 'Jaipur, Rajasthan', highlight: true },
  { year: '1993', award: 'Painting Award', organization: 'Maha Kaushal Kala Parishad', location: 'Raipur, M.P.' },
  { year: '1998', award: 'Kala Sadhak Samman', organization: 'Sanskar Bharati, Nagri Pracharini Sabha', location: 'Agra', highlight: true },
  { year: '2000', award: 'Honored as Prasiddh Kala Shilpi', organization: 'Sangeet Kala Kendra', location: 'Agra' },
  { year: '2000', award: 'Vyavharik Kala Puruskar (Applied Arts)', organization: 'U.P. State Lalit Kala Academy', location: 'Lucknow', highlight: true },
  { year: '2000', award: 'Contemporary Artist Award', organization: 'U.P. State Lalit Kala Academy', location: 'Lucknow', highlight: true },
  { year: '2001', award: 'Photography Special Award', organization: 'Kala Sanskar', location: 'Agra' },
  { year: '2010', award: 'Inter State Contemporary Art Award', organization: 'State Lalit Kala Academy', location: 'Lucknow' },
  { year: '2021', award: '“Rashtriya Samman” Utkarsh', organization: 'Lalit Kala Akademi', location: 'Lucknow', highlight: true },
  { year: '2022', award: 'Rock Art Society of India Felicitation as Art Editor (designed RASI Logo, journal format & cover pages of “Purakala” 1990–2018)', organization: '25th Annual Conference, RASI', location: 'Sambalpur, Odisha', highlight: true },
];

export const CV_SPECIAL_PRESENTATIONS = [
  {
    title: 'Presentation to Prime Minister Shri Rajiv Gandhi',
    description: 'Interview and personal painting presentation at the official residence of the Prime Minister of India, Shri Rajiv Gandhi, New Delhi.',
    highlight: true,
  },
  {
    title: 'Commendation by Chairman, National Lalit Kala Academy',
    description: 'Official praise and recognition by the Chairman of the National Lalit Kala Akademi, New Delhi.',
    highlight: true,
  },
  {
    title: 'Tribute by Prof. B. Baskaran',
    description: 'Special recognition in 1988 for master satire cartoons rendered on himself.',
    highlight: false,
  },
];

export const CV_EDITORIAL = [
  { role: 'Editorial', journal: 'Kala Patra “Abhinandan Pushpagam” (Annual)', years: '1993–2003' },
  { role: 'Sub Editorial', journal: 'Art Magazine “Triye” (Agra Artist Association)', years: '1985' },
  { role: 'Art Editorial', journal: '“Purakala”, International Journal of the Rock Art Society of India', years: '1990–till date' },
];

export const CV_PUBLICATIONS = [
  { year: '1968', title: '“Rachna” Magazine', publisher: 'Lucknow Art College' },
  { year: '1973', title: '“Aaj” Samachar Patra', publisher: 'Varanasi' },
  { year: '1983', title: 'Vikassheel Bharat (Daily Newspaper)', publisher: 'Agra' },
  { year: '2000', title: '“Amar Ujala” (Daily Newspaper) – Krititva and Vyaktitva Feature', publisher: 'Agra' },
  { year: '2002', title: 'Magazine “Punarnava” – Samkaline Rachnasheelta ka Sankalan', publisher: 'New Delhi' },
  { year: '2003', title: '“Kalanubhuti”', publisher: 'U.P. State Lalit Kala Academy, Lucknow' },
  { year: '2005', title: 'Interview: “Chitra aur Amurt paraspar vilome shabd hain”', publisher: 'Rashtriya Sahara (Daily), 5th May 2005' },
  { year: '2023', title: 'पेंटिंग में प्रमुख कारक हैं मानसिक चेतना (Felicitation & Lecture Report)', publisher: 'Dainik Jagran, Department of Visual Arts, Mangalayatan University' },
];

export const CV_MISCELLANEOUS = [
  {
    title: 'Satirical Cartoons for Padma Shri Gopal Prasad Vyas',
    year: '1982',
    description: 'Published cartoons for the celebrated ironical literary series “Narad Ji Khabar Laye Hain”.',
  },
  {
    title: '“Aabohawa” Pocket Cartoons',
    year: '1982–1995',
    description: 'Renowned daily political & social pocket cartoon series published continuously in Vikassheel Bharat.',
  },
  {
    title: 'Historic Portrait Restorations at Dayalbagh',
    year: 'Historic',
    description: 'Restored revered archival oil portraits of Hujoor Soami Ji Maharaj, H. Sarkar Sahab, and H. Sahab Ji Maharaj at R.E.I., D.E.I., Dayalbagh, Agra.',
  },
  {
    title: 'National Leaders & Philosophers Oil Portraits',
    year: '1982',
    description: 'Monumental oil portraits of Mahatma Gandhi, Pt. Jawaharlal Nehru, Swami Vivekananda, and Rabindranath Tagore gifted to visiting University Grants Commission (U.G.C.) team and state chief guests.',
  },
  {
    title: 'Spiritual Masters Portrait Series',
    year: 'Permanent',
    description: 'Extensive oil portraits series spanning from Hujoor Soami Ji Maharaj to H. Lal Sahab, installed in the Painting Dept., D.E.I., Agra.',
  },
  {
    title: 'Legendary Indian Musicians Series',
    year: 'Permanent',
    description: 'Series of oil portraits commemorating India’s greatest classical musicians, installed in the Music Dept., D.E.I., Agra.',
  },
  {
    title: 'Monumental Canvas “Kaunwar” (5’ x 16’)',
    year: 'Permanent',
    description: 'Grand-scale 16-foot oil painting masterpiece housed in the Painting Dept., Dayalbagh Educational Institute, Agra.',
  },
  {
    title: 'Painting Restoration: Dayalbagh President Hall',
    year: 'Sept. 2007',
    description: 'Master restoration of the historic portrait of Hujoor Sahab Ji Maharaj at President Hall, Dayalbagh.',
  },
  {
    title: 'Visual Series on “Sant Philosophy”',
    year: '26 May 2009',
    description: 'Philosophical visual painting suite created for the Music Dept., D.E.I., Dayalbagh, Agra.',
  },
  {
    title: 'Poetic Ode “Swanam Dhanya”',
    year: 'Archive',
    description: 'Published tribute poem honoring Lucknow Art College and its creative lineage.',
  },
];

export const CV_COLLECTIONS = {
  institutions: [
    'Rashtriya Lalit Kala Kendra, Lucknow',
    'U.P. State Lalit Kala Academy, Lucknow',
    'Government College of Arts & Crafts (Art College), Lucknow',
    'Tyag Brahm Gurukulam, Hanuman Ghat, Varanasi',
    'U.P. Sangeet Natya Academy, Lucknow',
    'Central Office, Music Dept., & Painting Dept., D.E.I., Dayalbagh, Agra',
    'Visual Art Dept., Banaras Hindu University (B.H.U.), Varanasi',
    'Indira Kala Sangeet Vishwavidyalaya, Khairagarh, M.P.',
  ],
  privateLocations: [
    'Allahabad',
    'Gorakhpur',
    'Madras (Chennai)',
    'Varanasi',
    'Srinagar (Kashmir)',
    'Moradabad',
    'Sikandra Rao',
    'New Delhi',
    'Kanpur',
    'Kathmandu (Nepal)',
    'New York (USA)',
  ],
};

export const CV_STAGE_THEATER = [
  { period: '1966–67', venue: 'Veena Hall, Bhatkhande College of Hindustani Music', location: 'Kaisarbagh, Lucknow' },
  { period: '1974–1987', venue: 'Mahila Prashikshan Mahavidyalaya', location: 'Dayalbagh, Agra' },
  { period: '1986', venue: 'Bharat Vikas Parishad (Natya Samaroh)', location: 'Agra' },
  { period: '1987', venue: 'Sanskar Bharati Natya Kendra (Mathura Refinery)', location: 'Agra' },
  { period: '1988', venue: 'Bharat Vikas Parishad (Guru Ji Smriti Natya Samaroh)', location: 'Agra' },
  { period: '1990', venue: 'Sanskar Bharati Natya Kendra (Vakankar Smriti)', location: 'D.E.I., Dayalbagh, Agra' },
];

export const CV_ORGANIZER = [
  { year: '1986', title: 'Bharat Vikas Parishad, S.B.N.K. (Natya Samaroh)', venue: 'Soorsadan, Agra' },
  { year: '1990', title: 'Sanskar Bharati Natya Kendra (Natya Samaroh)', venue: 'Soorsadan, Agra' },
  { year: '—', title: 'Painting Wing, S.B.N.K.', venue: 'Soorsadan, Agra' },
  { year: '—', title: 'Workshop (Natya Prashikshan), S.B.N.K.', venue: 'Art Dept., D.E.I., Agra' },
  { year: '—', title: 'Painting Exhibition (Vakankar Smriti), S.B.N.K.', venue: 'Agra' },
  { year: '2000', title: 'Rashtriya Raksha Chitrakala Pradarshini', venue: 'Shastripuram, Agra' },
  { year: '2000', title: 'Regional Art Exhibition', venue: 'Agra' },
];

export const CV_MEMBERSHIPS = [
  'U.P. State Lalit Kala Academy, Lucknow — Representative for Sanskar Bharati, Agra',
  '“Sanyog” (A Group of Contemporary Artists), Anand, Gujarat',
  'Vice Chairman, Vakankar Kala Kendra, Agra',
  'Vice Chairman, Sanskar Bharati Natya Kendra, Agra',
  'Federation of Indian Photography, Bangalore',
  'Secretary, Sketching Club, Art College, Lucknow',
  'Chairmanship, Literary Club, Faculty of Fine Art, M.S.U., Baroda',
  'Utkarsh Fankar Society, Aligarh',
  '“Triye” Agra Artist Association, Agra',
  'Founder, Kala Prashikshan Kendra (Summer Workshop), Jageshwar, Nagla Padi, Agra',
  'Ex-Faculty, Dept. of Drawing & Painting, Faculty of Arts, D.E.I., Dayalbagh, Agra',
];

export const CV_SEMINARS_WORKSHOPS = [
  { year: '1978', title: 'Appreciation of Fine Arts', organizer: 'Cultural Ministry (M.P.H.D.), Dayal Bagh, Agra' },
  { year: '1981', title: 'Itihas Sankalan Samiti', organizer: 'Vrindavan' },
  { year: '1989', title: '“Raag Aur Ras” National Sangosthi (U.G.C.)', organizer: 'Music Dept. D.E.I., Dayal Bagh, Agra' },
  { year: '1989', title: '“Indian Culture” National Sangosthi (U.G.C.)', organizer: 'Music Dept. D.E.I., Dayal Bagh, Agra' },
  { year: '1992', title: 'Shail Chitra Sampada ka Prasiddhikaran, Vakankar Smriti', organizer: 'Purakal Samaroh, “RASI”, Agra' },
  { year: '1993', title: 'First “RASI” Congress', organizer: 'Rock Art Society of India, Agra' },
  { year: '1993', title: '“Kala Rasaswadan” Workshop', organizer: 'Aligarh' },
  { year: '1994', title: 'Kalakar Shivir', organizer: 'Lalit Kala Academy (Lucknow), Mathura' },
  { year: '1997', title: 'Camel Art Workshop', organizer: 'Youth Hostel, Sanjay Place, Agra' },
  { year: '1997', title: 'National Security Drawing Workshop', organizer: 'Agra College, Agra' },
  { year: '1997', title: 'Akhil Bharatiya Kalakar Karyashala Shivir', organizer: 'Agra College, Agra' },
  { year: '2001', title: 'Sangosthi Karyashala on Indian Art, Culture & Tradition', organizer: 'Madhav Bhavan, Agra' },
  { year: '2001', title: 'Akhil Bharatiya Chitra Kala Sangosthi, Karyashala & Exhibition', organizer: 'Sanskar Bharati, Mahajan Bhavan, Agra' },
  { year: '2001', title: 'National Workshop and Exhibition', organizer: 'Agra College & Baikunti Devi College, Agra' },
  { year: '2001', title: 'Acron (Color Brand) Sangosthi', organizer: 'Holiday Inn, Agra' },
  { year: '2001', title: 'National Seminar on Contemporary Indian Art', organizer: 'Lalit Kala Sansthan, Agra' },
  { year: '2001', title: 'Workshop, Lalit Kala Sansthan, Annual Function Chitran Shivir', organizer: 'Agra' },
  { year: '2006', title: '“Mapitam” National Seminar & Workshop (4th–7th Oct)', organizer: 'Agra' },
  { year: '2011', title: 'Workshop & Painting, 100th Anniversary Function (9th Oct)', organizer: 'Lucknow Art College, Lucknow' },
  { year: '2012', title: 'National Seminar on Importance of Bandish in Music Education (Pratik Chitran Sandarbh)', organizer: 'D.E.I., Dayalbagh, Agra' },
];

// ==========================================
// CHRONOLOGICAL TIMELINE MILESTONES (CV-ALIGNED)
// ==========================================

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: '1946',
    title: 'Birth at Sikandara Rao, Aligarh',
    subtitle: '1st July 1946',
    description: 'Dr. Shivendra Singh was born on 1st July 1946 in Sikandara Rao, Aligarh, Uttar Pradesh, beginning what would become more than five decades of artistic distinction.',
    location: 'Sikandara Rao, Aligarh',
    category: 'education',
  },
  {
    year: '1959',
    title: 'First Art Award at Mujjamal Islamia College',
    subtitle: '1st Prize in Art Competition',
    description: 'Earned his very first formal art honor with First Prize at Mujjamal Islamia College in Sikandra Rao, Aligarh, signaling his exceptional innate talent in youth.',
    location: 'Sikandra Rao, Aligarh',
    category: 'award',
    highlight: true,
  },
  {
    year: '1961–63',
    title: 'High School & Intermediate',
    subtitle: 'Foundational Academic Milestones',
    description: 'Completed High School in 1961 and Intermediate in 1963, before entering dedicated fine arts academies in Lucknow.',
    location: 'Uttar Pradesh',
    category: 'education',
  },
  {
    year: '1964–68',
    title: 'Gold Medalist at Lucknow Art College & Tabla Mastery',
    subtitle: '5-Year National Diploma & Bhatkhande Tabla Vadan',
    description: 'Completed the rigorous 5-Year National Diploma in Commercial Art as a Gold Medalist at Govt. College of Arts & Crafts, Lucknow (1968), alongside Madhyama (Tabla Vadan) from Bhatkhande Music College, fusing visual rhythm with Hindustani percussion.',
    location: 'Lucknow, U.P.',
    category: 'education',
    highlight: true,
  },
  {
    year: '1969',
    title: 'Post Diploma in Book Illustration',
    subtitle: 'Govt. College of Arts and Crafts, Lucknow',
    description: 'Advanced his graphic and literary skills with a Post Diploma in Book Illustration from Lucknow Art College, receiving multiple college awards in commercial and graphic design.',
    location: 'Lucknow, U.P.',
    category: 'education',
  },
  {
    year: '1971',
    title: 'Album Cover for Ustad Bismillah Khan',
    subtitle: 'Gramophone Record Cover Design',
    description: 'Selected to create the official record sleeve design for legendary Shehnai maestro Bharat Ratna Ustad Bismillah Khan, marking a celebrated intersection of Indian classical music and applied graphic art.',
    location: 'Varanasi / Lucknow',
    category: 'publication',
    highlight: true,
  },
  {
    year: '1973',
    title: 'Gold Medalist at Banaras Hindu University (BHU)',
    subtitle: '5-Year Bachelor of Fine Art (B.F.A.)',
    description: 'Graduated as Gold Medalist from Banaras Hindu University, Varanasi. During his tenure at BHU, he won numerous faculty honors in Painting, Composition (Sanyojan 1st Prize), Portraiture, and Graphic Printmaking.',
    location: 'Varanasi, U.P.',
    category: 'education',
    highlight: true,
  },
  {
    year: '1977',
    title: 'Nationwide Printmaking Series',
    subtitle: 'U.P. Lalit Kala Academy 4-City Tour',
    description: 'His graphic prints were showcased across India under the U.P. Lalit Kala Academy in Lucknow, Hyderabad, Madras, and Calcutta (Govt. College of Art), establishing him as an important voice in contemporary Indian printmaking.',
    location: 'Lucknow, Hyderabad, Madras, Calcutta',
    category: 'exhibition',
    highlight: true,
  },
  {
    year: '1981',
    title: 'First Solo Exhibition: “Drishya Chitran”',
    subtitle: 'Tejpunj, Dayal Bagh, Agra',
    description: 'Inaugural solo painting exhibition showcasing his sensitive landscape and figurative compositions, earning widespread acclaim from art connoisseurs.',
    location: 'Agra, U.P.',
    category: 'exhibition',
    highlight: true,
  },
  {
    year: '1982',
    title: 'Rashtriya Kala Mela & Prime Minister Presentation',
    subtitle: 'Lalit Kala Akademi & Residence of Shri Rajiv Gandhi',
    description: 'Exhibited at the prestigious Rashtriya Kala Mela in New Delhi and presented his artwork during a special interview at the official residence of Prime Minister Shri Rajiv Gandhi in Delhi.',
    location: 'New Delhi',
    category: 'award',
    highlight: true,
  },
  {
    year: '1990',
    title: 'International Exhibition in Kathmandu, Nepal',
    subtitle: 'Nepal-Bharat Sanskritik Cultural Bhawan',
    description: 'Exhibited his paintings internationally at the Nepal-Bharat Cultural Bhawan in Kathmandu. Co-founded the Rock Art Society of India (RASI) and designed its international journal “Purakala”.',
    location: 'Kathmandu, Nepal',
    category: 'exhibition',
    highlight: true,
  },
  {
    year: '1992',
    title: 'National Painting Award at Jaipur',
    subtitle: 'Akhil Bharatiya Kala Pradarshani',
    description: 'Conferred the prestigious Painting Award for his work in the “Ram Rajya Ki Pukar” national exhibition in Jaipur by the Rajasthan Lalit Kala Academy.',
    location: 'Jaipur, Rajasthan',
    category: 'award',
    highlight: true,
  },
  {
    year: '1999',
    title: 'Award of Ph.D. (Vidhya-Vachaspati)',
    subtitle: 'Dayalbagh Educational Institute (D.E.I.), Agra',
    description: 'Awarded the doctoral degree Vidhya-Vachaspati (Ph.D.) in Visual Arts from D.E.I., Dayalbagh, Agra, cementing his scholarly contributions alongside five decades of studio practice.',
    location: 'Dayalbagh, Agra',
    category: 'publication',
    highlight: true,
  },
  {
    year: '2000',
    title: 'State Honors from U.P. Lalit Kala Academy',
    subtitle: 'Vyavharik Kala Puruskar & Contemporary Artist Honor',
    description: 'Double recognition by U.P. State Lalit Kala Academy in Lucknow with the Vyavharik Kala Puruskar (Applied Arts) and Contemporary Artist felicitation.',
    location: 'Lucknow, U.P.',
    category: 'award',
    highlight: true,
  },
  {
    year: '2011',
    title: 'Centenary Celebrations of Lucknow Art College',
    subtitle: '100th Anniversary Historic Exhibition (10 Oct 2011)',
    description: 'Honored as a distinguished alumni master at the centenary celebrations of his alma mater, Govt. College of Arts & Crafts, Lucknow, marking a full century of Indian art education.',
    location: 'Lucknow, U.P.',
    category: 'retrospective',
    highlight: true,
  },
  {
    year: '2021',
    title: '“Rashtriya Samman” Utkarsh',
    subtitle: 'Lalit Kala Akademi, Lucknow',
    description: 'Conferred the prestigious “Rashtriya Samman” by Utkarsh, Lalit Kala Akademi, celebrating lifelong contributions to Indian art, education, and cultural heritage.',
    location: 'Lucknow, U.P.',
    category: 'award',
    highlight: true,
  },
  {
    year: '2022',
    title: 'Rock Art Society of India (RASI) Felicitation',
    subtitle: '25th Annual Conference, Sambalpur, Odisha',
    description: 'Felicitated for designing the RASI Logo and formatting the covers and editorial presentation of the International Journal “Purakala” from its 1990 inception through 2018.',
    location: 'Sambalpur, Odisha',
    category: 'award',
    highlight: true,
  },
];
