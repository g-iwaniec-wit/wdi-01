<script lang="ts">
	import { siteContent } from '$lib/data/content';
</script>

<header>
	<h1 id="page-title">{siteContent.title}</h1>
</header>

<style>
	header {
		padding: clamp(1rem, 3vw, 1.5rem);
		background-color: transparent;
	}

	h1 {
		margin: 0;
		font-size: clamp(2rem, 6vw, 4rem);
		line-height: 0.95;
	}
</style>
