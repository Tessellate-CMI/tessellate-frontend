<script>
    import '../../../app.css'

    export let name = 'Speaker'
    export let image = 'default.png'
    export let university = 'University'
    export let link = '/stems'
</script>

<a
    href={link}
    class="parent h-80 w-60 scale-90 cursor-pointer border-2 border-black bg-white text-black md:scale-100"
>
    <div class=" flex h-4/5 w-full items-center justify-center bg-white">
        <div
            style="background-image: url({'speakers/' + image});"
            class="h-full w-full bg-gray-100 bg-cover bg-center"
        ></div>
    </div>

    <div class="child h-1/5 border-t-2 border-black transition-colors duration-300 ease-in-out">
        <div class=" mt-1 flex items-center justify-between pl-2">
            <h1 class="font-bold">{name}</h1>
        </div>
        <p class="pl-2 text-sm font-medium leading-none">{university}</p>
    </div>
</a>

<style>
    .child {
        background-color: white;
        color: black;
    }
    .parent:hover .child {
        background-color: black;
        color: white;
    }
</style>
