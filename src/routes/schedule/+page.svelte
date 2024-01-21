<script>
    import '$src/app.css'

    import Navbar from '$src/lib/components/Navbar.svelte'
    import Footer from '$src/lib/components/Footer.svelte'
    import EventSchedule from '$src/lib/components/EventSchedule.svelte'
    import schedule from '$lib/data/schedule.json'
</script>

<Navbar absolute={false} />

<div class="bg-main-blue">
    <p class="header w-full p-6 text-center font-heading font-semibold tracking-tighter text-black">
        Tess'24 Schedule
    </p>
</div>

<div class="font-sans">
    <div class="bg-second-blue p-8 text-white">
        <h1 class="font-heading text-3xl font-semibold">Thursday, 25th January</h1>
    </div>
    <div class="bg-main-blue text-black">
        {#each schedule.thursday as event}
            <div class="ml-4 p-8">
                <EventSchedule {...event} />
            </div>
        {/each}
    </div>
</div>
<div class="font-sans">
    <div class="bg-second-blue p-8 text-white">
        <h1 class="font-heading text-3xl font-semibold">Friday, 26th January</h1>
    </div>
    <div class="bg-main-blue text-black">
        {#each schedule.friday as event}
            <div class="ml-4 p-8">
                <EventSchedule {...event} />
            </div>
        {/each}
    </div>
</div>
<div class="font-sans">
    <div class="bg-second-blue p-8 text-white">
        <h1 class="font-heading text-3xl font-semibold">Saturday, 27th January</h1>
    </div>
    <div class="bg-main-blue text-black">
        {#each schedule.saturday as event}
            <div class="ml-4 p-8">
                <EventSchedule {...event} />
            </div>
        {/each}
    </div>
</div>
<div class="font-sans">
    <div class="bg-second-blue p-8 text-white">
        <h1 class="font-heading text-3xl font-semibold">Sunday, 28th January</h1>
    </div>
    <div class="bg-main-blue text-black">
        {#each schedule.sunday as event}
            <div class="ml-4 p-8">
                <EventSchedule {...event} />
            </div>
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
