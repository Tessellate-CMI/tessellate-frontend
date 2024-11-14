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
    <div class="mx-auto w-full max-w-screen-lg shadow-md shadow-black">
        <!-- About -->
        <div class="flex h-[40vh] flex-row border-b-2 border-black">
            <div
                class="flex w-1/3 items-center justify-center border-r-2 border-black px-4 font-heading text-7xl font-semibold"
            >
                About
            </div>
            <div class="w-2/3 p-6 text-xl">
                STEMS (Scholastic Test of Excellence in Mathematical Sciences) is an annual
                first-of-its-kind open resource examination conducted for students from 8th grade to
                undergraduates across India. <br />The exam will be held in Mathematics, Physics,
                and (theoretical) Computer Science in December. The relaxed duration of the exam and
                original conceptual questions promote academic creativity over rote learning and
                research interest, increasing the interest and awareness of mathematical sciences
                amongst the students.
            </div>
        </div>

        <!-- STEMS Camp -->
        <div class="flex h-[40vh] flex-row border-b-2 border-black">
            <div class="w-2/3 border-r-2 border-black"></div>
            <div
                class="flex w-1/3 items-center justify-center px-4 font-heading text-7xl font-semibold"
            >
                <div class="text-center">STEMS Camp</div>
            </div>
        </div>

        <!-- Camp pics -->
        <div class="flex h-[60vh] w-full flex-row bg-gray-300"></div>
    </div>
</div>

<div class="mt-10 flex w-full">
    <div class="mx-auto flex w-full max-w-screen-lg flex-wrap text-center shadow-md shadow-black">
        <!-- Details -->
        <div class="h-[60vh] w-1/2 border-b-2 border-r-2 border-black">
            <div class="p-6 font-heading text-7xl font-semibold">Details</div>
            <div class="p-6 px-8 text-xl">
                STEMS will be conducted on the <span class="font-semibold">16<sup>th</sup></span>
                and <span class="font-semibold">17<sup>th</sup> of December</span>. The test can be
                taken online from any location; and the top 30 performers will be invited to CMI to
                attend a sponsored residential camp with guest lectures by leading experts.
            </div>
        </div>
        <!-- Resources -->
        <div class="h-[60vh] w-1/2 border-b-2 border-black">
            <div class="p-6 px-8 font-heading text-7xl font-semibold">Resources</div>
        </div>

        <!-- Register Button -->
        <div class="h-[10vh] w-full bg-gray-400"></div>
    </div>
</div>

<!-- Past Speakers -->
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

<!-- Footer -->
<div class="mt-10 flex w-full bg-gray-300 p-4">footer</div>
