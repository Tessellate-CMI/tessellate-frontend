import type { Actions } from './$types'
export const prerender = false

export const actions = {
    register: async ({ request }) => {
        const data = await request.formData()
        console.log(data)
    }
} satisfies Actions
