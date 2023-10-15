import { fail } from '@sveltejs/kit'
import type { Actions } from './$types'
export const prerender = false

export const actions = {
    validate: async ({ request }) => {
        const formData = await request.formData()

        console.log(formData)

        let hasMathematics = false
        let hasPhysics = false
        let hasCS = false
        let hasDisclaimer = false
        for (const value of formData.values()) {
            if (value === 'Mathematics') hasMathematics = true
            else if (value === 'Physics') hasPhysics = true
            else if (value === 'Computer-Science') hasCS = true
            else if (value === 'Disclaimer') hasDisclaimer = true
        }

        const fullName = String(formData.get('fullName'))
        const email = String(formData.get('email'))
        const education = String(formData.get('education'))
        const institute = String(formData.get('institute'))
        const phone = Number(formData.get('phone'))
        const altEmail = String(formData.get('altEmail'))
        const altPhone = Number(formData.get('altPhone'))

        const errors: Record<string, unknown> = {}

        if (!fullName || typeof fullName !== 'string') {
            errors.fullName = 'required'
        }

        if (!email || typeof email !== 'string') {
            errors.email = 'required'
        } else if (!validateEmail(email)) {
            errors.email = 'invalid'
        }

        if (!education || typeof education !== 'string') {
            errors.education = 'required'
        }

        if (!institute || typeof institute !== 'string') {
            errors.institute = 'required'
        }

        if (!phone || typeof phone !== 'number') {
            errors.phone = 'required'
        } else if (!validatePhone(phone)) {
            errors.phone = 'invalid'
        }

        if (altEmail && !validateEmail(altEmail)) {
            errors.altEmail = 'invalid'
        }

        if (altPhone && !validatePhone(altPhone)) {
            errors.altPhone = 'invalid'
        }

        if (!hasMathematics && !hasPhysics && !hasCS) {
            errors.subject = 'required'
        }

        if (!hasDisclaimer) {
            errors.disclaimer = 'required'
        }

        if (Object.keys(errors).length > 0) {
            const data = {
                data: Object.fromEntries(formData),
                errors
            }

            return fail(400, data)
        }

        return { success: true }
    }
} satisfies Actions

const validateEmail = (email: string) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
}

const validatePhone = (phone: number) => {
    return String(phone).length == 10
}
