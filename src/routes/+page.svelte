<script>
    import '../app.css'
    import Navbar from './(app)/Navbar.svelte'
    import Footer from './(app)/Footer.svelte'
</script>

<Navbar />

    <div class="bg-main-blue text-black sm:min-h-screen" style="height: 50vh">
        <div
            class="flex h-full w-full place-content-center place-items-start items-center text-center font-display"
            style="font-size: 11.5vw"
        >
            <div class="m-auto" style="line-height: 0.85">
                <h1 class="font-black">TESSELLATE</h1>
                <p class="font-bold tracking-tighter">2024</p>
            </div>
        </div>
    </div>
</div>

<div class="grid grid-cols-1 sm:grid-cols-2">
    <div class="text-white font-sans bg-second-blue p-12 text-2xl font-semibold">
        <span class="font-bold font-display text-3xl">TESSELLATE </span>is the brainchild of students at Chennai Mathematical Institute, and serves to
        both develop further interest in mathematics, and as a fun reprieve for students to break
        from their rut and flex their creative and competitive muscles. It all started when the
        student body of a small research institute tessellated seemingly unrelated cultural and
        academic events in a seamless manner.
    </div>

<div class="carousel w-full">
  <div id="slide1" class="carousel-item relative w-full">
    <img src="images/chess.webp" alt="chess" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img src="images/concert.webp" alt="concert" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
    <img src="images/cuber.webp" alt="cuber" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div> 
  </div>
</div>

<div class="grid grid-cols-1 sm:grid-cols-2 font-sans">
    <div class="p-6 bg-lgray flex flex-col justify-center">
        <a href="/stems"><img src="svgs/STEMS-white.svg" alt=""></a>
    </div>
    <div class="grid grid-rows-2">
        <div class="bg-second-blue text-white p-12 text-6xl font-bold hover:underline"><a href=".">Competitions <span>&#8594;</span></a></div>
        <div class="bg-main-blue text-black p-12 text-6xl font-bold hover:underline"><a href="/events/">Cultural Events <span>&#8594;</span></a></div>
    </div>
</div>

<Footer />
