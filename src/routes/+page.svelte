<script>
    import About from '../lib/components/abouts.svelte'
    // try to keep full names so that talwind actually compiles. dynamic strings dont compile
    let bgCoolrs = ['bg-sea-green', 'bg-pista', 'bg-brick', 'bg-butterscotch']
    let btnCoolrs = ['fill-sea-green', 'fill-pista', 'fill-brick', 'fill-butterscotch']
    let index = 0
    let switchTime = 4000

    /**
     * @param {number} i
     */
    function changeIndex(i) {
        index = i
        clearInterval(fooTimer)
        fooTimer = setInterval(() => {
            index = (index + 1) % bgCoolrs.length
        }, switchTime)
    }

    // Automatically change index every 2 seconds
    var fooTimer = setInterval(() => {
        index = (index + 1) % bgCoolrs.length
    }, switchTime)

    // let y = 0
    // let innerHeight = 0
</script>

<!-- <svelte:window bind:scrollY={y} bind:innerHeight /> -->

<!-- div for the whole screen -->
<div class="flex h-screen w-full bg-gray-200">
    <!-- internal div, with the bg color, changes on time or btn press -->
    <div
        class="relative mx-40 my-20 flex h-auto w-full {bgCoolrs[
            index
        ]} transition-all duration-500"
    >
        <!-- aligning buttons absolutely with negative bottom -->
        <div class="absolute -bottom-[47px] left-5 flex">
            <!-- looping over buttons -->
            {#each btnCoolrs as clr, i}
                <div class="flex">
                    <button on:click={() => changeIndex(i)}>
                        <!-- the triangle is a group, animated on hover
                                a smaller white triangle grows from the bottom to top -->
                        <div class="group relative -mx-3 size-20 cursor-pointer">
                            <svg
                                class="absolute z-10 origin-bottom scale-0 {clr} transition-all duration-500 ease-in-out group-hover:scale-100"
                                viewBox="0 0 100 86.6"
                            >
                                <polygon points="50 86.6 100 0 0 0 50 86.6" />
                            </svg>
                            <svg
                                class="absolute fill-transparent stroke-white stroke-2 transition-all duration-500 ease-in-out group-hover:stroke-0"
                                viewBox="0 0 100 86.6"
                            >
                                <polygon points="50 86.6 100 0 0 0 50 86.6" />
                            </svg>
                        </div>
                    </button>

                    <!-- the upwards triangle -->
                    {#if i != btnCoolrs.length - 1}
                        <svg class="-mx-3 size-20 fill-white" viewBox="0 0 100 86.6">
                            <polygon points="50 0 0 86.6 100 86.6 50 0" />
                        </svg>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</div>

<About {bgCoolrs} />
