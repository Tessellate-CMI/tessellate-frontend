<script>
    import '../app.css'
    import Navbar from './(app)/Navbar.svelte'
    import Footer from './(app)/Footer.svelte'
    import { browser } from '$app/environment'
    import Carousel from 'svelte-carousel'
</script>

<div class="sticky top-0">
    <Navbar />

    <div class="bg-main-blue text-black sm:min-h-screen" style="height: 50vh">
        <div
            class="flex h-full w-full place-content-center place-items-start items-center text-center font-display"
            style="font-size: 11.5vw"
        >
            <div class="m-auto" style="line-height: 0.85">
                <h1 class="font-black">TESSELLATE</h1>
                <p class="font-bold tracking-tighter">2024</p>
            </div>
        </div>
    </div>
</div>
<div class="sticky top-0">
    <div class="grid grid-cols-1 sm:grid-cols-2">
        <div class="bg-second-blue p-12 font-sans text-4xl font-semibold text-white">
            <span class="font-display text-5xl font-bold">TESSELLATE </span>is the brainchild of
            students at Chennai Mathematical Institute, and serves to both develop further interest
            in mathematics, and as a fun reprieve for students to break from their rut and flex
            their creative and competitive muscles. It all started when the student body of a small
            research institute tessellated seemingly unrelated cultural and academic events in a
            seamless manner.
        </div>

        <!-- <div class="carousel w-full">
            <div id="slide1" class="carousel-item relative w-full place-content-center bg-black">
                <img src="/images/chess.webp" alt="people playing chess" />
                <div
                    class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
                >
                    <a href="#slide3" class="btn btn-circle">❮</a>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full place-content-center bg-black">
                <img src="/images/chess.webp" alt="" />
                <div
                    class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
                >
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <a href="#slide3" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full place-content-center bg-black">
                <img src="/images/cuber.webp" alt="" />
                <div
                    class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
                >
                    <a href="#slide2" class="btn btn-circle">❮</a>
                    <a href="#slide1" class="btn btn-circle">❯</a>
                </div>
            </div>
        </div> -->
        {#if browser}
            <div class="bg-white">
                <Carousel autoplay autoplayDuration={2500}>
                    <img src="/images/cuber.webp" alt="" />
                    <img src="/images/cuber.webp" alt="" />
                    <img src="/images/cuber.webp" alt="" />
                    <img src="/images/cuber.webp" alt="" />
                </Carousel>
            </div>
        {/if}
    </div>

    <div class="grid h-screen grid-cols-1 font-sans sm:grid-cols-2">
        <div class="flex flex-col justify-center bg-gray-900 p-6">
            <a href="/stems"><img src="svgs/STEMS-white.svg" alt="" /></a>
        </div>
        <div class="grid grid-rows-2">
            <a
                class="bg-main-blue pl-8 pt-8 text-6xl font-bold tracking-tighter text-black
                transition-colors duration-300 hover:bg-black hover:text-main-blue
                sm:text-8xl"
                href="/events"
            >
                <p>Cultural <br /> Events <span>&#129130;</span></p>
            </a>
            <a
                class="bg-second-blue pl-8 pt-8 text-6xl font-bold tracking-tighter text-white
                transition-colors duration-300 hover:bg-black hover:text-main-blue
                sm:text-8xl"
                href="."
            >
                <p>Competitions <span>&#129130; </span></p>
            </a>
        </div>
    </div>
    <Footer />
</div>
