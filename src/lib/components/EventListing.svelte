<script>
    import '$src/app.css'

    export let name = 'Speaker'
    export let image = 'default.png'
    export let desc = 'University'
    export let deadline = '15th Jan 2024'
    export let date = '24th Jan 2024'
    export let venue = 'Seminar Hall'
    export let event_partner = ['default.svg', 'default-2.svg']
    export let link = '/stems'
    let innerWidth = 0

    $: screenIsLarge = innerWidth >= 640
</script>

<svelte:window bind:innerWidth />
{#if screenIsLarge}
    <div class=" h-[22.5rem] w-[40rem] border-2 border-black bg-white text-black">
        <div class="grid h-full grid-cols-9">
            <div
                style="background-image:url({'/events/' + image});"
                class="relative col-span-4 h-full w-full bg-gray-100 bg-cover bg-center"
            >
                <div class="absolute bottom-0 w-full pt-4">
                    <a
                        href={link}
                        style="text-transform:none"
                        class="btn m-auto h-auto min-h-0 w-full rounded-none border-0 bg-white bg-opacity-70 py-3 text-lg text-black hover:bg-white hover:bg-opacity-95"
                        >More info & register</a
                    >
                </div>
            </div>
            <div class="col-span-5 border-l-2 border-black pl-5">
                <div class="flex items-center justify-between pb-3 pt-3">
                    <h1 class="font-heading text-4xl font-bold">
                        {name}
                    </h1>
                </div>
                <p class="mb-7 text-lg">{desc}</p>
                <p class="mb-7 text-lg leading-tight">
                    <span class=" text-base">Register by :</span><br />
                    <span class="font-bold">{deadline}</span>
                </p>
                <p class="mb-8 text-lg leading-tight">
                    <span class=" text-base">When & Where :</span><br />
                    {date} | {venue}, CMI
                </p>
                {#if event_partner.length}
                    <p class="text-base">Event partners :</p>
                    <div class="flex flex-row flex-wrap">
                        {#each event_partner as partner}
                            <img
                                src={'/partners/' + partner}
                                alt={partner + 'logo'}
                                class="mr-2 h-12"
                            />
                        {/each}
                    </div>
                {/if}
            </div>
        </div>
    </div>
{:else}
    <a href={link} class="flex w-full flex-col border-y-2 border-black bg-white text-black">
        <div
            style="background-image: linear-gradient(180deg, #fff0 0%, #fff0 45%, #ffff 90%), url({'/events/' +
                image});"
            class="relative h-44 w-full bg-gray-100 bg-cover bg-center"
        >
            <div class="absolute bottom-0 left-4">
                <h1 class="pb-3 pt-3 font-heading text-4xl font-bold">
                    {name}
                </h1>
            </div>
        </div>
        <div class="relative pb-4 pl-5">
            <p class="mb-5 text-lg">{desc}</p>
            <p class="mb-5 text-lg leading-tight">
                <span class=" text-base">Register by :</span><br />
                <span class="font-bold">{deadline}</span>
            </p>
            <p class="mb-8 text-lg leading-tight">
                <span class=" text-base">When & Where :</span><br />
                {date} | {venue}, CMI
            </p>
            {#if event_partner.length}
                <p class="text-base">Event partners :</p>
                <div class="flex flex-row flex-wrap">
                    {#each event_partner as partner}
                        <img
                            src={'/partners/' + partner}
                            alt={partner + 'logo'}
                            class="mr-2 h-12"
                        />
                    {/each}
                </div>
            {/if}

            <div class="mt-2 flex w-full pr-5">
                <a
                    href={link}
                    style="text-transform: none"
                    class="btn btn-outline m-auto h-auto min-h-0 rounded-none px-6 py-3 text-lg text-black hover:bg-black hover:text-white"
                    >More info & register</a
                >
            </div>
        </div>
    </a>
{/if}

<style>
</style>
