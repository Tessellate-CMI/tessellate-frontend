interface Fields {
    fullName: string
    email: string
    education: string
    institute: string
    phone: number
    altEmail: string
    altPhone: number
    subject: Array<string>
    disclaimer: string
}

export interface FormData {
    amount: number
    success: boolean
    name: string
    email: string
    education: string
    institute: string
    phone: number
    altEmail: string
    altPhone: number
    subject: Array<string>
    disclaimer: string
    errors: {
        fullName: string
        email: string
        education: string
        institute: string
        phone: string
        altEmail: string
        altPhone: number
        subject: Array<string>
        disclaimer: string
    }
    data: {
        fullName: string
        email: string
        education: string
        institute: string
        phone: number
        altEmail: string
        altPhone: number
        subject: Array<string>
        disclaimer: string
    }
}
