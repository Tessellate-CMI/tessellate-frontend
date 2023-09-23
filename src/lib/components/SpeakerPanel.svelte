<script>
    import '../../app.css'
    import Speaker from './Speaker.svelte'
    import speakers from '$lib/speakers.json'
</script>

<div class="h-full bg-main-blue p-0.5 pb-20">
    <h1
        class="m-3 mb-12 ml-5 mt-6 font-sans text-7xl font-bold tracking-tighter text-black sm:ml-10 md:mb-20"
    >
        Past Speakers
    </h1>
    <div class="flex w-full justify-center">
        <div class="flex w-full flex-row flex-wrap place-content-center gap-4 md:w-3/4 md:gap-14">
            {#each speakers as speaker}
                <Speaker
                    name={speaker.name}
                    image={speaker.image}
                    university={speaker.university}
                    link={speaker.link}
                />
            {/each}
        </div>
    </div>
</div>
