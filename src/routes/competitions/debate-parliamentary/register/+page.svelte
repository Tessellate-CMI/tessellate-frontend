<script lang="ts">
    import { goto } from '$app/navigation'
    import { PUBLIC_API_URL } from '$env/static/public'
    import '$src/app.css'
    import Modal from '$src/lib/components/Modal.svelte'

    let showModal = false
    let teamSize = 'alone'
    let teamOfThree = false

    $: teamOfThree = teamSize == 'have_team' ? true : false

    const returnData: Record<string, unknown> = {}
    const serverData: Record<string, unknown> = {}

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function controlModal(e: any) {
        const formData = new FormData(e.target)
        const data: Record<string, unknown> = {}

        for (let field of formData) {
            const [key, value] = field
            data[key] = value
        }

        showModal = true

        returnData.firstName = data.firstName
        returnData.lastName = data.lastName
        returnData.email = data.email
        returnData.phone = data.phone
        returnData.institute = data.institute
        returnData.school_member = data.school_college == 'school' ? 'School' : 'College'

        serverData.firstName = data.firstName
        serverData.lastName = data.lastName
        serverData.email = data.email
        serverData.phone = data.phone
        serverData.institute = data.institute
        serverData.school_member = data.school_college == 'school'
        serverData.looking_for_team = !teamOfThree

        returnData.amount = teamOfThree ? 500 : 200
    }

    async function sendData() {
        try {
            await fetch(PUBLIC_API_URL + '/items/debate_parliamentary', {
                method: 'POST',
                body: JSON.stringify(serverData),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
            goto('/competitions/registerResult/registerSuccess')
        } catch (error) {
            console.log(error)
            goto('/competitions/registerResult/registerFail')
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
            <div class="form-row text-xl">Team</div>
            <div class="form-row mb-2 border-b-2 border-black">
                <div class="mb-4">
                    <input
                        type="radio"
                        id="team"
                        name="team"
                        value="alone"
                        class="dark:bg-white"
                        bind:group={teamSize}
                        required
                    />
                    <label for="school">I am alone and would like to be placed in a team</label><br
                    />
                </div>
                <input
                    type="radio"
                    id="team"
                    name="team"
                    value="have_team"
                    class="dark:bg-white"
                    bind:group={teamSize}
                    required
                />
                <label for="college">I have a team of 3 (including myself)</label>
            </div>
            <div class="form-row mt-4">
                <p class="mb-1">Education level{teamOfThree ? ' (of all team members)' : ''}</p>
                <input
                    type="radio"
                    id="school_college"
                    name="school_college"
                    value="school"
                    class="dark:bg-white"
                    required
                />
                <label for="school" class="mr-5 border-r-2 border-black pr-5">School</label>
                <input
                    type="radio"
                    id="school_college"
                    name="school_college"
                    value="college"
                    class="dark:bg-white"
                    required
                />
                <label for="college">College</label>
            </div>
            <div class="form-row">
                <label for="firstName"
                    >{teamOfThree ? 'Team Rep. ' : ''}First Name<sup><small>*</small></sup></label
                >
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    class="css-input w-full max-w-xs"
                    required
                    minlength="1"
                    maxlength="50"
                />
            </div>
            <div class="form-row">
                <label for="lastName"
                    >{teamOfThree ? 'Team Rep. ' : ''}Last Name<sup><small>*</small></sup></label
                >
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    class="css-input w-full max-w-xs"
                    required
                    minlength="1"
                    maxlength="50"
                />
            </div>

            <div class="form-row">
                <label for="email"
                    >{teamOfThree ? 'Team Rep. ' : ''}Email<sup><small>*</small></sup></label
                >
                <input
                    id="email"
                    type="email"
                    name="email"
                    class="css-input w-full max-w-xs"
                    required
                    minlength="6"
                    maxlength="50"
                />
            </div>
            <div class="form-row">
                <label for="phone"
                    >{teamOfThree ? 'Team Rep. ' : ''}Phone Number<sup><small>*</small></sup></label
                >
                <input
                    id="phone"
                    type="number"
                    name="phone"
                    class="css-input w-full max-w-xs"
                    required
                    minlength="8"
                    maxlength="15"
                />
            </div>

            <div class="form-row">
                <label for="institute"
                    >{teamOfThree ? 'Team Rep. ' : ''}Institute Name<sup><small>*</small></sup
                    ></label
                >
                <input
                    id="institute"
                    type="text"
                    name="institute"
                    class="css-input w-full max-w-xs"
                    required
                />
            </div>

            <div class="form-row mt-8">
                <input
                    type="checkbox"
                    id="disclaimer"
                    name="disclaimer"
                    value="Disclaimer"
                    required
                />
                <label for="disclaimer" class="checkbox-label ml-2"
                    >By registering for Tessellate QUIZ, you consent to receiving email updates for
                    Tessellate 2024</label
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
                    category<br /><span class="text-xl font-bold">{returnData.school_member}</span>
                </p>
                <p class="mb-3">
                    Team<br /><span class="text-xl font-bold"
                        >{returnData.teamOfThree ? 'Have a team of 3' : 'Looking for a team'}</span
                    >
                </p>
                <p class="mb-3">
                    Email<br /><span class="text-xl font-bold">{returnData.email}</span>
                </p>
                <p class="mb-3">
                    Phone Number<br /><span class="text-xl font-bold">{returnData.phone}</span>
                </p>
                <p class="mb-3">
                    Institute Name<br /><span class="text-xl font-bold">{returnData.institute}</span
                    >
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
</style>
