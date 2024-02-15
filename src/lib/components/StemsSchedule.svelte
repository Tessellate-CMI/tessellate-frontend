<script lang="ts">
    import '$src/app.css'

    export let title = 'Event'
    export let time = ''
    export let speaker = ''
    export let abstract = ''
</script>

{#if speaker != ''}
    <p class="text-xl font-semibold">{speaker}</p>
{/if}
<p class="text-3xl">{title}</p>
<p><span class="text-lg font-semibold">{time}</span></p>
{#if abstract != ''}
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    <p class="my-2">{@html abstract}</p>
{/if}
