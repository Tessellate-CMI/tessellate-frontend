<script>
    import '$src/app.css'
    import ComingSoon from '$src/lib/components/ComingSoon.svelte'
</script>

<ComingSoon message="Registrations will open by 20th October, 2023" />

<!-- <script>
    import '$src/app.css'
</script>

<div class="flex h-screen bg-main-blue">
    <div class="m-auto flex flex-col place-items-center sm:w-96">
        <h1 class="z-10 font-black text-black">Register</h1>

        <form class="mx-4 bg-white sm:mx-0 sm:w-full" method="post" action="?/signup">
            <div class="mb-1 pt-2">
                <button class="btn btn-ghost rounded-none"
                    ><svg class="h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                        ><path
                            d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z"
                        /></svg
                    ></button
                >
            </div>
            <div class="form-row">
                <label for="fullName">Full Name<sup><small>*</small></sup></label>
                <input
                    id="fullName"
                    type="text"
                    name="fullName"
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
                    <option value="undergraduate">Undergraduate Studies</option>
                </select>
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

            <div class="subjects mt-5">
                <div class="form-row mb-3">
                    <p class="text-2xl">Subjects</p>
               </div>
                <div class="form-row">
                    <input
                        type="checkbox"
                        id="mathematics"
                        name="mathematics"
                        value="Mathematics"
                    />
                    <label for="mathematics" class="checkbox-label ml-2">Mathematics</label>
                </div>
                <div class="form-row">
                    <input type="checkbox" id="physics" name="physics" value="Physics" />
                    <label for="physics" class="checkbox-label ml-2">Physics</label>
                </div>
                <div class="form-row">
                    <input
                        type="checkbox"
                        id="computer-science"
                        name="computer-science"
                        value="Computer-Science"
                    />
                    <label for="computer-science" class="checkbox-label ml-2">Computer Science</label>
                </div>
            </div>

            <div class="form-row flex mt-3">
                <button
                    style="text-transform: none"
                    type="submit"
                    class="btn btn-outline m-auto mb-2 mt-2 h-auto min-h-0 rounded-none px-10 py-1.5 text-lg text-black"
                    >Submit</button
                >
            </div>
        </form>
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
        padding-bottom: 5px;
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
</style> -->
