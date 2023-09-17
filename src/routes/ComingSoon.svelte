<script>
    import '../app.css'
    import Navbar from './(app)/Navbar.svelte'
    import Footer from './(app)/Footer.svelte'
</script>

<Navbar />

<div class="min-h-screen bg-main-blue text-black" style="height: 50vh">
    <div
        class="flex h-full w-full place-content-center place-items-start items-center text-center"
        style="font-size: 11.5vw"
    >
        <div class="m-auto" style="line-height: 0.9">
            <h1 class="font-black">Coming <br />Soon!</h1>
            <a
                href="."
                class="btn btn-outline m-auto mb-2 mt-2 h-auto min-h-0 rounded-none px-10 py-1.5 text-lg text-black hover:bg-black hover:text-main-blue"
                >Back</a
            >
        </div>
    </div>
</div>

<Footer />
