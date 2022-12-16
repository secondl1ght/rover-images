<script>
	import { page } from '$app/stores';
	import { Robot } from '$comp';

	const nav = [
		{ title: 'Slideshow', url: '/' },
		{ title: 'Latest', url: '/latest' },
		{ title: 'Random', url: '/random' }
	];

	const reloadPage = (path) => {
		if ($page.url.pathname === path) {
			location.reload();
		}
	};
</script>

<header
	class="text-center md:text-left w-full pb-[112px] md:pb-0 md:h-40 border-b-8 border-black md:flex justify-between p-4"
>
	<div class="uppercase font-bold">
		<h1 class="text-3xl md:text-5xl">Perseverance</h1>
		<p class="text-secondary text-xl">Mars rover</p>
		<p class="text-xs">
			Front Hazard Avoidance Camera <span class="hidden md:inline"> - Left</span>
		</p>
	</div>

	<Robot style="absolute top-[152px] md:top-16 left-[calc(50vw-64px)] md:left-[calc(50vw-104px)]" />

	<nav class="space-x-4 mt-2 md:mt-0">
		{#each nav as link}
			<a
				on:click={() => reloadPage(link.url)}
				href={link.url}
				class="hover:text-secondary font-bold md:text-lg {$page.url.pathname === link.url
					? 'border-b-4 border-secondary pb-1'
					: ''}">{link.title}</a
			>
		{/each}
	</nav>
</header>
