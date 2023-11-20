<script lang="ts">
    import '$src/app.css'
    import Event from '$src/lib/components/Event.svelte'
    import Navbar from '$src/lib/components/Navbar.svelte'
    import Footer from '$src/lib/components/Footer.svelte'

    const desc = [
        `Decorum in the house! A structured three-on-three debate with eloquent arguments, 
        impassioned oratory, and a touch of parliamentary procedure.`,
        `This year, we are pleased to say our debate events will be judged by a panel from A to Zee creativity.`
    ]

    const key_rules: string[] = []

    const details = {
        cost: 'INR 100 for Individual, INR 200 for a Team',
        deadline: 'TBD',
        date: 'TBD',
        venue: 'TBD'
    }

    export let rules_pdf = '/'
    export let image = '/events/default.jpg'
    export let event_partners = [
        {
            name: 'A to Zee creativity',
            image: 'AtoZeeCreativity.webp',
            desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        }
    ]
</script>

<Navbar absolute={false} />

<div class="bg-white text-black">
    <Event
        name="Parliamentary Debate"
        {desc}
        {key_rules}
        {details}
        {rules_pdf}
        {image}
        {event_partners}
    ></Event>
</div>

<Footer />
