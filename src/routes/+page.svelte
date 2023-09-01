<script>
    import '../app.css'
    import Navbar from './(app)/Navbar.svelte'
    import Footer from './(app)/Footer.svelte'
</script>

<Navbar />

<div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
        <div class="max-w-md">
            <h1 class="text-5xl font-bold">Hello there</h1>
            <p class="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
        </div>
    </div>
</div>

<!-- Info part -->
<div class="relative flex w-full justify-center py-6">
    <!-- bg stuff -->
    <!-- <div class="absolute z-10 h-full w-10/12 bg-slate-500 opacity-5 lg:w-8/12"></div> -->
    <div class="z-20 grid w-11/12 grid-cols-1 gap-4 md:grid-cols-2 lg:w-4/5 lg:grid-cols-2">
        <!-- Image overlap thingy -->
        <div class="flex items-center justify-center">
            <div class="mt-8 grid w-5/6 grid-flow-row grid-cols-11">
                <div class="col-span-6 col-start-2 row-span-6 row-start-1 self-center">
                    <img class="rounded-lg object-cover" src="images/concert.webp" alt="" />
                </div>
                <div class="col-span-7 col-end-12 row-span-3 row-start-6 self-center">
                    <img class="rounded-lg object-cover" src="images/cehss.webp" alt="" />
                </div>
                <div class="col-span-7 col-start-1 row-span-3 row-start-7 mt-16 self-center">
                    <img class="rounded-lg object-cover" src="images/cuber.webp" alt="" />
                </div>
            </div>
        </div>

        <!-- Text Part -->
        <div class="m-4 grid max-w-md grid-cols-1 p-4 sm:ml-12">
            <h1 class="mb-10 text-8xl font-extralight leading-none text-base-content">
                About <br /> Tessellate
            </h1>
            <p class="min-w-min text-xl leading-relaxed text-base-content">
                Tessellate is the brainchild of students at Chennai Mathematical Institute, and
                serves to both develop further interest in mathematics, and as a fun reprieve for
                students to break from their rut and flex their creative and competitive muscles. It
                all started when the student body of a small research institute tessellated
                seemingly unrelated cultural and academic events in a seamless manner.
            </p>
        </div>
    </div>
</div>

<!-- Divider -->
<div class="mt-4 flex w-screen place-content-center">
    <div class="flex w-5/6 flex-col">
        <div class="divider"></div>
    </div>
</div>

<!-- Our Events -->
<div class="mt-4 flex w-screen place-content-center">
    <div class="z-20 grid w-11/12 grid-cols-1 gap-4 md:grid-cols-2">
        <div class="col-span-1 mb-16 md:col-span-2">
            <h1 class="text-center text-8xl font-extralight text-base-content">Our Events</h1>
        </div>

        <div class="flex flex-col justify-items-center text-center">
            <div>
                <h1 class="mb-6 text-2xl font-semibold text-base-content">CULTURAL</h1>
                <p class="m-auto mb-6 w-6/12 text-xl leading-relaxed text-base-content">
                    Find details about the various concerts, open mics and performances!
                </p>
            </div>
            <div class="mt-auto">
                <button class="btn btn-outline mb-10 md:mb-5">Explore Events</button>
            </div>
        </div>

        <div class="flex flex-col justify-items-center text-center">
            <div>
                <h1 class="mb-6 text-2xl font-semibold text-base-content">COMPETITIONS</h1>
                <p class="m-auto mb-6 w-6/12 text-xl leading-relaxed text-base-content">
                    Participate in the furious & highly competitive sports of chess and
                    speed-cubing!
                </p>
            </div>
            <div class="mt-auto">
                <button class="btn btn-outline mb-5">Explore Competitions</button>
            </div>
        </div>
    </div>
</div>

<!-- Divider -->
<div class="mt-4 flex w-screen place-content-center">
    <div class="flex w-5/6 flex-col">
        <div class="divider"></div>
    </div>
</div>

<div class="mb-6 flex w-screen flex-col place-content-center">
    <div class="md:5/12 mx-auto w-2/3 lg:w-1/3">
        <img src="svgs/Stems-logo-white-full.svg" alt="STEMS logo" />
    </div>
    <div class="mx-auto w-4/5 lg:w-7/12">
        <p class="text-xl font-medium leading-relaxed tracking-wide">
            STEMS, a part of our annual college fest Tessellate, is a nationwide contest in
            Mathematics, Physics and Computer Science. It gives students an opportunity to show off
            their conceptual understanding, win exciting prizes, and attend sessions with world
            renowned mathematicians and scientists.
        </p>
    </div>
</div>

<Footer />
