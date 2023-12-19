<script lang="ts">
    export let showModal: boolean // boolean

    let dialog: HTMLDialogElement // HTMLDialogElement

    $: if (dialog && showModal) dialog.showModal()
</script>

<dialog class="modal z-20 overflow-hidden" bind:this={dialog} on:close={() => (showModal = false)}>
    <slot name="header" />
    <slot />
</dialog>
