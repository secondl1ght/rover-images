<script>
	/** @type {import('./$types').PageData} */
	export let data;

	import { browser } from '$app/environment';
	import { RoverAPI } from '$lib/wrapper/rover-api';
	import { PageLayout } from '$comp';
	import { roverImageTotal } from '$lib/store';

	const validateIndex = () => {
		if (data.index >= 0 && data.index <= $roverImageTotal) {
			const rover = new RoverAPI();
			rover.index(data.index);
		} else {
			browser && window.alert('Invalid index.');
		}
	};

	$: $roverImageTotal && validateIndex();
</script>

<svelte:head>
	<title>PERSEVERANCE - MARS ROVER - Index {data.index}</title>
</svelte:head>

<PageLayout />
