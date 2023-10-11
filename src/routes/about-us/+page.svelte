<script>
    import '$src/app.css'
    import Navbar from '$src/lib/components/Navbar.svelte'
    import team from '$lib/team.json'
</script>

<Navbar absolute={false} bgColor="bg-second-blue" textWhite={true} />

<div
    class="grid w-full grid-cols-1 border-b-2 border-white bg-second-blue px-10
            pb-10 text-white sm:grid-cols-3 sm:pb-12 sm:pt-24"
>
    <h1
        class="col-span-1 h-full w-full border-white pb-2 pt-10 font-heading text-6xl font-semibold sm:pb-12 sm:text-8xl"
    >
        About CMI
    </h1>
    <p
        class=" col-span-2 max-w-screen-lg pt-5 text-xl font-medium sm:border-l-2 sm:pb-12 sm:pl-16 sm:pr-8 sm:text-2xl"
    >
        Chennai Mathematical Institute (CMI) is a renowned institution for mathematics and computer
        science education and research, founded in 1989. It became autonomous in 1996 and is known
        for its strong research groups. CMI offers BSc and MSc programs, nurturing a notable
        community of PhD students. The institute has a unique position in Indian academia, receiving
        significant funding, and was recognized as a university in 2006. CMI aspires to grow into a
        comprehensive academic institution akin to top universities globally.
    </p>
</div>

<div class="w-full bg-main-blue pl-10 text-black">
    <h1 class="pb-2 pt-16 font-heading text-6xl font-semibold sm:pb-8 sm:text-8xl">
        Meet the Tess'24 Team
    </h1>
    <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
        {#each team as teamName}<div class="flex flex-col">
                <div class="pb-3">
                    <h1 class=" pt-10 font-heading text-4xl font-semibold sm:text-5xl">
                        {teamName.team}
                    </h1>
                    <div class="pt-2 font-heading text-3xl font-semibold sm:text-4xl">
                        {teamName.subteam ? teamName.subteam : ''}
                    </div>
                </div>
                <div class="flex flex-wrap">
                    {#each teamName.members as member}
                        <div>
                            <div
                                class="m-7 flex max-w-[300px] flex-col border-l-2 border-black p-2 px-5 text-xl"
                            >
                                <div class="pb-2 text-2xl font-semibold sm:text-3xl">
                                    {member.name}
                                </div>
                                <div>{member.batch}</div>
                                <a href="mailto:{member.email}" class="hover:text-blue-600"
                                    >{member.email}</a
                                >
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</div>
