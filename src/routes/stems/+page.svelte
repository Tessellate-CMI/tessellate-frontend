<script>
    import Footer from '$lib/components/Footer.svelte'
    import Navbar from '$lib/components/Navbar.svelte'
    import SpeakerPanel from '$lib/components/SpeakerPanel.svelte'
    import '$src/app.css'

    let innerWidth = 0
    let screenIsLarge = false

    $: screenIsLarge = innerWidth < 1024
</script>

<svelte:window bind:innerWidth />

<div class="sticky top-0 bg-white">
    <div class="bg-pattern">
        <Navbar bgColor={'bg-transparent'} stems={false} />
        <div class="relative flex h-screen w-full content-center justify-center">
            <img src="svgs/STEMS-black.svg" alt="STEMS Logo" class="w-full lg:w-2/3" />
            <div
                class="absolute inset-y-2/3 mx-auto flex h-max w-full flex-col bg-white bg-opacity-25 py-4 text-center font-heading text-xs font-semibold text-black sm:inset-y-3/4 sm:text-base md:text-lg lg:text-xl"
            >
                Registration for STEMS has started.<br />Click here for details.
                <a
                    style="text-transform: none"
                    class="btn btn-outline m-auto mt-3 h-auto min-h-0 rounded-none px-10 py-3 text-xs text-black hover:bg-black hover:text-white sm:text-base md:text-lg lg:text-xl"
                    href="/stems#details">Details</a
                >
            </div>
        </div>
    </div>
</div>
<div class="sticky top-0">
    <div class="grid grid-cols-1 text-xl font-medium md:text-2xl lg:grid-cols-2">
        <div class="bg-second-blue pb-12 text-white">
            <div
                class="border-b-2 border-white p-4 pl-6 font-heading tracking-tight md:p-8 md:pl-12"
            >
                <span class="text-5xl font-semibold sm:text-7xl">About</span><br />
                <span class="text-6xl font-bold sm:text-8xl">STEMS</span>
            </div>
            <div class="p-4 px-6 md:p-6 md:px-12">
                STEMS (Scholastic Test of Excellence in Mathematical Sciences) is an annual
                first-of-its-kind open resource examination conducted for students from 8th grade to
                undergraduates across India. The exam will be held in Mathematics, Physics, and
                (theoretical) Computer Science in December. The relaxed duration of the exam and
                original conceptual questions promote academic creativity over rote learning and
                research interest, increasing the interest and awareness of mathematical sciences
                amongst the students.
            </div>
        </div>
        <div class="bg-main-blue pb-12 text-black">
            <div
                class="border-b-2 border-black p-4 pl-6 font-heading tracking-tight md:p-8 md:pl-12"
            >
                <span class="text-6xl font-bold sm:text-8xl">STEMS</span><br />
                <span class="text-5xl font-semibold sm:text-7xl">Camp</span>
            </div>
            <div class="p-4 px-6 md:p-6 md:px-12">
                About 30 of the best scorers across the three disclipines of STEMS will be selected
                for a 3-day, fully-funded camp at CMI. Past students selected for this camp include
                various medalists at the IMO, IOI and few of the brightest school and college
                students across India.
            </div>
        </div>
    </div>

    <div
        id="details"
        class="grid grid-cols-1 bg-lgray text-center font-sans text-xl text-white lg:grid-cols-3"
    >
        <div class="p-4 pb-16 pt-12 lg:pb-6 lg:pt-20">
            <h1 class="mb-9 text-center text-6xl font-bold lg:text-7xl">Details</h1>
            <p class="mx-auto w-4/5 leading-relaxed">
                STEMS will be conducted on the <span class="font-semibold">16<sup>th</sup></span>
                and <span class="font-semibold">17<sup>th</sup> of December</span>. The test can be
                taken online from any location; and the top 30 performers will be invited to CMI to
                attend a sponsored residential camp with guest lectures by leading experts.
            </p>
            {#if screenIsLarge}
                <a
                    style="text-transform: none"
                    class="btn btn-outline m-auto mb-5 mt-10 h-auto min-h-0 rounded-none px-10 py-3 text-lg text-white hover:bg-white hover:text-black"
                    href="/stems/details">Details</a
                >
            {/if}
        </div>
        <div class="bg-black p-4 pb-16 pt-12 lg:pb-6 lg:pt-20">
            <h1 class="mb-9 text-center text-6xl font-bold leading-relaxed lg:text-7xl">
                Register
            </h1>
            <p class="mx-auto w-4/5">
                The registration deadline: <br />
                <span class="font-semibold">10th December, 2023</span>
            </p>
            <p class="mx-auto mt-6 w-4/5 leading-loose">
                The registration fee: <br />
                <span class="font-semibold"
                    >INR 250 (₹250/-)* until 19th November <br /> INR 300 (₹300/-)* thereafter.</span
                >
            </p>

            <p class="ml-14 mt-6 text-left text-lg">* - per subject</p>
            {#if screenIsLarge}
                <a
                    style="text-transform: none"
                    class="btn btn-outline m-auto mb-5 mt-10 h-auto min-h-0 rounded-none px-10 py-3 text-lg text-white hover:bg-white hover:text-black"
                    href="/stems/register">Register</a
                >
            {/if}
        </div>
        <div class="p-4 pb-16 pt-12 lg:pb-6 lg:pt-20">
            <h1 class="mb-9 text-center text-6xl font-bold lg:text-7xl">Resources</h1>
            <p class="mx-auto w-4/5 leading-relaxed">
                The question papers from the previous editions of STEMS and sample papers can be
                found on the resources page.
            </p>
            <p class="mx-auto mt-8 w-4/5 leading-relaxed">
                Additionally, slides from the lectures of the previous editions are also available
                on our resources page.
            </p>
            {#if screenIsLarge}
                <a
                    style="text-transform: none"
                    class="btn btn-outline m-auto mb-5 mt-10 h-auto min-h-0 rounded-none px-10 py-3 text-lg text-white hover:bg-white hover:text-black"
                    href="/stems/resources">Resources</a
                >
            {/if}
        </div>
        {#if !screenIsLarge}
            <div class="p-4 pb-16">
                <a
                    style="text-transform: none"
                    class="btn btn-outline m-auto mb-5 mt-10 h-auto min-h-0 rounded-none px-10 py-3 text-lg text-white hover:bg-white hover:text-black"
                    href="/stems/details">Details</a
                >
            </div>
            <div class="bg-black p-4 pb-16">
                <a
                    style="text-transform: none"
                    class="btn btn-outline m-auto mb-5 mt-10 h-auto min-h-0 rounded-none px-10 py-3 text-lg text-white hover:bg-white hover:text-black"
                    href="/stems/register">Register</a
                >
            </div>
            <div class="p-4 pb-16">
                <a
                    style="text-transform: none"
                    class="btn btn-outline m-auto mb-5 mt-10 h-auto min-h-0 rounded-none px-10 py-3 text-lg text-white hover:bg-white hover:text-black"
                    href="/stems/resources">Resources</a
                >
            </div>
        {/if}
    </div>

    <SpeakerPanel />
    <Footer />
</div>

<style>
    .bg-pattern {
        position: relative;
        background-size: 250%;
        background-position: center;
    }

    .bg-pattern::before {
        content: '';
        position: absolute;
        clip-path: circle(30%);
        width: 100%;
        height: 100%;
        opacity: 70%;

        background-size: 250%;
        background-position: center;
        background-image: url('/bg-images/tessellation-oldconcept.png'); /* Adjust background size as needed */
        z-index: -1; /* Place the pseudo-element behind the content */
    }
</style>
