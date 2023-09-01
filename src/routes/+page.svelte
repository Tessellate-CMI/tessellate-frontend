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

<!-- Info part below -->

<div class="relative flex w-full justify-center py-6">
    <!-- <div class="z-10 w-3/4 bg-primary"></div> -->
    <div class="z-20 grid w-11/12 grid-cols-1 gap-4 md:grid-cols-2 lg:w-4/5 lg:grid-cols-2">
        <!-- Image overlap thingy -->
        <div class="flex items-center justify-center">
            <div class="grid grid-flow-row grid-cols-11">
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
        <div class="m-4 grid grid-cols-1 p-5">
            <h1 class="mb-10 text-8xl font-extralight leading-none text-base-content">
                About <br /> Tessellate
            </h1>
            <p class="text-xl leading-normal text-base-content">
                Tessellate is the brainchild of students at Chennai Mathematical Institute, and
                serves to both develop further interest in mathematics, and as a fun reprieve for
                students to break from their rut and flex their creative and competitive muscles. It
                all started when the student body of a small research institute tessellated
                seemingly unrelated cultural and academic events in a seamless manner.
            </p>
        </div>
    </div>
</div>

<Footer />
