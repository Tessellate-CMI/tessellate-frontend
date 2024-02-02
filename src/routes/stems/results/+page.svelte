<script>
    import Footer from '$lib/components/Footer.svelte'
    import Navbar from '$lib/components/Navbar.svelte'
    import '$src/app.css'
    import results from '$lib/data/results.json'
</script>

<Navbar absolute={false} bgColor={'bg-second-blue'} />

<div
    class="w-full border-b-2 border-white bg-second-blue px-6 pb-8 pt-12 text-center font-heading text-6xl font-semibold text-white sm:text-7xl"
>
    Results
</div>

<div class="w-full bg-main-blue pb-8 text-black">
    <div class="grid grid-cols-1 text-center font-sans md:grid-cols-3">
        <div
            class="flex w-full flex-col items-center border-b-2 border-black font-semibold md:border-b-0 md:border-r-2"
        >
            <div class="pb-6 pt-5 text-3xl md:pt-1">Mathematics</div>
            <div class="flex flex-col items-center pb-6 text-left text-xl">
                <p class="category">Category A</p>
                <ul class="list-disc">
                    {#each results.maths.cata as person}
                        <li>{person.name}</li>
                    {/each}
                </ul>
                <p class="category">Category B</p>
                <ul class="list-disc">
                    {#each results.maths.catb as person}
                        <li>{person.name}</li>
                    {/each}
                </ul>
                <p class="category">Category C</p>
                <ul class="list-disc">
                    {#each results.maths.catc as person}
                        <li>{person.name}</li>
                    {/each}
                </ul>
            </div>
        </div>
        <div
            class="flex w-full flex-col items-center border-b-2 border-black font-semibold md:border-b-0 md:border-r-2"
        >
            <div class="pb-6 pt-5 text-3xl md:pt-1">Physics</div>
            <div class="flex flex-col pb-6 text-left text-xl">
                <p class="category">Category A</p>
                <ul class="list-disc">
                    {#each results.physics.cata as person}
                        <li>{person.name}</li>
                    {/each}
                </ul>
                <p class="category">Category B</p>
                <ul class="list-disc">
                    {#each results.physics.catb as person}
                        <li>{person.name}</li>
                    {/each}
                </ul>
                <p class="category">Category C</p>
                <ul class="list-disc">
                    {#each results.physics.catc as person}
                        <li>{person.name}</li>
                    {/each}
                </ul>
            </div>
        </div>
        <div class="flex w-full flex-col items-center border-black font-semibold">
            <div class="pb-6 pt-5 text-3xl md:pt-1">Computer Science</div>
            <div class="flex flex-col pb-6 text-left text-xl">
                <p class="category">Category A</p>
                <ul class="list-disc">
                    {#each results.cs.cata as person}
                        <li>{person.name}</li>
                    {/each}
                </ul>
                <p class="category">Category B</p>
                <ul class="list-disc">
                    {#each results.cs.catb as person}
                        <li>{person.name}</li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
</div>
<Footer />

<style>
    .category {
        @apply m-5 text-3xl font-semibold;
    }
</style>
