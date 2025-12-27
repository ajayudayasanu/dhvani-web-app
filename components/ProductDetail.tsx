'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Product, products } from '../data/products';
import InstagramButton from './InstagramButton';

interface ProductDetailProps {
    product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
    const router = useRouter();

    // For ID-based variants, we don't need local state for "selectedVariant" objects
    // because clicking a variant navigates to a new URL/product.
    // However, we need to resolve the linked variant IDs to actual product data to display buttons.

    const variantProducts = product.variants?.map(id =>
        products.find(p => p.id === id)
    ).filter(Boolean) as Product[] || [];

    // Combine current product (as a "variant" option) with linked variants if needed, 
    // or just display linked variants. 
    // Usually, we want to show ALL options including the current one.
    // The verification plan says "Refactor... to be standalone entries".
    // So if I am on "Green", "Ruby" is a variant.
    // The list of buttons should probably be [Green (Active), Ruby, Pastel].

    // We can construct a full list of related products for the selector.
    // If the data structure links siblings (e.g. Green links to Ruby, Ruby links to Green),
    // we can just use the `variants` array. 
    // BUT we also need to include the CURRENT product in that list so it appears as a button.

    // Let's create a display list: Current Product + Referenced Variants.
    // Sort them by ID or some other metric if consistent ordering is needed.
    const allVariants = [product, ...variantProducts].sort((a, b) => a.id.localeCompare(b.id));

    // Fallback for missing images
    const images = product.images.length > 0
        ? product.images
        : ['https://placehold.co/600x600/e2e8f0/475569?text=No+Image'];

    const [activeImage, setActiveImage] = useState(images[0]);

    // Update active image when the image set changes
    useEffect(() => {
        setActiveImage(images[0]);
    }, [images]);

    const handleImageClick = (img: string) => {
        setActiveImage(img);
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        const currentIndex = images.indexOf(activeImage);
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setActiveImage(images[prevIndex]);
    };

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        const currentIndex = images.indexOf(activeImage);
        const nextIndex = (currentIndex + 1) % images.length;
        setActiveImage(images[nextIndex]);
    };

    const handleVariantClick = (variantSlug: string) => {
        router.push(`/products/${variantSlug}`);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 animate-fadeIn">
            {/* Image Gallery */}
            <div className="flex flex-col gap-4">
                <div className="relative aspect-square rounded-lg overflow-hidden bg-background-cream border border-ui-border group">
                    <Image
                        src={activeImage}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    {images.length > 1 && (
                        <>
                            <button
                                onClick={handlePrev}
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-stone-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-md backdrop-blur-sm z-10"
                                aria-label="Previous image"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-stone-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-md backdrop-blur-sm z-10"
                                aria-label="Next image"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </button>
                        </>
                    )}
                </div>

                {images.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleImageClick(img)}
                                className={`relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${activeImage === img ? 'border-primary-gold' : 'border-transparent hover:border-primary-lightGold'
                                    }`}
                            >
                                <Image
                                    src={img}
                                    alt={`${product.name} view ${idx + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="80px"
                                />
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
                <div className="mb-2">
                    <span className="text-sm font-medium text-text-muted uppercase tracking-wide">
                        {product.category}
                    </span>
                </div>

                <h1 className="text-3xl font-serif text-text-primary mb-2">{product.name}</h1>

                <p className="text-2xl font-semibold text-text-primary mb-6 animate-fadeIn">
                    ₹{product.price.toLocaleString('en-IN')}
                </p>

                {/* Variants Selector */}
                {allVariants.length > 1 && (
                    <div className="mb-8">
                        <h3 className="text-sm font-medium text-text-primary mb-3">Available Variants:</h3>
                        <div className="flex flex-wrap gap-2">
                            {allVariants.map((p) => {
                                const isSelected = product.id === p.id;
                                // Use variantName if available, otherwise simplified name logic could be added
                                const displayName = p.variantName || p.name;

                                return (
                                    <button
                                        key={p.id}
                                        onClick={() => handleVariantClick(p.slug)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${isSelected
                                                ? 'bg-primary-gold text-white border-primary-gold'
                                                : 'bg-transparent text-text-secondary border-ui-border hover:border-primary-gold hover:text-primary-gold'
                                            }`}
                                    >
                                        {displayName}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}

                <div className="prose prose-p:text-text-secondary prose-ul:text-text-secondary prose-li:text-text-secondary mb-8">
                    <p className="text-text-secondary leading-relaxed mb-4">
                        {product.description}
                    </p>
                    <ul className="list-disc list-inside text-text-secondary space-y-1 text-sm">
                        {/* We could add generic details if not in data, but user said 'assumed from data' */}
                        <li>Handcrafted with care</li>
                        <li>Premium finish</li>
                    </ul>
                </div>

                <div className="mt-auto">
                    <InstagramButton
                        variant="primary"
                        className="w-full sm:w-auto text-lg py-4"
                        message={`Message to Order: ${product.name} ${product.variantName ? `(${product.variantName})` : ''}`}
                    />
                    <p className="mt-3 text-xs text-text-muted text-center sm:text-left">
                        Clicking will open Instagram chat with @isdhanistories
                    </p>

                    {product.instagramPostUrl && (
                        <div className="mt-6 pt-6 border-t border-ui-border">
                            <a
                                href={product.instagramPostUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-text-muted hover:text-text-primary flex items-center gap-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                View original post on Instagram
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
