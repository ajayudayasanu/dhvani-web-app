import { ComponentProps } from 'react';
import { INSTAGRAM_URL } from '../lib/constants';

interface InstagramButtonProps extends ComponentProps<'a'> {
    message?: string;
    variant?: 'primary' | 'secondary' | 'outline';
}

export default function InstagramButton({
    className = '',
    message = "Message on Instagram to order",
    variant = 'primary',
    ...props
}: InstagramButtonProps) {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500";

    const variantStyles = {
        primary: "bg-stone-800 text-white hover:bg-stone-700 rounded-lg py-3 px-6 w-full sm:w-auto",
        secondary: "bg-stone-100 text-stone-800 hover:bg-stone-200 rounded-lg py-2 px-4 text-sm",
        outline: "border border-stone-300 text-stone-700 hover:bg-stone-50 rounded-lg py-3 px-6 w-full sm:w-auto"
    };

    return (
        <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            {...props}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
            >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            {message}
        </a>
    );
}
