<script>
    import '../app.css'
    import Navbar from './(app)/Navbar.svelte'
    import Footer from './(app)/Footer.svelte'
</script>

<Navbar />

<div class="hero min-h-screen bg-main-blue text-black">
    <div class="hero-content text-center">
        <h1 class="text-center font-display text-5xl font-bold sm:text-7xl">
            TESSELLATE <br /> 2024
        </h1>
    </div>
</div>

<div class="grid grid-cols-1 sm:grid-cols-2">
    <div class="text-white font-display bg-second-blue p-6 text-xl">
        TESSELLATE is the brainchild of students at Chennai Mathematical Institute, and serves to
        both develop further interest in mathematics, and as a fun reprieve for students to break
        from their rut and flex their creative and competitive muscles. It all started when the
        student body of a small research institute tessellated seemingly unrelated cultural and
        academic events in a seamless manner.
    </div>

    <div class="bg-white flex flex-col">
        <img src="images/cuber.webp" alt="Cubing Competition" class="max-w-full h-auto">
        <img src="images/chess.webp" alt="Cubing Competition">
        <img src="images/concert.webp" alt="Cubing Competition">
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
