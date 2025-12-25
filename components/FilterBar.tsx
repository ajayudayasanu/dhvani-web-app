'use client';

interface FilterBarProps {
    categories: string[];
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
    priceRanges: string[];
    selectedPriceRange: string;
    onSelectPriceRange: (range: string) => void;
    sortOption: string;
    onSortChange: (sort: string) => void;
}

export default function FilterBar({
    categories,
    selectedCategory,
    onSelectCategory,
    priceRanges,
    selectedPriceRange,
    onSelectPriceRange,
    sortOption,
    onSortChange,
}: FilterBarProps) {
    return (
        <div className="flex flex-col gap-4 py-6 border-b border-ui-border mb-8 sm:flex-row sm:items-center sm:justify-between sticky top-[73px] bg-background-main z-40 px-1 shadow-sm sm:shadow-none sm:static">

            {/* Filters */}
            <div className="flex flex-wrap gap-2 items-center">
                <div className="relative">
                    <select
                        value={selectedCategory}
                        onChange={(e) => onSelectCategory(e.target.value)}
                        className="appearance-none bg-background-cream border border-ui-border text-text-secondary py-2 px-4 pr-8 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary-gold"
                    >
                        <option value="All">All Categories</option>
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-text-secondary">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                </div>

                <div className="relative">
                    <select
                        value={selectedPriceRange}
                        onChange={(e) => onSelectPriceRange(e.target.value)}
                        className="appearance-none bg-background-cream border border-ui-border text-text-secondary py-2 px-4 pr-8 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary-gold"
                    >
                        <option value="All">Price: All</option>
                        {priceRanges.map((range) => (
                            <option key={range} value={range}>{range}</option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-text-secondary">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                </div>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
                <span className="text-sm text-text-muted hidden sm:inline">Sort by:</span>
                <div className="relative w-full sm:w-auto">
                    <select
                        value={sortOption}
                        onChange={(e) => onSortChange(e.target.value)}
                        className="w-full sm:w-auto appearance-none bg-background-main border border-ui-border text-text-secondary py-2 px-4 pr-8 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-gold"
                    >
                        <option value="newest">Newest</option>
                        <option value="price_asc">Price: Low to High</option>
                        <option value="price_desc">Price: High to Low</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-text-secondary">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
