<script>
    import '$src/app.css'

    export let name = 'Event Name'
    export let color = 'main-blue'
    export let date = "24th January, 2024"
</script>

<div class="grid grid-cols-2 bg-{color} p-0 font-sans">
    <div class="text-black">
        <div class="border-b-2 border-b-white p-5">
            <h1 class="text-5xl font-bold">{name}</h1>
            <p class="m-1 font-bold">{date}</p>
        </div>
        <div class="p-5">
            <slot />
        </div>
        <div class="p-5">
            <a href="/" class="mt-6 underline font-semibold">Learn More</a>
        </div>
    </div>
    <div class="">
        <img src="/stock_profile.jpg" alt={name} />
    </div>
</div>
