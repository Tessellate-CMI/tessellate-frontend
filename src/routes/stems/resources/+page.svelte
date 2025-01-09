<script>
    import PastYearStuff from '../../../lib/components/PastYearStuff.svelte'
</script>

<div class="mt-5 flex w-full flex-col">
    <div class="mx-auto w-full max-w-screen-lg bg-brick bg-opacity-10 shadow-md">
        <div
            class="w-full bg-brick bg-opacity-40 p-6 py-10 text-center font-heading text-7xl font-semibold md:text-8xl"
        >
            Resources
        </div>
    </div>
    <PastYearStuff
        year={'2025-Solutions'}
        physics={['A', 'B']}
        maths={['A', 'B', 'C']}
        cs={['A', 'B']}
    />
    <PastYearStuff year={'2025'} physics={['A', 'B']} maths={['A', 'B', 'C']} cs={['A', 'B']} />
    <PastYearStuff
        year={'2024'}
        physics={['A', 'B', 'C']}
        maths={['A', 'B', 'C']}
        cs={['A', 'B']}
    />
    <PastYearStuff
        year={'2023'}
        physics={['A', 'B', 'C']}
        maths={['A', 'A(2)', 'B', 'B(2)', 'C']}
        cs={['A', 'B']}
    />
    <PastYearStuff
        year={'2021'}
        physics={['A', 'B', 'C']}
        maths={['A', 'B', 'C']}
        cs={['A', 'B']}
    />
    <PastYearStuff year={'2020'} physics={['A', 'B']} maths={['A', 'B']} cs={['A', 'B']} />
</div>
