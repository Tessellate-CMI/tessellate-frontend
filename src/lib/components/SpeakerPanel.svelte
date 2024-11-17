<script>
    import speakers from '$lib/jsons/speakers.json'
    import Speaker from '$lib/components/Speaker.svelte'
</script>

<div class="mt-10 flex w-full">
    <div class="mx-auto w-full max-w-screen-lg shadow-md">
        <div
            class="border-t-2 border-black p-6 font-heading text-6xl font-semibold lg:border-b-2 lg:border-t-2 lg:text-7xl"
        >
            Past Speakers
        </div>
        <div class="flex w-full flex-row flex-wrap place-content-center gap-8 p-6">
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
