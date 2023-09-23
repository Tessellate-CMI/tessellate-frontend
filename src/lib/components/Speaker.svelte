<script>
    import '../../app.css'

    export let name = 'Speaker'
    export let image = 'default.png'
    export let university = 'University'
    export let link = '/stems'
</script>

<a
    href={link}
    class="parent h-[15rem] w-[11.5rem] cursor-pointer border-2 border-black bg-white text-black sm:h-80 sm:w-60"
>
    <div class=" flex h-4/5 w-full items-center justify-center bg-white">
        <div
            style="background-image: url({'speakers/' + image});"
            class="h-full w-full bg-gray-100 bg-cover bg-center"
        ></div>
    </div>

    <div class="child h-1/5 border-t-2 border-black transition-colors duration-300 ease-in-out">
        <div class="mt-1 flex items-center justify-between pl-1 sm:pl-2">
            <h1 class="text-base font-bold leading-none sm:text-lg">{name}</h1>
        </div>
        <p class="pl-1 text-xs font-medium leading-none sm:pl-2">{university}</p>
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
