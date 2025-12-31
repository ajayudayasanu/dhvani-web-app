'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Menu, Heart } from 'lucide-react';
import { Product, ProductVariant } from '../data/products';
import InstagramButton from './InstagramButton';
import { useWishlist } from '../context/WishlistContext';

interface ProductDetailProps {
    product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
    const router = useRouter();
    const { isInWishlist, toggleWishlist } = useWishlist();
    const isWishlisted = isInWishlist(product.id);

    // State for selected variant (if product has variants)
    const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
        product.hasVariants && product.variants && product.variants.length > 0
            ? product.variants[0]
            : null
    );

    // Determine current display data (Variant or Base Product)
    const currentName = selectedVariant ? `${product.name} - ${selectedVariant.name}` : product.name;
    const currentPrice = selectedVariant ? selectedVariant.price : product.price;
    const currentImages = selectedVariant ? selectedVariant.images : product.images;
    const currentStock = selectedVariant ? selectedVariant.inStock : product.inStock;
    const currentVariantName = selectedVariant ? selectedVariant.name : undefined;

    // Fallback for missing images
    const imagesToDisplay = currentImages.length > 0
        ? currentImages
        : [{ url: 'https://placehold.co/600x600/e2e8f0/475569?text=No+Image', alt: 'No Image' }];

    const [activeImage, setActiveImage] = useState(imagesToDisplay[0]);

    // Update active image when selected variant or product images change
    useEffect(() => {
        setActiveImage(imagesToDisplay[0]);
    }, [selectedVariant, product]);

    const handleImageClick = (img: { url: string; alt: string }) => {
        setActiveImage(img);
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        const currentIndex = imagesToDisplay.indexOf(activeImage);
        const prevIndex = (currentIndex - 1 + imagesToDisplay.length) % imagesToDisplay.length;
        setActiveImage(imagesToDisplay[prevIndex]);
    };

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        const currentIndex = imagesToDisplay.indexOf(activeImage);
        const nextIndex = (currentIndex + 1) % imagesToDisplay.length;
        setActiveImage(imagesToDisplay[nextIndex]);
    };

    const handleVariantClick = (variant: ProductVariant) => {
        setSelectedVariant(variant);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 animate-fadeIn">
            {/* Image Gallery */}
            <div className="flex flex-col gap-4">
                <div className="relative aspect-square rounded-lg overflow-hidden bg-background-cream border border-ui-border group">
                    <Image
                        src={activeImage.url}
                        alt={activeImage.alt || currentName}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    {imagesToDisplay.length > 1 && (
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

                {imagesToDisplay.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {imagesToDisplay.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleImageClick(img)}
                                className={`relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${activeImage.url === img.url ? 'border-primary-gold' : 'border-transparent hover:border-primary-lightGold'
                                    }`}
                            >
                                <Image
                                    src={img.url}
                                    alt={img.alt || `${currentName} view ${idx + 1}`}
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

                <div className="flex justify-between items-start gap-4">
                    <h1 className="text-3xl font-serif text-text-primary mb-2">{product.name}</h1>
                    <button
                        onClick={() => toggleWishlist(product.id)}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                    >
                        <Heart
                            className={`w-6 h-6 transition-colors ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-text-primary'}`}
                        />
                    </button>
                </div>

                <p className="text-2xl font-semibold text-text-primary mb-6 animate-fadeIn">
                    ₹{currentPrice.toLocaleString('en-IN')}
                    {selectedVariant && selectedVariant.compareAtPrice && (
                        <span className="text-lg text-text-muted line-through ml-3">
                            ₹{selectedVariant.compareAtPrice.toLocaleString('en-IN')}
                        </span>
                    )}
                    {!selectedVariant && product.compareAtPrice && (
                        <span className="text-lg text-text-muted line-through ml-3">
                            ₹{product.compareAtPrice.toLocaleString('en-IN')}
                        </span>
                    )}
                </p>

                {/* Variants Selector */}
                {product.hasVariants && product.variants && (
                    <div className="mb-8">
                        <h3 className="text-sm font-medium text-text-primary mb-3">
                            Select {product.variantType || 'Option'}: <span className="text-text-secondary font-normal">{currentVariantName}</span>
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {product.variants.map((variant) => {
                                const isSelected = selectedVariant?.id === variant.id;
                                const isOutOfStock = !variant.inStock;

                                return (
                                    <button
                                        key={variant.id}
                                        onClick={() => handleVariantClick(variant)}
                                        disabled={isOutOfStock}
                                        className={`px-4 py-2 rounded-full text-sm font-medium border transition-all relative ${isSelected
                                            ? 'bg-primary-gold text-white border-primary-gold'
                                            : isOutOfStock
                                                ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                                                : 'bg-transparent text-text-secondary border-ui-border hover:border-primary-gold hover:text-primary-gold'
                                            }`}
                                    >
                                        {variant.name}
                                        {isOutOfStock && (
                                            <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                            </span>
                                        )}
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
                        {product.material && <li>Material: {product.material}</li>}
                        {product.dimensions && (
                            <li>
                                Dimensions: {product.dimensions.length}x{product.dimensions.width} {product.dimensions.unit}
                            </li>
                        )}
                        <li>Handcrafted with care</li>
                    </ul>
                </div>

                <div className="mt-auto">
                    {currentStock ? (
                        <InstagramButton
                            variant="primary"
                            className="w-full sm:w-auto text-lg py-4"
                            message={`Message to Order`}
                        />
                    ) : (
                        <button
                            disabled
                            className="w-full sm:w-auto text-lg py-4 px-8 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed font-medium"
                        >
                            Out of Stock
                        </button>
                    )}

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
