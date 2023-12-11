<script lang="ts">
    import '$src/app.css'
    import Event from '$src/lib/components/Event.svelte'
    import Navbar from '$src/lib/components/Navbar.svelte'
    import Footer from '$src/lib/components/Footer.svelte'

    const key_rules: string[] = ['No Accommodation will be provided', 'Last date for entry: 23.01.2024 - 9.00pm. Total number of entries is restricted to 300 ONLY', 'Spot entries are strictly not accepted', 'No parking facilities inside the campus']

    const details = {
        cost: 'INR 1000 (may vary)',
        deadline: '23rd January, 2024 9:00pm',
        date: '27th January, 2024',
        venue: '2nd Floor, New Building',
        prize_pool: 'INR 2,00,000'
    }

    const rules_pdf = 'https://cdn.tessellate.cmi.ac.in/events/chess/prospectus.pdf'
    const image = '/events/chess.webp'
    const register = 'https://easypaychess.com/'

    const contacts = [
        { name: 'Raghuraj Pratap', email: 'raghuraj.ug2023@cmi.ac.in' },
        { name: 'Priyangshu Ghosh', email: 'priyangshu@cmi.ac.in' }
    ]
    const event_partners = [
        {
            name: 'Lotus Academy',
            image: 'lca.webp',
            desc: ""
        },
        {
            name: 'SVA Champions Academy',
            image: '',
            desc: ""
        }
    ]
</script>

<Navbar absolute={false} />

<div class="bg-white text-black">
    <Event
        name="Chess Tournament"
        {key_rules}
        {details}
        {rules_pdf}
        {image}
        {register}
        {contacts}
        {event_partners}
    >
    <p class="font-bold">Open Fide Rating Rapid Chess Tournament</p>
    <p><span class="font-bold">Chief Arbiter:</span> Mrs. K. V. Bhuvaneswari I.A</p>
    <p>Total 9 rounds</p>
    </Event>
</div>

<Footer />
