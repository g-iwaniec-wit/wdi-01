<script lang="ts">
    let { selectedRule = 3, onRuleSelected = () => {} } = $props();

    const rules = [
        'Visibility of System Status',
        'Match Between the System and the Real World',
        'User Control and Freedom',
        'Consistency and Standards',
        'Error Prevention',
        'Recognition Rather than Recall',
        'Flexibility and Efficiency of Use',
        'Aesthetic and Minimalist Design',
        'Help Users Recognize, Diagnose, and Recover from Errors',
        'Help and Documentation'
    ];

    function handleRuleClick(number: number) {
        onRuleSelected(number);
    }
</script>

<nav class="rules-nav">
    <h2>Reguły zasad heurystycznych</h2>
    <ol>
        {#each rules as rule, index}
            <li class="rule-item">
                <span class="rule-number">{index + 1}</span>
                <button
                    class="rule-button"
                    class:active={selectedRule === index + 1}
                    onclick={() => handleRuleClick(index + 1)}
                    aria-current={selectedRule === index + 1 ? 'true' : 'false'}
                >
                    {rule}
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
        top: 2rem;
    }

    .rule-number {
        font-weight: bold;
        color: #088F8F;
    }

    .rule-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    h2 {
        margin: 0 0 1rem 0;
        font-size: 1.25rem;
    }

    ol {
        margin: 0;
        padding-left: 0;
        list-style: none;
    }

    li {
        margin-bottom: 0.5rem;
    }

    .rule-button {
        width: 100%;
        text-align: left;
        padding: 0.75rem 1rem;
        border: none;
        background-color: transparent;
        cursor: pointer;
        border-radius: 4px;
        font-size: 1rem;
        color: #333;
    }

    .rule-button:hover {
        background-color: #f0f0f0;
    }

    .rule-button.active {
        border: 2px solid #333;
        font-weight: 500;
    }
</style>