<script>
    import '$src/app.css'

    export let name = 'Speaker'
    export let image = 'default.png'
    export let university = 'University'
    export let link = '/stems'
</script>

<a
    href={link}
    class="group h-[15rem] w-[10.4rem] cursor-pointer border-2 border-black bg-white text-black lg:h-[17rem] lg:w-[13rem]"
>
    <div class="flex h-[77%] w-full items-center justify-center bg-white lg:h-4/5">
        <div
            style="background-image: url({'https://cdn.tessellate.cmi.ac.in/assets/PastSpeakers/speakers/' +
                image})"
            class="h-full w-full bg-gray-100 bg-cover bg-center bg-no-repeat"
        ></div>
    </div>

    <div
        class="h-[23%] border-t-2 border-black transition-colors duration-300 ease-in-out group-hover:border-gray-600 group-hover:bg-gray-600 group-hover:text-white lg:h-1/5"
    >
        <div class="my-1 flex items-center justify-between pl-1 sm:pl-2">
            <p class="text-base font-semibold leading-none">{name}</p>
        </div>
        <p class="pl-1 text-xs leading-none sm:pl-2">{university}</p>
    </div>
</a>
