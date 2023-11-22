<script lang="ts">
    import '$src/app.css'
    import Event from '$src/lib/components/Event.svelte'
    import Navbar from '$src/lib/components/Navbar.svelte'
    import Footer from '$src/lib/components/Footer.svelte'

    const key_rules: string[] = []

    const details = {
        cost: 'INR 200 per person',
        deadline: 'TBD',
        date: ' 28th January, 2024 ',
        venue: ' Auditorium, CMI'
    }

    const rules_pdf = ''
    const image = '/events/quiz.webp'
    const register = ''

    const contacts = [
        { name: 'Ananya Sinha', email: 'ananyas.mds2023@cmi.ac.in' },
        { name: 'Alena Maria Thomas', email: 'alena.mds2023@cmi.ac.in' }
    ]
</script>

<Navbar absolute={false} />

<Event name="Quiz" {key_rules} {details} {rules_pdf} {image} {register} {contacts}>
    <p>
        Every year, our quiz show event captivates participants with intriguing questions spanning a
        kaleidoscope of categories. From the annals of history to the intricacies of pop culture;
        from scientific realms to literary landscapes; prepare to put your knowledge to the test, as
        every obscure fact you've come across will be called upon. <br /> This year, we are honoured
        to have eminent quizzer <span class="font-bold">Major Chandrakant Nair</span> as our Quizmaster.
        Come join us for an exciting day of cerebral combat!
    </p>
</Event>

<Footer />
