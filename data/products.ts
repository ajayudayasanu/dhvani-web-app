
export interface ProductImage {
  url: string;
  alt: string;
  isPrimary?: boolean;
}

export interface ProductVariant {
  id: string;
  name: string; // e.g., "Green Beads", "Rose Gold"
  price: number;
  compareAtPrice?: number; // Original price for showing discounts
  sku?: string;
  images: ProductImage[];
  inStock: boolean;
  stockQuantity?: number;
  attributes?: Record<string, string>; // e.g., { color: "Green", size: "Medium" }
}

export interface Product {
  // Basic Information
  id: string;
  slug: string;
  name: string;
  sku?: string;

  // Pricing
  price: number; // Base price or starting price for variants
  compareAtPrice?: number; // Original price before discount
  priceRange?: { min: number; max: number }; // For products with variants

  // Descriptions
  shortDescription: string;
  description: string;

  // Categorization
  category: string;
  subcategory?: string;
  tags?: string[]; // e.g., ["bridal", "traditional", "jadau"]

  // Media
  images: ProductImage[];
  videoUrl?: string;

  // Variants
  hasVariants: boolean;
  variants?: ProductVariant[];
  variantType?: string; // e.g., "color", "size", "material"

  // Inventory
  inStock: boolean;
  stockQuantity?: number;
  lowStockThreshold?: number;
  availabilityStatus?: 'in_stock' | 'out_of_stock' | 'pre_order' | 'made_to_order';

  // Product Details
  material?: string; // e.g., "Brass Alloy with Gold Plating"
  weight?: number; // in grams
  dimensions?: {
    length?: number;
    width?: number;
    height?: number;
    unit?: string;
  };

  // Features
  isFeatured?: boolean;
  isNew?: boolean;
  isBestseller?: boolean;

  // Social & Marketing
  instagramPostUrl?: string;

  // Relations
  relatedProducts?: string[]; // Array of product IDs

  // SEO
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string[];

  // Additional Information
  careInstructions?: string;
  shippingInfo?: string;
  returnPolicy?: string;

  // Timestamps
  createdAt?: Date;
  updatedAt?: Date;

  // Reviews
  averageRating?: number;
  reviewCount?: number;
}

