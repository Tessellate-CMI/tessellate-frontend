<script>
    import '../../../app.css'
    import Footer from '../Footer.svelte'
    import Navbar from '../Navbar.svelte'
    import SpeakerPanel from './SpeakerPanel.svelte'
</script>

<div class="sticky top-0">
    <Navbar bgColor={'bg-white'} />
    <div class="flex h-screen content-center justify-center bg-white">
        <img src="svgs/STEMS-black.svg" alt="STEMS Logo" class="w-full lg:w-2/3" />
    </div>
</div>
<div class="sticky top-0">
    <div
        class="grid grid-cols-1 bg-second-blue pb-12 pt-6 text-3xl font-semibold text-white lg:grid-cols-5"
    >
        <div
            class="border-b-2 border-white p-4 text-9xl font-bold lg:col-span-2 lg:border-b-0 lg:border-r-2"
        >
            About STEMS
        </div>
        <div class="p-4 lg:col-span-3">
            STEMS (Scholastic Test of Excellence in Mathematical Sciences) is an annual
            first-of-its-kind open resource examination conducted for students from 8th grade to
            undergraduates across India. The exam will be held in Mathematics, Physics, and
            (theoretical) Computer Science in December. The relaxed duration of the exam and
            original conceptual questions promote academic creativity over rote learning and
            research interest, increasing the interest and awareness of mathematical sciences
            amongst the students.
        </div>
    </div>

    <div class="grid grid-cols-1 bg-lgray text-center font-sans text-white lg:grid-cols-3">
        <div class="p-4 text-lg">
            <h1 class="mb-5 text-center text-6xl font-bold">Details</h1>
            <p class="mx-auto w-4/5">
                STEMS will be conducted on the weekend of 7th and 8th January, 2024. The test can be
                taken online from any location; and the top 30 performers will be invited to CMI to
                attend a sponsored residential camp with guest lectures by leading experts.
            </p>
        </div>
        <div class="bg-black p-4">
            <h1 class="mb-5 text-center text-6xl font-bold">Register</h1>
            <p class="mx-auto w-4/5">
                The registration deadline is 6th January, 2024. The registration fee is INR 200
                (₹200/-) per subject, until December 25th, 2023.
            </p>
            <p class="mx-auto mt-6 w-4/5">It becomes INR 300 (₹300/-) per subject thereafter.</p>
            <button
                style="text-transform: none"
                type="submit"
                class="btn btn-outline m-auto mb-5 mt-10 h-auto min-h-0 rounded-none px-10 py-3 text-lg text-white"
                >Signup</button
            >
        </div>
        <div class="p-4">
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
