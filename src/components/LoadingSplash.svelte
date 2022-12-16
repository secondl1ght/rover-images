<script>
	import { Robot } from '$comp';
</script>

<div class="loading space-y-4">
	<Robot style="mx-auto" />

	<p class="uppercase font-bold text-center text-3xl">
		Loading images from <span class="text-secondary">Mars...</span>
	</p>
</div>

<style>
	.loading {
		position: absolute;
		top: 50%;
		left: 50%;
		-moz-transform: translateX(-50%) translateY(-50%);
		-webkit-transform: translateX(-50%) translateY(-50%);
		transform: translateX(-50%) translateY(-50%);
	}
</style>
