<!-- Fix spacings and fonts -->
<!-- Hero Page, full width -->
<div class="mx-auto flex h-screen w-full items-center justify-center">
    <p class="text-lg font-bold">Stems</p>

    <!-- Announcements, sticky element -->
    <div class="absolute bottom-0 flex h-[25%] w-full bg-blue-400">
        <div class="mx-auto w-full max-w-screen-lg p-5">
            <p class="font-heading text-xl font-bold">Announcements</p>
        </div>
    </div>
</div>

<div class="mt-10 flex w-full">
    <div class="mx-auto w-full max-w-screen-lg shadow-md">
        <!-- About -->
        <div class="flex flex-col border-b-2 border-black lg:flex-row">
            <div
                class="flex w-full items-center justify-center border-black px-4 font-heading text-6xl font-semibold lg:w-1/3 lg:border-r-2 lg:text-7xl"
            >
                About
            </div>
            <!-- Fix spacing -->
            <div class=" flex w-full flex-col justify-center p-6 md:text-lg lg:h-[40vh] lg:w-2/3">
                STEMS (Scholastic Test of Excellence in Mathematical Sciences) is an annual
                first-of-its-kind open resource examination conducted for students from 8th grade to
                undergraduates across India. <span class="mb-4" />The exam will be held in
                Mathematics, Physics, and (theoretical) Computer Science in December. The relaxed
                duration of the exam and original conceptual questions promote academic creativity
                over rote learning and research interest, increasing the interest and awareness of
                mathematical sciences amongst the students.
            </div>
        </div>

        <!-- STEMS Camp -->
        <div class="flex flex-col-reverse border-b-2 border-black lg:flex-row">
            <!-- add details here -->
            <!-- Fix spacing -->
            <div
                class=" flex w-full flex-col justify-center border-black p-6 md:text-lg lg:h-[40vh] lg:w-2/3 lg:border-r-2"
            >
                About 30 of the best scorers across the three disclipines of STEMS will be selected
                for a 3-day, fully-funded camp at CMI. Past students selected for this camp include
                various medalists at the IMO, IOI and few of the brightest school and college
                students across India.
            </div>
            <div
                class="flex w-full items-center justify-center pt-6 font-heading text-6xl font-semibold lg:w-1/3 lg:px-4 lg:py-0 lg:text-7xl"
            >
                <div class="text-center">STEMS <br class="md:hidden" />Camp</div>
            </div>
        </div>

        <!-- Camp pics, add them -->
        <div class="flex h-[60vh] w-full flex-row bg-gray-300"></div>
    </div>
</div>

<div class="mt-16 flex w-full">
    <div
        class="mx-auto grid w-full max-w-screen-lg grid-cols-1 text-center shadow-md lg:grid-cols-2"
    >
        <!-- Details -->
        <div class="border-y-2 border-black lg:border-y-0 lg:border-r-2">
            <div class="p-6 font-heading text-6xl font-semibold lg:text-7xl">Details</div>
            <div class="p-6 px-8 text-lg">
                STEMS will be conducted on the <span class="font-semibold">16<sup>th</sup></span>
                and <span class="font-semibold">17<sup>th</sup> of December</span>. The test can be
                taken online from any location; and the top 30 performers will be invited to CMI to
                attend a sponsored residential camp with guest lectures by leading experts.
            </div>
            <div class="flex py-6">
                <a
                    href="details"
                    class="m-auto border-2 border-black px-6 py-3 text-xl transition-all duration-300 hover:border-gray-600 hover:bg-gray-600 hover:text-white lg:hidden"
                    >Details</a
                >
            </div>
        </div>
        <!-- Resources -->
        <div class="border-b-2 border-black lg:border-b-0">
            <div class="p-6 px-8 font-heading text-6xl font-semibold lg:text-7xl">Resources</div>
            <div class="p-6 px-8 text-lg">
                The question papers from the previous editions of STEMS and sample papers can be
                found on the resources page.
            </div>
            <div class="flex py-6">
                <a
                    href="resources"
                    class="m-auto border-2 border-black px-6 py-3 text-xl transition-all duration-300 hover:border-gray-600 hover:bg-gray-600 hover:text-white lg:hidden"
                    >Resources</a
                >
            </div>
        </div>

        <div class="flex border-black py-6 lg:border-r-2">
            <a
                href="details"
                class="m-auto hidden border-2 border-black px-6 py-3 text-xl transition-all duration-300 hover:border-gray-600 hover:bg-gray-600 hover:text-white lg:block"
                >Details</a
            >
        </div>
        <div class="flex py-6">
            <a
                href="resources"
                class="m-auto hidden border-2 border-black px-6 py-3 text-xl transition-all duration-300 hover:border-gray-600 hover:bg-gray-600 hover:text-white lg:block"
                >Resources</a
            >
        </div>

        <!-- Register Button -->
        <div class="h-[10vh] w-full lg:col-span-2">
            <a
                href="/"
                class="flex h-full w-full items-center justify-center border-2 border-gray-400 bg-white text-2xl transition-all duration-300 ease-in-out hover:bg-gray-600 hover:text-white"
            >
                <span>Click to Register</span>
            </a>
        </div>
    </div>
</div>

<!-- Past Speakers, add list -->
<div class="mt-10 flex w-full">
    <div class="mx-auto w-full max-w-screen-lg shadow-md shadow-black">
        <div class="border-b-2 border-black p-6 font-heading text-7xl font-semibold">
            Past Speakers
        </div>
        <div class="flex w-full flex-row flex-wrap place-content-center bg-blue-400 p-6">
            {#each { length: 10 } as _, i}
                <div class="m-5 h-[15rem] w-[11.5rem] border-2 border-black">{i}</div>
            {/each}
        </div>
    </div>
</div>

<!-- Add Footer -->
<div class="mt-10 flex w-full bg-gray-300 p-4">footer</div>
