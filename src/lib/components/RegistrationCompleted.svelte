<script>
    import '$src/app.css'
    export let event = 'STEMS'
    export let link = '/stems'
</script>

<div class="min-h-screen bg-main-blue text-black" style="height: 50vh">
    <div
        class="flex h-full w-full place-content-center place-items-start items-center text-center"
        style="font-size: 4vw"
    >
        <div class="m-auto" style="line-height: 0.9">
            <slot />
            <a
                href={link}
                class="btn btn-outline m-auto mb-2 mt-2 h-auto min-h-0 rounded-none px-10 py-1.5 text-lg text-black hover:bg-black hover:text-main-blue"
                >Go to {event} page</a
            >
        </div>
    </div>
</div>
