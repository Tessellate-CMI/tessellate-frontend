<script lang="ts">
    import '$src/app.css'
    import type { Coordinator } from '$lib/components/interfaces'

    export let name = 'Speaker'
    export let alumni = 'false'
    export let coordinators: Coordinator[] = []
    export let description = ''
</script>

<div class="m-5 border-2 border-black bg-white p-6 text-black">
    <h1 class="font-sans text-3xl font-bold md:text-2xl lg:text-3xl">{name}</h1>
    <p class="mt-3">{description}</p>
    <p class="mt-3 text-lg font-semibold">
        Alumni Permitted: {alumni === 'true' ? 'Yes' : alumni === 'false' ? 'No' : alumni}
    </p>
    <p class="mt-3 text-lg font-semibold">Coordinators:</p>
    {#each coordinators as cd}
        <p>{cd.name} ({cd.batch}) - <a href="mailto:{cd.email}">{cd.email}</a></p>
    {/each}
</div>
