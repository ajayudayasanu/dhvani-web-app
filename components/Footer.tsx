import Link from 'next/link';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../lib/constants';

export default function Footer() {
    return (
        <footer className="bg-stone-50 border-t border-stone-200 mt-auto">
            <div className="max-w-md mx-auto px-6 py-12 text-center sm:max-w-2xl md:max-w-4xl lg:max-w-6xl">
                <h3 className="text-lg font-medium text-stone-800 mb-2">Ready to order?</h3>
                <p className="text-stone-600 mb-6">Message us on Instagram to place your order or ask any questions.</p>

                <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-stone-800 text-white px-6 py-3 rounded-full font-medium hover:bg-stone-700 transition-colors mb-12"
                >
                    Follow @{INSTAGRAM_HANDLE}
                </a>

                <div className="text-sm text-stone-400 border-t border-stone-200 pt-8">
                    <p>&copy; {new Date().getFullYear()} Dhvani Jewellery. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
