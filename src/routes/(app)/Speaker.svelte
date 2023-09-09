<script>
    import '../../app.css'

    export let name = 'Speaker'
    export let image = 'speaker/default.png'
    export let university = 'University'
</script>

<div class="h-80 w-60 cursor-pointer border-2 border-black bg-white hover:border-blue-500">
    <div class="checker-bg flex h-5/6 w-full items-center justify-center text-blue-500">
        <div
            style="background-image: url({'speakers/' + image + '.png'});"
            class="h-full w-full bg-gray-100 bg-cover bg-center"
        ></div>
    </div>

    <div class="h-1/6 border-t-2 border-black">
        <div class="-mb-1 mt-1 flex items-center justify-between pl-2">
            <h1 class="font-bold">{name}</h1>
        </div>
        <p class="pl-2 text-sm font-medium">{university}</p>
    </div>
</div>
