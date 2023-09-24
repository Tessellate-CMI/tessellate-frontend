<script>
    import '$src/app.css'
    import Navbar from '$lib/components/Navbar.svelte'
    import Footer from '$lib/components/Footer.svelte'
    import { browser } from '$app/environment'
    import Carousel from 'svelte-carousel'
</script>

<div class="sticky top-0">
    <Navbar />

    <div class="min-h-screen bg-main-blue text-black" style="height: 50vh">
        <div
            class="flex h-full w-full place-content-center place-items-start items-center text-center font-display"
            style="font-size: 10vw"
        >
            <div class="m-auto" style="line-height: 0.85">
                <h1 class="font-black m-2">TESSELLATE</h1>
                <p class="font-bold tracking-tighter">2024</p>
            </div>
        </div>
    </div>
</div>
<div class="sticky top-0">
    <div class="grid grid-cols-1 lg:grid-cols-2">
        <div
            class="bg-second-blue pb-12 pt-3 text-xl font-medium text-white sm:text-4xl lg:grid-cols-2"
        >
            <div
                class="border-b-2 border-white p-4 font-heading text-5xl font-bold tracking-tight sm:text-6xl"
            >
                <span class="font-semibold">About</span><br />
                <span class="font-heading text-6xl sm:text-7xl">TESSELLATE</span>
            </div>
            <div class="p-4 md:p-5 md:pl-6">
                Creativity. Competition. Culture. Tessellate is Chennai Mathematical Institute's
                annual student-run fest where thousands of attendees each year let loose and
                showcase their myriad of talents. From Carnatic nights to trivia delights, bomb defusal
                to delicious food stall perusal, our fest tessellates cultural events and contests
                to create three days of unique experiences and incredible memories.
            </div>
        </div>

        <div class="flex flex-col justify-center bg-black">
            {#if browser}
                <div>
                    <Carousel autoplay autoplayDuration={2500} arrows={false} dots={false}>
                        <img src="/images/cuber.webp" alt="Cuber" />
                        <img src="/images/chess.webp" alt="Chess Match" />
                    </Carousel>
                </div>
            {/if}
        </div>
    </div>

    <div class="grid h-screen grid-cols-1 font-sans sm:grid-cols-2">
        <a
            href="/stems"
            class="parent relative flex flex-col justify-center bg-gray-900 p-6 text-white transition-colors duration-300 ease-in-out hover:bg-white hover:text-black"
        >
            <div><img src="svgs/STEMS-white.svg" alt="" class="child" /></div>
            <div class="absolute bottom-20 left-10">click to know more</div>
        </a>
        <div class="grid grid-rows-2">
            <a
                class="bg-main-blue fill-black pl-5 pt-5 text-5xl font-bold
                tracking-tighter text-black transition-colors duration-300 ease-in-out
                hover:bg-black hover:fill-main-blue hover:text-main-blue
                sm:text-5xl md:text-6xl lg:text-8xl"
                href="/events"
            >
                <div class="flex flex-row flex-wrap items-center">
                    <p class="w-full">Cultural</p>
                    <p>Events</p>
                    <svg viewBox="0 0 55 45" class="r-arrow ml-[1.25rem]">
                        <path
                            d="m28.06,43.89h-9.31l18.57-18.71H0v-6.47h37.31L18.74,0h9.31l21.94,21.95-21.94,21.94Z"
                        />
                    </svg>
                </div>
            </a>
            <a
                class="bg-second-blue fill-white pl-5 pt-5 text-5xl font-bold
                tracking-tighter text-white transition-colors duration-300 ease-in-out
                hover:bg-black hover:fill-main-blue hover:text-main-blue
                sm:text-5xl md:text-6xl lg:text-8xl"
                href="/competitions/"
            >
                <div class="flex flex-row flex-wrap items-center gap-5">
                    Competitions <br> <svg viewBox="0 0 55 45" class="r-arrow">
                        <path
                            d="m28.06,43.89h-9.31l18.57-18.71H0v-6.47h37.31L18.74,0h9.31l21.94,21.95-21.94,21.94Z"
                        />
                    </svg>
                </div>
            </a>
        </div>
    </div>
    <Footer />
</div>

<style>
    .parent:hover .child {
        filter: brightness(0) saturate(100%) invert(7%) sepia(16%) saturate(2142%)
            hue-rotate(182deg) brightness(95%) contrast(94%);
    }

    .r-arrow {
        height: 3rem;
    }
    @media (min-width: 1024px) {
        .r-arrow {
            height: 4.5rem;
        }
    }
    @media (max-width: 1023px) and (min-width: 768px) {
        .r-arrow {
            height: 3rem;
        }
    }
    @media (max-width: 767px) and (min-width: 640px) {
        .r-arrow {
            height: 2rem;
        }
    }
</style>
