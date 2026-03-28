<script lang="ts">
	import FrontScreen from '$lib/components/FrontScreen.svelte';
	import RulesIndex from '$lib/components/RulesIndex.svelte';
	import RuleView from '$lib/components/RuleView.svelte';
	import { defaultRuleNumber } from '$lib/data/rules';

	let selectedRule = defaultRuleNumber;
</script>

<FrontScreen />

<main class="rules-container">
	<RulesIndex onRuleSelected={(ruleNumber: number) => (selectedRule = ruleNumber)} {selectedRule} />
	<RuleView number={selectedRule} />
</main>

<style>
	.rules-container {
		display: grid;
		grid-template-columns: minmax(16rem, 24rem) minmax(0, 1fr);
		gap: clamp(1.25rem, 2vw, 2rem);
		padding: clamp(1rem, 3vw, 2rem);
		max-width: 80rem;
		margin: 0 auto;
		width: 100%;
	}

	@media (max-width: 768px) {
		.rules-container {
			grid-template-columns: 1fr;
		}
	}
</style>
