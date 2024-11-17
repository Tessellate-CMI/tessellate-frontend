<script>
    export let year = 2024
    /**
     * @type {string[]}
     */
    export let maths = []
    /**
     * @type {string[]}
     */
    export let physics = []
    /**
     * @type {string[]}
     */
    export let cs = []
</script>

<div class="mx-auto mt-5 w-full max-w-screen-lg shadow-md">
    <div class="my-10 w-full text-center font-heading text-5xl font-medium">
        STEMS {year}
    </div>
    <div class="my-12 grid grid-cols-1 text-center text-xl md:grid-cols-3">
        <div class="mb-10 border-black px-8 md:mb-0 md:border-r-2">
            <div class="mb-4 font-heading text-3xl font-medium">Mathematics</div>
            <ul class="space-y-1">
                {#each maths as category}
                    <li>
                        <a
                            class="underline underline-offset-4 hover:no-underline"
                            href="https://cdn.tessellate.cmi.ac.in/stems/PastPapers/STEMS{year}-Maths-Category{category}.pdf"
                            >Category {category}</a
                        >
                    </li>
                {/each}
            </ul>
        </div>
        <div class="mb-10 border-black px-8 md:mb-0 md:border-r-2">
            <div class="mb-4 font-heading text-3xl font-medium">Physics</div>
            <ul class="space-y-1">
                {#each physics as category}
                    <li>
                        <a
                            class="underline underline-offset-4 hover:no-underline"
                            href="https://cdn.tessellate.cmi.ac.in/stems/PastPapers/STEMS{year}-Physics-Category{category}.pdf"
                            >Category {category}</a
                        >
                    </li>
                {/each}
            </ul>
        </div>
        <div class="mb-5 px-8 md:mb-0">
            <div class="mb-4 font-heading text-3xl font-medium">Computer Science</div>
            <ul class="space-y-1">
                {#each cs as category}
                    <li>
                        <a
                            class="underline underline-offset-4 hover:no-underline"
                            href="https://cdn.tessellate.cmi.ac.in/stems/PastPapers/STEMS{year}-CS-Category{category}.pdf"
                            >Category {category}</a
                        >
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</div>
