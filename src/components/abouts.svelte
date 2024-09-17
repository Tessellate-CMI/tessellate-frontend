<script>
    export let opacities, bgCoolrs
    // export let bgColors
</script>

<div class="h-[400vh] w-full transition-all duration-300">
    <div
        class="sticky top-0 flex h-screen w-full transition-all duration-500 {bgCoolrs[
            opacities - 1
        ]} "
    >
        <div class="relative m-auto flex h-screen w-full max-w-screen-lg">
            <!-- example code -->
            <div class="z-10 w-3/5 bg-[#1da1f2]"></div>
            <div class="relative w-2/5 p-20">
                <div
                    class="card absolute inset-0 text-xl {opacities == 1
                        ? 'opacity-100'
                        : 'opacity-0'} m-auto size-40 transition-all duration-500"
                >
                    About 1
                </div>
                <div
                    class="card absolute inset-0 text-xl {opacities == 2
                        ? 'opacity-100'
                        : 'opacity-0'} m-auto size-40 transition-all duration-500"
                >
                    About 2
                </div>
                <div
                    class="card absolute inset-0 text-xl {opacities == 3
                        ? 'opacity-100'
                        : 'opacity-0'} m-auto size-40 transition-all duration-500"
                >
                    About 3
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .card {
        background-color: aliceblue;
        border: 2px 2px solid;
        box-shadow: 1px 1px 4px black;
    }
</style>
