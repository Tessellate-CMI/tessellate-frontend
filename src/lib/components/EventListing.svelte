<script lang="ts">
    import '$src/app.css'
    import type { EventPartners } from '$lib/components/interfaces'

    export let name = 'Speaker'
    export let image = 'default.png'
    export let desc = 'University'
    export let deadline = '15th Jan 2024'
    export let date = '24th Jan 2024'
    export let venue = 'Seminar Hall'
    export let id = ''

    export let event_partners: EventPartners[] = []

    export let link = '/stems'
    let innerWidth = 0

    $: screenIsLarge = innerWidth >= 640
</script>

<svelte:window bind:innerWidth />
{#if screenIsLarge}
    <div
        class=" m-10 min-h-[22.5rem] w-[40rem] border-2 border-black bg-white text-black sm:m-4"
        {id}
    >
        <div class="grid h-full grid-cols-9">
            <div
                style="background-image:url({'/events/' + image});"
                class="relative col-span-4 h-full w-full bg-gray-100 bg-cover bg-center"
            >
                <div class="absolute bottom-0 w-full pt-4">
                    {#if link != ''}
                        <a
                            href={link}
                            style="text-transform:none"
                            class="btn m-auto h-auto min-h-0 w-full rounded-none border-0 bg-white bg-opacity-70 py-3 text-lg text-black hover:bg-white hover:bg-opacity-95"
                            >More info & register</a
                        >
                    {:else}
                        <div
                            style="text-transform:none"
                            class="btn m-auto h-auto min-h-0 w-full rounded-none border-0 bg-white bg-opacity-70 py-3 text-lg text-black hover:bg-white hover:bg-opacity-95"
                        >
                            Registrations starting soon!
                        </div>
                    {/if}
                </div>
            </div>
            <div class="col-span-5 border-l-2 border-black pl-5">
                <div class="flex items-center justify-between pb-3 pt-3">
                    <h1 class="font-heading text-4xl font-bold">
                        {name}
                    </h1>
                </div>
                <p class="mb-6 pr-2 text-base">{desc}</p>
                <p class="mb-6 text-lg leading-tight">
                    <span class=" text-base">Register by :</span>
                    <span class="font-bold">{deadline}</span>
                </p>
                <p class="mb-6 text-lg leading-tight">
                    <span class=" text-base">When & Where :</span><br />
                    {date}
                    <!-- <span class="text-2xl">|</span> -->
                    <br />
                    {venue}
                </p>
                {#if event_partners.length}
                    <p class="text-base">Event partners :</p>
                    <div class="mb-3 mt-1 flex flex-row flex-wrap">
                        {#each event_partners as partner}
                            <img
                                src={'/partners/' + partner.image}
                                alt={partner.name + ' logo'}
                                class="mr-4 h-12"
                            />
                        {/each}
                    </div>
                {/if}
            </div>
        </div>
    </div>
{:else}
    <a
        href={link}
        class="my-5 flex w-full flex-col border-y-2 border-black bg-white text-black"
        {id}
    >
        <div
            style="background-image: linear-gradient(180deg, #fff0 0%, #fff0 40%, #ffff 90%), url({'/events/' +
                image});"
            class="relative h-56 w-full bg-gray-100 bg-cover bg-center"
        >
            <div class="absolute bottom-0 left-0">
                <h1 class="mb-3 mt-3 bg-white bg-opacity-5 pl-4 font-heading text-4xl font-bold">
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
            {#if event_partners.length}
                <p class="text-base">Event partners :</p>
                <div class="flex flex-row flex-wrap">
                    {#each event_partners as partner}
                        <img
                            src={'/partners/' + partner.image}
                            alt={partner.name + 'logo'}
                            class="mr-2 h-16"
                        />
                    {/each}
                </div>
            {/if}

            <div class="mt-2 flex w-full pr-5">
                {#if link != ''}
                    <a
                        href={link}
                        style="text-transform: none"
                        class="btn btn-outline m-auto h-auto min-h-0 rounded-none px-6 py-3 text-lg text-black hover:bg-black hover:text-white"
                        >More info & register</a
                    >
                {:else}
                    <div
                        style="text-transform: none"
                        class="btn btn-outline m-auto h-auto min-h-0 rounded-none px-6 py-3 text-lg text-black hover:bg-black hover:text-white"
                    >
                        Registrations starting soon!
                    </div>
                {/if}
            </div>
        </div>
    </a>
{/if}
