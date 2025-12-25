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
  variants?: {
    name: string;
    inStock: boolean;
  }[];
}

export const products: Product[] = [
  {
    id: "1",
    slug: "elegant-antique-hasli-necklace-nc2029",
    name: "Elegant Antique Hasli Necklace Sets NC2029",
    price: 2400,
    shortDescription: "Beautiful AD Moissanite Peacock Necklace with matching earrings.",
    description: "Enhance your style with our Beautiful AD Moissanite Peacock Necklace Sets paired perfectly with matching earrings. Crafted with high-quality stones & beads, this set combines timeless elegance with a modern touch. Ideal for special occasions or adding a touch of glamour to your look. Comes with complementary Dori, brass alloy base, intricate craftsmanship, and semi-precious stones.",
    category: "Necklace",
    images: [
      "https://kruthikajewellery.com/cdn/shop/files/IMG_0146_copy_b0dd9dcf-9877-4ff3-be26-c95ec68af963.jpg",
      "https://kruthikajewellery.com/cdn/shop/files/IMG_0235_copy.jpg",
      "https://kruthikajewellery.com/cdn/shop/files/IMG_0234_copy.jpg",
      "https://kruthikajewellery.com/cdn/shop/files/IMG_0236_copy.jpg"
    ],
    isFeatured: true,
    variants: [
      { name: "Green Beads", inStock: true },
      { name: "Ruby Beads", inStock: true },
      { name: "Pastel Green Beads", inStock: true },
      { name: "Purple Beads", inStock: false }
    ]
  },
  {
    id: "2",
    slug: "simple-jadau-pendant-set-ps238",
    name: "Simple Jadau Pendant Set PS238",
    price: 2960,
    shortDescription: "Elegant jadau pendant set with traditional craftsmanship.",
    description: "Beautiful jadau pendant set featuring intricate stone work and traditional design. Perfect for festive occasions and weddings. Made with high-quality materials and detailed craftsmanship.",
    category: "Pendant Set",
    images: [
      "https://kruthikajewellery.com/cdn/shop/files/IMG_0791copy_c0747a5a-9275-47fb-9d99-13dc31a6cbc3.jpg"
    ],
    isFeatured: true
  },
  {
    id: "3",
    slug: "reversible-floral-kemp-necklace-nc2389",
    name: "Beautiful Two-in-One Reversible Floral Kemp Necklace Set with Earrings NC2389",
    price: 1690,
    shortDescription: "Two-in-one reversible necklace set with floral kemp design.",
    description: "Versatile reversible necklace set that offers two different looks in one piece. Features beautiful floral kemp work on both sides with matching earrings. Perfect for traditional and festive occasions.",
    category: "Necklace",
    images: [
      "https://kruthikajewellery.com/cdn/shop/files/IMG_0509copy_3e650061-0ae5-4bf6-abdd-3b367ac284e6.jpg"
    ],
    isFeatured: true
  },
  {
    id: "4",
    slug: "trendy-jadau-floral-necklace-nc2387",
    name: "Trendy Jadau Floral Necklace NC2387",
    price: 2460,
    shortDescription: "Modern jadau necklace with floral motifs in multiple colors.",
    description: "Contemporary jadau necklace featuring elegant floral patterns and premium stone setting. Available in multiple color options to match your outfit. Perfect blend of traditional and modern design.",
    category: "Necklace",
    images: [
      "https://kruthikajewellery.com/cdn/shop/files/IMG_0699_copy.jpg"
    ],
    variants: [
      { name: "Green", inStock: true },
      { name: "Pink", inStock: true }
    ]
  },
  {
    id: "5",
    slug: "royal-jadau-golden-hair-bun-j243",
    name: "Royal Jadau Golden Hair Bun J243",
    price: 8460,
    shortDescription: "Premium jadau hair accessory with golden finish.",
    description: "Exquisite jadau hair bun accessory with royal golden finish. Features intricate stone work and traditional design elements. Perfect for bridal and special occasions to complete your traditional look.",
    category: "Hair Accessories",
    images: [
      "https://kruthikajewellery.com/cdn/shop/files/IMG_0685copy_c980cb0e-78ae-4e47-80aa-2fd92ecab271.jpg"
    ],
    isFeatured: true
  },
  {
    id: "6",
    slug: "budget-friendly-jadau-necklace-nc2386",
    name: "Beautiful Budget Friendly Jadau Floral Necklace with Pastel Green Beads NC2386",
    price: 6730,
    shortDescription: "Affordable jadau necklace with pastel green bead accents.",
    description: "Beautiful jadau necklace combining traditional craftsmanship with modern aesthetics. Features pastel green beads and floral motifs. An excellent choice for those seeking premium quality at an affordable price.",
    category: "Necklace",
    images: [
      "https://kruthikajewellery.com/cdn/shop/files/IMG_0721copy_44ce069d-e66f-48f9-8262-bf3eae5bbcbc.jpg"
    ]
  },
  {
    id: "7",
    slug: "trendy-american-diamond-necklace-nc2009",
    name: "Trendy American Diamond Half Moon Necklace Set NC2009",
    price: 890,
    shortDescription: "Modern AD necklace set with half moon design.",
    description: "Contemporary American Diamond necklace featuring a stylish half moon design. Comes with matching earrings. Perfect for parties and special occasions. Affordable luxury with sparkling brilliance.",
    category: "Necklace",
    images: [
      "https://kruthikajewellery.com/cdn/shop/files/IMG_0129copy_09172bca-7061-49df-86f6-7261126278d1.jpg"
    ],
    isFeatured: true
  },
  {
    id: "8",
    slug: "premium-lakshmi-jadau-necklace-nc1945",
    name: "Premium Lakshmi Jadau Necklace NC1945",
    price: 3090,
    shortDescription: "Traditional Lakshmi design jadau necklace.",
    description: "Elegant necklace featuring traditional Goddess Lakshmi motifs with premium jadau work. Perfect for religious ceremonies and festive occasions. Available in multiple colors to suit your preference.",
    category: "Necklace",
    images: [
      "https://kruthikajewellery.com/cdn/shop/files/IMG_0150_copy_3ce5a147-47f7-4997-94ed-d3e8aa431e2a.jpg"
    ],
    variants: [
      { name: "Gold", inStock: true },
      { name: "Antique", inStock: true }
    ]
  },
  {
    id: "9",
    slug: "elegant-peacock-guttaposalu-haaram-lh1856",
    name: "Elegant Peacock Guttaposalu Haaram with Pearl Drops LH1856",
    price: 3890,
    shortDescription: "Long haaram with peacock guttaposalu design and pearl drops.",
    description: "Traditional South Indian haaram featuring intricate peacock guttaposalu work with elegant pearl drops. Perfect for weddings and special ceremonies. Combines heritage design with contemporary appeal.",
    category: "Haaram",
    images: [
      "https://kruthikajewellery.com/cdn/shop/files/IMG_0150_copy_3ce5a147-47f7-4997-94ed-d3e8aa431e2a.jpg"
    ]
  },
  {
    id: "10",
    slug: "royal-contemporary-kundan-jadau-haaram-lh1853",
    name: "Royal Contemporary Kundan Jadau Pastel Beads Guttapoosalu Haaram LH1853",
    price: 12990,
    shortDescription: "Premium bridal haaram with kundan jadau and pastel beads.",
    description: "The ultimate bridal haaram collection featuring contemporary kundan jadau work with pastel bead accents and guttapoosalu design. This statement piece combines traditional South Indian jewelry artistry with modern elegance. Perfect for grand weddings and special occasions.",
    category: "Haaram",
    images: [
      "https://kruthikajewellery.com/cdn/shop/files/IMG_0287copy_5270e220-c41d-4c6e-8601-5d2a0b916581.jpg"
    ],
    isFeatured: true
  },
  {
    id: "11",
    slug: "simple-american-diamond-necklace-nc1991",
    name: "Simple American Diamond Drop Pendants Necklace Set NC1991",
    price: 890,
    shortDescription: "Elegant AD drop pendant necklace in multiple colors.",
    description: "Simple yet elegant American Diamond necklace set with drop pendants and matching earrings. Available in three beautiful colors. Perfect for daily wear or office occasions. Lightweight and comfortable.",
    category: "Necklace",
    images: [
      "https://kruthikajewellery.com/cdn/shop/files/IMG_0157copy_efe52781-46a4-4035-b84f-2dd840921a09.jpg"
    ],
    variants: [
      { name: "Silver", inStock: true },
      { name: "Rose Gold", inStock: true },
      { name: "Gold", inStock: true }
    ]
  },
  {
    id: "12",
    slug: "two-lines-pearls-beads-maala-lh402",
    name: "Two Lines Pearls Beads Maala LH402",
    price: 1080,
    shortDescription: "Classic two-line pearl bead mala.",
    description: "Traditional two-line pearl bead mala perfect for everyday wear and festive occasions. Made with high-quality pearls and beads. Simple, elegant, and versatile design that complements both traditional and contemporary outfits.",
    category: "Haaram",
    images: [
      "https://kruthikajewellery.com/cdn/shop/files/IMG_1131_copy_c295f847-6fb3-4355-a6bf-10bc0b424460.jpg"
    ]
  }
];

// Categories for filtering
export const categories = [
  "Necklace",
  "Haaram",
  "Earrings",
  "Bangles",
  "Hair Accessories",
  "Pendant Set",
  "Hip Belts",
  "Other Accessories"
];

// Helper function to get featured products
export const getFeaturedProducts = () => {
  return products.filter(product => product.isFeatured);
};

// Helper function to get products by category
export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

// Helper function to get product by slug
export const getProductBySlug = (slug: string) => {
  return products.find(product => product.slug === slug);
};