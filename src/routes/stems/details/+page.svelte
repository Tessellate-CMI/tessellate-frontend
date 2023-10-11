<script>
    import '$src/app.css'
    import Navbar from '$lib/components/Navbar.svelte'
    import Footer from '$lib/components/Footer.svelte'

    let innerWidth = 0
    let screenIsLarge = false

    $: screenIsLarge = innerWidth < 1024
</script>

<svelte:window bind:innerWidth />

<Navbar absolute={false} />

<div
    class="w-full border-b-2 border-black bg-main-blue px-6 pb-8 pt-12 text-6xl font-bold text-black sm:text-8xl"
>
    Details
</div>

<div class="grid grid-cols-1 text-xl font-medium md:text-2xl lg:grid-cols-2">
    <div class="bg-second-blue pb-12 text-white">
        <div class="border-b-2 border-white p-4 pl-6 font-heading tracking-tight md:p-8 md:pl-12">
            <span class="text-5xl font-bold sm:text-6xl">Eligibility</span>
        </div>
        <div class="px-8 py-4 md:px-16 md:py-6">
            <ul class="list-disc">
                <li>Students of Class 8 till 12</li>
                <li>Students pursuing an undergraduate degree (need not be in a STEMS field)</li>
            </ul>
        </div>
    </div>
    <div class="bg-main-blue pb-12 text-black">
        <div class="border-b-2 border-black p-4 pl-6 font-heading tracking-tight md:p-8 md:pl-12">
            <span class="text-5xl font-bold sm:text-6xl">Dates</span><br />
        </div>
        <div class="px-8 py-4 md:px-16 md:py-6">
            <ul class="list-disc">
                <li>
                    16<sup>th</sup> January, 2024 <br /> Physics: 9:00 am - 12:00 am <br /> Computer Science: 3:00 pm - 6:00
                    pm
                </li>
                <li>17<sup>th</sup> January, 2024 <br /> Mathematics: 11:00 am - 5:00 pm</li>
            </ul>
        </div>
    </div>
</div>

<div class="grid grid-cols-1 bg-lgray text-center font-sans text-xl text-white lg:grid-cols-3">
    <div class="px-4 pb-16 pt-12 lg:px-10 lg:pb-6 lg:pt-20">
        <h1 class="mb-9 text-center text-5xl font-bold lg:text-6xl">Mathematics</h1>
        <ul class="mx-auto w-4/5 list-disc text-left">
            <li>
                <span class="font-semibold">Section A:</span> <br /> Grade 8, 9, 10 <br /> <br />
            </li>
            <li>
                <span class="font-semibold">Section B:</span> <br /> Grade 11, 12, Undergraduate
                First Year <br /> <br />
            </li>
            <li>
                <span class="font-semibold">Section C:</span> <br /> Undergraduate Second Year to Final
                Year
            </li>
        </ul>
        {#if screenIsLarge}
            <button
                style="text-transform: none"
                class="btn btn-outline m-auto mb-5 mt-10 h-auto min-h-0 rounded-none px-10 py-3 text-lg text-white hover:bg-white hover:text-black"
                ><a href="/syllabus/Maths_Syllabus.pdf">Syllabus</a></button
            >
        {/if}
    </div>
    <div class="bg-black px-4 pb-16 pt-12 lg:px-10 lg:pb-6 lg:pt-20">
        <h1 class="mb-9 text-center text-5xl font-bold lg:text-6xl">Physics</h1>
        <ul class="mx-auto w-4/5 list-disc text-left">
            <li>
                <span class="font-semibold">Section A:</span> <br /> Grade 8, 9, 10 <br /> <br />
            </li>
            <li>
                <span class="font-semibold">Section B:</span> <br /> Grade 11, 12, Undergraduate
                First Year <br /> <br />
            </li>
            <li>
                <span class="font-semibold">Section C:</span> <br /> Undergraduate Second Year to Final
                Year
            </li>
        </ul>
        {#if screenIsLarge}
            <button
                style="text-transform: none"
                class="btn btn-outline m-auto mb-5 mt-10 h-auto min-h-0 rounded-none px-10 py-3 text-lg text-white hover:bg-white hover:text-black"
                ><a href="/syllabus/Physics_Syllabus.pdf">Syllabus</a></button
            >
        {/if}
    </div>
    <div class="px-4 pb-16 pt-12 lg:px-10 lg:pb-6 lg:pt-20">
        <h1 class="mb-9 text-center text-5xl font-bold lg:text-6xl">Computer Science</h1>
        <ul class="mx-auto w-4/5 list-disc text-left">
            <li>
                <span class="font-semibold">Section A:</span> <br /> Grade 8, 9, 10, 11, 12<br />
                <br />
            </li>
            <li>
                <span class="font-semibold">Section B:</span> <br /> Undergraduate First Year to
                Final Year<br /> <br />
            </li>
        </ul>
        {#if screenIsLarge}
            <button
                style="text-transform: none"
                class="btn btn-outline m-auto mb-5 mt-10 h-auto min-h-0 rounded-none px-10 py-3 text-lg text-white hover:bg-white hover:text-black"
                ><a href="/syllabus/CS_Syllabus.pdf">Syllabus</a></button
            >
        {/if}
    </div>
    {#if !screenIsLarge}
        <div class="p-4 pb-16">
            <button
                style="text-transform: none"
                class="btn btn-outline m-auto mb-5 mt-10 h-auto min-h-0 rounded-none px-10 py-3 text-lg text-white hover:bg-white hover:text-black"
                ><a href="/syllabus/Maths_Syllabus.pdf">Syllabus</a></button
            >
        </div>
        <div class="bg-black p-4 pb-16">
            <button
                style="text-transform: none"
                class="btn btn-outline m-auto mb-5 mt-10 h-auto min-h-0 rounded-none px-10 py-3 text-lg text-white hover:bg-white hover:text-black"
                ><a href="/syllabus/Physics_Syllabus.pdf">Syllabus</a></button
            >
        </div>
        <div class="p-4 pb-16">
            <button
                style="text-transform: none"
                class="btn btn-outline m-auto mb-5 mt-10 h-auto min-h-0 rounded-none px-10 py-3 text-lg text-white hover:bg-white hover:text-black"
                ><a href="/syllabus/CS_Syllabus.pdf">Syllabus</a></button
            >
        </div>
    {/if}
</div>

<div class="grid grid-cols-1 bg-second-blue text-white lg:grid-cols-3">
    <div
        class=" border-b-2 border-white p-10 pl-6 font-heading text-5xl font-bold tracking-tight sm:text-6xl md:p-16 md:pl-12 lg:border-b-0 lg:border-r-2"
    >
        Rules & Regulations
    </div>

    <div class="px-10 py-8 text-xl md:px-20 md:py-16 lg:col-span-2 lg:text-2xl">
        <ol class="list-decimal p-0 m-0">
            <li>
                Students are allowed to refer to books and online sources to solve the problems.
                <br><br>
            </li>
            <li>
                The problems should not be uploaded on any forums or websites for discussion during
                exam time. Candidates will be disqualified in case of any misconduct during the
                exam.
                <br><br>
            </li>
            <li>
                Your solutions must be strictly original. There might be an interview for
                confirmation after the selection is made. In case of any discrepancies, the
                submission of the student in question will be invalidated.
                <br><br>
            </li>
            <li>Submissions made after the deadline will not be accepted.</li>
        </ol>
    </div>
</div>

<Footer />
