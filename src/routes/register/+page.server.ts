import { fail } from '@sveltejs/kit'
import type { Actions } from './$types'
export const prerender = false

export const actions = {
    validate: async ({ request }) => {
        const formData = await request.formData()

        // console.log(formData)

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

        let mCat = ''
        let cCat = ''

        const fullName = String(formData.get('fullName'))
        const email = String(formData.get('email'))
        const education = String(formData.get('education'))
        const institute = String(formData.get('institute'))
        const phone = Number(formData.get('phone'))
        const altEmail = String(formData.get('altEmail'))
        const altPhone = Number(formData.get('altPhone'))

        const errors: Record<string, unknown> = {}
        const returnData: Record<string, unknown> = {}

        if (!fullName || typeof fullName !== 'string') {
            errors.fullName = 'required'
        } else {
            returnData.name = fullName
        }

        if (!email || typeof email !== 'string') {
            errors.email = 'required'
        } else if (!validateEmail(email)) {
            errors.email = 'invalid'
        } else {
            returnData.email = email
        }

        if (!education || typeof education !== 'string') {
            errors.education = 'required'
        } else {
            if (education === 'class8') {
                mCat = 'A'
                cCat = 'A'
                returnData.education = 'Class 8'
            } else if (education === 'class9') {
                mCat = 'A'
                cCat = 'A'
                returnData.education = 'Class 9'
            } else if (education === 'class10') {
                mCat = 'A'
                cCat = 'A'
                returnData.education = 'Class 10'
            } else if (education === 'class11') {
                mCat = 'B'
                cCat = 'A'
                returnData.education = 'Class 11'
            } else if (education === 'class12') {
                mCat = 'B'
                cCat = 'A'
                returnData.education = 'Class 12'
            } else if (education === 'undergraduate1') {
                mCat = 'B'
                cCat = 'B'
                returnData.education = 'Undergradutate 1st Year'
            } else if (education === 'undergraduate2') {
                mCat = 'C'
                cCat = 'B'
                returnData.education = 'Undergradutate 2nd Year'
            } else if (education === 'undergraduate3') {
                mCat = 'C'
                cCat = 'B'
                returnData.education = 'Undergraduate 3rd or final year'
            }
        }

        if (!institute || typeof institute !== 'string') {
            errors.institute = 'required'
        } else {
            returnData.institute = institute
        }

        if (!phone || typeof phone !== 'number') {
            errors.phone = 'required'
        } else if (!validatePhone(phone)) {
            errors.phone = 'invalid'
        } else {
            returnData.phone = phone
        }

        if (altEmail && !validateEmail(altEmail)) {
            errors.altEmail = 'invalid'
        } else {
            returnData.altEmail = altEmail
        }

        if (altPhone && !validatePhone(altPhone)) {
            errors.altPhone = 'invalid'
        } else {
            returnData.altPhone = altPhone
        }

        if (!hasMathematics && !hasPhysics && !hasCS) {
            errors.subject = 'required'
        } else {
            let numSubjects = 0
            returnData.subject = ''
            if (hasMathematics) {
                returnData.subject += 'Mathematics (Section ' + mCat + '), '
                ++numSubjects
            }
            if (hasPhysics) {
                returnData.subject += 'Physics (Section ' + mCat + '), '
                ++numSubjects
            }

            if (hasCS) {
                returnData.subject += 'Computer Science (Section ' + cCat + ') '
                ++numSubjects
            }
            returnData.amount = 250 * numSubjects
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

        returnData.success = true
        return returnData
    },
    register: async ({ request }) => {
        const formData = await request.formData()
        console.log(formData)
        console.log('Request called')
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
    String(phone).length == 10
    return true
}
