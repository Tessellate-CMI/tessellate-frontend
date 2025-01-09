<script>
    import About from '../lib/components/abouts.svelte'
    // keep full names so that talwind actually compiles. dynamic strings dont compile
    let bgCoolrs = ['bg-sea-green', 'bg-butterscotch', 'bg-brick bg-opacity-65', 'bg-pista']
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
</script>

<!-- div for the whole screen -->
<div
    class="flex h-screen w-full {bgCoolrs[index]}  transition-all duration-500"
    style="background-image: url(octagons-bg-desktop.png);background-size: cover;background-blend-mode: luminosity;"
>
    <!-- internal div, with the bg color, changes on time or btn press -->
    <div class="relative mx-40 my-20 flex h-auto w-full bg-gray-50 transition-all duration-500">
        <!-- aligning buttons absolutely with negative bottom -->
        <div class="absolute -bottom-[47px] left-5 flex">
            <!-- looping over buttons -->
            {#each bgCoolrs as clr, i}
                <div class="flex">
                    <button class="cursor-default" on:click={() => changeIndex(i)}>
                        <!-- the triangle is a group, animated on hover
                                a smaller white triangle grows from the bottom to top -->
                        <div class="relative m-auto -mx-3 size-20">
                            <div
                                class="equi-triangle group w-full cursor-pointer bg-transparent transition-all duration-500 ease-in-out"
                            >
                                <svg
                                    class="absolute z-10 fill-transparent stroke-white stroke-[4px] transition-all duration-500 ease-in-out group-hover:stroke-0"
                                    viewBox="0 0 100 86.6"
                                >
                                    <polygon points="50 86.6 100 0 0 0 50 86.6" />
                                </svg>
                                <div
                                    class="h-full w-full origin-bottom scale-0 {clr} transition-all duration-500 ease-in-out group-hover:scale-100"
                                ></div>
                            </div>
                        </div>
                    </button>

                    <!-- the upwards triangle -->
                    {#if i != bgCoolrs.length - 1}
                        <div class="-mx-3 size-20 pt-2">
                            <div class="equi-triangle rotate-180 bg-white"></div>
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</div>

<About {bgCoolrs} />

<style>
    .equi-triangle {
        aspect-ratio: 1/0.866;
        clip-path: polygon(0 0, 100% 0, 50% 100%);
    }
</style>
