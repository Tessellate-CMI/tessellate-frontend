<script lang="ts">
    import '$src/app.css'

    export let name = 'Event'
    export let start_time = ''
    export let end_time = ''
    export let type = ''
    export let venue = ''

    const time = start_time + ' ' + (end_time == '' ? ' onwards' : ' to ' + end_time)
    const internal_external = type == 'internal' ? 'Internal' : 'External'
    const place = venue != '' ? 'at ' + venue : ''
</script>

<p class="text-xl font-semibold">{name} ({internal_external})</p>
<p class="text-lg">{time} {place}</p>
