import { products } from '../../../data/products';
import ProductCard from '../../../components/ProductCard';
import { notFound } from 'next/navigation';

interface CollectionPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export function generateStaticParams() {
    const categories = Array.from(new Set(products.map((p) => p.category)));
    return categories.map((category) => ({
        slug: category.toLowerCase().replace(/\s+/g, '-'),
    }));
}

export default async function CollectionPage({ params }: CollectionPageProps) {
    const { slug } = await params;

    // Normalize the slug to match category format (e.g., "pendant-set" -> "Pendant Set")
    // Since we can't easily reverse slugify effectively without a map, we'll slugify the product categories to compare.

    const categoryProducts = products.filter((product) => {
        const productCategorySlug = product.category.toLowerCase().replace(/\s+/g, '-');
        return productCategorySlug === slug;
    });

    if (categoryProducts.length === 0) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-3xl font-playfair mb-4 capitalize">{slug.replace(/-/g, ' ')}</h1>
                <p className="text-stone-600">No products found in this category.</p>
            </div>
        )
    }

    // Get the display title from the first product's category, or format the slug
    const title = categoryProducts[0]?.category || slug.replace(/-/g, ' ');

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl md:text-5xl font-playfair text-stone-800 text-center mb-12 drop-shadow-sm">
                {title}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoryProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
