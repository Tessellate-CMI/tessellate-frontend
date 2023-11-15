<script>
    import '$src/app.css'
    import Event from '$src/lib/components/Event.svelte'
    import Navbar from '$src/lib/components/Navbar.svelte'
    import Footer from '$src/lib/components/Footer.svelte'
</script>

<Navbar absolute={false}/>

<div class="bg-white text-black">
    <Event name="Chess">
        Chess is an awesome sport!
    </Event>

    <Event name="Quiz" colorOpt={2}>
        Quizzes are fun.
    </Event>
</div>

<Footer />
