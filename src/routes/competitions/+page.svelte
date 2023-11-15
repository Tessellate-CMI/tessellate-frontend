<script>
    import '$src/app.css'
    import Navbar from '$lib/components/Navbar.svelte'
    import Footer from '$lib/components/Footer.svelte'
    import event_list from '$lib/events.json'
    import EventListing from '$src/lib/components/EventListing.svelte'
</script>

<Navbar absolute={false} />

<div class="h-40 bg-main-blue"></div>

<div class="min-h-screen w-full bg-main-blue">
    <div class="flex w-full justify-center">
        <div class="flex w-full flex-row flex-wrap place-content-center gap-5 md:w-3/4 md:gap-10">
            {#each event_list as event}
                <EventListing name={event.name} desc={event.desc} link={event.link} />
            {/each}
        </div>
    </div>
</div>

<Footer />
