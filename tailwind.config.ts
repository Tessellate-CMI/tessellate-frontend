import type { Config } from 'tailwindcss'

export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        fontFamily: {
            heading: ['Ubuntu', 'sans-serif'],
            sans: ['Open Sans', 'sans-serif'],
            body: ['Open Sans']
        },
        extend: {
            colors: {
                brick: '#f36a46',
                pista: '#c7dba8',
                butterscotch: '#fff0ab',
                skin: '#fbe6d5',
                'sea-green': '#87b6ac',
                'off-white': '#fdfdff',
                caramel: '#c99652'
            }
        }
    },
    plugins: []
} satisfies Config
