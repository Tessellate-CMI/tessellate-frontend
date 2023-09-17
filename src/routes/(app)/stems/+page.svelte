<script>
    import '../../../app.css'
    import Footer from '../Footer.svelte'
    import Navbar from '../Navbar.svelte'
    import SpeakerPanel from './SpeakerPanel.svelte'
</script>

<div class="sticky top-0 bg-white">
    <div class="bg-pattern">
        <Navbar bgColor={'bg-transparent'} stems={false} />
        <div class="flex h-screen content-center justify-center">
            <img src="svgs/STEMS-black.svg" alt="STEMS Logo" class="w-full lg:w-2/3" />
        </div>
    </div>
</div>
<div class="sticky top-0">
    <div class="grid grid-cols-1 text-2xl font-medium md:text-3xl lg:grid-cols-2">
        <div class="bg-second-blue pb-12 pt-3 text-white">
            <div
                class="border-b-2 border-white p-4 font-heading text-7xl font-bold tracking-tight lg:text-9xl"
            >
                <span class="font-semibold">About</span> STEMS
            </div>
            <div class="p-4 md:p-5 md:pl-6">
                STEMS (Scholastic Test of Excellence in Mathematical Sciences) is an annual
                first-of-its-kind open resource examination conducted for students from 8th grade to
                undergraduates across India. The exam will be held in Mathematics, Physics, and
                (theoretical) Computer Science in December. The relaxed duration of the exam and
                original conceptual questions promote academic creativity over rote learning and
                research interest, increasing the interest and awareness of mathematical sciences
                amongst the students.
            </div>
        </div>
        <div class="bg-main-blue pb-12 pt-3 text-black">
            <div
                class="border-b-2 border-black p-4 font-heading text-7xl font-extrabold tracking-tight lg:text-9xl"
            >
                STEMS <span class="font-bold">Camp</span>
            </div>
            <div class="p-4 md:p-5 md:pl-6">
                About 30 of the best scorers across the three disclipines of STEMS will be selected
                for a 3-day, fully-funded camp at CMI. Past students selected for this camp include
                various medalists at the IMO, IOI and few of the brightest school and college
                students across India.
            </div>
        </div>
    </div>

    <div class="grid grid-cols-1 bg-lgray text-center font-sans text-white lg:grid-cols-3">
        <div class="p-4 text-xl lg:pt-8">
            <h1 class="mb-5 text-center text-6xl font-bold lg:text-7xl">Details</h1>
            <p class="mx-auto w-4/5">
                STEMS will be conducted on the weekend of TBD. The test can be taken online from any
                location; and the top 30 performers will be invited to CMI to attend a sponsored
                residential camp with guest lectures by leading experts.
            </p>
        </div>
        <div class="bg-black p-4 text-xl lg:pt-8">
            <h1 class="mb-5 text-center text-6xl font-bold lg:text-7xl">Register</h1>
            <p class="mx-auto w-4/5">
                The registration deadline is : <br /> TBD
            </p>
            <p class="mx-auto mt-6 w-4/5">
                The registration fee is INR 200 (₹200/-) per subject, until TBD.
            </p>
            <p class="mx-auto mt-6 w-4/5">It becomes INR 300 (₹300/-) per subject thereafter.</p>
            <button
                style="text-transform: none"
                type="submit"
                class="btn btn-outline m-auto mb-5 mt-10 h-auto min-h-0 rounded-none px-10 py-3 text-lg text-white"
                >Signup</button
            >
        </div>
        <div class="p-4 text-xl lg:pt-8">
            <h1 class="mb-5 text-center text-6xl font-bold">Resources</h1>
            <p class="mx-auto w-4/5">
                Currently, we have added the question papers from previous editions of STEMS, along
                with sample papers.
            </p>
            <p class="mx-auto mt-8 w-4/5">
                Slides from the lectures of previous editions of STEMS will be available on our
                resources page soon.
            </p>
        </div>
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

        background-size: 250%;
        background-position: center;
        background-image: url('/svgs/tessellation-oldconcept.svg'); /* Adjust background size as needed */
        z-index: -1; /* Place the pseudo-element behind the content */
    }
</style>
