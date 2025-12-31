'use client';

import { useWishlist } from '../../context/WishlistContext';
import { products } from '../../data/products';
import ProductCard from '../../components/ProductCard';
import Link from 'next/link';

export default function WishlistPage() {
    const { wishlist } = useWishlist();

    // Filter products that are in the wishlist
    const wishlistedProducts = products.filter(product => wishlist.includes(product.id));

    return (
        <div className="py-8 md:py-12">
            <h1 className="text-3xl md:text-4xl font-serif text-text-primary text-center mb-8">
                My Wishlist
            </h1>

            {wishlistedProducts.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-lg text-text-secondary mb-6">Your wishlist is empty.</p>
                    <Link
                        href="/"
                        className="inline-block bg-primary-gold text-white px-8 py-3 rounded-full hover:bg-yellow-600 transition-colors"
                    >
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                    {wishlistedProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
}
