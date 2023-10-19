<script lang="ts">
    export let bgColor = 'bg-main-blue'
    export let textWhite = false
    export let stems = true
    export let absolute = true
    let innerWidth = 0

    $: position = absolute ? 'absolute' : ''
</script>

<svelte:window bind:innerWidth />

<div class="navbar {bgColor} {position} font-sans text-black">
    <div class="flex-1">
        <a class="btn btn-ghost text-2xl normal-case" href="/"
            ><img
                src="/svgs/TESSELLATE-{textWhite ? 'white' : 'black'}.svg"
                alt="Tessellate Logo"
                style="width: 40px"
            /></a
        >
    </div>

    {#if innerWidth > 640}
        <div class="flex {textWhite ? 'text-white' : ' text-black'}">
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
            {#if !stems}
                <button class="link px-4 text-lg font-bold normal-case overline"
                    ><a href="/stems/register">Register</a></button
                >
            {/if}
        </div>
    {:else}
        <div class="dropdown dropdown-end">
            <div
                tabindex="-1"
                class="btn btn-square btn-ghost rounded-none {textWhite
                    ? 'stroke-white'
                    : 'stroke-black'}"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block h-5 w-5"
                    ><path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    ></path></svg
                >
            </div>
            <ul tabindex="-1" class="menu dropdown-content menu-sm z-[1] w-36 bg-white p-0">
                {#if stems}
                    <li>
                        <a
                            href="/stems/"
                            class="border-y-1 btn btn-ghost h-auto min-h-0 rounded-none border-b-black py-2 hover:bg-black hover:text-white"
                            >Stems</a
                        >
                    </li>
                {/if}
                <li>
                    <a
                        href="/events"
                        class="btn btn-ghost h-auto min-h-0 rounded-none py-2 hover:bg-black hover:text-white"
                        >Events</a
                    >
                </li>
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
                {#if !stems}
                    <li>
                        <a
                            href="/register/"
                            class="border-y-1 btn btn-ghost h-auto min-h-0 rounded-none border-t-black py-2 hover:bg-black hover:text-white"
                            >register</a
                        >
                    </li>
                {/if}
            </ul>
        </div>
    {/if}
</div>

<style>
    .make-white {
        filter: brightness(0) saturate(100%) invert(7%) sepia(16%) saturate(2142%)
            hue-rotate(182deg) brightness(95%) contrast(94%);
    }
</style>
