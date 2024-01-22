<script lang="ts">
    import '$src/app.css'

    export let name = 'Event'
    export let start_time = ''
    export let end_time = ''
    export let type = ''
    export let venue = ''

    const time = start_time + ' ' + (end_time == '' ? ' onwards' : ' - ' + end_time)
    const internal_external = type == 'internal' ? 'Internal' : 'External'
</script>

<p><span class="text-lg font-semibold">{time}</span> | {venue}</p>
<p class="text-3xl font-semibold">{name}</p>
<p>{internal_external}</p>
