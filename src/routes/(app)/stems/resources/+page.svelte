<script>
    import PastYearStuff from '$lib/components/PastYearStuff.svelte'

    import '$src/app.css'
    import Navbar from '$lib/components/Navbar.svelte'
    import Footer from '$src/lib/components/Footer.svelte';
</script>

<Navbar absolute={false} />

<div class="w-full bg-main-blue px-6 pb-8 pt-12 text-6xl font-bold text-black sm:text-7xl">
    Past Resources
</div>

<!-- <PastYearStuff year={2023} style={1} />
<PastYearStuff year={2022} style={0} /> -->
<PastYearStuff year={2021} style={1} />
<PastYearStuff year={2020} style={0} physics={['A', 'B']} maths={['A', 'B']} />

<Footer />
