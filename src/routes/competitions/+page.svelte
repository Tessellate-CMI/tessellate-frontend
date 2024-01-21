<script>
    import '$src/app.css'
    import Navbar from '$lib/components/Navbar.svelte'
    import Footer from '$lib/components/Footer.svelte'
    import event_list from '$lib/data/events.json'
    import EventListing from '$lib/components/EventListing.svelte'
</script>

<Navbar absolute={false} />

<div
    class="header w-full bg-main-blue pb-3 pt-6 text-center font-heading font-semibold tracking-tighter text-black"
>
    Competitions
</div>

<div class="flex w-full place-content-center bg-main-blue pb-3">
    <div class="my-3 flex max-w-3xl flex-wrap place-content-center">
        {#each event_list as event, i}
            <a
                href={'#event' + i}
                class="m-[2px] border-2 border-black bg-white px-2 py-1 text-sm text-black
                transition-colors duration-200 hover:bg-black hover:text-white
                sm:px-4 sm:py-2 sm:text-base
                md:m-1 md:px-8 md:py-3 md:text-lg"
            >
                {event.name}
            </a>
        {/each}
    </div>
</div>

<div class="min-h-screen w-full bg-main-blue pb-20">
    <div class="flex w-full justify-center">
        <div class="flex w-full flex-row flex-wrap place-content-center">
            {#each event_list as event, i}
                <EventListing {...event} id={'event' + i} />
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
