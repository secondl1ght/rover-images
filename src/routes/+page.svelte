<script>
	import { onDestroy } from 'svelte';
	import { RoverAPI } from '$lib/wrapper/rover-api';
	import { clearSlideshow, roverImageTotal } from '$lib/store';
	import { PageLayout } from '$comp';

	const rover = new RoverAPI();

	$: $roverImageTotal && rover.iterate($roverImageTotal);

	onDestroy(() => $clearSlideshow && $clearSlideshow());
</script>

<PageLayout />
