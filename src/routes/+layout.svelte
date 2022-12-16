<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { RoverAPI } from '$lib/wrapper/rover-api';

	const rover = new RoverAPI();

	onMount(() => rover.info());
</script>

<slot />
