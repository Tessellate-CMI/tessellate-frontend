<script>
    import '$src/app.css'

    export let name = 'Event name'
    export let desc = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
    est laborum.`
    export let register = 'register'
    export let rules_pdf = '/'
    export let image = '/events/default.jpg'
    export let key_rules = ['First rule', 'Second rule', 'Third rule']
    export let event_partners = [
        {
            name: 'Default',
            image: 'default-2.svg',
            desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        },
        {
            name: 'Default',
            image: 'default.svg',
            desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        }
    ]
</script>

<div class="w-full bg-main-blue pb-4">
    <!-- <div
        style="background-image: linear-gradient(180deg, #fff0,  #ffff)"
        class="mx-auto h-10 w-full max-w-screen-lg"
    ></div> -->
    <div
        class="z-10 mx-auto w-full max-w-screen-lg bg-white pb-5 pl-8
               pt-10 font-heading text-[16vw] font-bold text-sky-950 sm:text-8xl"
    >
        {name}
    </div>

    <!-- <div class="mx-auto w-full max-w-screen-xl border-t-4 border-second-blue"></div> -->
    <!-- <div class="mx-auto h-[6vw] w-full max-w-screen-lg bg-white sm:h-8"></div> -->

    <div class="relative mx-auto flex w-full max-w-screen-xl pb-10">
        <div class="absolute z-0 h-full w-full">
            <div class="mx-auto h-full w-full max-w-screen-lg bg-white"></div>
        </div>
        <div class="z-10 grid w-full grid-cols-1 items-center object-right pt-5 md:grid-cols-2">
            <div class="flex md:w-full md:justify-end">
                <div class="px-8 text-lg font-medium sm:text-xl md:-mr-20 md:w-[592px]">
                    <p class="text-justify">
                        {desc}
                    </p>
                    <a
                        href={register}
                        style="text-transform:none; font-size:1.5rem"
                        class="btn btn-outline m-auto mt-5 h-auto min-h-0 w-full rounded-none border-4 py-3 text-sky-950 hover:border-sky-950 hover:bg-sky-950 hover:text-white sm:text-xl"
                        >Register</a
                    >
                </div>
            </div>

            <img
                src={image}
                alt="cuber"
                class="w-full place-self-center px-8 pt-5 md:w-[520px] md:pl-16 md:pr-0 md:pt-0"
            />
        </div>
    </div>

    <!-- <div class="mx-auto w-full max-w-screen-xl border-t-4 border-second-blue"></div> -->
    {#if event_partners.length}
        <div class="mx-auto mt-4 w-full max-w-screen-lg bg-white pb-16 pt-8">
            <div
                class="w-full pl-8 pt-4 font-heading text-[12vw] font-medium text-sky-950 sm:text-6xl"
            >
                Event Partners
            </div>
            {#each event_partners as partner}
                <div
                    class="grid grid-cols-1 place-items-center pt-12 md:grid-cols-3 md:place-items-start"
                >
                    <img
                        src={'/partners/' + partner.image}
                        alt={partner.name + ' logo'}
                        class="col-span-1 max-h-48 px-12 md:max-h-none"
                    />
                    <div class="pl-10 pr-10 md:col-span-2 md:pl-0">
                        <h1 class="font-heading text-[8vw] text-sky-950 sm:text-4xl">
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
        <div>
            <div
                class="pl-8 font-heading text-[12vw] font-medium leading-none text-sky-950 sm:text-6xl md:mt-5"
            >
                Rules & <br />Regulations
            </div>
            <a
                href={rules_pdf}
                style="text-transform:none"
                class="btn btn-outline m-auto ml-8 mt-10 h-auto min-h-0 rounded-none px-5 py-3 text-lg text-sky-950 hover:bg-sky-950 hover:text-white sm:px-10 sm:text-xl"
                >Complete list of rules</a
            >
        </div>
        <div class="mr-8 mt-5 text-lg font-medium sm:text-xl">
            <ol class="list-decimal pl-16 pt-6 md:pl-0 md:pt-0">
                {#each key_rules as rule}
                    <li>{rule}<br /><br /></li>
                {/each}
            </ol>
        </div>
    </div>
</div>
