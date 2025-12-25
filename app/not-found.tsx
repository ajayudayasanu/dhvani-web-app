import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4 animate-fadeIn">
            <h2 className="text-4xl font-serif text-stone-900 mb-4">Product Not Found</h2>
            <p className="text-stone-600 mb-8 max-w-md">
                Sorry, we couldn't find the product you're looking for. It might have been removed or the link is incorrect.
            </p>
            <Link
                href="/"
                className="bg-stone-800 text-white px-8 py-3 rounded-full hover:bg-stone-700 transition-colors"
            >
                Return Home
            </Link>
        </div>
    );
}
