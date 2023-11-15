<script>
    import '$src/app.css'

    export let name = 'Event Name'
    export let colorOpt = 1
    const color = colorOpt === 1 ? 'second-blue' : 'main-blue'
    const bColor = colorOpt === 1 ? 'white' : 'black'
    const textColor = colorOpt === 1 ? 'white' : 'black'
    export let date = '24th January, 2024'
</script>

<div class="grid grid-cols-2 bg-{color} p-0 font-sans">
    {#if colorOpt === 2}
        <div class="">
            <img src="/stock_profile.jpg" alt={name} />
        </div>
    {/if}
    <div class="text-{textColor}">
        <div class="border-b-2 border-b-{bColor} p-5">
            <h1 class="text-5xl font-bold">{name}</h1>
            <p class="m-1 font-bold">{date}</p>
        </div>
        <div class="p-5">
            <slot />
        </div>
        <div class="p-5">
            <a href="/" class="mt-6 font-semibold underline">Learn More</a>
        </div>
    </div>
    {#if colorOpt === 1}
        <div class="">
            <img src="/stock_profile.jpg" alt={name} />
        </div>
    {/if}
</div>
