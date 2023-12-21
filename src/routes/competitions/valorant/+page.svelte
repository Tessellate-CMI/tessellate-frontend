<script lang="ts">
    import '$src/app.css'
    import Event from '$src/lib/components/Event.svelte'
    import Navbar from '$src/lib/components/Navbar.svelte'
    import Footer from '$src/lib/components/Footer.svelte'

    const key_rules: string[] = [
        'Bring your oen computer/laptop',
        'There is only team registration. There is no registration for single participants without teams.',
        'Teams can consist of five players, with upto two subs',
        'The top six teams will be invited for the finals'
    ]

    const details = {
        cost: 'INR 1500 per team (Early Bird Offer till 20th December)',
        deadline: '31st December, 2023',
        date: 'January 2024 (details to be announced later)',
        venue: 'Online (prelims) / CMI (finals)',
        prize_pool: 'INR 30,000'
    }

    const rules_pdf =
        'https://cdn.tessellate.cmi.ac.in/events/valorant/Valorant_Tournament_Rules.pdf'
    const image = '/events/Valo-logo.png'
    const register = 'register'

    // const contacts = [{ name: 'Tessellate Valorant', email: '' }]
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
