<script>
    import '$src/app.css'

    // export let name = 'Event Name'
    // export let colorOpt = 1
    // const color = colorOpt === 1 ? 'second-blue' : 'main-blue'
    // const bColor = colorOpt === 1 ? 'white' : 'black'
    // const textColor = colorOpt === 1 ? 'white' : 'black'
    // export let date = '24th January, 2024'
</script>

<div class="w-full bg-main-blue">
    <div
        style="background-image: linear-gradient(180deg, #fff0,  #ffff)"
        class="mx-auto h-10 w-full max-w-screen-lg"
    ></div>
    <div
        class="z-10 mx-auto -mb-[6vw] w-full max-w-screen-lg bg-white pt-5 text-center
               font-heading text-[16vw] font-bold text-sky-950 sm:-mb-3 sm:text-8xl"
    >
        Quiz
    </div>

    <div class="mx-auto w-full max-w-screen-xl border-t-4 border-second-blue"></div>
    <div class="mx-auto h-[6vw] w-full max-w-screen-lg bg-white sm:h-8"></div>

    <div class="relative mx-auto flex w-full max-w-screen-xl pb-10">
        <div class="absolute z-0 h-full w-full">
            <div class="mx-auto h-full w-full max-w-screen-lg bg-white"></div>
        </div>
        <div class="z-10 grid w-full grid-cols-1 items-center object-right pt-5 md:grid-cols-2">
            <div class="flex md:w-full md:justify-end">
                <div
                    class="px-8 text-justify text-lg font-medium sm:text-xl md:-mr-20 md:w-[592px]"
                >
                    Every year, our quiz show event captivates participants with intriguing
                    questions spanning a kaleidoscope of categories. From the annals of history to
                    the intricacies of pop culture; from scientific realms to literary landscapes;
                    prepare to put your knowledge to the test, as every obscure fact you've come
                    across will be called upon. This year, we are honoured to have eminent quizzer
                    Major Chandrakant Nair as our Quizmaster. Come join us for an exciting day of
                    cerebral combat!
                </div>
            </div>
            <img
                src="/images/cuber.jpg"
                alt="cuber"
                class="w-full place-self-center px-8 pt-5 md:w-[520px] md:pl-16 md:pr-0 md:pt-0"
            />
        </div>
    </div>

    <div class="mx-auto w-full max-w-screen-xl border-t-4 border-second-blue"></div>
    <div
        class="mx-auto grid w-full max-w-screen-lg grid-cols-1 items-center bg-white pb-10 pt-8 md:grid-cols-2"
    >
        <div>
            <div
                class="pl-8 font-heading text-[12vw] font-semibold leading-none text-sky-950 sm:text-6xl"
            >
                Rules & <br />Regulations
            </div>
            <a
                href="/"
                style="text-transform:none"
                class="btn btn-outline m-auto ml-8 mt-5 h-auto min-h-0 rounded-none px-5 py-3 text-lg text-sky-950 hover:bg-sky-950 hover:text-white sm:px-10 sm:text-xl"
                >Complete list of rules</a
            >
        </div>
        <div class="mt-5 pl-8 text-lg font-medium sm:text-xl">
            <ol class="list-decimal pl-10 pt-6 md:pt-0">
                <li>The first rule <br /> <br /></li>
                <li>The second rule <br /> <br /></li>
                <li>The third rule <br /> <br /></li>
            </ol>
        </div>
    </div>
</div>
