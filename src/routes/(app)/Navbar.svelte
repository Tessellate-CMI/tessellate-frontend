<script lang="ts">
    let innerWidth = 0
</script>

<svelte:window bind:innerWidth />

<div class="navbar bg-main-blue font-sans text-black">
    <div class="flex-1">
        <a class="btn btn-ghost text-2xl normal-case" href="/">Tessellate</a>
    </div>

    {#if innerWidth > 640}
        <div class="gap flex-none">
            <button class="btn btn-ghost normal-case text-lg"><a href="/events">Events</a></button>
            <button class="btn btn-ghost normal-case text-lg"><a href="/stems/">Stems</a></button>
            <button class="btn btn-ghost normal-case text-lg"><a href="/sponsors">Sponsors</a></button>
            <button class="btn btn-ghost normal-case text-lg"><a href="/about-us">About Us</a></button>
        </div>
    {:else}
        <details class="dropdown dropdown-end">
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
                class="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-1 gap-2"
            >
                <li><button class="btn btn-ghost"><a href="/events">Events</a></button></li>
                <li><button class="btn btn-ghost"><a href="/stems/">Stems</a></button></li>
                <li><button class="btn btn-ghost"><a href="/sponsors">Sponsors</a></button></li>
                <li><button class="btn btn-ghost"><a href="/about-us">About Us</a></button></li>
            </ul>
        </details>
    {/if}

    <a href="/profile">
        <span tabindex="-1" class="avatar btn btn-circle btn-ghost">
            <div class="w-10 rounded-full">
                <img src="/stock_profile.jpg" alt="Profile" />
            </div>
        </span>
    </a>
</div>
