<script>
    import Footer from '$lib/components/Footer.svelte'

    import SpeakerPanel from '$lib/components/SpeakerPanel.svelte'

    // import { Splide, SplideSlide } from '@splidejs/svelte-splide'
    // import '@splidejs/svelte-splide/css'
    import Navbar from '$lib/components/Navbar.svelte'

    const imageModules = import.meta.glob('../../../static/camp-images/*.jpg')

    /**
     * @type {string[]}
     */
    let images = []

    for (const imgPaths in imageModules) {
        images.push(imgPaths.substring(28))
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

    /**
     * @param {{ preventDefault: () => void; currentTarget: any; }} event
     */
    function handleAnchorClick(event) {
        event.preventDefault()
        const link = event.currentTarget
        const anchorId = new URL(link.href).hash.replace('#', '')
        const anchor = document.getElementById(anchorId)
        window.scrollTo({
            top: anchor.offsetTop,
            behavior: 'smooth'
        })
    }
</script>

<!-- Fix spacings and fonts -->
<!-- Hero Page, full width -->
<Navbar></Navbar>
<div
    class="relative flex h-screen w-full items-center justify-center bg-stems-hero-phone md:bg-stems-hero"
    style="background-size:cover"
>
    <!-- <p class="text-lg font-bold">Stems</p> -->
    <div class="flex w-full flex-col items-center justify-center">
        <img
            src="/logos/STEMS-black-bold-bordered-2.svg"
            alt="STEMS Logo"
            class="my-4 mb-6 hidden w-5/6 md:block lg:my-2 lg:w-1/2"
        />
        <img
            src="/logos/STEMS-black-bold-bordered.svg"
            alt="STEMS Logo"
            class="my-4 mb-6 w-5/6 md:hidden lg:my-2 lg:w-1/2"
        />
    </div>
    <!-- Announcements, sticky element -->
    <div
        class="absolute bottom-0 flex h-[25%] w-full md:h-[20%]"
        style="background: linear-gradient( #ffffffe6 15%, rgba(255,255,255,40) 100%);"
    >
        <div class="mx-auto flex w-full max-w-screen-lg justify-center p-5">
            <div class="flex flex-col">
                <p class="mt-1 text-center font-heading text-xl font-medium md:mt-3 md:text-3xl">
                    Registration for STEMS 2025 has started!
                </p>
                <a
                    href="#details"
                    on:click={handleAnchorClick}
                    class="my-2 px-6 py-2 text-center text-lg font-bold underline underline-offset-4 transition duration-300 hover:bg-black hover:text-white md:text-xl"
                >
                    Click here to register</a
                >
            </div>
        </div>
    </div>
</div>

<div class="mt-10 flex w-full">
    <div class="mx-auto w-full max-w-screen-lg shadow-md">
        <!-- About -->
        <div class="flex flex-col lg:flex-row">
            <div
                class="flex w-full items-center justify-center bg-sea-green px-4 py-4 font-heading text-6xl font-semibold text-white lg:w-1/3 lg:text-7xl"
            >
                About
            </div>
            <!-- Fix spacing -->
            <div
                class=" flex w-full flex-col justify-center bg-pista bg-opacity-10 p-6 md:text-lg lg:h-[40vh] lg:w-2/3"
            >
                STEMS (Scholastic Test of Excellence in Mathematical Sciences) is an annual
                first-of-its-kind open resource examination conducted for students from 8th grade to
                undergraduates across India. <span class="mb-4" />The exam will be held in
                Mathematics, Physics, and (theoretical) Computer Science in December. The relaxed
                duration of the exam and original conceptual questions promote academic creativity
                over rote learning and research interest, increasing the interest and awareness of
                mathematical sciences amongst the students.
            </div>
        </div>

        <!-- STEMS Camp -->
        <div class="mt-2 flex flex-col-reverse lg:flex-row">
            <!-- add details here -->
            <!-- Fix spacing -->
            <div
                class=" flex w-full flex-col justify-center bg-pista bg-opacity-10 p-6 md:text-lg lg:h-[40vh] lg:w-2/3"
            >
                About 30 of the best scorers across the three disclipines of STEMS will be selected
                for a 3-day, fully-funded camp at CMI. Past students selected for this camp include
                various medalists at the IMO, IOI and few of the brightest school and college
                students across India.
            </div>
            <div
                class="flex w-full items-center justify-center bg-sea-green py-4 font-heading text-6xl font-semibold text-white lg:w-1/3 lg:px-4 lg:py-0 lg:text-7xl"
            >
                <div class="text-center">STEMS <br class="md:hidden" />Camp</div>
            </div>
        </div>

        <!-- Camp pics, add them -->
        <!-- <div class="mt-2 flex flex-col lg:flex-row">
            <div
                class="flex w-full items-center justify-center bg-sea-green py-6 font-heading text-6xl font-semibold lg:w-1/3 lg:px-4 lg:py-0 lg:text-7xl"
            >
                <div class="text-center text-white">Previous <br class="md:hidden" />Camps</div>
            </div>
            <div class="flex w-full">
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
                        <SplideSlide>
                            <img
                                style="background: #C7DBA18"
                                class="m-auto h-full max-h-[40vh] w-full object-contain md:max-h-[40vh]"
                                src="/camp-images/{img}"
                                alt={img}
                            />
                        </SplideSlide>
                    {/each}
                </Splide>
            </div>
        </div> -->
    </div>
</div>

<div class="mt-16 flex w-full">
    <div
        class="mx-auto grid w-full max-w-screen-lg grid-cols-1 text-center shadow-md lg:grid-cols-2"
    >
        <!-- Details -->
        <div class=" bg-butterscotch bg-opacity-25">
            <div class="bg-butterscotch p-6 font-heading text-6xl font-semibold lg:text-7xl">
                Details
            </div>
            <div class="p-6 px-8 text-lg">
                STEMS will be conducted on the <span class="font-semibold">16<sup>th</sup></span>
                and <span class="font-semibold">17<sup>th</sup> of December</span>. The test can be
                taken online from any location; and the top 30 performers will be invited to CMI to
                attend a sponsored residential camp with guest lectures by leading experts.
            </div>
            <div class="flex py-6" id="details">
                <a
                    href="details"
                    class="m-auto border-2 border-black px-6 py-3 text-xl font-medium transition-all duration-300 hover:border-butterscotch hover:bg-butterscotch hover:text-white lg:hidden"
                    >Details</a
                >
            </div>
        </div>
        <!-- Resources -->
        <div class=" bg-brick bg-opacity-10">
            <div
                class="bg-brick bg-opacity-40 p-6 px-8 font-heading text-6xl font-semibold lg:text-7xl"
            >
                Resources
            </div>
            <div class="p-6 px-8 text-lg">
                The question papers from the previous editions of STEMS and sample papers can be
                found on the resources page.
            </div>
            <div class="flex py-6">
                <a
                    href="resources"
                    class="m-auto border-2 border-black px-6 py-3 text-xl font-medium transition-all duration-300 hover:border-brick hover:bg-brick lg:hidden"
                    >Resources</a
                >
            </div>
        </div>

        <div class="hidden border-black bg-butterscotch bg-opacity-25 py-6 lg:flex">
            <a
                href="details"
                class="m-auto hidden border-2 border-black px-6 py-3 text-xl font-medium transition-all duration-300 hover:border-butterscotch hover:bg-butterscotch lg:block"
                >Details</a
            >
        </div>
        <div class="hidden bg-brick bg-opacity-10 py-6 lg:flex">
            <a
                href="resources"
                class="m-auto hidden border-2 border-black px-6 py-3 text-xl font-medium transition-all duration-300 hover:border-brick hover:bg-brick hover:text-white lg:block"
                >Resources</a
            >
        </div>

        <!-- Register Button -->
        <div class="mt-5 h-[10vh] w-full lg:col-span-2">
            <a
                href="https://forms.gle/5dcpEYsyTcUHVUbx5"
                class="flex h-full w-full items-center justify-center bg-sea-green bg-opacity-20 text-2xl font-semibold transition-all duration-300 ease-in-out hover:bg-opacity-100 hover:text-white"
            >
                <span>Click to Register</span>
            </a>
        </div>
    </div>
</div>

<!-- Past Speakers, add list -->
<SpeakerPanel></SpeakerPanel>

<!-- Add Footer -->
<Footer></Footer>
