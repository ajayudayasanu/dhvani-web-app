import { ComponentProps } from 'react';
import { INSTAGRAM_URL } from '../lib/constants';
import { Instagram } from 'lucide-react';

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
    const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-gold";

    const variantStyles = {
        primary: "bg-button-primary text-white hover:bg-button-primaryHover rounded-lg py-3 px-6 w-full sm:w-auto",
        secondary: "bg-button-secondary text-text-primary border border-button-secondaryBorder hover:bg-background-cream rounded-lg py-2 px-4 text-sm",
        outline: "border border-ui-border text-text-secondary hover:bg-background-cream rounded-lg py-3 px-6 w-full sm:w-auto"
    };

    return (
        <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            {...props}
        >
            <Instagram className="w-5 h-5 mr-2" />
            {message}
        </a>
    );
}
