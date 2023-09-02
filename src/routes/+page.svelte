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

<div class="grid grid-cols-1 sm:grid-cols-2 font-sans">
    <div class="bg-black text-white p-6 text-xl">
        <img src="svgs/Stems-logo-white-full.svg" alt="">
        STEMS, a part of our annual college fest Tessellate, is a nationwide contest in
        Mathematics, Physics and Computer Science. It gives students an opportunity to show off
        their conceptual understanding, win exciting prizes, and attend sessions with world
        renowned mathematicians and scientists.
    </div>
    <div class="grid grid-rows-2">
        <div class="bg-main-blue text-black p-6 text-5xl font-bold hover:underline"><a href="/events/">Cultural Events <span class="font-thin">&#8594;</span></a></div>
        <div class="bg-second-blue text-white p-6 text-5xl font-bold hover:underline"><a href=".">Competitions <span class="font-thin">&#8594;</span></a></div>
    </div>
</div>

<Footer />
