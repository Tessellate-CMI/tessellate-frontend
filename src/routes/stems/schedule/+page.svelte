<script>
    import Footer from '$lib/components/Footer.svelte'
    import Navbar from '$lib/components/Navbar.svelte'
    import StemsSchedule from '$src/lib/components/StemsSchedule.svelte'
    import '$src/app.css'
    import schedule from '$lib/data/stems_schedule.json'
</script>

<Navbar absolute={false} />

<div class="bg-main-blue">
    <p class="header w-full p-6 text-center font-heading font-semibold tracking-tighter text-black">
        STEMS Camp Schedule
    </p>
</div>

<div class="bg-main-blue">
    <p class="w-full p-6 text-center font-heading font-semibold tracking-tighter text-black">
        All sessions will be conducted in the Seminar Hall.
    </p>
</div>

<div class="mx-auto w-full">
    <div class="font-sans">
        <div class="bg-second-blue p-8 text-white">
            <div class="mx-auto w-full max-w-screen-lg">
                <h1 class="font-heading text-3xl font-semibold">Friday, 26th January</h1>
            </div>
        </div>
        <div class="bg-main-blue text-black">
            {#each schedule.friday as event}
                <div class="mx-auto w-full max-w-screen-lg">
                    <div class="ml-4 p-5 lg:m-0 lg:pl-0">
                        <StemsSchedule {...event} />
                    </div>
                </div>
            {/each}
        </div>
    </div>
    <div class="font-sans">
        <div class="bg-second-blue p-8 text-white">
            <div class="mx-auto w-full max-w-screen-lg">
                <h1 class="font-heading text-3xl font-semibold">Saturday, 27th January</h1>
            </div>
        </div>
        <div class="bg-main-blue text-black">
            {#each schedule.saturday as event}
                <div class="mx-auto w-full max-w-screen-lg">
                    <div class="ml-4 p-5 lg:m-0 lg:pl-0">
                        <StemsSchedule {...event} />
                    </div>
                </div>
            {/each}
        </div>
    </div>
    <div class="font-sans">
        <div class="bg-second-blue p-5 text-white">
            <div class="mx-auto w-full max-w-screen-lg">
                <h1 class="font-heading text-3xl font-semibold">Sunday, 28th January</h1>
            </div>
        </div>
        <div class="bg-main-blue text-black">
            {#each schedule.sunday as event}
                <div class="mx-auto w-full max-w-screen-lg">
                    <div class="ml-4 p-5 lg:m-0 lg:pl-0">
                        <StemsSchedule {...event} />
                    </div>
                </div>
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
