<script lang="ts">
    import { goto } from '$app/navigation'
    import '$src/app.css'
    import Modal from '$src/lib/components/Modal.svelte'

    let showModal = false
    let noSubjects = false
    const returnData: Record<string, unknown> = {}

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function controlModal(e: any) {
        const formData = new FormData(e.target)
        const data: Record<string, unknown> = {}
        let numSubjects = 0
        for (let field of formData) {
            const [key, value] = field
            data[key] = value
            if (key === 'mathematics') {
                ++numSubjects
            } else if (key === 'physics') {
                ++numSubjects
            } else if (key === 'computer-science') {
                ++numSubjects
            }
        }

        if (numSubjects === 0) {
            noSubjects = true
            return
        }

        noSubjects = false
        showModal = true

        returnData.firstName = data.firstName
        returnData.lastName = data.lastName
        returnData.email = data.email
        returnData.phone = data.phone
        returnData.altEmail = data.altEmail
        returnData.altPhone = data.altPhone
        returnData.institute = data.institute
        if (data.education === 'class8') {
            returnData.mCat = 'A'
            returnData.cCat = 'A'
            returnData.education = 'Class 8'
        } else if (data.education === 'class9') {
            returnData.mCat = 'A'
            returnData.cCat = 'A'
            returnData.education = 'Class 9'
        } else if (data.education === 'class10') {
            returnData.mCat = 'A'
            returnData.cCat = 'A'
            returnData.education = 'Class 10'
        } else if (data.education === 'class11') {
            returnData.mCat = 'B'
            returnData.cCat = 'A'
            returnData.education = 'Class 11'
        } else if (data.education === 'class12') {
            returnData.mCat = 'B'
            returnData.cCat = 'A'
            returnData.education = 'Class 12'
        } else if (data.education === 'undergraduate1') {
            returnData.mCat = 'B'
            returnData.cCat = 'B'
            returnData.education = 'Undergradutate 1st Year'
        } else if (data.education === 'undergraduate2') {
            returnData.mCat = 'C'
            returnData.cCat = 'B'
            returnData.education = 'Undergradutate 2nd Year'
        } else if (data.education === 'undergraduate3') {
            returnData.mCat = 'C'
            returnData.cCat = 'B'
            returnData.education = 'Undergraduate 3rd or final year'
        }
        returnData.maths = 'mathematics' in data
        returnData.physics = 'physics' in data
        returnData.computer = 'computer-science' in data
        returnData.subject = ''
        if (returnData.maths) {
            returnData.subject += 'Mathematics (Section ' + returnData.mCat + ') '
        }
        if (returnData.physics) {
            returnData.subject += 'Physics (Section ' + returnData.mCat + ') '
        }
        if (returnData.computer) {
            returnData.subject += 'Computer Science (Section ' + returnData.cCat + ') '
        }
        returnData.amount = numSubjects * 250
    }

    async function sendData() {
        try {
            await fetch('http://api.tessellate.cmi.ac.in/items/register', {
                method: 'POST',
                body: JSON.stringify(returnData),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
            goto('/stems/registerSuccess')
        } catch (error) {
            console.log(error)
            goto('/stems/registerFail')
        }
    }
</script>

<div class="flex min-h-screen bg-main-blue">
    <div class="m-auto flex flex-col place-items-center py-10 sm:w-96">
        <h1 class="z-10 font-black text-black">Register</h1>

        <form class="mx-4 bg-white sm:mx-0 sm:w-full" on:submit={controlModal}>
            <div class="mb-1 pt-2">
                <button class="btn btn-ghost rounded-none" on:click={() => history.back()}
                    ><svg class="h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                        ><path
                            d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z"
                        /></svg
                    ></button
                >
            </div>
            <div class="form-row">
                <label for="firstName">First Name<sup><small>*</small></sup></label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    class="css-input w-full max-w-xs"
                    required
                />
            </div>
            <div class="form-row">
                <label for="lastName">Last Name<sup><small>*</small></sup></label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    class="css-input w-full max-w-xs"
                    required
                />
            </div>

            <div class="form-row">
                <label for="email">Email<sup><small>*</small></sup></label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    class="css-input w-full max-w-xs"
                    required
                />
            </div>

            <div class="form-row">
                <label for="education">Current Education<sup><small>*</small></sup></label>

                <select name="education" id="education" class="css-input w-full max-w-xs">
                    <option value="class8">Class 8</option>
                    <option value="class9">Class 9</option>
                    <option value="class10">Class 10</option>
                    <option value="class11">Class 11</option>
                    <option value="class12">Class 12</option>
                    <option value="undergraduate1">Undergraduate 1st year</option>
                    <option value="undergraduate2">Undergraduate 2nd year</option>
                    <option value="undergraduate3">Undergraduate 3rd or final year</option>
                </select>
                <p class="pt-3 text-sm font-normal">
                    You will recieve your category (for each subject) according to the education
                    status you have selected.
                </p>
            </div>

            <div class="form-row">
                <label for="institute">Institute Name<sup><small>*</small></sup></label>
                <input
                    id="institute"
                    type="text"
                    name="institute"
                    class="css-input w-full max-w-xs"
                    required
                />
            </div>

            <div class="form-row">
                <label for="phone">Phone Number<sup><small>*</small></sup></label>
                <input
                    id="phone"
                    type="number"
                    name="phone"
                    class="css-input w-full max-w-xs"
                    required
                />
            </div>

            <div class="form-row">
                <label for="altEmail">Alternate Email</label>
                <input
                    id="altEmail"
                    type="email"
                    name="altEmail"
                    class="css-input w-full max-w-xs"
                />
            </div>

            <div class="form-row">
                <label for="altPhone">Alternate Phone</label>
                <input
                    id="altPhone"
                    type="number"
                    name="altPhone"
                    class="css-input w-full max-w-xs"
                />
            </div>

            <div class="subjects mt-5 border-t-2 border-black pt-5">
                <div class="form-row mb-3">
                    <p class="pb-1 text-4xl">Subjects</p>
                    <p class="text-sm">
                        Please select all subjects you wish to appear for. <br />If you wish to
                        register for additional subjects after submitting the form, please refill
                        this form and
                        <span class="text-base text-red-600"
                            >ONLY SELECT THE SUBJECTS YOU HAVE NOT ALREADY REGISTERED FOR</span
                        >. You will not be refunded for any duplicate payments, so please be
                        careful.
                    </p>
                </div>
                <div class="form-row">
                    <input
                        type="checkbox"
                        id="mathematics"
                        name="mathematics"
                        value="Mathematics"
                    />
                    <label for="mathematics" class="checkbox-label ml-2 text-xl">Mathematics</label>
                </div>
                <div class="form-row">
                    <input type="checkbox" id="physics" name="physics" value="Physics" />
                    <label for="physics" class="checkbox-label ml-2 text-xl">Physics</label>
                </div>
                <div class="form-row">
                    <input
                        type="checkbox"
                        id="computer-science"
                        name="computer-science"
                        value="Computer-Science"
                    />
                    <label for="computer-science" class="checkbox-label ml-2 text-xl"
                        >Computer Science</label
                    >
                </div>
            </div>
            {#if noSubjects}
                <div class="form-row">
                    <p class="error">Please select at least one subject.</p>
                </div>
            {/if}

            <div class="form-row mt-8">
                <input
                    type="checkbox"
                    id="disclaimer"
                    name="disclaimer"
                    value="Disclaimer"
                    required
                />
                <label for="disclaimer" class="checkbox-label ml-2"
                    >This is a disclaimer confirming that they will be ok with recieving Tessellate
                    and stems update mails</label
                >
            </div>
            <div class="form-row mt-3 flex">
                <button
                    style="text-transform: none"
                    type="submit"
                    class="btn btn-outline m-auto mb-2 mt-2 h-auto min-h-0 rounded-none px-10 py-1.5 text-lg text-black hover:bg-black hover:text-white"
                    >Submit</button
                >
            </div>
        </form>

        <Modal bind:showModal>
            <div class="modal-box rounded-none border-2 border-black bg-white text-lg text-black">
                <p class="mb-3 text-2xl font-bold">Please confirm your details</p>

                <p class="mb-4 border-2 border-black p-2 text-base font-semibold md:text-lg">
                    Press the <span class="text-red-600">confirm button at the bottom.</span>
                    <br />
                    You will
                    <span class="text-red-600">recieve an email with a payment link</span> on the entered
                    email id. After the payment is done, your registration will be completed.
                </p>
                <p class="mb-3">
                    Name<br /><span class="text-xl font-bold"
                        >{returnData.firstName} {returnData.lastName}</span
                    >
                </p>
                <p class="mb-3">
                    Email<br /><span class="text-xl font-bold">{returnData.email}</span>
                </p>
                <p class="mb-3">
                    Phone Number<br /><span class="text-xl font-bold">{returnData.phone}</span>
                </p>
                <p class="mb-3">
                    Current Education<br /><span class="text-xl font-bold"
                        >{returnData.education}</span
                    >
                </p>
                <p class="mb-3">
                    Institute Name<br /><span class="text-xl font-bold">{returnData.institute}</span
                    >
                </p>
                {#if returnData.altEmail !== ''}
                    <p class="mb-3">
                        Alternate Email<br /><span class="text-xl font-bold"
                            >{returnData.altEmail}</span
                        >
                    </p>
                {/if}
                {#if returnData.altPhone !== ''}
                    <p class="mb-3">
                        Alternate Phone Number<br /><span class="text-xl font-bold"
                            >{returnData.altPhone}</span
                        >
                    </p>
                {/if}
                <p class="mb-5">
                    Subject(s)<br /><span class="font-bold">{returnData.subject}</span>
                </p>
                <p class="mb-4 text-xl">
                    Final Amount: ₹<span class="font-bold">{returnData.amount}</span>
                </p>

                <form method="dialog">
                    <button class="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">✕</button
                    >
                </form>
                <form on:submit={sendData}>
                    <button
                        value="confirm"
                        type="submit"
                        class="btn btn-outline m-auto mb-2 mt-2 h-auto min-h-0 rounded-none px-4 py-1.5 text-xl normal-case text-black hover:bg-black hover:text-white"
                        formmethod="dialog">Confirm</button
                    >
                </form>
            </div>
        </Modal>

        <p class="border-t-2 border-black bg-white p-3 px-4 text-sm text-black">
            You will recieve an email with a <span class="font-semibold text-red-500"
                >payment link</span
            >
            confirming the details of your registration. In case you don't get any email, or you face
            other problems, please email us at tessellate@cmi.ac.in
        </p>
    </div>
</div>

<style>
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type='number'] {
        -moz-appearance: textfield;
        appearance: textfield;
    }

    h1 {
        font-size: 5rem;
        margin: -2rem;
    }

    .form-row {
        margin-left: 26px;
        margin-right: 26px;
        color: black;
        font-weight: bold;

        padding-left: 10px;
        padding-left: 10px;
        padding-top: 3px;
        padding-bottom: 15px;
    }

    .css-input {
        padding: 7px;
        max-width: 40rem;
        height: 40px;
        font-size: 16px;
        border-width: 1.5px;
        border-color: #000000;
        background-color: #ffffff;
        color: #000000;
    }
    .css-input:focus {
        outline: none;
    }
    .error {
        color: tomato;
    }
</style>
