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
		min-height: 100svh;
		display: flex;
		flex-direction: column;
	}
</style>
