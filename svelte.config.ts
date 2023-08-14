import adapter from '@sveltejs/adapter-auto'
import type { Config } from '@sveltejs/kit'
import { vitePreprocess } from '@sveltejs/kit/vite'

export default {
    kit: {
        adapter: adapter()
    },
    preprocess: vitePreprocess()
} satisfies Config
