<script lang="ts">
	import { siteContent } from '$lib/data/content';
</script>

<section class="hero-content" aria-label="Wprowadzenie">
	{#each siteContent.heroSections as section (section.title)}
		<section class="hero-section">
			<h2>{section.title}</h2>
			<p>{section.text}</p>
		</section>
	{/each}
</section>

<style>
	.hero-content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
		width: 100%;
		padding: clamp(1.5rem, 4vw, 3rem) clamp(1rem, 3vw, 1.5rem) clamp(2rem, 6vw, 4rem);
		gap: clamp(1.5rem, 4vw, 2.5rem);
	}

	.hero-section {
		width: min(100%, 38rem);
		max-width: 38rem;
		text-align: center;
	}

	h2 {
		margin-bottom: 0.75rem;
		font-size: clamp(1.25rem, 3vw, 1.75rem);
	}

	p {
		line-height: 1.6;
		color: var(--color-text-soft);
	}

	@media (max-width: 640px) {
		.hero-content {
			flex: initial;
			justify-content: flex-start;
			align-items: flex-start;
			padding: clamp(1rem, 3svh, 1.5rem) clamp(1rem, 5vw, 1.5rem) 0;
			gap: clamp(1.25rem, 4vw, 2rem);
		}

		.hero-section {
			width: 100%;
			text-align: left;
		}
	}
</style>
