<script lang="ts">
	import { siteContent } from '$lib/data/content';
	import { getRule } from '$lib/data/rules';

	let { number }: { number: number } = $props();
	const rule = $derived(getRule(number));
</script>

<article class="rule-view" id="rule-view">
	{#if rule}
		<h2>{rule.number}. {rule.title}</h2>

		<section class="content">
			{#if rule.content.length}
				{#each rule.content as paragraph (paragraph.text)}
					<p>{paragraph.text}</p>
				{/each}
			{:else}
				<p>{siteContent.emptyRule}</p>
			{/if}
		</section>

		{#if rule.images.length}
			<section class="images">
				{#each rule.images as image (image.src)}
					<figure class="image">
						<img src={image.src} alt={image.alt} loading="lazy" />
						<figcaption>{image.caption}</figcaption>
					</figure>
				{/each}
			</section>
		{/if}
	{:else}
		<p>{siteContent.missingRule}</p>
	{/if}
</article>

<style>
	.rule-view {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		min-width: 0;
	}

	h2 {
		margin: 0 0 1rem 0;
		font-size: clamp(1.5rem, 4vw, 1.75rem);
		border-bottom: 1px solid var(--color-border);
		padding-bottom: 0.5rem;
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	p {
		line-height: 1.6;
		color: var(--color-text-soft);
	}

	.images {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1.5rem;
		margin-top: 1rem;
	}

	figure {
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	img {
		width: 100%;
		aspect-ratio: 4 / 3;
		height: auto;
		border-radius: 0.75rem;
		object-fit: contain;
		background-color: var(--color-surface-hover);
	}

	figcaption {
		font-size: 0.9rem;
		color: var(--color-text-soft);
		text-align: center;
	}

	@media (max-width: 768px) {
		.images {
			grid-template-columns: 1fr;
		}
	}
</style>
