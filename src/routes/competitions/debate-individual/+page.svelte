<script>
    import '$src/app.css'
    import Event from '$src/lib/components/Event.svelte'
    import Navbar from '$src/lib/components/Navbar.svelte'
    import Footer from '$src/lib/components/Footer.svelte'

    const desc = `Every year, our quiz show event captivates participants with intriguing questions spanning a kaleidoscope
of categories. From the annals of history to the intricacies of pop culture; from scientific realms to
literary landscapes; prepare to put your knowledge to the test, as every obscure fact you've come across
will be called upon. This year, we are honoured to have eminent quizzer Major Chandrakant Nair as our
Quizmaster. Come join us for an exciting day of cerebral combat!`

    const key_rules = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    ]
</script>

<Navbar absolute={false} />

<div class="bg-white text-black">
    <Event name="Debate" {desc} {key_rules}>Quizzes are fun.</Event>
</div>

<Footer />
