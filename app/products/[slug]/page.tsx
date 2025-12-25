import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { products } from '../../../data/products';
import ProductDetail from '../../../components/ProductDetail';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        return {
            title: 'Product Not Found | Dhvani',
        };
    }

    return {
        title: `${product.name} | Dhvani`,
        description: product.shortDescription,
        openGraph: {
            title: product.name,
            description: product.shortDescription,
            images: product.images,
        },
    };
}

export default async function ProductPage({ params }: PageProps) {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="py-8 sm:py-12 animate-fadeIn">
            <ProductDetail product={product} />
        </div>
    );
}
