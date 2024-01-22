<script>
    import '$src/app.css'
    import Navbar from '$src/lib/components/Navbar.svelte'
    import Footer from '$src/lib/components/Footer.svelte'
    import event_list from '$lib/data/internal_events.json'
    import InternalEvent from '$src/lib/components/InternalEvent.svelte'
</script>

<Navbar absolute={false} />

<div
    class="header w-full bg-main-blue pb-3 pt-6 text-center font-heading font-semibold tracking-tighter text-black"
>
    Internal Events
</div>

<div class="min-h-screen w-full bg-second-blue">
    <!-- <p class="text-black text-center text-xl pt-3">The ruleset for every event can be accessed <a href="" class="underline">here</a></p> -->
    <div class="grid w-full grid-cols-1 justify-center p-4 md:grid-cols-2">
        {#each event_list as event}
            <InternalEvent {...event} />
        {/each}
    </div>
</div>
<Footer />

<style>
    .header {
        font-size: 7vw;
    }

    @media (max-width: 639px) {
        .header {
            font-size: 12vw;
        }
    }
</style>
