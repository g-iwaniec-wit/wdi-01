<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import FrontScreen from '$lib/components/FrontScreen.svelte';
	import RulesIndex from '$lib/components/RulesIndex.svelte';
	import RuleView from '$lib/components/RuleView.svelte';
	import { defaultRuleNumber } from '$lib/data/rules';

	let selectedRule = defaultRuleNumber;
</script>

<main class="page-content">
	<FrontScreen />

	<section class="rules-container" aria-labelledby="rules-heading">
		<RulesIndex
			onRuleSelected={(ruleNumber: number) => (selectedRule = ruleNumber)}
			{selectedRule}
		/>
		<RuleView number={selectedRule} />
	</section>
</main>

<Footer />

<style>
	.page-content {
		display: flex;
		flex-direction: column;
	}

	.rules-container {
		display: grid;
		grid-template-columns: minmax(16rem, 24rem) minmax(0, 1fr);
		gap: clamp(1.25rem, 2vw, 2rem);
		padding: clamp(1rem, 3vw, 2rem);
		max-width: 80rem;
		margin: 0 auto;
		width: 100%;
	}

	@media (max-width: 1024px) {
		.rules-container {
			grid-template-columns: 1fr;
			margin-top: clamp(1.25rem, 4vw, 2rem);
		}
	}
</style>
