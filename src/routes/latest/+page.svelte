<script>
	import { onMount } from 'svelte';
	import { RoverAPI } from '$lib/wrapper/rover-api';
	import { PageLayout } from '$comp';

	const rover = new RoverAPI();
	onMount(() => rover.latest());
</script>

<PageLayout />
