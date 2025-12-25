import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-white border-b border-stone-200 sticky top-0 z-50">
            <div className="max-w-md mx-auto px-4 py-4 text-center sm:max-w-2xl md:max-w-4xl lg:max-w-6xl">
                <Link href="/" className="inline-block">
                    <h1 className="text-3xl font-serif text-stone-800 tracking-wide">Dhvani</h1>
                    <p className="text-sm text-stone-500 uppercase tracking-widest mt-1">Jewellery & Ornaments</p>
                </Link>
            </div>
        </header>
    );
}
