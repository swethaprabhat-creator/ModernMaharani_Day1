export interface DressItem {
  id: string;
  name: string;
  category: 'indo-western' | 'kurta-sets' | 'coord-sets' | 'anarkali-suits' | 'party-gowns' | 'daily-kurtis';
  categoryLabel: string;
  priceINR: number;
  originalPriceINR: number;
  discountPercent: number;
  badge?: 'AS SEEN IN STORE' | 'BESTSELLER' | 'NEW ARRIVAL' | 'TRENDING' | 'FESTIVE EDIT' | 'HOT DEAL';
  fabric: string;
  work: string;
  fit: string;
  image: string;
  galleryImages: string[];
  description: string;
  includes: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  inStock: boolean;
  rating: number;
  reviewCount: number;
  instagramPostId?: string;
  featuredInShowroom?: boolean;
}

export interface InstagramLook {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  taggedItemName: string;
  taggedPriceINR: number;
  itemId: string;
  isOfficialPost?: boolean;
}

export const INSTAGRAM_LOOKS: InstagramLook[] = [
  {
    id: 'ig-real-showroom',
    imageUrl: '/assets/aistudio/MM1_45d61fbe.PNG',
    caption: '✨ NEW IN STORE: The Signature INDO WESTERN Collection is now live at Modern Maharani! ✨ From pre-pleated drape skirts and dhoti cuts to embellished cape jackets in vibrant Crimson Red, Royal Purple, Olive Green & Rani Pink. Ready to wear & super comfortable for weddings, sangeet & festive parties! Visit store or order on WhatsApp 📲💃 #ModernMaharaniFashions #IndoWestern #StoreDrop #AffordableFashion #FestiveVibes',
    likes: 3840,
    comments: 245,
    taggedItemName: 'Signature Indo-Western Drape & Cape Ensemble Collection',
    taggedPriceINR: 2699,
    itemId: 'MMF-INDO-01',
    isOfficialPost: true
  },
  {
    id: 'ig-1',
    imageUrl: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80',
    caption: 'Our fastest-selling Alia cut festive kurti set in royal blush! Paired with a delicate organza dupatta. Perfect for poojas & family celebrations 🌸✨ #ModernMaharaniFashions #FestiveWear #AffordableFashion',
    likes: 1420,
    comments: 86,
    taggedItemName: 'Gulab Pink Alia-Cut Festive Kurta Set',
    taggedPriceINR: 1899,
    itemId: 'MMF-KURTA-01'
  },
  {
    id: 'ig-2',
    imageUrl: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
    caption: 'Comfort meets elegance in our pure cotton block-print co-ord set. Ideal for Sunday brunches, casual outings and work wear! Tap to shop 🌿💃 #CoordSet #ModernMaharaniStyle',
    likes: 980,
    comments: 44,
    taggedItemName: 'Sage Green Floral Tunic & Culottes Co-ord',
    taggedPriceINR: 1499,
    itemId: 'MMF-COORD-02'
  },
  {
    id: 'ig-3',
    imageUrl: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80',
    caption: 'Twirl into wedding season without breaking the bank! Flared georgette anarkali with mirror-work yoke detail. Restocked on public demand! 💛💫 #AnarkaliLove #WeddingGuestOutfit',
    likes: 2150,
    comments: 132,
    taggedItemName: 'Haldi Mustard Tiered Georgette Anarkali Suit',
    taggedPriceINR: 2499,
    itemId: 'MMF-ANARKALI-03'
  }
];

