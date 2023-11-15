<script>
    import '$src/app.css'

    export let name = 'Speaker'
    // export let image = 'default.png'
    export let desc = 'University'
    export let link = '/stems'
</script>

<div class="relative h-52 w-96 border-2 border-black bg-white text-black">
    <div class="h-full pl-4">
        <div class="flex items-center justify-between pb-3 pt-5">
            <h1 class="text-4xl font-bold leading-none">{name}</h1>
        </div>
        <p class="text-lg font-medium leading-none text-gray-800">{desc}</p>
    </div>
    <div class="absolute bottom-4 left-4">
        <a
            href={link}
            style="text-transform: none"
            class="btn btn-outline m-auto h-auto min-h-0 rounded-none px-6 py-3 text-lg text-black hover:bg-black hover:text-white"
            >More info & register</a
        >
    </div>
</div>

<style>
</style>
