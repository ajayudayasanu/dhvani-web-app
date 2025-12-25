import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    gold: '#D4AF37',
                    darkGold: '#B8941F',
                    lightGold: '#E6CF89',
                    DEFAULT: '#D4AF37',
                },
                background: {
                    main: '#FFFFFF',
                    cream: '#FFF8F0',
                    lightPink: '#FFF5F7',
                },
                text: {
                    primary: '#000000',
                    secondary: '#4A4A4A',
                    muted: '#757575',
                },
                accent: {
                    red: '#D32F2F',
                    green: '#2E7D32',
                    emerald: '#10B981',
                },
                ui: {
                    border: '#E0E0E0',
                    divider: '#F5F5F5',
                    shadow: 'rgba(0, 0, 0, 0.1)',
                },
                button: {
                    primary: '#D4AF37',
                    primaryHover: '#B8941F',
                    secondary: '#FFFFFF',
                    secondaryBorder: '#D4AF37',
                }
            },
        },
    },
    plugins: [],
};
export default config;
