<script>
    import '../../../app.css'
    import Speaker from './Speaker.svelte'
    import speakers from '$lib/speakers.json'
</script>

<div class="bg-main-blue p-0.5 h-full">
    <h1 class="font-sans text-6xl font-bold text-center m-3">Speakers</h1>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 place-items-center m-4 p-2">
        {#each speakers as speaker}
            <Speaker name={speaker.name} image={speaker.image} university={speaker.university} />
        {/each}
    </div>
</div>
