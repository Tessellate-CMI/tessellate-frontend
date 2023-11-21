<script lang="ts">
    import '$src/app.css'
    import Event from '$src/lib/components/Event.svelte'
    import Navbar from '$src/lib/components/Navbar.svelte'
    import Footer from '$src/lib/components/Footer.svelte'

    const key_rules: string[] = []

    const details = {
        cost: 'INR 2,000 per team',
        deadline: '31st December, 2023',
        date: 'January 2024 (details to be announced later)',
        venue: 'Online (prelims) / CMI (finals)'
    }

    const rules_pdf = ''
    const image = '/events/default.jpg'
    const register = ''
</script>

<Navbar absolute={false} />

<Event name="Valorant" {key_rules} {details} {rules_pdf} {image} {register}>
    <p>
        Embark on Tessellate's legendary Valorant tournament, summoning skilled players from distant
        realms for savage yet strategic skirmishes. Amidst the chaos of gunfire, six elite teams
        rise, competing for hefty cash rewards and gaming prestige. Channel your inner Phoenix,
        wield the precision of a Vandal, or strategize like a Cypher. Do you possess the valor to
        secure ultimate victory in this virtual battleground? Step into the arena, choose your agent
        wisely, and let the games begin— because in this epic showdown, only the best will emerge as
        Radiants.
    </p>
</Event>

<Footer />
