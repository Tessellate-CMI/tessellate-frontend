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
                brick: '#ff3b9c',
                pista: '#e7f',
                butterscotch: '#ffbb33',
                skin: '#fbe6d5',
                'sea-green': '#09abbb',
                'off-white': '#fdfdff',
                caramel: '#c99652'
            },
            backgroundImage: {
                'stems-hero': "url('https://cdn.tessellate.cmi.ac.in/design/stems/STEMS-BG.png')",
                'stems-hero-phone':
                    "url('https://cdn.tessellate.cmi.ac.in/design/stems/STEMS-BG-phone.png')"
            }
        }
    },
    plugins: []
} satisfies Config
