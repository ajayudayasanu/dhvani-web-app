export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  shortDescription: string;
  description: string;
  category: string;
  images: string[];
  isFeatured?: boolean;
  instagramPostUrl?: string;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "antique-gold-finish-choker",
    name: "Antique Gold Finish Choker",
    price: 1850,
    shortDescription: "Elegant antique finish necklace with ruby accents.",
    description: "Handcrafted choker featuring an antique gold finish with detailed traditional motifs and ruby-colored stone accents. Perfect for festive occasions and weddings. Includes matching earrings.",
    category: "Necklace",
    images: [
      "https://placehold.co/600x600/e2e8f0/475569?text=Antique+Choker+Front",
      "https://placehold.co/600x600/e2e8f0/475569?text=Antique+Choker+Detail",
    ],
    isFeatured: true,
    instagramPostUrl: "https://instagram.com/p/example1",
  },
  {
    id: "2",
    slug: "pearl-drop-jhumkas",
    name: "Pearl Drop Jhumkas",
    price: 850,
    shortDescription: "Traditional jhumkas with delicate pearl detailing.",
    description: "Classic gold-plated jhumkas adorned with freshwater pearls. Lightweight and comfortable for all-day wear.",
    category: "Earrings",
    images: [
      "https://placehold.co/600x600/e2e8f0/475569?text=Pearl+Jhumkas"
    ],
    isFeatured: true,
  },
  {
    id: "3",
    slug: "oxidised-silver-necklace-set",
    name: "Oxidised Silver Necklace Set",
    price: 1200,
    shortDescription: "Boho-chic oxidised silver necklace with earrings.",
    description: "A statement piece for the modern woman. This oxidised silver necklace set features geometric patterns and comes with matching stud earrings.",
    category: "Necklace",
    images: [
      "https://placehold.co/600x600/e2e8f0/475569?text=Oxidised+Set"
    ],
  },
  {
    id: "4",
    slug: "kundan-studded-bangles",
    name: "Kundan Studded Bangles",
    price: 2400,
    shortDescription: "Pair of intricate Kundan bangles in gold finish.",
    description: "Exquisite bangles studded with high-quality Kundan stones. The gold plating ensures a long-lasting shine. Available in sizes 2.4, 2.6, and 2.8.",
    category: "Bangles",
    images: [
      "https://placehold.co/600x600/e2e8f0/475569?text=Kundan+Bangles"
    ],
    isFeatured: true,
  },
  {
    id: "5",
    slug: "minimalist-chain-pendant",
    name: "Minimalist Chain Pendant",
    price: 550,
    shortDescription: "Simple gold-plated chain with a star pendant.",
    description: "For those who love subtlety. A delicate gold-plated chain with a sleek star pendant. Ideal for daily wear or office outfits.",
    category: "Necklace",
    images: [
      "https://placehold.co/600x600/e2e8f0/475569?text=Chain+Pendant"
    ],
  },
  {
    id: "6",
    slug: "temple-jewellery-earrings",
    name: "Temple Jewellery Earrings",
    price: 1450,
    shortDescription: "Divine temple design earrings with goddess motif.",
    description: "Intricately carved temple jewellery earrings depicting Goddess Lakshmi. Matte gold finish gives it an authentic heritage look.",
    category: "Earrings",
    images: [
      "https://placehold.co/600x600/e2e8f0/475569?text=Temple+Earrings"
    ],
  },
  {
    id: "7",
    slug: "american-diamond-ring",
    name: "American Diamond Ring",
    price: 950,
    shortDescription: "Sparkling AD stone ring, adjustable size.",
    description: "Rhodium-plated ring studded with high-grade American Diamonds. The adjustable band ensures a perfect fit for any finger.",
    category: "Rings",
    images: [
      "https://placehold.co/600x600/e2e8f0/475569?text=AD+Ring"
    ],
  },
  {
    id: "8",
    slug: "traditional-matha-patti",
    name: "Traditional Matha Patti",
    price: 1600,
    shortDescription: "Bridal headgear with pearl and stone work.",
    description: "Complete your bridal look with this stunning Matha Patti. Features layers of pearls and a central pendant with stone embellishments.",
    category: "Headgear",
    images: [
      "https://placehold.co/600x600/e2e8f0/475569?text=Matha+Patti"
    ],
  },
  {
    id: "9",
    slug: "multicolor-beaded-bracelet",
    name: "Multicolor Beaded Bracelet",
    price: 350,
    shortDescription: "Fun and colorful beaded bracelet.",
    description: "Add a pop of color to your wrist with this handmade beaded bracelet. Elastic band for easy wear.",
    category: "Bracelets",
    images: [
      "https://placehold.co/600x600/e2e8f0/475569?text=Beaded+Bracelet"
    ],
  },
  {
    id: "10",
    slug: "heavy-bridal-set",
    name: "Heavy Bridal Set",
    price: 5500,
    shortDescription: "Complete bridal necklace set with long haram.",
    description: "The ultimate bridal collection. Includes a choker, long haram, earrings, maang tikka, and nose ring. Antique gold finish with premium stone setting.",
    category: "Necklace",
    images: [
      "https://placehold.co/600x600/e2e8f0/475569?text=Bridal+Set+Full",
      "https://placehold.co/600x600/e2e8f0/475569?text=Bridal+Set+Close"
    ],
    isFeatured: true,
  },
];
