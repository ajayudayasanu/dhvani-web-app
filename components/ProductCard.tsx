import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../data/products';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    // Use first image or a placeholder
    const imageSrc = product.images?.[0]?.url || 'https://placehold.co/600x600/e2e8f0/475569?text=No+Image';
    const imageAlt = product.images?.[0]?.alt || product.name;

    // Display price logic: Use min price if range exists, otherwise base price
    const displayPrice = product.priceRange ? product.priceRange.min : product.price;

    return (
        <div className="group border border-ui-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-background-main">
            <Link href={`/products/${product.slug}`} className="block relative aspect-square">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {product.isFeatured && (
                    <span className="absolute top-2 left-2 bg-primary-gold text-white text-xs px-2 py-1 rounded-sm uppercase tracking-wider">
                        Featured
                    </span>
                )}
            </Link>

            <div className="p-4">
                <p className="text-xs text-text-muted mb-1">{product.category}</p>
                <Link href={`/products/${product.slug}`}>
                    <h3 className="font-medium text-text-primary mb-1 hover:text-primary-gold truncate">
                        {product.name}
                    </h3>
                </Link>
                <p className="text-text-primary font-semibold mb-3">
                    ₹{displayPrice.toLocaleString('en-IN')}
                    {product.priceRange && product.priceRange.min !== product.priceRange.max && (
                        <span className="text-xs font-normal text-text-muted ml-1">+</span>
                    )}
                </p>

                <Link
                    href={`/products/${product.slug}`}
                    className="text-sm text-text-secondary underline hover:text-text-primary block"
                >
                    View details
                </Link>
            </div>
        </div>
    );
}
