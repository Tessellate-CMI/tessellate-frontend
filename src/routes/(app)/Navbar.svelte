<script lang="ts">
    export let bgColor = 'bg-main-blue'
    export let stems = true
    let innerWidth = 0
</script>

<svelte:window bind:innerWidth />

<div class="navbar {bgColor} font-sans text-black absolute">
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
        <details class="dropdown-end dropdown">
            <summary class="btn btn-square btn-ghost">
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
            </summary>
            <ul
                tabindex="-1"
                class="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 gap-2 bg-base-100 p-1"
            >
                <li>
                    <button class="btn btn-ghost"><a href="/events">Events</a></button>
                </li>
                {#if stems}
                    <li><button class="btn btn-ghost"><a href="/stems/">Stems</a></button></li>
                {/if}
                <li><button class="btn btn-ghost"><a href="/sponsors">Sponsors</a></button></li>
                <li><button class="btn btn-ghost"><a href="/about-us">About Us</a></button></li>
            </ul>
        </details>
    {/if}

    <a href="/profile">
        <span tabindex="-1" class="avatar btn btn-circle btn-ghost">
            <div class="h-6">
                <img src="/svgs/profile-min.svg" alt="Profile" />
            </div>
        </span>
    </a>
</div>
