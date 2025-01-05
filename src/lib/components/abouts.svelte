<script>
    let scrollY = 0
    let innerHeight = 0
    let opacities = 1

    let numPages = 3

    $: opacities = Math.min(numPages, Math.max(1, Math.ceil(scrollY / innerHeight) - 1))

    /**
     * @param {number} sectionNumber
     */
    function changeScroll(sectionNumber) {
        scrollY = innerHeight * (sectionNumber + 1)
    }

    export let bgCoolrs
</script>

<svelte:window bind:scrollY bind:innerHeight />
<svelte:head>
    <link
        href="https://fonts.googleapis.com/css2?family=Handjet:wght@100..900&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<div class="h-[400vh] w-full transition-all duration-500">
    <div class="sticky top-0 flex h-screen w-full transition-all duration-500">
        <!-- example code -->
        <div class="z-10 flex w-1/3 flex-col bg-off-white text-6xl font-medium">
            <div
                class="mx-auto mb-24 mt-12 font-heading text-8xl font-bold text-black transition-all duration-500"
            >
                ABOUT
            </div>
            <button
                class="text-stroke-2 text-stroke-sea-green mx-auto mt-12 font-heading hover:text-sea-green
                {opacities == 1 ? 'text-sea-green' : 'text-white'} transition-all duration-500"
                on:click={() => changeScroll(1)}
            >
                Tessellate
            </button>
            <button
                class="text-stroke-2 text-stroke-pista mx-auto mt-12 font-heading hover:text-pista {opacities ==
                2
                    ? 'text-pista'
                    : 'text-white'} transition-all duration-500"
                on:click={() => changeScroll(2)}
            >
                Stems
            </button>
            <button
                class="text-stroke-2 text-stroke-brick mx-auto mt-12 font-heading hover:text-brick {opacities ==
                3
                    ? 'text-brick'
                    : 'text-white'} transition-all duration-500"
                on:click={() => changeScroll(3)}
            >
                CMI
            </button>
        </div>
        <div class="relative h-full w-2/3 {bgCoolrs[opacities - 1]}  transition-all duration-500">
            <!-- TESSELLATE about -->
            <div
                class=" absolute {opacities == 1
                    ? 'opacity-100'
                    : 'opacity-0'} m-auto size-40 w-full transition-all duration-500"
            >
                <div
                    class="mx-auto mb-24 mt-12 w-full text-center font-heading text-8xl font-bold text-black transition-all duration-500"
                >
                    Tessellate
                </div>

                <div class="quote my-8 w-full text-center text-3xl">
                    Creativity, Competition, Culture
                </div>

                <div
                    class="m-auto w-full p-20 text-justify text-2xl first-letter:float-left first-letter:mr-3 first-letter:text-6xl first-letter:font-bold first-letter:text-teal-700"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus doloribus
                    dolore illo vitae non facilis suscipit unde aliquid, minus voluptates odit cum
                    deserunt eveniet! Excepturi dolores vel perspiciatis laborum quia neque earum
                    reiciendis odio quam obcaecati hic soluta id accusantium, quos accusamus quo
                    voluptas eveniet odit quisquam in. Inventore, beatae obcaecati facere, excepturi
                    sed magni aut voluptatum consequatur quasi quam eaque autem doloribus asperiores
                    distinctio, aliquam fugiat. Repellat quidem excepturi cumque eius at rem, veniam
                    ipsam alias ducimus modi cum temporibus dolor dicta tempora debitis deleniti
                    neque? Debitis quaerat maiores corrupti obcaecati.
                </div>
            </div>
            <!-- STEMS about -->
            <div
                class="absolute {opacities == 2
                    ? 'opacity-100'
                    : 'opacity-0'} m-auto size-40 w-full transition-all duration-500"
            >
                <div
                    class="mx-auto mb-24 mt-12 w-full text-center font-heading text-8xl font-bold text-black transition-all duration-500"
                >
                    About
                </div>

                <div
                    class="m-auto p-20 text-justify text-2xl first-letter:float-left first-letter:mr-3 first-letter:text-6xl first-letter:font-bold first-letter:text-lime-700"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus doloribus
                    dolore illo vitae non facilis suscipit unde aliquid, minus voluptates odit cum
                    deserunt eveniet! Excepturi dolores vel perspiciatis laborum quia neque earum
                    reiciendis odio quam obcaecati hic soluta id accusantium, quos accusamus quo
                    voluptas eveniet odit quisquam in. Inventore, beatae obcaecati facere, excepturi
                    sed magni aut voluptatum consequatur quasi quam eaque autem doloribus asperiores
                    distinctio, aliquam fugiat. Repellat quidem excepturi cumque eius at rem, veniam
                    ipsam alias ducimus modi cum temporibus dolor dicta tempora debitis deleniti
                    neque? Debitis quaerat maiores corrupti obcaecati.
                </div>
            </div>

            <!-- CMI about -->
            <div
                class="absolute {opacities == 3
                    ? 'opacity-100'
                    : 'opacity-0'} m-auto size-40 w-full transition-all duration-500"
            >
                <div
                    class="mx-auto mb-24 mt-12 w-full text-center font-heading text-8xl font-bold text-cmi transition-all duration-500"
                >
                    CMI
                </div>

                <div
                    class="m-auto p-20 text-justify text-2xl first-letter:float-left first-letter:mr-3 first-letter:text-6xl first-letter:font-bold first-letter:text-orange-700"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus doloribus
                    dolore illo vitae non facilis suscipit unde aliquid, minus voluptates odit cum
                    deserunt eveniet! Excepturi dolores vel perspiciatis laborum quia neque earum
                    reiciendis odio quam obcaecati hic soluta id accusantium, quos accusamus quo
                    voluptas eveniet odit quisquam in. Inventore, beatae obcaecati facere, excepturi
                    sed magni aut voluptatum consequatur quasi quam eaque autem doloribus asperiores
                    distinctio, aliquam fugiat. Repellat quidem excepturi cumque eius at rem, veniam
                    ipsam alias ducimus modi cum temporibus dolor dicta tempora debitis deleniti
                    neque? Debitis quaerat maiores corrupti obcaecati.
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .text-stroke-2 {
        -webkit-text-stroke: 2px;
    }
    .text-stroke-6 {
        -webkit-text-stroke: 6px;
    }

    .text-stroke-pista {
        -webkit-text-stroke-color: theme('colors.pista');
    }

    .text-stroke-black {
        -webkit-text-stroke-color: theme('colors.black');
    }

    .text-stroke-sea-green {
        -webkit-text-stroke-color: theme('colors.sea-green');
    }

    .text-stroke-butterscotch {
        -webkit-text-stroke-color: theme('colors.butterscotch');
    }

    .text-stroke-brick {
        -webkit-text-stroke-color: theme('colors.brick');
    }

    .quote {
        font-family: 'HandJet';
    }
</style>
