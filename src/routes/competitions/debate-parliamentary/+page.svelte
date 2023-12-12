<script lang="ts">
    import '$src/app.css'
    import Event from '$src/lib/components/Event.svelte'
    import Navbar from '$src/lib/components/Navbar.svelte'
    import Footer from '$src/lib/components/Footer.svelte'

    const key_rules: string[] = []

    const details = {
        cost: 'INR 200 for Individual, INR 500 for a Team',
        deadline: 'TBD',
        date: ' 26th January, 2024 ',
        venue: 'LH5, LH6 and Auditorium (CMI)',
        prize_pool: 'INR 14,000'
    }

    const rules_pdf = ''
    const image = '/events/default.jpg'
    const register = 'register'

    const contacts = [
        { name: 'Divyanshi Kumari', email: 'divyanshi.mds2023@cmi.ac.in' },
        { name: 'Aniruddha Bhattacharjee', email: 'aniruddhab@cmi.ac.in' }
    ]

    const event_partners = [
        {
            name: 'A to Zee creativity',
            image: 'AtoZeeCreativity.png',
            desc: "A to Zee Creativity is an organization for all things creative! We have a range of programmes catering to students from 5 to 17/18 years old, including sessions in debating, public speaking, drama, writing, Model United Nations, training for the Trinity College London Examinations (Speech and Drama and Communication Skills) and for competitions like the World Scholar's Cup. "
        }
    ]
</script>

<Navbar absolute={false} />

<div class="bg-white text-black">
    <Event
        name="Parliamentary Debate"
        {key_rules}
        {details}
        {rules_pdf}
        {image}
        {register}
        {contacts}
        {event_partners}
    >
        <p>
            Where debonair debaters duel with deft discourse, delivering delightful dialogues in a
            riveting rhythmic rendition of rhetoric.
        </p>
        <p class="mt-3 text-xl font-semibold text-sky-950 sm:text-2xl">Parliamentary Debate</p>
        <p>
            Decorum in the house! A structured three-on-three debate with eloquent arguments,
            impassioned oratory, and a touch of parliamentary procedure. <br />
            This year, we are pleased to say our debate events will be judged by a panel from A to Zee
            creativity.
        </p>
    </Event>
</div>

<Footer />
