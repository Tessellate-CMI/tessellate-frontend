import type { Config } from 'tailwindcss'

export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        fontFamily: {
            display: ['Unbounded', 'display'],
            sans: ['Space Grotesk', 'sans-serif'],
            heading: ['Poppins', 'sans-serif']
        },
        extend: {
            colors: {
                'main-blue': '#c6daff',
                'second-blue': '#5181d1',
                lgray: '#1e1e1e'
            }
        }
    },
    plugins: [require('daisyui')]
} satisfies Config
