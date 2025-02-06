<script>
    import camp_schedule from '$lib/jsons/camp_schedule.json'
</script>

<div class="mt-10 flex w-full">
    <div class="mx-auto w-full max-w-screen-lg shadow-md">
        <div
            class="border-black bg-sea-green p-6 font-heading text-6xl font-semibold text-white lg:text-7xl"
        >
            STEMS Camp Schedule
        </div>
        <p class="p-6 md:text-lg">Schedule for STEMS 2025 camp</p>
    </div>
</div>

{#each camp_schedule as camp_day}
    <div class="mt-10 flex w-full">
        <div class="mx-auto w-full max-w-screen-lg shadow-md">
            <div
                class="border-black bg-sea-green px-6 py-4 font-heading text-4xl text-white lg:text-5xl"
            >
                <span class="font-semibold">{camp_day['day']}</span>
                <span class="text-3xl lg:text-4xl">{camp_day['date']}</span>
            </div>
            <ul class="">
                {#each camp_day['lectures'] as lecture}
                    <li class="flex flex-col border-b-2 border-black p-6 last:border-none">
                        <div class="text-3xl font-semibold text-sea-green lg:text-4xl">
                            {lecture['presenter']}
                        </div>
                        <div class="pt-3 text-2xl lg:text-3xl">{lecture['title']}</div>
                        <div class="pt-2 md:text-lg">{lecture['time']}</div>
                        <div class="pt-2 md:text-lg">{lecture['description']}</div>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
{/each}
