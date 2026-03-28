<script>
	import Header from './Header.svelte';
	import Hero from './Hero.svelte';
</script>

<section class="front-screen" aria-labelledby="page-title">
	<Header />
	<Hero />
</section>

<style>
	.front-screen {
		display: flex;
		flex-direction: column;
	}

	@media (max-width: 640px) {
		.front-screen {
			justify-content: flex-start;
			padding-block: clamp(1rem, 3svh, 2rem);
		}
	}
</style>
