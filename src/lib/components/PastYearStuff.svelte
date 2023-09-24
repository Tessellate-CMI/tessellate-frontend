<script>
    export let style = 0
    export let year = 2023
    export let maths = ['A', 'B', 'C']
    export let physics = ['A', 'B', 'C']
    export let cs = ['A', 'B']

    import '$src/app.css'

    var bgstyle = ''
    var borderstyle = ''

    $: switch (style) {
        case 0:
            bgstyle = 'bg-main-blue text-black'
            borderstyle = 'border-black'
            break
        case 1:
            bgstyle = 'bg-second-blue text-white'
            borderstyle = 'border-white'
            break
        default:
            break
    }
</script>

<div class="w-full pb-8 {bgstyle}">
    <div class="p-10 px-6 text-5xl font-bold">STEMS {year}</div>

    <div class="grid grid-cols-1 text-center font-sans md:grid-cols-3">
        <div
            class="flex w-full flex-col items-center border-b-2 font-semibold md:border-b-0 md:border-r-2 {borderstyle}"
        >
            <div class="pb-6 pt-5 text-3xl md:pt-1">Mathematics</div>
            <div class="flex flex-col pb-6 pl-2 text-start text-xl underline md:w-2/5">
                {#each maths as category}
                    <a class="py-2" href="/pastPapers/STEMS{year}-Math-Category{category}.pdf"
                        >• Category {category}</a
                    >
                {/each}
            </div>
        </div>
        <div
            class="flex w-full flex-col items-center border-b-2 font-semibold md:border-b-0 md:border-r-2 {borderstyle}"
        >
            <div class="pb-6 pt-5 text-3xl md:pt-1">Physics</div>
            <div class="flex flex-col pb-6 pl-2 text-start text-xl underline md:w-2/5">
                {#each physics as category}
                    <a class="py-2" href="/pastPapers/STEMS{year}-Math-Category{category}.pdf"
                        >• Category {category}</a
                    >
                {/each}
            </div>
        </div>
        <div class="flex w-full flex-col items-center font-semibold {borderstyle}">
            <div class="pb-6 pt-5 text-3xl md:pt-1">Computer Science</div>
            <div class="flex flex-col pb-6 pl-2 text-start text-xl underline md:w-2/5">
                {#each cs as category}
                    <a class="py-2" href="/pastPapers/STEMS{year}-Math-Category{category}.pdf"
                        >• Category {category}</a
                    >
                {/each}
            </div>
        </div>
    </div>
</div>
