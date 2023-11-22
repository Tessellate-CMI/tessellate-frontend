<script lang="ts">
    import '$src/app.css'
    import type { EventPartners_large, Contact } from '$lib/components/interfaces'

    export let name = 'Event name'
    export let register = 'register'
    export let rules_pdf = ''
    export let image = '/events/default.jpg'
    export let key_rules = ['First rule', 'Second rule', 'Third rule']
    export let event_partners: EventPartners_large[] = []
    export let details = {
        cost: 'INR TBD per person',
        deadline: 'TBD',
        date: 'TBD',
        venue: 'TBD'
    }
    export let contacts: Contact[] = []
</script>

<div class="w-full bg-main-blue pb-4 text-black">
    <div
        class="z-10 mx-auto w-full max-w-screen-lg bg-white pl-8 pt-10
               font-heading text-[11.5vw] font-bold leading-none text-sky-950 sm:pb-5 md:text-8xl"
    >
        {name}
    </div>
    <div class="relative mx-auto flex w-full max-w-screen-xl pb-10">
        <div class="absolute z-0 h-full w-full">
            <div class="mx-auto h-full w-full max-w-screen-lg bg-white"></div>
        </div>
        <div class="z-10 grid w-full grid-cols-1 items-center object-right pt-5 md:grid-cols-2">
            <div class="flex md:w-full md:justify-end">
                <div
                    class="px-8 text-justify text-lg font-medium sm:text-xl md:-mr-20 md:w-[592px]"
                >
                    <slot />
                    {#if register != ''}
                        <a
                            href={register}
                            style="text-transform:none; font-size:1.5rem"
                            class="btn btn-outline m-auto mt-5 h-auto min-h-0 w-full rounded-none border-4 py-3 text-sky-950 hover:border-sky-950 hover:bg-sky-950 hover:text-white sm:text-xl"
                            >Register</a
                        >
                    {:else}
                        <div
                            style="text-transform:none; font-size:1.5rem"
                            class="btn btn-outline m-auto mt-5 h-auto min-h-0 w-full rounded-none border-4 py-3 text-sky-950 hover:border-sky-950 hover:bg-sky-950 hover:text-white sm:text-xl"
                        >
                            Registrations starting soon!
                        </div>
                    {/if}
                    <div class="mt-3 text-sm text-red-700 sm:text-base">
                        Please go through the event details and rules listed below before you
                        register, as to avoid any confusions.
                    </div>
                </div>
            </div>

            <img
                src={image}
                alt="cuber"
                class="w-full place-self-center px-8 pt-5 md:w-[520px] md:pl-16 md:pr-0 md:pt-0"
            />
        </div>
    </div>

    <div class="mx-auto mt-4 flex w-full max-w-screen-lg flex-row flex-wrap bg-white pb-10 pt-8">
        <div>
            <div
                class="pl-8 font-heading text-[10vw] font-medium leading-none text-sky-950 md:mt-5 md:text-6xl md:leading-tight"
            >
                Event<br /> Details
            </div>
        </div>
        <div class="mr-8 mt-5 text-lg font-medium sm:text-xl">
            <div class="border-sky-950 pl-8 pt-6 md:ml-8 md:border-l-[3px] md:pt-0">
                <p class="my-3 text-lg sm:text-xl">
                    Registration Cost <br /><span class="text-xl font-semibold sm:text-2xl"
                        >{details.cost}</span
                    >
                </p>
                <p class="my-3 text-lg sm:text-xl">
                    Last date to register <br /><span class="text-xl font-semibold sm:text-2xl"
                        >{details.deadline}</span
                    >
                </p>
                <p class="my-3 text-lg sm:text-xl">
                    When is it happening <br /><span class="text-xl font-semibold sm:text-2xl"
                        >{details.date}</span
                    >
                </p>
                <p class="my-3 text-lg sm:text-xl">
                    Event venue <br /><span class="text-xl font-semibold sm:text-2xl"
                        >{details.venue}</span
                    >
                </p>
            </div>
        </div>
    </div>

    <!-- <div class="mx-auto w-full max-w-screen-xl border-t-4 border-second-blue"></div> -->
    {#if event_partners.length}
        <div class="mx-auto mt-4 w-full max-w-screen-lg bg-white pb-16 pt-8">
            <div
                class="w-full pl-8 pt-4 font-heading text-[10vw] font-medium leading-none text-sky-950 md:text-6xl"
            >
                Event Partners
            </div>
            {#each event_partners as partner}
                <div
                    class="grid grid-cols-1 place-items-center pt-5 md:grid-cols-3 md:place-items-start md:pt-12"
                >
                    <img
                        src={'/partners/' + partner.image}
                        alt={partner.name + ' logo'}
                        class="col-span-1 max-h-48 px-12 md:max-h-none"
                    />
                    <div class="pl-10 pr-10 md:col-span-2 md:pl-0">
                        <h1 class="font-heading text-[7vw] text-sky-950 sm:text-4xl">
                            {partner.name}
                        </h1>
                        <p class="text-lg sm:text-xl">{partner.desc}</p>
                    </div>
                </div>{/each}
        </div>
    {/if}

    <div
        class="mx-auto mt-4 grid w-full max-w-screen-lg grid-cols-1 bg-white pb-10 pt-8 md:grid-cols-2"
    >
        <div class="pl-8 pr-8">
            <div
                class="font-heading text-[10vw] font-medium leading-none text-sky-950 md:mt-5 md:text-6xl"
            >
                Rules & <br />Regulations
            </div>
            {#if rules_pdf != ''}
                <a
                    href={rules_pdf}
                    style="text-transform:none"
                    class="btn btn-outline m-auto mt-10 h-auto min-h-0 rounded-none px-5 py-3 text-lg text-sky-950 hover:bg-sky-950 hover:text-white sm:px-10 sm:text-xl"
                    >Complete list of rules</a
                >
            {:else}
                <div
                    style="text-transform:none"
                    class="btn btn-outline m-auto mt-10 h-auto min-h-0 rounded-none px-5 py-3 text-lg text-sky-950 hover:bg-sky-950 hover:text-white sm:px-10 sm:text-xl"
                >
                    Complete list of rules coming soon!
                </div>
            {/if}
        </div>
        <div class="mr-8 mt-5 text-lg font-medium sm:text-xl">
            <ol class="list-decimal pl-16 pt-6 md:pl-0 md:pt-0">
                {#each key_rules as rule}
                    <li>{rule}<br /><br /></li>
                {/each}
            </ol>
        </div>
    </div>

    {#if contacts.length}
        <div class="mx-auto mt-4 w-full max-w-screen-lg bg-white pb-10 pt-8">
            <div
                class="pl-8 font-heading text-[7vw] font-medium leading-none text-sky-950 md:mt-5 md:text-4xl"
            >
                Contact Us At
            </div>

            <div class="ml-8 mt-5 flex flex-wrap text-lg font-medium sm:text-xl">
                {#each contacts as contact}
                    <div class="my-2 mr-12">
                        <span class="font-heading text-lg font-normal sm:text-xl"
                            >{contact.email}</span
                        ><br />
                        {contact.name}
                    </div>
                {/each}
            </div>
        </div>
    {/if}
</div>
