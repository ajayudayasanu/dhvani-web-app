'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product } from '../data/products';
import InstagramButton from './InstagramButton';

interface ProductDetailProps {
    product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
    const [activeImage, setActiveImage] = useState(product.images[0]);

    // Fallback for missing images
    const images = product.images.length > 0
        ? product.images
        : ['https://placehold.co/600x600/e2e8f0/475569?text=No+Image'];

    const handleImageClick = (img: string) => {
        setActiveImage(img);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 animate-fadeIn">
            {/* Image Gallery */}
            <div className="flex flex-col gap-4">
                <div className="relative aspect-square rounded-lg overflow-hidden bg-stone-50 border border-stone-100">
                    <Image
                        src={activeImage}
                        alt={product.name}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>

                {images.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto pb-2">
                        {images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleImageClick(img)}
                                className={`relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${activeImage === img ? 'border-stone-800' : 'border-transparent hover:border-stone-300'
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
                    <span className="text-sm font-medium text-stone-500 uppercase tracking-wide">
                        {product.category}
                    </span>
                </div>

                <h1 className="text-3xl font-serif text-stone-900 mb-2">{product.name}</h1>

                <p className="text-2xl font-semibold text-stone-800 mb-6">
                    ₹{product.price.toLocaleString('en-IN')}
                </p>

                <div className="prose prose-stone mb-8">
                    <p className="text-stone-600 leading-relaxed mb-4">
                        {product.description}
                    </p>
                    <ul className="list-disc list-inside text-stone-600 space-y-1 text-sm">
                        {/* We could add generic details if not in data, but user said 'assumed from data' */}
                        <li>Handcrafted with care</li>
                        <li>Premium finish</li>
                    </ul>
                </div>

                <div className="mt-auto">
                    <InstagramButton
                        variant="primary"
                        className="w-full sm:w-auto text-lg py-4"
                        message="Message to Order"
                    />
                    <p className="mt-3 text-xs text-stone-400 text-center sm:text-left">
                        Clicking will open Instagram chat with @isdhanistories
                    </p>

                    {product.instagramPostUrl && (
                        <div className="mt-6 pt-6 border-t border-stone-200">
                            <a
                                href={product.instagramPostUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-stone-500 hover:text-stone-800 flex items-center gap-2"
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
