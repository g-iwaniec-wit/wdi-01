<script lang="ts">
	import { siteContent } from '$lib/data/content';
	import { getRule, getRulePanelId, getRuleTabId } from '$lib/data/rules';

	let { number }: { number: number } = $props();
	const rule = $derived(getRule(number));
	const panelId = $derived(getRulePanelId(number));
	const tabId = $derived(getRuleTabId(number));
</script>

<div class="rule-view" id={panelId} role="tabpanel" aria-labelledby={tabId} tabindex="0">
	{#if rule}
		<h2 class="rule-title">{rule.number}. {rule.title}</h2>

		<div class="content">
			{#if rule.content.length}
				{#each rule.content as paragraph (paragraph.text)}
					<p>{paragraph.text}</p>
				{/each}
			{:else}
				<p>{siteContent.emptyRule}</p>
			{/if}
		</div>

		{#if rule.images.length}
			<div class="images">
				{#each rule.images as image (image.src)}
					<figure class="image">
						<img src={image.src} alt={image.alt} loading="lazy" />
						<figcaption>{image.caption}</figcaption>
					</figure>
				{/each}
			</div>
		{/if}
	{:else}
		<p>{siteContent.missingRule}</p>
	{/if}
</div>

<style>
	.rule-view {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		min-width: 0;
	}

	.rule-title {
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
		border: 1px solid var(--color-border);
		object-fit: contain;
		background-color: var(--color-surface-hover);
	}

	figcaption {
		font-size: 0.89rem;
		color: var(--color-text-soft);
		text-align: center;
	}

	@media (max-width: 768px) {
		.content {
			gap: 1.125rem;
		}

		p {
			font-size: 1.05rem;
			line-height: 1.75;
			color: var(--color-text);
		}

		.images {
			grid-template-columns: 1fr;
			margin-top: 0.75rem;
			gap: 1.75rem;
			justify-items: center;
		}

		figure {
			width: 100%;
			align-items: center;
			gap: 0.85rem;
		}

		img {
			width: min(100%, 24rem);
			aspect-ratio: auto;
			margin-block: 0.25rem;
		}

		figcaption {
			width: 100%;
			font-size: 0.88rem;
			line-height: 1.5;
			color: var(--color-text-soft);
			opacity: 0.78;
			text-align: center;
		}
	}

	@media (max-width: 1024px) {
		.rule-title {
			position: absolute;
			width: 1px;
			height: 1px;
			padding: 0;
			margin: -1px;
			overflow: hidden;
			clip: rect(0, 0, 0, 0);
			white-space: nowrap;
			border: 0;
		}

		.rule-view {
			gap: 1rem;
		}
	}
</style>
