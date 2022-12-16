<script>
	import { onDestroy } from 'svelte';
	import { Header, Footer, Image, LoadingSplash } from '$comp';
	import { roverImage } from '$lib/store';

	onDestroy(() => ($roverImage = undefined));
</script>

<main>
	{#if $roverImage}
		<Header />
		<Image />
		<Footer />
	{:else}
		<LoadingSplash />
	{/if}
</main>
