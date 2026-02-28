<script lang="ts">
    import FrontScreen from "$lib/components/FrontScreen.svelte";
    import RulesIndex from "$lib/components/RulesIndex.svelte";
    import RuleView from "$lib/components/RuleView.svelte";

    let selectedRule = 3;

    function handleRuleSelect(ruleNumber: number) {
        selectedRule = ruleNumber;
    }
</script>

<FrontScreen />

<main class="rules-container">
    <RulesIndex onRuleSelected={handleRuleSelect} selectedRule={selectedRule} />
    <RuleView number={selectedRule} />
</main>

<style>

    .rules-container {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 2rem;
        padding: 2rem;
        max-width: 1400px;
        margin: 0 auto;
        width: 100%;
        box-sizing: border-box;
    }

    @media (max-width: 768px) {
        .rules-container {
            grid-template-columns: 1fr;
            gap: 1rem;
            padding: 1rem;
        }
    }
</style>