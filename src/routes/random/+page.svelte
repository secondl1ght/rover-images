<script>
	import { RoverAPI } from '$lib/wrapper/rover-api';
	import { PageLayout } from '$comp';
	import { roverImageTotal } from '$lib/store';

	const getRandomIntInclusive = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
	};

	const rover = new RoverAPI();

	$: $roverImageTotal && rover.index(getRandomIntInclusive(0, $roverImageTotal));
</script>

<svelte:head>
	<title>PERSEVERANCE - MARS ROVER - Random</title>
</svelte:head>

<PageLayout />
