<script>
    import '$src/app.css'
    import Navbar from '$lib/components/Navbar.svelte'
    import Footer from '$lib/components/Footer.svelte'
    import event_list from '$lib/events.json'
    import EventListing from '$lib/components/EventListing.svelte'
</script>

<Navbar absolute={false} />

<div
    class="header w-full bg-main-blue pb-12 pt-6 text-center font-heading font-semibold tracking-tighter text-black"
>
    Competitions
</div>

<div class="min-h-screen w-full bg-main-blue pb-20">
    <div class="flex w-full justify-center">
        <div class="flex w-full flex-row flex-wrap place-content-center gap-10 sm:gap-8">
            {#each event_list as event}
                <EventListing {...event} />
            {/each}
        </div>
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
