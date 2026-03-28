<script lang="ts">
	import { siteContent } from '$lib/data/content';
</script>

<section class="hero-content">
	{#each siteContent.heroSections as section (section.title)}
		<article>
			<h2>{section.title}</h2>
			<p>{section.text}</p>
		</article>
	{/each}
</section>

<style>
	.hero-content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex: 1;
		padding: clamp(1.5rem, 4vw, 3rem) clamp(1rem, 3vw, 1.5rem) clamp(2rem, 6vw, 4rem);
		gap: clamp(1.5rem, 4vw, 2.5rem);
	}

	article {
		max-width: 38rem;
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
			justify-content: flex-end;
		}
	}
</style>
