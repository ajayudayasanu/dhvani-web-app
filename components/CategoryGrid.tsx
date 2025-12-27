import Image from 'next/image';
import Link from 'next/link';
import { categories } from '../data/categories';

export default function CategoryGrid() {
    return (
        <section className="mb-8">
            <h2 className="text-3xl md:text-5xl font-playfair text-stone-800 text-center mb-8 drop-shadow-sm">Shop By Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {categories.map((category) => (
                    <Link href={category.link} key={category.id} className="group block text-center">
                        <div className="aspect-square relative rounded-2xl overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                            <Image
                                src={category.image}
                                alt={category.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <h3 className="text-xl md:text-2xl font-playfair text-stone-800 group-hover:text-primary-gold transition-colors">
                            {category.title}
                        </h3>
                    </Link>
                ))}
            </div>
        </section>
    );
}
