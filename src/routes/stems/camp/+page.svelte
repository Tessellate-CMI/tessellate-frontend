<script>
    // @ts-nocheck

    import selected from '$lib/jsons/STEMS_List.json'
    let bg_clrs = ['bg-brick', 'bg-butterscotch']
</script>

<div class="mt-10 flex w-full">
    <div class="mx-auto w-full max-w-screen-lg shadow-md">
        <div
            class="border-black bg-sea-green p-6 font-heading text-6xl font-semibold text-white lg:text-7xl"
        >
            STEMS Camp 2025
        </div>
        <!-- <p class="p-6 pb-1 md:text-lg">
            STEMS Camp will be held from <span class="font-semibold"
                >7<sup>th</sup> February 2025</span
            >
            to <span class="font-semibold">9<sup>th</sup> February 2025</span>. <br />
        </p> -->
        <p class="p-6 md:text-lg">
            The list of selected candidates can be found here. The selected candidates to requested
            to check their registered emails (and spam folders) regularly as we will share further
            details of the camp with them over email.
        </p>
    </div>
</div>

<div class="mt-10 flex w-full">
    <div class="mx-auto grid w-full max-w-screen-lg grid-cols-1 shadow-md md:grid-cols-3">
        {#each Object.keys(selected) as subject, kdx}
            <div>
                <div
                    class="border-black {bg_clrs[
                        kdx % 2
                    ]} bg-opacity-55 p-6 text-center font-heading text-4xl font-semibold lg:text-5xl"
                >
                    {subject}
                </div>
                {#each Object.keys(selected[subject]) as category}
                    <div class="pb-5 text-lg md:text-xl">
                        <div
                            class="content-center bg-opacity-10 pb-4 pt-5 text-center font-heading text-2xl md:text-3xl {bg_clrs[
                                kdx % 2
                            ]}"
                        >
                            {category}
                        </div>
                        <div class="pt-5 text-center">
                            {#each selected[subject][category] as name}
                                <div class="p-2">
                                    {name}
                                </div>
                            {/each}
                        </div>
                    </div>
                {/each}
            </div>
        {/each}
    </div>
</div>
