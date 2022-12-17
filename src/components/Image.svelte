<script>
	import { page } from '$app/stores';
	import tippy, { followCursor } from 'tippy.js';
	import { roverImage, fetchInterval } from '$lib/store';

	let image;

	const setTooltip = () => {
		// clean up outdated tippy
		if (image._tippy) {
			image._tippy.destroy();
		}

		tippy(image, {
			content: `<p>sol: ${$roverImage.metadata.sol}</p>
      <p>earth_date: ${$roverImage.metadata['earth_date']}</p>`,
			allowHTML: true,
			arrow: false,
			followCursor: true,
			plugins: [followCursor],
			theme: 'translucent'
		});
	};

	$: image && $roverImage && setTooltip();

	const timeButtons = [
		{ title: '1s', time: 1000 },
		{ title: '10s', time: 10000 },
		{ title: '30s', time: 30000 },
		{ title: '1m', time: 60000 }
	];

	const changeInterval = (time) => {
		$fetchInterval = time;
	};
</script>

<div class="relative">
	<a href={`/${$roverImage.index}`}>
		<img
			id="rover-image"
			bind:this={image}
			src={$roverImage.images.base64}
			alt="rover image from mars"
			class="w-full cursor-crosshair"
		/>
	</a>

	<p
		class="text-secondary font-bold text-lg absolute {$page.url.pathname === '/'
			? 'bottom-[100px] md:bottom-5'
			: 'bottom-5'} right-5"
	>
		{parseInt($roverImage.index) + 1}
	</p>

	{#if $page.url.pathname === '/'}
		<div
			class="bg-black md:bg-black/0 py-4 md:py-0 flex justify-center items-center md:block md:absolute bottom-10 left-[calc(50vw-190px)] space-x-4"
		>
			{#each timeButtons as button}
				<button
					on:click={() => changeInterval(button.time)}
					class="border-4 border-black w-[50px] md:w-[75px] py-2 bg-primary font-bold rounded hover:text-secondary hover:border-secondary {$fetchInterval ===
					button.time
						? 'border-secondary text-secondary'
						: ''}">{button.title}</button
				>
			{/each}
		</div>
	{/if}
</div>

<style>
	@import 'tippy.js/dist/tippy.css';
	@import 'tippy.js/themes/translucent.css';
</style>
