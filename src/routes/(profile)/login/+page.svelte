<script>
    import '../../../app.css'

    let showPass = false

    $: type = showPass ? 'text' : 'password'
</script>

<div class="flex h-screen bg-main-blue">
    <div class="m-auto flex flex-col place-items-center sm:w-96">
        <h1 class="z-10 font-black text-black">Login</h1>

        <form class="mx-4 bg-white sm:mx-0 sm:w-full" method="post" action="?/login">
            <div class="mb-8 pt-2">
                <button class="btn btn-ghost rounded-none"
                    ><svg class="h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                        ><path
                            d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z"
                        /></svg
                    ></button
                >
            </div>
            <div class="form-row">
                <label for="email" class="font-bold text-black">Email</label>
                <input id="email" type="email" name="email" class="css-input w-full" required />
            </div>

            <div class="form-row">
                <label for="password" class="font-bold tracking-tight text-black">Password</label>
                <div class="relative">
                    <input
                        id="institute"
                        {type}
                        name="institute"
                        class="css-input w-full"
                        required
                    />
                    <div
                        class="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5"
                    >
                        <label class="swap">
                            <!-- this hidden checkbox controls the state -->
                            <input type="checkbox" bind:checked={showPass} />

                            <!-- volume on icon -->
                            <svg
                                class="swap-on h-8 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    d="M3.25909 11.6021C3.94254 8.32689 6.79437 6 10 6C13.2057 6 16.0574 8.32688 16.7409 11.6021C16.7974 11.8725 17.0622 12.0459 17.3325 11.9895C17.6029 11.933 17.7763 11.6682 17.7199 11.3979C16.9425 7.67312 13.6934 5 10 5C6.3066 5 3.05742 7.67311 2.28017 11.3979C2.22377 11.6682 2.39718 11.933 2.6675 11.9895C2.93782 12.0459 3.20268 11.8725 3.25909 11.6021Z"
                                />
                                <path
                                    d="M9.98953 8C11.9225 8 13.4895 9.567 13.4895 11.5C13.4895 13.433 11.9225 15 9.98953 15C8.05653 15 6.48953 13.433 6.48953 11.5C6.48953 9.567 8.05653 8 9.98953 8Z"
                                />
                            </svg>

                            <!-- volume off icon -->
                            <svg
                                class="swap-off h-8 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    d="M2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L5.64526 6.35237C3.97039 7.49178 2.72334 9.27383 2.28011 11.3979C2.22371 11.6682 2.39712 11.9331 2.66744 11.9895C2.93776 12.0459 3.20262 11.8725 3.25903 11.6021C3.66284 9.66698 4.82362 8.06289 6.3671 7.07421L7.94894 8.65604C7.06509 9.29133 6.48947 10.3284 6.48947 11.5C6.48947 13.433 8.05647 15 9.98947 15C11.161 15 12.1981 14.4244 12.8334 13.5405L17.1464 17.8536C17.3417 18.0488 17.6583 18.0488 17.8536 17.8536C18.0488 17.6583 18.0488 17.3417 17.8536 17.1464L2.85355 2.14645Z"
                                />
                                <path
                                    d="M10.1238 8.00253L13.4869 11.3657C13.418 9.5395 11.95 8.07143 10.1238 8.00253Z"
                                />
                                <path
                                    d="M7.53104 5.4098L8.3341 6.21286C8.87141 6.07353 9.43009 6 9.99995 6C13.2056 6 16.0574 8.32688 16.7409 11.6021C16.7973 11.8725 17.0622 12.0459 17.3325 11.9895C17.6028 11.933 17.7762 11.6682 17.7198 11.3979C16.9425 7.67312 13.6934 5 9.99995 5C9.14478 5 8.31342 5.14331 7.53104 5.4098Z"
                                />
                            </svg>
                        </label>
                    </div>
                </div>
            </div>

            <div class="ml-9">
                <a href="." class="tracking-tight text-blue-600">Forgot password?</a>
            </div>

            <div class="form-row flex">
                <button
                    style="text-transform: none"
                    type="submit"
                    class="btn btn-outline m-auto my-4 h-auto min-h-0 rounded-none px-10 py-1.5 text-lg text-black"
                    >Submit</button
                >
            </div>

            <div class="mb-10 ml-9 mt-6 tracking-tight">
                <span class="font-medium text-black">No account?</span>
                <a href="." class=" text-blue-600">Sign up.</a>
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

    h1 {
        font-size: 5rem;
        margin: -2rem;
    }

    .form-row {
        margin-bottom: 5px;
        margin-left: 26px;
        margin-right: 26px;

        padding: 10px;
    }

    .fill-current {
        fill: #000000;
    }

    .css-input {
        padding: 7px;
        max-width: 40rem;
        height: 45px;
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
