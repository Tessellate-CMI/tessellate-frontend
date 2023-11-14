<script>
    import '$src/app.css'
    import Event from '$src/lib/components/Event.svelte'
    import Navbar from '$src/lib/components/Navbar.svelte'
    import Footer from '$src/lib/components/Footer.svelte'
</script>

<Navbar absolute={false}/>

<div class="bg-white text-black">
    <Event name="Chess" color="second-blue">
        Chess is an awesome sport!
    </Event>
</div>

<Footer />