export const WOMEN_COLLECTION: DressItem[] = [
  // 4 Signature Indo-Western Dresses from the attached Store Display Photo (/assets/aistudio/MM1_45d61fbe.PNG)
  {
    id: 'MMF-INDO-01',
    name: 'Crimson Red Dhoti Drape Set with Embroidered Cape',
    category: 'indo-western',
    categoryLabel: 'Indo Western',
    priceINR: 2699,
    originalPriceINR: 4499,
    discountPercent: 40,
    badge: 'AS SEEN IN STORE',
    fabric: 'Flowing Georgette with Crepe Inner Lining',
    work: 'Intricate Floral Zari & Mirror Hand-Embroidered Blouse with Bordered Cape',
    fit: 'Pre-Stitched Ruched Dhoti Drape with Structured Crop Top & Sheer Cape',
    image: '/assets/aistudio/MM1_45d61fbe.PNG',
    galleryImages: [
      '/assets/aistudio/MM1_45d61fbe.PNG',
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Featured on our store showcase! This show-stopping Crimson Red Indo-Western ensemble features a pre-stitched ruched center cowl dhoti skirt, a hand-embroidered crop top with delicate silver and zari floral motifs, and a fluid cape jacket with embroidered borders. Effortless to wear, completely ready-to-wear with zero draping hassle.',
    includes: '1 Pre-stitched Ruched Dhoti Skirt, 1 Embellished Blouse, 1 Long Georgette Cape Jacket',
    sizes: ['S (36)', 'M (38)', 'L (40)', 'XL (42)', 'XXL (44)'],
    colors: [
      { name: 'Crimson Red', hex: '#C1121F' },
      { name: 'Royal Purple', hex: '#480CA8' },
      { name: 'Rani Magenta', hex: '#A5015B' }
    ],
    inStock: true,
    rating: 4.9,
    reviewCount: 184,
    instagramPostId: 'ig-real-showroom',
    featuredInShowroom: true
  },
  {
    id: 'MMF-INDO-02',
    name: 'Royal Purple Multi-Tier Ruffle Skirt & Zari Blouse Set',
    category: 'indo-western',
    categoryLabel: 'Indo Western',
    priceINR: 2899,
    originalPriceINR: 4899,
    discountPercent: 41,
    badge: 'AS SEEN IN STORE',
    fabric: 'Fine Crinkle Chiffon Georgette with Satin Lining',
    work: 'Heavy Antique Gold Zari & Micro-Sequin Yoke Embroidery',
    fit: 'Flared Multi-Tier Ruffle Skirt with Attached Pre-Draped Shoulder Pallu',
    image: '/assets/aistudio/MM1_45d61fbe.PNG',
    galleryImages: [
      '/assets/aistudio/MM1_45d61fbe.PNG',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'As showcased on our central boutique display! A breathtaking royal purple ensemble boasting a tiered ruffled skirt and a heavily embroidered golden zari crop top with an attached fluid shoulder drape. Lightweight, dance-ready, and photogenic for sangeets, cocktail parties, and receptions.',
    includes: '1 Tiered Ruffle Skirt with Attached Drape, 1 Padded Heavy Zari Blouse',
    sizes: ['S (36)', 'M (38)', 'L (40)', 'XL (42)'],
    colors: [
      { name: 'Royal Purple', hex: '#480CA8' },
      { name: 'Crimson Red', hex: '#C1121F' },
      { name: 'Olive Green', hex: '#4A5320' }
    ],
    inStock: true,
    rating: 4.9,
    reviewCount: 162,
    instagramPostId: 'ig-real-showroom',
    featuredInShowroom: true
  },
  {
    id: 'MMF-INDO-03',
    name: 'Olive Green Pre-Draped Cowl Dress with Belted Jacket',
    category: 'indo-western',
    categoryLabel: 'Indo Western',
    priceINR: 2499,
    originalPriceINR: 4299,
    discountPercent: 42,
    badge: 'AS SEEN IN STORE',
    fabric: 'Butter Moss Georgette with Cotton Voile Lining',
    work: 'Silver Cutdana & Zari Handwork on Peplum Jacket with Embellished Waistband Belt',
    fit: 'Pre-stitched Cowl Silhouette with Tailored Fitted Jacket',
    image: '/assets/aistudio/MM1_45d61fbe.PNG',
    galleryImages: [
      '/assets/aistudio/MM1_45d61fbe.PNG',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'An earthy olive green masterpiece straight from our front showroom window. Combines a fluid pre-stitched draped cowl gown with a structured embroidered jacket and signature silver waist belt. Accentuates the waistline while ensuring complete freedom of movement.',
    includes: '1 Pre-Draped Cowl Dress, 1 Embroidered Full-Sleeve Jacket with Belt',
    sizes: ['S (36)', 'M (38)', 'L (40)', 'XL (42)', 'XXL (44)'],
    colors: [
      { name: 'Olive Green', hex: '#4A5320' },
      { name: 'Wine Plum', hex: '#4A1525' },
      { name: 'Teal Blue', hex: '#1D4E5B' }
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 128,
    instagramPostId: 'ig-real-showroom',
    featuredInShowroom: true
  },
  {
    id: 'MMF-INDO-04',
    name: 'Rani Magenta Pre-Pleated Drape Skirt with Cape Blouse',
    category: 'indo-western',
    categoryLabel: 'Indo Western',
    priceINR: 2799,
    originalPriceINR: 4699,
    discountPercent: 40,
    badge: 'AS SEEN IN STORE',
    fabric: 'Georgette Satin Blend with Soft Lining',
    work: 'All-Over Zari & Sequin Jaal on Short Cape Overlay Blouse',
    fit: 'Pre-Pleated Mermaid-Fluted Drape Skirt with Elasticated Band',
    image: '/assets/aistudio/MM1_45d61fbe.PNG',
    galleryImages: [
      '/assets/aistudio/MM1_45d61fbe.PNG',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'The viral Rani Magenta look from our Instagram reel! Features a front pre-pleated fluid skirt paired with a glittering cape-sleeve embroidered crop top. Super easy to step into, flattering on all silhouettes, and guaranteed to turn heads at any wedding reception or festive celebration.',
    includes: '1 Pre-Pleated Drape Skirt, 1 Embellished Cape-Sleeve Blouse',
    sizes: ['S (36)', 'M (38)', 'L (40)', 'XL (42)', 'XXL (44)'],
    colors: [
      { name: 'Rani Magenta', hex: '#A5015B' },
      { name: 'Crimson Red', hex: '#C1121F' },
      { name: 'Royal Purple', hex: '#480CA8' }
    ],
    inStock: true,
    rating: 4.9,
    reviewCount: 204,
    instagramPostId: 'ig-real-showroom',
    featuredInShowroom: true
  },
  {
    id: 'MMF-KURTA-01',
    name: 'Gulab Pink Alia-Cut Festive Kurta Set',
    category: 'kurta-sets',
    categoryLabel: 'Kurta & Pant Set',
    priceINR: 1899,
    originalPriceINR: 3299,
    discountPercent: 42,
    badge: 'BESTSELLER',
    fabric: 'Pure Cotton Mulmul with Chiffon Dupatta',
    work: 'Delicate Sequin Yoke Embroidery & Gota Lace Edging',
    fit: 'Flattering V-Neck Alia Cut with Flared Silhouette',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'An absolute customer favorite! This stylish Alia-cut kurta set is crafted from breathable pure cotton mulmul with intricate sequin detailing on the neckline and a matching lightweight printed dupatta. Comfortable all day long for festive occasions, family functions, or office ethnic days.',
    includes: '1 Kurti, 1 Cigarette Pant with Elastic Waistband, 1 Printed Dupatta (2.2m)',
    sizes: ['S (36)', 'M (38)', 'L (40)', 'XL (42)', 'XXL (44)'],
    colors: [
      { name: 'Gulab Pink', hex: '#B76E79' },
      { name: 'Sky Turquoise', hex: '#3E92CC' },
      { name: 'Peach Cream', hex: '#EFC7C2' }
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 148,
    instagramPostId: 'ig-1'
  },
  {
    id: 'MMF-COORD-02',
    name: 'Sage Green Floral Tunic & Culottes Co-ord',
    category: 'coord-sets',
    categoryLabel: 'Chic Co-ord Set',
    priceINR: 1499,
    originalPriceINR: 2499,
    discountPercent: 40,
    badge: 'TRENDING',
    fabric: 'Premium Viscose Rayon (Ultra Soft & Breathable)',
    work: 'Digital Botanical Floral Print with Button-Down Front',
    fit: 'Relaxed Comfort Fit with Side Slits & Pocket',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Effortless everyday chic! This 2-piece modern co-ord set features a relaxed buttoned tunic with matching wide-leg trousers. Designed for modern women who love comfort without compromising on style.',
    includes: '1 Collared Tunic Top, 1 Wide-Leg Culotte Trouser with Pockets',
    sizes: ['S (36)', 'M (38)', 'L (40)', 'XL (42)', 'XXL (44)', '3XL (46)'],
    colors: [
      { name: 'Sage Green', hex: '#588157' },
      { name: 'Mustard Yellow', hex: '#D4A373' },
      { name: 'Midnight Navy', hex: '#1D2D44' }
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 92,
    instagramPostId: 'ig-2'
  },
  {
    id: 'MMF-ANARKALI-03',
    name: 'Haldi Mustard Tiered Georgette Anarkali Suit',
    category: 'anarkali-suits',
    categoryLabel: 'Festive Anarkali',
    priceINR: 2499,
    originalPriceINR: 4299,
    discountPercent: 42,
    badge: 'FESTIVE EDIT',
    fabric: 'Flowing Faux Georgette with Butter Crepe Inner Lining',
    work: 'Embroidered Foil Mirror Work with Gota Patti Hem',
    fit: 'Flared 4-Meter Anarkali Ghera with Sweetheart Neck',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Bright, joyful, and photogenic! A festive tiered anarkali suit set in vivid Haldi mustard. Perfect for haldi ceremonies, Diwali celebrations, housewarmings, or sangeet nights. Light and graceful to twirl in!',
    includes: '1 Flared Anarkali Kurta, 1 Lycra Stretch Churidar, 1 Organza Scalloped Dupatta',
    sizes: ['M (38)', 'L (40)', 'XL (42)', 'XXL (44)'],
    colors: [
      { name: 'Haldi Mustard', hex: '#E09F3E' },
      { name: 'Wine Maroon', hex: '#4A1525' },
      { name: 'Emerald Pine', hex: '#2D6A4F' }
    ],
    inStock: true,
    rating: 4.9,
    reviewCount: 215,
    instagramPostId: 'ig-3'
  },
  {
    id: 'MMF-KURTI-06',
    name: 'Lavender Chikan & Mirror Work Daily Kurti',
    category: 'daily-kurtis',
    categoryLabel: 'Casual & Office Kurti',
    priceINR: 1199,
    originalPriceINR: 1999,
    discountPercent: 40,
    badge: 'BESTSELLER',
    fabric: 'Pure Cotton Slub (No Shrinkage Guarantee)',
    work: 'Intricate Lucknowi-Style Thread Embroidery & Real Foil Mirrors',
    fit: 'Straight Regular Fit with 3/4th Sleeves',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Your go-to everyday staple! Lightweight, breathable, and pre-washed cotton with exquisite pastel floral embroidery. Style it with white palazzos, cigarette pants, or your favorite pair of blue denim jeans.',
    includes: '1 Single Stitched Kurti (Pants sold separately)',
    sizes: ['S (36)', 'M (38)', 'L (40)', 'XL (42)', 'XXL (44)', '3XL (46)'],
    colors: [
      { name: 'Pastel Lavender', hex: '#9D8189' },
      { name: 'Mint Mist', hex: '#A3B18A' },
      { name: 'Sky Powder', hex: '#8ECAE6' }
    ],
    inStock: true,
    rating: 4.9,
    reviewCount: 230
  }
];

export interface CartItem {
  dress: DressItem;
  selectedColor: string;
  selectedSize: string;
  quantity: number;
}

export interface Review {
  id: string;
  name: string;
  city: string;
  rating: number;
  comment: string;
  verifiedPurchase: boolean;
  dressBought: string;
  date: string;
}

export const STORE_REVIEWS: Review[] = [
  {
    id: 'rev-indo',
    name: 'Neha Kulkarni',
    city: 'Pune',
    rating: 5,
    comment: 'Saw the Indo-Western display on their Instagram post and ordered the Crimson Red Dhoti Cape set immediately. The quality and finishing is identical to what is shown on the mannequin! Fitting was spot on for my sister’s sangeet.',
    verifiedPurchase: true,
    dressBought: 'Crimson Red Dhoti Drape Set with Cape',
    date: 'Yesterday'
  },
  {
    id: 'rev-1',
    name: 'Pooja Sharma',
    city: 'Hyderabad',
    rating: 5,
    comment: 'Ordered the Alia-cut Kurta set after seeing it on their Instagram page. The fabric quality is so soft and fitting is 10/10! Got so many compliments.',
    verifiedPurchase: true,
    dressBought: 'Gulab Pink Alia-Cut Kurta Set',
    date: '3 days ago'
  },
  {
    id: 'rev-2',
    name: 'Anjali Verma',
    city: 'Bengaluru',
    rating: 5,
    comment: 'Amazing price for such lovely dresses! As a working woman, I love their co-ord sets. Fast delivery and COD made it so easy to buy without hesitation.',
    verifiedPurchase: true,
    dressBought: 'Sage Green Floral Co-ord Set',
    date: '1 week ago'
  },
  {
    id: 'rev-3',
    name: 'Sunita Reddy',
    city: 'Secunderabad',
    rating: 5,
    comment: 'Visited their store in person after following their Instagram. The staff is very polite and confirmed my size before billing. Really value for money!',
    verifiedPurchase: true,
    dressBought: 'Royal Purple Multi-Tier Ruffle Skirt Set',
    date: '2 weeks ago'
  }
];

export const STORE_INFO = {
  name: 'Modern Maharani',
  subName: 'Fashions',
  tagline: 'Trendy & Affordable Women’s Ethnic & Indo-Western Wear',
  phone: '+91 98480 23456',
  whatsappNumber: '919848023456',
  email: 'orders@modernmaharanifashions.com',
  instagramHandle: '@modernmaharanifashions',
  instagramUrl: 'https://instagram.com/modernmaharanifashions',
  storeAddress: 'Modern Maharani Fashions, Shop No. 12 & 14, Ground Floor, Central Market Plaza, Opp. Metro Station, Main Road',
  cityState: 'India',
  hours: 'Open All 7 Days: 10:30 AM – 9:30 PM',
  perks: [
    { title: 'Affordable Pricing', desc: 'Starting at just ₹1,199. Quality without inflated designer margins.' },
    { title: 'Pure Women’s Fashion', desc: 'Indo-Western drapes, cape sets, kurti sets, co-ords & anarkalis.' },
    { title: 'Cash on Delivery (COD)', desc: 'Pay at your doorstep anywhere across India.' },
    { title: 'Easy 7-Day Exchange', desc: 'Hassle-free size exchange if fitting isn’t 100% perfect.' }
  ]
};
