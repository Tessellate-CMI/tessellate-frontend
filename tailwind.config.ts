import type { Config } from 'tailwindcss'

export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        fontFamily: {
            display: ['Unbounded', 'display'],
            sans: ['Space Grotesk', 'sans-serif']
        },
        extend: {
            colors: {
                'main-blue': '#c6daff'
            }
        }
    },
    plugins: [require('daisyui')]
} satisfies Config
