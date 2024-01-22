<script>
    import '$src/app.css'
    import Navbar from '$lib/components/Navbar.svelte'
    import Footer from '$lib/components/Footer.svelte'

    import { Splide, SplideSlide } from '@splidejs/svelte-splide'
    import '@splidejs/svelte-splide/css'

    const imageModules = import.meta.glob('../../static/images/*.webp')
    /**
     * @type {string[]}
     */
    let images = []

    for (const imgPaths in imageModules) {
        images.push(imgPaths.substring(20))
    }

    /**
     * @param {string[]} array
     */
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[array[i], array[j]] = [array[j], array[i]]
        }
    }

    shuffleArray(images)
</script>

<div class="bg-image sticky top-0">
    <Navbar bgColor="transparent" />

    <div class=" min-h-screen text-black" style="height: 50vh">
        <div
            class="relative flex h-full w-full flex-col place-content-center place-items-start items-center text-center font-display"
            style="font-size: 10vw"
        >
            <div class="m-auto" style="line-height: 0.85">
                <h1 class="m-2 font-black">TESSELLATE</h1>
                <p class="font-bold tracking-tighter">2024</p>
            </div>
            <div
                class="absolute inset-y-2/3 mx-auto flex h-max w-full flex-col bg-white
                    bg-opacity-25 py-4 text-center font-heading text-base font-semibold text-black
                    sm:inset-y-3/4 sm:text-base md:text-lg lg:text-xl"
            >
                Registration for competitions has started.<br />Click here for details.
                <a
                    style="text-transform: none"
                    class="text-md btn btn-outline m-auto mt-3 h-auto min-h-0 rounded-none px-10 py-3 text-black hover:bg-black hover:text-white sm:text-base md:text-lg lg:text-xl"
                    href="/competitions/">Details & Register</a
                >
            </div>
        </div>
    </div>
</div>
<div class="sticky top-0">
    <div class="grid grid-cols-1 text-xl font-medium sm:text-2xl lg:grid-cols-2">
        <div class="bg-second-blue pb-12 pt-4 text-white">
            <div
                class="border-b-2 border-white p-4 pl-6 font-heading tracking-tight md:p-8 md:pl-8"
            >
                <span class="text-5xl font-semibold md:text-6xl">About</span><br />
                <span class="text-6xl font-bold md:text-7xl">TESSELLATE</span>
            </div>
            <div class="p-4 px-6 md:p-6 md:pl-8 md:pr-12">
                <p class="font-bold">Creativity. Competition. Culture.</p>
                <br />
                Tessellate is Chennai Mathematical Institute's annual student-run fest where thousands
                of attendees each year let loose and showcase their myriad of talents. From Carnatic
                nights to trivia delights, bomb defusal to delicious food stall perusal, our fest tessellates
                cultural events and contests to create four days of unique experiences and incredible
                memories.
            </div>
        </div>

        <div class="flex w-full bg-black">
            <!-- {#if browser}
                <div>
                    <Carousel autoplay autoplayDuration={2500} arrows={false} dots={false}>
                        <img src="/images/cuber.webp" alt="Cuber" />
                        <img src="/images/chess.webp" alt="Chess Match" />
                    </Carousel>
                </div>
            {/if} -->
            <Splide
                class="m-auto"
                aria-label="tessellate event images"
                options={{
                    type: 'loop',
                    perPage: 1,
                    autoplay: true,
                    setInterval: 500,
                    autoHeight: true,
                    arrows: false,
                    drag: 'free',
                    snap: true
                }}
            >
                {#each images as img}
                    <SplideSlide
                        style="background-image: url({'/images/' + img});
                               background-size:cover"
                    >
                        <img
                            style="backdrop-filter: blur(10px)"
                            class="m-auto h-full max-h-[30rem] w-full object-contain md:max-h-[40rem]"
                            src="/images/{img}"
                            alt="Cuber"
                        />
                    </SplideSlide>
                {/each}
            </Splide>
        </div>
    </div>

    <div class="grid h-screen grid-cols-1 font-sans sm:grid-cols-2">
        <a
            class="bg-main-blue fill-black pl-8 pt-8 text-5xl font-bold
                tracking-tighter text-black transition-colors duration-300 ease-in-out
                hover:bg-black hover:fill-main-blue hover:text-main-blue
                sm:text-5xl md:text-6xl lg:text-8xl"
            href="/competitions/"
        >
            <div class="flex flex-row flex-wrap items-center gap-5">
                Competitions <br />
                <svg viewBox="0 0 55 45" class="r-arrow">
                    <path
                        d="m28.06,43.89h-9.31l18.57-18.71H0v-6.47h37.31L18.74,0h9.31l21.94,21.95-21.94,21.94Z"
                    />
                </svg>
            </div>
        </a>
        <div class="grid grid-rows-2">
            <a
                class="bg-second-blue fill-white pl-8 pt-8 text-5xl font-bold
                tracking-tighter text-white transition-colors duration-300 ease-in-out
                hover:bg-black hover:fill-main-blue hover:text-main-blue
                sm:text-5xl md:text-6xl lg:text-8xl"
                href="/internal-events"
            >
                <div class="flex flex-row flex-wrap items-center">
                    <p class="w-full">Internal</p>
                    <p>Events</p>
                    <svg viewBox="0 0 55 45" class="r-arrow ml-[1.25rem]">
                        <path
                            d="m28.06,43.89h-9.31l18.57-18.71H0v-6.47h37.31L18.74,0h9.31l21.94,21.95-21.94,21.94Z"
                        />
                    </svg>
                </div>
            </a>
            <a
                href="/stems"
                class="parent relative flex flex-col justify-center bg-gray-900 p-6 text-white transition-colors duration-300 ease-in-out hover:bg-white hover:text-black"
            >
                <div><img src="svgs/STEMS-white.svg" alt="" class="child" /></div>
                <div class="text-center text-lg">click to know more</div>
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

    .bg-image {
        background-image: url('/bg-images/tess-bg.png');
        background-color: rgb(198 218 255);
        height: 100vh;

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
