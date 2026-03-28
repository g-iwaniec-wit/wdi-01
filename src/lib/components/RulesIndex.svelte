<script lang="ts">
	import { siteContent } from '$lib/data/content';
	import { defaultRuleNumber, rules } from '$lib/data/rules';

	let {
		selectedRule = defaultRuleNumber,
		onRuleSelected
	}: { selectedRule?: number; onRuleSelected: (ruleNumber: number) => void } = $props();
</script>

<nav class="rules-nav">
	<h2 id="rules-heading">{siteContent.rulesHeading}</h2>
	<ol>
		{#each rules as rule (rule.number)}
			<li class="rule-item">
				<button
					class="rule-button"
					class:active={selectedRule === rule.number}
					type="button"
					onclick={() => onRuleSelected(rule.number)}
					aria-pressed={selectedRule === rule.number}
					aria-controls="rule-view"
				>
					<span class="rule-number">{rule.number}</span>
					<span>{rule.title}</span>
				</button>
			</li>
		{/each}
	</ol>
</nav>

<style>
	.rules-nav {
		display: flex;
		flex-direction: column;
		height: fit-content;
		position: sticky;
		top: clamp(1rem, 3vw, 2rem);
	}

	.rule-number {
		font-weight: 700;
		color: var(--color-accent);
		font-variant-numeric: tabular-nums;
	}

	.rule-item {
		margin-bottom: 0.5rem;
	}

	h2 {
		margin: 0 0 1rem 0;
		font-size: 1.25rem;
	}

	ol {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.rule-button {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 0.75rem;
		text-align: left;
		padding: 0.75rem 1rem;
		border: 1px solid transparent;
		background-color: transparent;
		cursor: pointer;
		border-radius: 0.75rem;
		font-size: 1rem;
		color: var(--color-text);
		transition:
			background-color 0.2s ease,
			border-color 0.2s ease,
			transform 0.2s ease;
	}

	.rule-button:hover {
		background-color: var(--color-surface-hover);
	}

	.rule-button.active {
		border-color: var(--color-border-strong);
		background-color: var(--color-surface-hover);
		font-weight: 600;
	}

	.rule-button:focus-visible {
		outline: 3px solid var(--color-focus);
		outline-offset: 2px;
	}

	@media (max-width: 768px) {
		.rules-nav {
			position: static;
		}
	}
</style>
