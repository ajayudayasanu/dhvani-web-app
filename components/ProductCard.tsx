import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../data/products';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    // Use first image or a placeholder if empty (though our types say string[])
    const imageSrc = product.images[0] || 'https://placehold.co/600x600/e2e8f0/475569?text=No+Image';

    return (
        <div className="group border border-stone-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white">
            <Link href={`/products/${product.slug}`} className="block relative aspect-square">
                <Image
                    src={imageSrc}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {product.isFeatured && (
                    <span className="absolute top-2 left-2 bg-stone-800 text-white text-xs px-2 py-1 rounded-sm uppercase tracking-wider">
                        Featured
                    </span>
                )}
            </Link>

            <div className="p-4">
                <p className="text-xs text-stone-500 mb-1">{product.category}</p>
                <Link href={`/products/${product.slug}`}>
                    <h3 className="font-medium text-stone-900 mb-1 hover:text-stone-600 truncate">
                        {product.name}
                    </h3>
                </Link>
                <p className="text-stone-700 font-semibold mb-3">₹{product.price.toLocaleString('en-IN')}</p>

                <Link
                    href={`/products/${product.slug}`}
                    className="text-sm text-stone-600 underline hover:text-stone-900 block"
                >
                    View details
                </Link>
            </div>
        </div>
    );
}
