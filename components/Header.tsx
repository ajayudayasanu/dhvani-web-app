import Link from 'next/link';
import Image from 'next/image';
import { Menu, Heart, User } from 'lucide-react';

export default function Header() {
    return (
        <header className="bg-background-main border-b border-ui-border sticky top-0 z-50 h-14 md:h-16 flex items-center">
            <div className="w-full max-w-6xl mx-auto px-4 flex items-center justify-between">

                {/* Left: Hamburger Menu */}
                <button className="p-2 -ml-2 text-text-primary hover:text-primary-gold focus:outline-none" aria-label="Menu">
                    <Menu className="w-6 h-6" />
                </button>

                {/* Center: Logo */}
                <Link href="/" className="relative block h-10 w-28 md:w-32">
                    <Image
                        src="/logo.jpg"
                        alt="Dhvani"
                        fill
                        className="object-contain" // ensure logo doesn't stretch
                        priority
                    />
                </Link>

                {/* Right: Wishlist & Profile */}
                <div className="flex items-center gap-1 md:gap-2 -mr-2">
                    <button className="p-2 text-text-primary hover:text-primary-gold focus:outline-none" aria-label="Wishlist">
                        <Heart className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-text-primary hover:text-primary-gold focus:outline-none" aria-label="Profile">
                        <User className="w-5 h-5" />
                    </button>
                </div>

            </div>
        </header>
    );
}
