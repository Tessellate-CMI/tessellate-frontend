import type { Config } from 'tailwindcss'

export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        fontFamily: {
            heading: ['Bricolage Grotesque', 'sans-serif'],
            sans: ['Open Sans', 'sans-serif'],
            body: ['Open Sans']
        },
        extend: {
            colors: {
                brick: '#f46a48',
                pista: '#c6dba8',
                butterscotch: '#fef1ab',
                skin: '#fbe6d5',
                'sea-green': '#87b5ad',
                'off-white': '#fdfdff',
                caramel: '#c99652'
            }
        }
    },
    plugins: []
} satisfies Config
