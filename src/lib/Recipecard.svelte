<script lang="ts">
    import type { Recipe } from "./Recipe";

	export let recipe: Recipe;
</script>

<style>
    p, h1, h2, h3, h4 {
        margin: 0;
        padding: 0;
    }

    h4 {
        color: gray;
    }

    main {
        display: flex;
        justify-content: start;
        margin-bottom: 20px;
    }

    img {
        width: 20px;
    }

    label {
        display: flex;
        align-items: center;

        width: min-content;
        padding: 1px 6px;
        border-radius: 16px;
        font-weight: 700;
        font-size: 0.9em;
    }

    .info {
        display: flex;
        flex-direction: column;
        justify-content: start;
        gap: 5px;
        margin-left: 15px;
        text-align: start;
    }

    .veg_label {
        border: 2px #40c057 solid;
        color: #236b30;
    }

    .meat_label {
        border: 2px #fa5252 solid;
        color: #b33b3b;
    }

    .fish_label {
        border: 2px #22c3e6 solid;
        color: #167a91;
    }

    .utility_label {
        border: 2px #4d4d4d solid;
        color: #252525;
    }

    .card_img {
        width: 140px;
        border-radius: 16px;
        box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.185);
    }

    .labels {
        display: flex;
        justify-content: start;
        gap: 5px;
    }
</style>

<main lang="ts">
    <!-- FIXME: Recipes could have multiple figures -->
    <img class="card_img" src={recipe.img_path[0]} alt={recipe.img_path[0]}>
    <div class="info">
        <div>
            <h2>{recipe.name}</h2>
            <h4>{recipe.inventors.join(", ")}</h4>
        </div>

        <div class="labels">
            {#if recipe.microwave}
                <label class="utility_label" for=""><img src="icons/microwave_icon.png" alt="fish_icon.png"> Magnetron</label>
            {/if}

            {#if recipe.airfryer}
                <label class="utility_label" for=""><img src="icons/airfryer_icon.png" alt="fish_icon.png"> Airfryer</label>
            {/if}

            {#if recipe.pan}
                <label class="utility_label" for=""><img src="icons/pan_icon.png" alt="fish_icon.png"> Pan</label>
            {/if}
        </div>

        <div class="labels">
            {#if recipe.vegan}
                <label class="veg_label" for=""><img src="icons/vegan_icon.png" alt="vegan_icon.png"> Vegan</label>
            {:else if recipe.vega}
                <label class="veg_label" for=""><img src="icons/vegatarian_icon.png" alt="vegatarian_icon.png"> Vegatarisch</label>
            {:else}
                {#if recipe.meat}
                    <label class="meat_label" for=""><img src="icons/meat_icon.png" alt="meat_icon.png"> Vless</label>
                {/if}

                {#if recipe.fish}
                    <label class="fish_label" for=""><img src="icons/fish_icon.png" alt="fish_icon.png"> Vis</label>
                {/if}
            {/if}
        </div>
    </div>
</main>