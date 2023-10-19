<script>
    import '$src/app.css'
    export let message = ''
</script>

<div class="min-h-screen bg-main-blue text-black" style="height: 50vh">
    <div
        class="flex h-full w-full place-content-center place-items-start items-center text-center"
        style="font-size: 4vw"
    >
        <div class="m-auto" style="line-height: 0.9">
            <p>{message}</p>
            <a
                href="/stems"
                class="btn btn-outline m-auto mb-2 mt-2 h-auto min-h-0 rounded-none px-10 py-1.5 text-lg text-black hover:bg-black hover:text-main-blue"
                >Go to STEMS page</a
            >
        </div>
    </div>
</div>
