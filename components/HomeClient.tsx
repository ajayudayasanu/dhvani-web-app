'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { products } from '../data/products';
import FilterBar from './FilterBar';
import ProductCard from './ProductCard';

export default function HomeClient() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedPriceRange, setSelectedPriceRange] = useState('All');
    const [sortOption, setSortOption] = useState('newest');

    // Derive unique categories from products
    const categories = useMemo(() => {
        const cats = new Set(products.map(p => p.category));
        return Array.from(cats);
    }, []);

    const priceRanges = ['Under 1000', '1000-2000', 'Above 2000'];

    // Filter and Sort Logic
    const filteredProducts = useMemo(() => {
        let result = [...products];

        // Filter by Category
        if (selectedCategory !== 'All') {
            result = result.filter(p => p.category === selectedCategory);
        }

        // Filter by Price
        if (selectedPriceRange !== 'All') {
            if (selectedPriceRange === 'Under 1000') {
                result = result.filter(p => p.price < 1000);
            } else if (selectedPriceRange === '1000-2000') {
                result = result.filter(p => p.price >= 1000 && p.price <= 2000);
            } else if (selectedPriceRange === 'Above 2000') {
                result = result.filter(p => p.price > 2000);
            }
        }

        // Sort
        if (sortOption === 'price_asc') {
            result.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'price_desc') {
            result.sort((a, b) => b.price - a.price);
        } else {
            // Newest (using ID as proxy since we don't have dates, higher ID = newer)
            // Assuming ID is numeric-ish string or ordered.
            // If IDs are just '1', '2'... we can sort by ID desc.
            result.sort((a, b) => parseInt(b.id) - parseInt(a.id));
        }

        return result;
    }, [selectedCategory, selectedPriceRange, sortOption]);

    return (
        <div className="pb-12">
            {/* Banner Section */}
            <section className="py-6 sm:py-10">
                <div className="relative w-full aspect-[2/1] sm:aspect-[3/1] rounded-xl overflow-hidden bg-stone-100 mb-8">
                    <Image
                        src="https://placehold.co/1200x400/e7e5e4/44403c?text=New+Collection+Arrivals"
                        alt="Banner"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                        <h2 className="text-3xl md:text-5xl font-serif text-white drop-shadow-md">Timeless Elegance</h2>
                    </div>
                </div>
            </section>

            {/* Filters */}
            <FilterBar
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                priceRanges={priceRanges}
                selectedPriceRange={selectedPriceRange}
                onSelectPriceRange={setSelectedPriceRange}
                sortOption={sortOption}
                onSortChange={setSortOption}
            />

            {/* Grid */}
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 text-stone-500">
                    <p>No products found matching your filters.</p>
                    <button
                        onClick={() => { setSelectedCategory('All'); setSelectedPriceRange('All'); }}
                        className="text-stone-800 underline mt-2 hover:text-stone-600"
                    >
                        Clear filters
                    </button>
                </div>
            )}
        </div>
    );
}
