<script>
    import '$src/app.css'
    import Navbar from '$src/lib/components/Navbar.svelte'
    import team from '$lib/data/team.json'
    import Footer from '$src/lib/components/Footer.svelte'
</script>

<Navbar absolute={false} bgColor="bg-second-blue" textWhite={true} />

<div
    class="grid w-full grid-cols-1 border-b-2 border-white bg-second-blue px-5 pb-10
            text-white sm:pb-12 sm:pt-24 lg:grid-cols-3 lg:px-10"
>
    <h1
        class="h-full w-full border-white pb-2 pt-10 font-heading text-6xl font-semibold sm:pb-12 sm:text-8xl lg:col-span-1"
    >
        About CMI
    </h1>
    <p
        class="max-w-screen-lg pt-5 text-xl font-medium sm:pb-12 sm:pr-8 sm:text-2xl lg:col-span-2 lg:border-l-2 lg:pl-16"
    >
        Chennai Mathematical Institute (CMI) is a renowned institution for mathematics and computer
        science education and research, founded in 1989. It became autonomous in 1996 and is known
        for its strong research groups. CMI offers BSc and MSc programs, nurturing a notable
        community of PhD students. The institute has a unique position in Indian academia, receiving
        significant funding, and was recognized as a university in 2006. CMI aspires to grow into a
        comprehensive academic institution akin to top universities globally.
    </p>
    <div class="mt-6 flex">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.2293489089448!2d80.21755457631039!3d12.828450917998072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525a6872b56423%3A0x6bdb1e0a06c8a878!2sChennai%20Mathematical%20Institute!5e0!3m2!1sen!2sin!4v1705038201951!5m2!1sen!2sin"
            width="600"
            height="450"
            style="border:0;"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="CMI Location Map"
        ></iframe>
    </div>
</div>
<div class="w-full bg-main-blue pl-5 text-black md:pl-10">
    <h1 class="pb-2 pt-16 font-heading text-6xl font-semibold sm:pb-8 sm:text-8xl">
        Meet the Tess'24 Team
    </h1>
    <div class="grid grid-cols-1 gap-3">
        {#each team as teamName}<div class="flex flex-col">
                <div class="pb-3">
                    {#if teamName.team != ''}
                        <h1 class=" pt-10 font-heading text-4xl font-semibold sm:text-5xl">
                            {teamName.team}
                        </h1>
                    {/if}
                    {#if teamName.subteam}
                        <div class="pt-2 font-heading text-3xl font-semibold sm:text-4xl">
                            {teamName.subteam}
                        </div>
                    {/if}
                </div>
                <div class="flex flex-wrap">
                    {#each teamName.members as member}
                        <div>
                            <div
                                class="m-3 flex max-w-[300px] flex-col border-l-2 border-black p-2 px-3 text-xl md:m-7 md:px-5"
                            >
                                <div class="pb-2 text-2xl font-semibold sm:text-3xl">
                                    {member.name}
                                </div>
                                <div>{member.batch}</div>
                                <a
                                    href="mailto:{member.email}"
                                    class="text-lg hover:text-blue-600 sm:text-xl">{member.email}</a
                                >
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</div>

<Footer />