export const products: Product[] = [
  // Product 1 - Featured Necklace with Color Variants
  {
    id: "nc2029",
    slug: "elegant-antique-hasli-necklace-nc2029",
    name: "Elegant Antique Hasli Necklace Sets NC2029",
    sku: "NC2029",
    price: 2400,
    priceRange: { min: 2400, max: 2500 },
    shortDescription: "Beautiful AD Moissanite Peacock Necklace with matching earrings in multiple stunning colors.",
    description: "Enhance your style with our Beautiful AD Moissanite Peacock Necklace Sets paired perfectly with matching earrings. Crafted with high-quality stones & beads, this set combines timeless elegance with a modern touch. The intricate peacock design symbolizes grace and beauty, making it perfect for special occasions or adding a touch of glamour to your everyday look. Comes with complementary Dori, brass alloy base, intricate craftsmanship, and semi-precious stones. Each variant offers a unique color combination to match your outfit and mood.",
    category: "Necklace",
    subcategory: "Statement Necklaces",
    tags: ["peacock", "ad-stone", "moissanite", "bridal", "necklace-set", "traditional", "festive"],
    images: [
      {
        url: "https://kruthikajewellery.com/cdn/shop/files/IMG_0146_copy_b0dd9dcf-9877-4ff3-be26-c95ec68af963.jpg",
        alt: "Elegant Antique Hasli Necklace Sets NC2029 - Green Beads Front View",
        isPrimary: true
      },
      {
        url: "https://kruthikajewellery.com/cdn/shop/files/IMG_0235_copy.jpg",
        alt: "Elegant Antique Hasli Necklace Sets NC2029 - Close-up Detail of Peacock Design"
      }
    ],
    hasVariants: true,
    variantType: "color",
    variants: [
      {
        id: "nc2029-green",
        name: "Green Beads",
        price: 2400,
        sku: "NC2029-GRN",
        images: [
          {
            url: "https://kruthikajewellery.com/cdn/shop/files/IMG_0146_copy_b0dd9dcf-9877-4ff3-be26-c95ec68af963.jpg",
            alt: "NC2029 Green Beads Variant - Full Set View",
            isPrimary: true
          },
          {
            url: "https://kruthikajewellery.com/cdn/shop/files/IMG_0235_copy.jpg",
            alt: "NC2029 Green Beads Variant - Detailed Close-up"
          }
        ],
        inStock: true,
        stockQuantity: 5,
        attributes: { color: "Green", material: "Green Beads with AD Stones" }
      },
      {
        id: "nc2029-ruby",
        name: "Ruby Beads",
        price: 2500,
        compareAtPrice: 2800,
        sku: "NC2029-RBY",
        images: [
          {
            url: "https://kruthikajewellery.com/cdn/shop/files/IMG_0234_copy.jpg",
            alt: "NC2029 Ruby Beads Variant - Premium Red Color",
            isPrimary: true
          },
          {
            url: "https://kruthikajewellery.com/cdn/shop/files/IMG_0236_copy.jpg",
            alt: "NC2029 Ruby Beads Variant - Earring Detail"
          }
        ],
        inStock: true,
        stockQuantity: 3,
        attributes: { color: "Ruby Red", material: "Ruby Beads with AD Stones" }
      },
      {
        id: "nc2029-pastel",
        name: "Pastel Green Beads",
        price: 2450,
        sku: "NC2029-PSTL",
        images: [
          {
            url: "https://kruthikajewellery.com/cdn/shop/files/IMG_0235_copy.jpg",
            alt: "NC2029 Pastel Green Variant - Soft Elegant Color",
            isPrimary: true
          }
        ],
        inStock: true,
        stockQuantity: 7,
        attributes: { color: "Pastel Green", material: "Pastel Green Beads with AD Stones" }
      },
      {
        id: "nc2029-purple",
        name: "Purple Beads",
        price: 2400,
        sku: "NC2029-PRPL",
        images: [
          {
            url: "https://placehold.co/600x600/9333ea/ffffff?text=Purple+Beads+Coming+Soon",
            alt: "NC2029 Purple Beads Variant - Currently Unavailable",
            isPrimary: true
          }
        ],
        inStock: false,
        stockQuantity: 0,
        attributes: { color: "Purple", material: "Purple Beads with AD Stones" }
      }
    ],
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    inStock: true,
    availabilityStatus: 'in_stock',
    material: "Brass Alloy Base, AD Stones, Moissanite, Semi-precious stones, Colored Beads",
    weight: 65,
    dimensions: {
      length: 40,
      width: 35,
      unit: "cm"
    },
    lowStockThreshold: 3,
    instagramPostUrl: "https://instagram.com/p/example1",
    relatedProducts: ["ps238", "nc2387", "nc2389"],
    metaTitle: "Elegant Antique Hasli Necklace Sets NC2029 | Peacock Design | Kruthika Jewellery",
    metaDescription: "Shop beautiful AD Moissanite Peacock Necklace Sets with matching earrings. Available in Green, Ruby, Pastel and Purple variants. Premium quality traditional jewellery.",
    metaKeywords: ["peacock necklace", "hasli necklace", "AD stone necklace", "moissanite necklace", "traditional necklace"],
    careInstructions: "Keep away from water, perfumes, and harsh chemicals. Store in a dry place in the provided box. Clean gently with a soft cloth. Avoid wearing during physical activities.",
    shippingInfo: "Free shipping on orders above ₹2000. Standard delivery in 5-7 business days. Express shipping available.",
    returnPolicy: "15-day return policy. Products should be unused and in original packaging.",
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-12-01'),
    averageRating: 4.7,
    reviewCount: 23
  },

  // Product 2 - Featured Pendant Set (No Variants)
  {
    id: "ps238",
    slug: "simple-jadau-pendant-set-ps238",
    name: "Simple Jadau Pendant Set PS238",
    sku: "PS238",
    price: 2960,
    compareAtPrice: 3200,
    shortDescription: "Elegant jadau pendant set with traditional craftsmanship and intricate stone work.",
    description: "Beautiful jadau pendant set featuring intricate stone work and traditional design that captures the essence of Indian heritage jewelry. Perfect for festive occasions, weddings, and special celebrations. Made with high-quality materials and showcasing detailed craftsmanship that reflects years of tradition. The pendant's design is versatile enough to complement both traditional sarees and modern fusion wear.",
    category: "Pendant Set",
    subcategory: "Traditional Pendants",
    tags: ["jadau", "pendant", "traditional", "festive", "wedding", "stone-work"],
    images: [
      {
        url: "https://kruthikajewellery.com/cdn/shop/files/IMG_0791copy_c0747a5a-9275-47fb-9d99-13dc31a6cbc3.jpg",
        alt: "Simple Jadau Pendant Set PS238 - Traditional Design",
        isPrimary: true
      }
    ],
    videoUrl: "https://youtube.com/watch?v=example",
    hasVariants: false,
    isFeatured: true,
    isNew: false,
    isBestseller: false,
    inStock: true,
    stockQuantity: 8,
    lowStockThreshold: 5,
    availabilityStatus: 'in_stock',
    material: "Brass Alloy with Gold Plating, Jadau Stones, Kundan Work",
    weight: 45,
    dimensions: {
      length: 6,
      width: 4,
      unit: "cm"
    },
    instagramPostUrl: "https://instagram.com/p/example2",
    relatedProducts: ["nc2029", "nc2387", "lh1853"],
    metaTitle: "Simple Jadau Pendant Set PS238 | Traditional Indian Jewellery | Kruthika Jewellery",
    metaDescription: "Buy elegant jadau pendant set with traditional craftsmanship. Perfect for weddings and festivals. Premium quality at affordable price.",
    metaKeywords: ["jadau pendant", "traditional pendant", "indian jewellery", "wedding jewellery"],
    careInstructions: "Avoid contact with water and chemicals. Clean with a soft, dry cloth. Store separately to prevent scratches.",
    shippingInfo: "Free shipping on orders above ₹2000. Delivered in 5-7 business days with tracking.",
    returnPolicy: "15-day hassle-free returns. Item must be in original condition.",
    createdAt: new Date('2024-02-10'),
    updatedAt: new Date('2024-11-28'),
    averageRating: 4.8,
    reviewCount: 15
  },

  // Product 3 - New Arrival, Reversible Design
  {
    id: "nc2389",
    slug: "reversible-floral-kemp-necklace-nc2389",
    name: "Beautiful Two-in-One Reversible Floral Kemp Necklace Set with Earrings NC2389",
    sku: "NC2389",
    price: 1690,
    shortDescription: "Innovative two-in-one reversible necklace set with stunning floral kemp design on both sides.",
    description: "Versatile reversible necklace set that offers two different looks in one piece - truly exceptional value! Features beautiful floral kemp work on both sides with matching earrings. Perfect for traditional and festive occasions where you want options without carrying multiple jewelry pieces. The front side showcases vibrant kemp stones while the reverse offers a complementary design. Comes with earrings that match both sides.",
    category: "Necklace",
    subcategory: "Kemp Jewellery",
    tags: ["reversible", "kemp", "floral", "two-in-one", "versatile", "innovative", "festive"],
    images: [
      {
        url: "https://kruthikajewellery.com/cdn/shop/files/IMG_0509copy_3e650061-0ae5-4bf6-abdd-3b367ac284e6.jpg",
        alt: "Reversible Floral Kemp Necklace NC2389 - Front Design",
        isPrimary: true
      }
    ],
    hasVariants: false,
    isFeatured: true,
    isNew: true,
    isBestseller: false,
    inStock: true,
    stockQuantity: 12,
    lowStockThreshold: 5,
    availabilityStatus: 'in_stock',
    material: "Brass Alloy, Kemp Stones, Temple Jewellery Work",
    weight: 55,
    dimensions: {
      length: 38,
      width: 32,
      unit: "cm"
    },
    instagramPostUrl: "https://instagram.com/p/example3",
    relatedProducts: ["nc2387", "nc2029", "ps238"],
    metaTitle: "Two-in-One Reversible Kemp Necklace NC2389 | Floral Design | Kruthika Jewellery",
    metaDescription: "Shop innovative reversible kemp necklace with two different designs. Perfect for festivals. Get two looks in one piece!",
    metaKeywords: ["reversible necklace", "kemp necklace", "temple jewellery", "two in one necklace"],
    careInstructions: "Keep away from moisture. Handle carefully when reversing. Store flat to maintain both sides. Clean with soft cloth.",
    shippingInfo: "Free shipping on orders above ₹2000. Ships within 2-3 business days.",
    returnPolicy: "15-day return policy applicable. Ensure both sides remain undamaged.",
    createdAt: new Date('2024-11-01'),
    updatedAt: new Date('2024-12-20'),
    averageRating: 4.9,
    reviewCount: 8
  },

  // Product 4 - With Color Variants
  {
    id: "nc2387",
    slug: "trendy-jadau-floral-necklace-nc2387",
    name: "Trendy Jadau Floral Necklace NC2387",
    sku: "NC2387",
    price: 2460,
    priceRange: { min: 2460, max: 2460 },
    shortDescription: "Contemporary jadau necklace with elegant floral patterns in vibrant colors.",
    description: "Contemporary jadau necklace featuring elegant floral patterns and premium stone setting. Available in multiple stunning color options to match your outfit perfectly. This piece represents the perfect blend of traditional jadau craftsmanship with modern design aesthetics. The floral motifs are hand-crafted with precision, and each stone is carefully set to create a mesmerizing effect.",
    category: "Necklace",
    subcategory: "Jadau Necklaces",
    tags: ["jadau", "floral", "contemporary", "modern", "colorful", "premium"],
    images: [
      {
        url: "https://kruthikajewellery.com/cdn/shop/files/IMG_0699_copy.jpg",
        alt: "Trendy Jadau Floral Necklace NC2387 - Green Variant",
        isPrimary: true
      }
    ],
    hasVariants: true,
    variantType: "color",
    variants: [
      {
        id: "nc2387-green",
        name: "Green",
        price: 2460,
        sku: "NC2387-GRN",
        images: [
          {
            url: "https://kruthikajewellery.com/cdn/shop/files/IMG_0699_copy.jpg",
            alt: "NC2387 Green Variant - Fresh and Elegant",
            isPrimary: true
          }
        ],
        inStock: true,
        stockQuantity: 6,
        attributes: { color: "Green", tone: "Vibrant" }
      },
      {
        id: "nc2387-pink",
        name: "Pink",
        price: 2460,
        sku: "NC2387-PNK",
        images: [
          {
            url: "https://kruthikajewellery.com/cdn/shop/files/IMG_0699_copy.jpg",
            alt: "NC2387 Pink Variant - Soft and Feminine",
            isPrimary: true
          }
        ],
        inStock: true,
        stockQuantity: 9,
        attributes: { color: "Pink", tone: "Soft" }
      }
    ],
    isFeatured: false,
    isNew: true,
    isBestseller: false,
    inStock: true,
    stockQuantity: 15,
    lowStockThreshold: 5,
    availabilityStatus: 'in_stock',
    material: "Brass Alloy, Jadau Stones, Kundan, Premium Color Stones",
    weight: 50,
    dimensions: {
      length: 42,
      width: 36,
      unit: "cm"
    },
    relatedProducts: ["nc2029", "nc2389", "ps238"],
    metaTitle: "Trendy Jadau Floral Necklace NC2387 | Modern Traditional Jewellery",
    metaDescription: "Shop contemporary jadau floral necklace in Green and Pink colors. Premium quality traditional jewellery with modern design.",
    metaKeywords: ["jadau necklace", "floral necklace", "modern traditional jewellery", "colorful necklace"],
    careInstructions: "Keep away from water and perfumes. Store in provided box. Clean with soft cloth only.",
    shippingInfo: "Free shipping above ₹2000. Express shipping available at extra cost.",
    returnPolicy: "15-day return window. Product must be in original condition with tags.",
    createdAt: new Date('2024-10-15'),
    updatedAt: new Date('2024-12-15'),
    averageRating: 4.6,
    reviewCount: 11
  },

  // Product 5 - Premium Hair Accessory
  {
    id: "j243",
    slug: "royal-jadau-golden-hair-bun-j243",
    name: "Royal Jadau Golden Hair Bun J243",
    sku: "J243",
    price: 8460,
    compareAtPrice: 9500,
    shortDescription: "Premium jadau hair accessory with royal golden finish and intricate stone work.",
    description: "Exquisite jadau hair bun accessory with royal golden finish that adds regal elegance to any bridal or festive look. Features intricate stone work and traditional design elements passed down through generations. Perfect for brides, special occasions, and cultural celebrations to complete your traditional look. Each piece is carefully crafted by skilled artisans to ensure the highest quality. The weight distribution is designed for comfortable all-day wear.",
    category: "Hair Accessories",
    subcategory: "Hair Buns",
    tags: ["hair-bun", "jadau", "bridal", "royal", "golden", "premium", "traditional"],
    images: [
      {
        url: "https://kruthikajewellery.com/cdn/shop/files/IMG_0685copy_c980cb0e-78ae-4e47-80aa-2fd92ecab271.jpg",
        alt: "Royal Jadau Golden Hair Bun J243 - Traditional Bridal Accessory",
        isPrimary: true
      }
    ],
    hasVariants: false,
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    inStock: true,
    stockQuantity: 3,
    lowStockThreshold: 2,
    availabilityStatus: 'in_stock',
    material: "Brass Alloy with 22K Gold Plating, Premium Jadau Stones, Kundan Work",
    weight: 85,
    dimensions: {
      length: 10,
      width: 10,
      height: 4,
      unit: "cm"
    },
    instagramPostUrl: "https://instagram.com/p/example5",
    relatedProducts: ["lh1853", "nc2029", "ps238"],
    metaTitle: "Royal Jadau Golden Hair Bun J243 | Bridal Hair Accessory | Kruthika Jewellery",
    metaDescription: "Buy premium jadau hair bun with golden finish. Perfect for bridal and wedding occasions. Traditional craftsmanship with royal elegance.",
    metaKeywords: ["hair bun", "bridal hair accessory", "jadau hair bun", "golden hair bun", "wedding hair accessory"],
    careInstructions: "Handle with extreme care. Keep away from water and chemicals. Store in soft cloth pouch. Clean professionally if needed.",
    shippingInfo: "Free insured shipping. Delivered in premium packaging. Express delivery available.",
    returnPolicy: "7-day return policy for hair accessories. Must be completely unused.",
    createdAt: new Date('2024-03-20'),
    updatedAt: new Date('2024-12-10'),
    averageRating: 4.9,
    reviewCount: 7
  },

  // Product 6 - Budget Friendly Option
  {
    id: "nc2386",
    slug: "budget-friendly-jadau-necklace-nc2386",
    name: "Beautiful Budget Friendly Jadau Floral Necklace with Pastel Green Beads NC2386",
    sku: "NC2386",
    price: 6730,
    compareAtPrice: 7500,
    shortDescription: "Affordable jadau necklace combining quality with value, featuring pastel green bead accents.",
    description: "Beautiful jadau necklace combining traditional craftsmanship with modern aesthetics at an unbeatable price point. Features pastel green beads and intricate floral motifs that create a sophisticated look. An excellent choice for those seeking premium quality jewelry at an affordable price. Despite the budget-friendly pricing, we haven't compromised on quality or design. Perfect for weddings, festivals, and special occasions where you want to look stunning without breaking the bank.",
    category: "Necklace",
    subcategory: "Jadau Necklaces",
    tags: ["jadau", "budget-friendly", "affordable", "pastel", "floral", "value", "wedding"],
    images: [
      {
        url: "https://kruthikajewellery.com/cdn/shop/files/IMG_0721copy_44ce069d-e66f-48f9-8262-bf3eae5bbcbc.jpg",
        alt: "Budget Friendly Jadau Necklace NC2386 with Pastel Green Beads",
        isPrimary: true
      }
    ],
    hasVariants: false,
    isFeatured: false,
    isNew: false,
    isBestseller: true,
    inStock: true,
    stockQuantity: 15,
    lowStockThreshold: 8,
    availabilityStatus: 'in_stock',
    material: "Brass Alloy, Jadau Stones, Pastel Green Beads, Kundan Work",
    weight: 72,
    dimensions: {
      length: 45,
      width: 38,
      unit: "cm"
    },
    relatedProducts: ["nc2029", "nc2387", "lh1853"],
    metaTitle: "Budget Friendly Jadau Necklace NC2386 | Affordable Traditional Jewellery",
    metaDescription: "Shop beautiful jadau necklace with pastel green beads at affordable price. Premium quality traditional jewellery without breaking the bank.",
    metaKeywords: ["budget jadau necklace", "affordable traditional jewellery", "pastel green necklace", "value jewellery"],
    careInstructions: "Keep dry and away from chemicals. Store in provided box. Clean with soft cloth.",
    shippingInfo: "Free shipping on orders above ₹2000. Standard delivery 5-7 days.",
    returnPolicy: "15-day easy returns. Full refund if not satisfied.",
    createdAt: new Date('2024-05-12'),
    updatedAt: new Date('2024-12-05'),
    averageRating: 4.5,
    reviewCount: 28
  },

  // Product 7 - Affordable Trendy Option
  {
    id: "nc2009",
    slug: "trendy-american-diamond-necklace-nc2009",
    name: "Trendy American Diamond Half Moon Necklace Set NC2009",
    sku: "NC2009",
    price: 890,
    shortDescription: "Modern and trendy AD necklace set with unique half moon design at amazing price.",
    description: "Contemporary American Diamond necklace featuring a stylish and unique half moon design that's perfect for the modern woman. Comes with matching earrings that complement the necklace beautifully. Perfect for parties, college events, office wear, and special occasions. This piece offers affordable luxury with sparkling brilliance that rivals more expensive jewelry. The half moon design is trendy and eye-catching, making it a conversation starter at any event.",
    category: "Necklace",
    subcategory: "American Diamond",
    tags: ["american-diamond", "trendy", "modern", "affordable", "party-wear", "half-moon", "daily-wear"],
    images: [
      {
        url: "https://kruthikajewellery.com/cdn/shop/files/IMG_0129copy_09172bca-7061-49df-86f6-7261126278d1.jpg",
        alt: "Trendy American Diamond Half Moon Necklace Set NC2009 - Modern Design",
        isPrimary: true
      }
    ],
    hasVariants: false,
    isFeatured: true,
    isNew: true,
    isBestseller: true,
    inStock: true,
    stockQuantity: 25,
    lowStockThreshold: 10,
    availabilityStatus: 'in_stock',
    material: "Brass Alloy with Rhodium Plating, American Diamond Stones",
    weight: 28,
    dimensions: {
      length: 35,
      width: 30,
      unit: "cm"
    },
    instagramPostUrl: "https://instagram.com/p/example7",
    relatedProducts: ["nc1991", "ps238", "nc2387"],
    metaTitle: "Trendy AD Half Moon Necklace NC2009 | Affordable Party Wear Jewellery",
    metaDescription: "Buy trendy American Diamond half moon necklace set at just ₹890. Perfect for parties and daily wear. Sparkle without spending a fortune!",
    metaKeywords: ["american diamond necklace", "affordable jewellery", "trendy necklace", "party wear jewellery", "half moon necklace"],
    careInstructions: "Avoid water and perfumes. Store in provided pouch. Clean with soft cloth.",
    shippingInfo: "Free shipping above ₹2000. Fast delivery in 3-5 business days.",
    returnPolicy: "15-day hassle-free returns accepted.",
    createdAt: new Date('2024-11-05'),
    updatedAt: new Date('2024-12-22'),
    averageRating: 4.4,
    reviewCount: 42
  },

  // Product 8 - Traditional with Variants
  {
    id: "nc1945",
    slug: "premium-lakshmi-jadau-necklace-nc1945",
    name: "Premium Lakshmi Jadau Necklace NC1945",
    sku: "NC1945",
    price: 3090,
    priceRange: { min: 3090, max: 3090 },
    shortDescription: "Traditional Lakshmi design jadau necklace perfect for religious and festive occasions.",
    description: "Elegant necklace featuring traditional Goddess Lakshmi motifs with premium jadau work that brings blessings and prosperity. Perfect for religious ceremonies, temple visits, festivals, and special occasions. Available in multiple finishes to suit your preference and match your traditional attire. Each piece is crafted with devotion and attention to detail, ensuring you receive a jewelry piece that's both beautiful and spiritually significant.",
    category: "Necklace",
    subcategory: "Temple Jewellery",
    tags: ["lakshmi", "jadau", "temple-jewellery", "religious", "traditional", "festive", "goddess"],
    images: [
      {
        url: "https://kruthikajewellery.com/cdn/shop/files/IMG_0150_copy_3ce5a147-47f7-4997-94ed-d3e8aa431e2a.jpg",
        alt: "Premium Lakshmi Jadau Necklace NC1945 - Divine Design",
        isPrimary: true
      }
    ],
    hasVariants: true,
    variantType: "finish",
    variants: [
      {
        id: "nc1945-gold",
        name: "Gold Finish",
        price: 3090,
        sku: "NC1945-GLD",
        images: [
          {
            url: "https://kruthikajewellery.com/cdn/shop/files/IMG_0150_copy_3ce5a147-47f7-4997-94ed-d3e8aa431e2a.jpg",
            alt: "NC1945 Gold Finish - Classic Traditional Look",
            isPrimary: true
          }
        ],
        inStock: true,
        stockQuantity: 8,
        attributes: { finish: "Gold", plating: "22K Gold" }
      },
      {
        id: "nc1945-antique",
        name: "Antique Finish",
        price: 3090,
        sku: "NC1945-ANT",
        images: [
          {
            url: "https://kruthikajewellery.com/cdn/shop/files/IMG_0150_copy_3ce5a147-47f7-4997-94ed-d3e8aa431e2a.jpg",
            alt: "NC1945 Antique Finish - Vintage Charm",
            isPrimary: true
          }
        ],
        inStock: true,
        stockQuantity: 5,
        attributes: { finish: "Antique", plating: "Oxidized Gold" }
      }
    ],
    isFeatured: false,
    isNew: false,
    isBestseller: true,
    inStock: true,
    stockQuantity: 13,
    lowStockThreshold: 5,
    availabilityStatus: 'in_stock',
    material: "Brass Alloy, Jadau Stones, Temple Work, Lakshmi Coins",
    weight: 68,
    dimensions: {
      length: 40,
      width: 35,
      unit: "cm"
    },
    relatedProducts: ["nc2389", "j243", "lh1856"],
    metaTitle: "Premium Lakshmi Jadau Necklace NC1945 | Temple Jewellery | Kruthika",
    metaDescription: "Buy traditional Lakshmi jadau necklace for religious occasions. Available in Gold and Antique finish. Premium temple jewellery.",
    metaKeywords: ["lakshmi necklace", "temple jewellery", "jadau necklace", "religious jewellery", "goddess jewellery"],
    careInstructions: "Handle with respect. Keep away from water. Clean with soft dry cloth. Store in temple jewellery box.",
    shippingInfo: "Free shipping above ₹2000. Carefully packaged for safe delivery.",
    returnPolicy: "15-day return policy applicable.",
    createdAt: new Date('2024-04-08'),
    updatedAt: new Date('2024-11-30'),
    averageRating: 4.8,
    reviewCount: 19
  },

  // Product 9 - Traditional Long Haaram
  {
    id: "lh1856",
    slug: "elegant-peacock-guttaposalu-haaram-lh1856",
    name: "Elegant Peacock Guttaposalu Haaram with Pearl Drops LH1856",
    sku: "LH1856",
    price: 3890,
    shortDescription: "Traditional South Indian long haaram with peacock guttaposalu design and pearl drops.",
    description: "Traditional South Indian haaram featuring intricate peacock guttaposalu work with elegant pearl drops that create a royal and graceful look. Perfect for weddings, reception ceremonies, and special celebrations where you want to showcase traditional South Indian heritage. Combines heritage design with contemporary appeal, making it suitable for modern brides who appreciate tradition. The peacock motifs symbolize grace and beauty in Indian culture.",
    category: "Haaram",
    subcategory: "Long Haarams",
    tags: ["haaram", "peacock", "guttaposalu", "pearl", "south-indian", "traditional", "wedding", "bridal"],
    images: [
      {
        url: "https://kruthikajewellery.com/cdn/shop/files/IMG_0150_copy_3ce5a147-47f7-4997-94ed-d3e8aa431e2a.jpg",
        alt: "Elegant Peacock Guttaposalu Haaram LH1856 with Pearl Drops",
        isPrimary: true
      }
    ],
    hasVariants: false,
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    inStock: true,
    stockQuantity: 4,
    lowStockThreshold: 3,
    availabilityStatus: 'in_stock',
    material: "Brass Alloy with Gold Plating, Guttaposalu Work, Premium Pearls, Semi-precious Stones",
    weight: 95,
    dimensions: {
      length: 75,
      width: 40,
      unit: "cm"
    },
    relatedProducts: ["lh1853", "nc1945", "j243"],
    metaTitle: "Peacock Guttaposalu Haaram LH1856 | Traditional South Indian Jewellery",
    metaDescription: "Shop elegant peacock guttaposalu haaram with pearl drops. Perfect for South Indian weddings and traditional ceremonies.",
    metaKeywords: ["guttaposalu haaram", "peacock haaram", "south indian jewellery", "traditional haaram", "bridal haaram"],
    careInstructions: "Handle pearls with care. Keep away from water and chemicals. Store flat in provided box.",
    shippingInfo: "Free insured shipping. Delivered in premium packaging within 7-10 days.",
    returnPolicy: "7-day return policy. Must be in pristine condition.",
    createdAt: new Date('2024-06-15'),
    updatedAt: new Date('2024-12-08'),
    averageRating: 4.7,
    reviewCount: 6
  },

  // Product 10 - Premium Bridal Haaram
  {
    id: "lh1853",
    slug: "royal-contemporary-kundan-jadau-haaram-lh1853",
    name: "Royal Contemporary Kundan Jadau Pastel Beads Guttapoosalu Haaram LH1853",
    sku: "LH1853",
    price: 12990,
    compareAtPrice: 14990,
    shortDescription: "Premium bridal haaram collection featuring kundan jadau work with pastel beads.",
    description: "The ultimate bridal haaram collection featuring contemporary kundan jadau work with pastel bead accents and guttapoosalu design that creates a statement look for your special day. This statement piece combines traditional South Indian jewelry artistry with modern elegance and contemporary color palettes. Perfect for grand weddings, reception ceremonies, and special occasions where you want to look like royalty. Each element is handcrafted by master artisans, ensuring exceptional quality and attention to detail. This is an investment piece that can be passed down through generations.",
    category: "Haaram",
    subcategory: "Bridal Haarams",
    tags: ["haaram", "bridal", "kundan", "jadau", "guttapoosalu", "pastel", "premium", "luxury", "wedding", "royal"],
    images: [
      {
        url: "https://kruthikajewellery.com/cdn/shop/files/IMG_0287copy_5270e220-c41d-4c6e-8601-5d2a0b916581.jpg",
        alt: "Royal Contemporary Kundan Jadau Haaram LH1853 - Premium Bridal Collection",
        isPrimary: true
      }
    ],
    videoUrl: "https://youtube.com/watch?v=bridal-haaram",
    hasVariants: false,
    isFeatured: true,
    isNew: true,
    isBestseller: false,
    inStock: true,
    stockQuantity: 2,
    lowStockThreshold: 1,
    availabilityStatus: 'in_stock',
    material: "Premium Brass Alloy with 22K Gold Plating, Kundan Stones, Jadau Work, Pastel Beads, Guttapoosalu, Semi-precious Stones",
    weight: 125,
    dimensions: {
      length: 80,
      width: 45,
      unit: "cm"
    },
    instagramPostUrl: "https://instagram.com/p/bridal-haaram",
    relatedProducts: ["lh1856", "j243", "nc1945"],
    metaTitle: "Royal Kundan Jadau Bridal Haaram LH1853 | Premium Wedding Jewellery",
    metaDescription: "Shop premium kundan jadau bridal haaram with pastel beads and guttapoosalu. Ultimate statement piece for grand weddings.",
    metaKeywords: ["bridal haaram", "kundan haaram", "jadau haaram", "premium wedding jewellery", "luxury haaram", "guttapoosalu"],
    careInstructions: "Handle with extreme care. Professional cleaning recommended. Store in premium jewellery box. Avoid exposure to any chemicals or moisture.",
    shippingInfo: "Free insured express shipping. Delivered in luxury packaging with authentication certificate.",
    returnPolicy: "7-day return policy. Item must be completely unused with all tags and certificates.",
    createdAt: new Date('2024-09-20'),
    updatedAt: new Date('2024-12-24'),
    averageRating: 5.0,
    reviewCount: 4
  },

  // Product 11 - Daily Wear with Multiple Variants
  {
    id: "nc1991",
    slug: "simple-american-diamond-necklace-nc1991",
    name: "Simple American Diamond Drop Pendants Necklace Set NC1991",
    sku: "NC1991",
    price: 890,
    priceRange: { min: 890, max: 890 },
    shortDescription: "Elegant AD drop pendant necklace perfect for daily wear, available in three classic colors.",
    description: "Simple yet elegant American Diamond necklace set with drop pendants and matching earrings that add sparkle to any outfit. Available in three beautiful classic colors - Silver, Rose Gold, and Gold - to match your personal style and wardrobe. Perfect for daily wear, office occasions, casual outings, and weekend brunches. Lightweight and comfortable for all-day wear, yet sophisticated enough for evening events. The minimalist design ensures it pairs well with both traditional and western attire.",
    category: "Necklace",
    subcategory: "American Diamond",
    tags: ["american-diamond", "daily-wear", "office", "lightweight", "affordable", "minimalist", "versatile"],
    images: [
      {
        url: "https://kruthikajewellery.com/cdn/shop/files/IMG_0157copy_efe52781-46a4-4035-b84f-2dd840921a09.jpg",
        alt: "Simple American Diamond Drop Pendants Necklace Set NC1991",
        isPrimary: true
      }
    ],
    hasVariants: true,
    variantType: "color",
    variants: [
      {
        id: "nc1991-silver",
        name: "Silver",
        price: 890,
        sku: "NC1991-SLV",
        images: [
          {
            url: "https://kruthikajewellery.com/cdn/shop/files/IMG_0157copy_efe52781-46a4-4035-b84f-2dd840921a09.jpg",
            alt: "NC1991 Silver Variant - Classic and Elegant",
            isPrimary: true
          }
        ],
        inStock: true,
        stockQuantity: 15,
        attributes: { color: "Silver", plating: "Rhodium" }
      },
      {
        id: "nc1991-rose-gold",
        name: "Rose Gold",
        price: 890,
        sku: "NC1991-RG",
        images: [
          {
            url: "https://kruthikajewellery.com/cdn/shop/files/IMG_0157copy_efe52781-46a4-4035-b84f-2dd840921a09.jpg",
            alt: "NC1991 Rose Gold Variant - Modern and Feminine",
            isPrimary: true
          }
        ],
        inStock: true,
        stockQuantity: 10,
        attributes: { color: "Rose Gold", plating: "Rose Gold" }
      },
      {
        id: "nc1991-gold",
        name: "Gold",
        price: 890,
        sku: "NC1991-GLD",
        images: [
          {
            url: "https://kruthikajewellery.com/cdn/shop/files/IMG_0157copy_efe52781-46a4-4035-b84f-2dd840921a09.jpg",
            alt: "NC1991 Gold Variant - Warm and Traditional",
            isPrimary: true
          }
        ],
        inStock: true,
        stockQuantity: 8,
        attributes: { color: "Gold", plating: "Gold" }
      }
    ],
    isFeatured: false,
    isNew: false,
    isBestseller: true,
    inStock: true,
    stockQuantity: 33,
    lowStockThreshold: 15,
    availabilityStatus: 'in_stock',
    material: "Brass Alloy with Plating (Rhodium/Rose Gold/Gold), American Diamond Stones",
    weight: 25,
    dimensions: {
      length: 40,
      width: 3,
      unit: "cm"
    },
    relatedProducts: ["nc2009", "ps238", "nc2387"],
    metaTitle: "Simple AD Drop Pendants Necklace NC1991 | Daily Wear Jewellery",
    metaDescription: "Shop elegant American Diamond drop pendant necklace in Silver, Rose Gold, and Gold. Perfect for daily wear at just ₹890.",
    metaKeywords: ["daily wear necklace", "american diamond", "office jewellery", "affordable necklace", "silver necklace"],
    careInstructions: "Avoid water and harsh chemicals. Store in provided pouch when not in use. Clean with soft cloth.",
    shippingInfo: "Free shipping on orders above ₹2000. Delivered within 3-5 business days.",
    returnPolicy: "15-day easy returns. Hassle-free exchange policy.",
    createdAt: new Date('2024-07-10'),
    updatedAt: new Date('2024-12-18'),
    averageRating: 4.3,
    reviewCount: 56
  },

  // Product 12 - Classic Pearl Maala
  {
    id: "lh402",
    slug: "two-lines-pearls-beads-maala-lh402",
    name: "Two Lines Pearls Beads Maala LH402",
    sku: "LH402",
    price: 1080,
    shortDescription: "Classic two-line pearl bead mala perfect for everyday wear and festive occasions.",
    description: "Traditional two-line pearl bead mala that combines simplicity with elegance, perfect for everyday wear and festive occasions. Made with high-quality pearls and beads that are carefully selected and strung together. Simple, elegant, and versatile design that complements both traditional sarees and contemporary western outfits. This timeless piece never goes out of style and can be worn to temple visits, family gatherings, office, or casual outings. A must-have accessory in every woman's jewelry collection.",
    category: "Haaram",
    subcategory: "Pearl Maalas",
    tags: ["pearl", "maala", "beads", "traditional", "everyday", "versatile", "classic", "simple"],
    images: [
      {
        url: "https://kruthikajewellery.com/cdn/shop/files/IMG_1131_copy_c295f847-6fb3-4355-a6bf-10bc0b424460.jpg",
        alt: "Two Lines Pearls Beads Maala LH402 - Classic Design",
        isPrimary: true
      }
    ],
    hasVariants: false,
    isFeatured: false,
    isNew: false,
    isBestseller: true,
    inStock: true,
    stockQuantity: 20,
    lowStockThreshold: 10,
    availabilityStatus: 'in_stock',
    material: "Premium Quality Pearls, Decorative Beads, Durable Thread",
    weight: 35,
    dimensions: {
      length: 60,
      width: 1,
      unit: "cm"
    },
    relatedProducts: ["lh1856", "nc1991", "ps238"],
    metaTitle: "Two Lines Pearls Beads Maala LH402 | Classic Traditional Jewellery",
    metaDescription: "Buy traditional two-line pearl bead mala perfect for everyday wear. Simple, elegant and versatile design at affordable price.",
    metaKeywords: ["pearl maala", "bead maala", "traditional maala", "everyday jewellery", "pearl necklace"],
    careInstructions: "Handle pearls gently. Keep away from perfumes and chemicals. Store in soft cloth pouch. Clean with slightly damp cloth only.",
    shippingInfo: "Free shipping above ₹2000. Carefully packaged to protect pearls.",
    returnPolicy: "15-day return policy. Pearls must be undamaged.",
    createdAt: new Date('2024-08-05'),
    updatedAt: new Date('2024-12-12'),
    averageRating: 4.6,
    reviewCount: 34
  },

  // Product 13 - Pre-order Item
  {
    id: "nc2401",
    slug: "exclusive-designer-kundan-choker-nc2401",
    name: "Exclusive Designer Kundan Choker NC2401",
    sku: "NC2401",
    price: 5890,
    shortDescription: "Exclusive designer kundan choker - Limited edition piece, available for pre-order.",
    description: "Exclusive designer kundan choker that's a limited edition masterpiece. This piece features intricate kundan work with a contemporary choker design that sits perfectly on the neckline. Ideal for brides and fashion-forward individuals who want something unique and exclusive. Due to high demand and limited artisan availability, this piece is currently available for pre-order only. Estimated delivery in 3-4 weeks from order date.",
    category: "Necklace",
    subcategory: "Chokers",
    tags: ["kundan", "choker", "exclusive", "designer", "limited-edition", "bridal", "contemporary"],
    images: [
      {
        url: "https://placehold.co/600x600/fbbf24/1f2937?text=Coming+Soon",
        alt: "Exclusive Designer Kundan Choker NC2401 - Pre-order Now",
        isPrimary: true
      }
    ],
    hasVariants: false,
    isFeatured: true,
    isNew: true,
    isBestseller: false,
    inStock: false,
    stockQuantity: 0,
    lowStockThreshold: 0,
    availabilityStatus: 'pre_order',
    material: "Premium Brass Alloy, Kundan Stones, Meenakari Work",
    weight: 58,
    dimensions: {
      length: 32,
      width: 28,
      unit: "cm"
    },
    relatedProducts: ["nc2029", "lh1853", "j243"],
    metaTitle: "Exclusive Designer Kundan Choker NC2401 | Limited Edition | Pre-order",
    metaDescription: "Pre-order exclusive designer kundan choker - limited edition piece. Unique design perfect for brides and special occasions.",
    metaKeywords: ["kundan choker", "designer choker", "exclusive jewellery", "pre-order jewellery", "limited edition"],
    careInstructions: "Professional cleaning recommended. Store carefully in provided box.",
    shippingInfo: "Pre-order item. Ships within 3-4 weeks. Free insured shipping.",
    returnPolicy: "7-day return policy"
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