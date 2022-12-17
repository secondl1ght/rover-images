<script>
	import { roverImageTotal } from '$lib/store';

	const links = [
		{ title: 'NASA', url: 'https://www.nasa.gov/perseverance' },
		{ title: 'Wiki', url: 'https://wikiless.org/wiki/Perseverance_(rover)' },
		{ title: 'Twitter', url: 'https://twitter.com/nasapersevere' },
		{ title: 'Code', url: 'https://github.com/secondl1ght/rover-images' }
	];
</script>

<footer
	class="text-center md:text-left w-full md:h-40 border-t-8 border-black md:flex justify-between items-end p-4"
>
	<div class="uppercase font-bold text-sm">
		<p>Launch date: <span class="text-secondary">2020-07-30</span></p>
		<p>Landing date: <span class="text-secondary">2021-02-18</span></p>
		<p>
			Total images: <span class="text-secondary"
				>{$roverImageTotal ? $roverImageTotal : 'calculating...'}</span
			>
		</p>
	</div>

	<div class="space-x-4 mt-2 md:mt-0">
		{#each links as link}
			<a
				href={link.url}
				target="_blank"
				rel="noreferrer"
				class="border-b-2 border-secondary pb-1 hover:text-secondary font-bold">{link.title}</a
			>
		{/each}
	</div>
</footer>
