<script lang="ts">
    import '$src/app.css'
    import Event from '$src/lib/components/Event.svelte'
    import Navbar from '$src/lib/components/Navbar.svelte'
    import Footer from '$src/lib/components/Footer.svelte'

    const key_rules: string[] = [
        "We won't be allowing late entry in the competition under any exceptions. Make sure you will be available at the venue when your name is called.",
        'Make sure you go through all the WCA regulations.',
        'Kindly bring your ID card while entering the campus.',
        "If you're participating in a WCA competition for first time or unaware of competition rules, make sure that you attend the tutorial session.",
        'Participants must bring their own cubes'
    ]

    const details = {
        cost: 'INR 1999 (base fee)',
        deadline: '21st January, 2024',
        date: '26th, 27th and 28th January, 2024',
        venue: 'Seminar Hall',
        prize_pool: 'Refer to Registration Website'
    }

    const image = '/events/cuber_6x6.webp'
    const register =
        'https://www.worldcubeassociation.org/competitions/CMITessellateCubeOpen2024/register'

    const contacts = [{ name: 'Ananya Kaushal', email: 'ananyak.mds2023@cmi.ac.in' }]
    const event_partners = [
        {
            name: 'Chennai Cubing Club',
            image: 'ChennaiCubingClub.png',
            desc: 'Empowering Minds, Igniting Passion: Chennai Cubing Club (C3) envisions a community where the thrill of speedcubing fuels the spirit of competition, fostering a culture of continuous improvement and camaraderie among enthusiasts in Tamil Nadu and across India.'
        }
    ]

    const rules_pdf = 'https://www.worldcubeassociation.org/competitions/CMITessellateCubeOpen2024'
</script>

<Navbar absolute={false} />

<div class="bg-white text-black">
    <Event
        name="CMI Tessellate Cube Open"
        {key_rules}
        {details}
        {image}
        {register}
        {contacts}
        {event_partners}
        {rules_pdf}
    >
        <p>Recognized by World Cubing Association(WCA)</p>
        <p>
            Nine events such as 2x2, 3x3, 4x4, 5x5, 3x3 Blindfolded, 3x3 Multi-Blind, 3x3 Fewest
            Moves, Pyraminx, Square-1.
        </p>
        <p>Complete details can be found at the registration link</p>
    </Event>
</div>

<Footer />
