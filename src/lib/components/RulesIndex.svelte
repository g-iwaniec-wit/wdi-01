<script lang="ts">
	import { siteContent } from '$lib/data/content';
	import { defaultRuleNumber, getRulePanelId, getRuleTabId, rules } from '$lib/data/rules';

	type Props = {
		selectedRule?: number;
		onRuleSelected: (ruleNumber: number) => void;
	};

	let { selectedRule = defaultRuleNumber, onRuleSelected }: Props = $props();

	const selectRule = (ruleNumber: number) => onRuleSelected(ruleNumber);

	const focusRuleTab = (ruleNumber: number) => {
		document.getElementById(getRuleTabId(ruleNumber))?.focus();
	};

	const getAdjacentRuleNumber = (currentRuleNumber: number, direction: 1 | -1) => {
		const currentIndex = rules.findIndex((rule) => rule.number === currentRuleNumber);
		const adjacentIndex = (currentIndex + direction + rules.length) % rules.length;

		return rules[adjacentIndex]?.number ?? currentRuleNumber;
	};

	const handleRuleKeydown = (event: KeyboardEvent, currentRuleNumber: number) => {
		let nextRuleNumber = currentRuleNumber;

		switch (event.key) {
			case 'ArrowDown':
			case 'ArrowRight':
				nextRuleNumber = getAdjacentRuleNumber(currentRuleNumber, 1);
				break;
			case 'ArrowUp':
			case 'ArrowLeft':
				nextRuleNumber = getAdjacentRuleNumber(currentRuleNumber, -1);
				break;
			case 'Home':
				nextRuleNumber = rules[0]?.number ?? currentRuleNumber;
				break;
			case 'End':
				nextRuleNumber = rules.at(-1)?.number ?? currentRuleNumber;
				break;
			default:
				return;
		}

		event.preventDefault();
		selectRule(nextRuleNumber);
		queueMicrotask(() => focusRuleTab(nextRuleNumber));
	};
</script>

<section class="rules-nav" aria-labelledby="rules-heading">
	<h2 id="rules-heading" class="rules-heading">{siteContent.rulesHeading}</h2>

	<div class="rules-select-wrap">
		<label class="visually-hidden" for="rules-select">{siteContent.rulesHeading}</label>
		<div class="select-shell">
			<select
				id="rules-select"
				class="rules-select"
				value={selectedRule}
				onchange={(event) => selectRule(Number((event.currentTarget as HTMLSelectElement).value))}
				aria-controls={getRulePanelId(selectedRule)}
			>
				{#each rules as rule (rule.number)}
					<option value={rule.number}>{rule.number}. {rule.title}</option>
				{/each}
			</select>
		</div>
	</div>

	<ol class="rules-list" role="tablist" aria-labelledby="rules-heading" aria-orientation="vertical">
		{#each rules as rule (rule.number)}
			<li class="rule-item" role="presentation">
				<button
					class="rule-button"
					class:active={selectedRule === rule.number}
					id={getRuleTabId(rule.number)}
					role="tab"
					type="button"
					onclick={() => selectRule(rule.number)}
					onkeydown={(event) => handleRuleKeydown(event, rule.number)}
					aria-selected={selectedRule === rule.number}
					aria-controls={getRulePanelId(rule.number)}
					tabindex={selectedRule === rule.number ? 0 : -1}
				>
					<span class="rule-number">{rule.number}</span>
					<span>{rule.title}</span>
				</button>
			</li>
		{/each}
	</ol>
</section>

<style>
	.rules-nav {
		display: flex;
		flex-direction: column;
		height: fit-content;
		position: sticky;
		top: clamp(1rem, 3vw, 2rem);
	}

	.rules-nav::before {
		content: none;
	}

	.rules-select-wrap {
		display: none;
	}

	.select-shell {
		position: relative;
	}

	.select-shell::after {
		content: '';
		position: absolute;
		top: 50%;
		right: 1rem;
		width: 0.65rem;
		height: 0.65rem;
		border-right: 2px solid var(--color-accent);
		border-bottom: 2px solid var(--color-accent);
		transform: translateY(-65%) rotate(45deg);
		pointer-events: none;
	}

	.rules-select {
		width: 100%;
		appearance: none;
		border: 1px solid var(--color-border);
		border-radius: 1.25rem;
		background: var(--color-background);
		color: var(--color-text);
		padding: 1.15rem 3.5rem 1.15rem 1.25rem;
		font: inherit;
		font-weight: 600;
		font-size: 1.05rem;
		line-height: 1.3;
		box-shadow: var(--shadow-soft);
	}

	.rules-select:focus-visible {
		outline: 3px solid var(--color-focus);
		outline-offset: 2px;
	}

	.rule-number {
		font-weight: 700;
		color: var(--color-accent);
		font-variant-numeric: tabular-nums;
	}

	.rule-item {
		margin-bottom: 0.5rem;
	}

	.rules-heading {
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

	@media (max-width: 1024px) {
		.rules-nav {
			top: 0;
			z-index: 10;
			padding: 0.5rem 0 0.75rem;
			background: var(--color-background);
		}

		.rules-nav::before {
			content: '';
			position: absolute;
			inset: 0;
			left: 50%;
			width: 100vw;
			transform: translateX(-50%);
			background: var(--color-background);
			z-index: -1;
		}

		.rules-list {
			display: none;
		}

		.rules-heading {
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

		.rules-select-wrap {
			display: block;
		}
	}
</style>
