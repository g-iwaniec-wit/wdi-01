<script lang="ts">
    import { getRule } from '$lib/data/rules';
    export let number: number;

    $: ruleData = getRule(number);
</script>

<article class="rule-view">
    {#if ruleData}
        <h2>{ruleData.number}. {ruleData.title}</h2>

        <section class="content">
            {#if ruleData.contentEN}
                <p>{ruleData.contentEN}</p>
            {/if}
            {#if ruleData.contentPL}
                <p>{ruleData.contentPL}</p>
            {/if}
        </section>

        {#if ruleData.image1Url || ruleData.image2Url}
            <section class="images">
                {#if ruleData.image1Url}
                    <figure class="image">
                        <img src={ruleData.image1Url} alt={ruleData.image1Description} />
                        <figcaption>{ruleData.image1Description}</figcaption>
                    </figure>
                {/if}
                {#if ruleData.image2Url}
                    <figure class="image">
                        <img src={ruleData.image2Url} alt={ruleData.image2Description} />
                        <figcaption>{ruleData.image2Description}</figcaption>
                    </figure>
                {/if}
            </section>
        {/if}
    {:else}
        <p>Reguła nie została znaleziona.</p>
    {/if}
</article>

<style>
    .rule-view {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    h2 {
        margin: 0 0 1rem 0;
        font-size: 1.75rem;
        border-bottom: 2px solid #FFF;
        padding-bottom: 0.5rem;
    }

    .content {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    p {
        margin: 0;
        line-height: 1.6;
        color: #444;
    }

    .images {
        display: grid;
        grid-template-columns: 1fr 1fr;
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
        height: auto;
        border-radius: 4px;
        object-fit: cover;
    }

    figcaption {
        font-size: 0.9rem;
        color: #666;
        text-align: center;
    }

    @media (max-width: 768px) {
        .images {
            grid-template-columns: 1fr;
        }

        h2 {
            font-size: 1.5rem;
        }
    }
</style>