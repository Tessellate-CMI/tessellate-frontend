import type { Config } from 'tailwindcss'

export default {
    mode: 'jit',
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        fontFamily: {
            heading: ['Bricolage Grotesque', 'sans-serif'],
            sans: ['Open Sans', 'sans-serif'],
            body: ['Open Sans']
        },
        extend: {
            colors: {
                brick: '#fc3b99', 
                // #FC3B99
                pista: '#c99652',
                butterscotch: '#ffbb34',
                skin: '#fbe6d5',
                'sea-green': '#09abbb',
                'off-white': '#fdfdff',
                caramel: '#c99652'
            },
            backgroundImage: {
                'stems-hero': "url('https://cdn.tessellate.cmi.ac.in/design/stems/test.jpeg')",
                'stems-hero-phone':
                    "url('https://cdn.tessellate.cmi.ac.in/design/stems/test.jpeg')"
            }
        }
    },
    plugins: []
} satisfies Config
