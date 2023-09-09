<script>
    import '../../../app.css'
    import Footer from '../Footer.svelte'
    import Navbar from '../Navbar.svelte';
</script>


<div class="sticky top-0">
    <Navbar bgColor={"bg-white"} />
    <div class="bg-white flex content-center justify-center h-screen">
        <img src="svgs/STEMS-black.svg" alt="STEMS Logo" class="w-full lg:w-2/3">
    </div>
</div>
<div class="sticky top-0"> 
    <div class="grid grid-cols-1 bg-second-blue text-white text-4xl lg:grid-cols-2 font-semibold">
        <div class="text-9xl p-4 font-bold border-b-2 border-white lg:border-r-2 lg:border-b-0"> About STEMS </div>
        <div class="p-4">
            STEMS (Scholastic Test of Excellence in Mathematical Sciences) is 
            a Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus est quaerat enim delectus, magni qui ipsam rem, magnam nostrum officiis minima deleniti aspernatur libero rerum labore accusantium perspiciatis possimus quae?
        </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 bg-lgray text-white font-sans">
        <div class="p-4">
            <h1 class="font-bold text-6xl text-center mb-5">Details</h1>
            <p>STEMS will be conducted on the weekend of 7th and 8th January, 2024.
            The test can be taken online from any location; and the top 30 performers
            will be invited to CMI to attend a sponsored residential camp with guest
            lectures by leading experts.</p> 
        </div> 
        <div class="p-4 bg-black">
            <h1 class="font-bold text-6xl text-center mb-5">Register</h1>
            <p>The registration deadline is 6th January, 2024. The registration fee is INR 200 (₹200/-) per subject, until
            December 25th, 2023. It becomes INR 300 (₹300/-) per subject thereafter</p>
            <button>Register</button>
        </div> 
        <div class="p-4">
            <h1 class="font-bold text-6xl text-center mb-5">Resources</h1>
            <p>Currently, we have added the question papers from previous editions of 
            STEMS, along with sample papers.</p>
            <p>Slides from the lectures of previous editions of STEMS will be available
            on our resources page soon.</p>
        </div> 
    </div>
    <Footer />
</div>
