<script>
    import PastYearStuff from '$lib/components/PastYearStuff.svelte'

    import '$src/app.css'
    import Navbar from '$lib/components/Navbar.svelte'
    import Footer from '$src/lib/components/Footer.svelte'
</script>

<Navbar absolute={false} />

<div
    class="w-full border-b-2 border-black bg-main-blue px-6 pb-8 pt-12 font-heading text-6xl font-semibold text-black sm:text-7xl"
>
    Resources
</div>

<PastYearStuff year={2024} style={0} solutions={true} maths={[]} cs={[]} />
<PastYearStuff year={2024} style={1} />
<PastYearStuff year={2023} style={0} maths={['A', 'A(2)', 'B', 'B(2)', 'C']} />
<!-- <PastYearStuff year={2022} style={0} /> -->
<PastYearStuff year={2021} style={1} />
<PastYearStuff year={2020} style={0} physics={['A', 'B']} maths={['A', 'B']} />

<Footer />
