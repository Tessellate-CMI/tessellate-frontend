<script lang="ts">
    export let bgColor = 'bg-main-blue'
    export let stems = true
    export let absolute = true
    let innerWidth = 0

    $: position = absolute ? 'absolute' : ''
</script>

<svelte:window bind:innerWidth />

<div class="navbar {bgColor} {position} font-sans text-black">
    <div class="flex-1">
        <a class="btn btn-ghost text-2xl normal-case" href="/"
            ><img src="/svgs/TESSELLATE-black.svg" alt="Tessellate Logo" style="width: 40px" /></a
        >
    </div>

    {#if innerWidth > 640}
        <div class="flex">
            {#if stems}
                <button class="link px-4 text-lg font-bold normal-case overline"
                    ><a href="/stems/">STEMS</a></button
                >
            {/if}
            <button class="link px-4 text-lg font-bold normal-case overline"
                ><a href="/events">Events</a></button
            >
            <button class="link px-4 text-lg font-bold normal-case overline"
                ><a href="/sponsors">Sponsors</a></button
            >
            <button class="link px-4 text-lg font-bold normal-case overline"
                ><a href="/about-us">About Us</a></button
            >
        </div>
    {:else}
        <div class="dropdown dropdown-end">
            <div tabindex="-1" class="btn btn-square btn-ghost rounded-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block h-5 w-5 stroke-current"
                    ><path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    ></path></svg
                >
            </div>
            <ul tabindex="-1" class="menu dropdown-content menu-sm z-[1] w-36 bg-white p-0">
                <li>
                    <a
                        href="/events"
                        class="btn btn-ghost h-auto min-h-0 rounded-none py-2 hover:bg-black hover:text-white"
                        >Events</a
                    >
                </li>
                {#if stems}
                    <li>
                        <a
                            href="/stems/"
                            class="border-y-1 btn btn-ghost h-auto min-h-0 rounded-none border-t-black py-2 hover:bg-black hover:text-white"
                            >Stems</a
                        >
                    </li>
                {/if}
                <li>
                    <a
                        href="/sponsors"
                        class="border-y-1 btn btn-ghost h-auto min-h-0 rounded-none border-t-black py-2 hover:bg-black hover:text-white"
                        >Sponsors</a
                    >
                </li>
                <li>
                    <a
                        href="/about-us"
                        class="border-y-1 btn btn-ghost h-auto min-h-0 rounded-none border-t-black py-2 hover:bg-black hover:text-white"
                        >About Us</a
                    >
                </li>
            </ul>
        </div>
    {/if}

    <div class="dropdown-end dropdown">
        <div tabindex="-1" class="avatar btn btn-circle btn-ghost">
            <div class="h-6">
                <img src="/svgs/profile-min.svg" alt="Profile" />
            </div>
        </div>
        <ul tabindex="-1" class="menu dropdown-content menu-sm z-[1] w-36 bg-white p-0">
            <li>
                <a
                    href="/login"
                    class="btn btn-ghost h-auto min-h-0 rounded-none py-2 hover:bg-black hover:text-white"
                    >Login</a
                >
            </li>
            <li>
                <a
                    href="/signup"
                    class="border-y-1 btn btn-ghost h-auto min-h-0 rounded-none border-t-black py-2 hover:bg-black hover:text-white"
                    >Signup</a
                >
            </li>
        </ul>
    </div>
</div>
