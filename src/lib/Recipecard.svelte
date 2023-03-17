<script lang="ts">
    import type { Recipe } from "./Recipe";
    import Tag from "$lib/Tag.svelte";

	export let recipe: Recipe;
</script>

<style>
    h3, h4 {
        margin: 0;
        padding: 0;
    }

    h4 {
        color: gray;
        font-size: small;
    }

    a {
        text-decoration: none;
        display: flex;
        justify-content: start;
        margin-bottom: 20px;
        color: black
    }

    img {
        width: 15px;
    }
    
    .info {
        display: flex;
        flex-direction: column;
        justify-content: start;
        gap: 5px;
        margin-left: 15px;
        text-align: start;
    }

    .card_img {
        width: 130px;
        height: auto;
        border-radius: 16px;
        box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.164);
    }

    .tags {
        display: flex;
        justify-content: start;
        gap: 5px;
    }
</style>

<a href={"/recepten/"+recipe.name} lang="ts">
    <!-- FIXME: Recipes could have multiple figures -->
    <img class="card_img" src={recipe.img_path[0]} alt={recipe.img_path[0]} loading="lazy">
    <div class="info">
        <div>
            <h3>{recipe.name}</h3>
            <h4>{recipe.inventors.join(", ")}</h4>
        </div>

        <div class="tags">
            {#if recipe.microwave}
                <Tag class_name="utility_label" path="icons/microwave_icon.png" label_name="Magnetron"></Tag>
            {/if}

            {#if recipe.airfryer}
                <Tag class_name="utility_label" path="icons/airfryer_icon.png" label_name="Airfryer"></Tag>
            {/if}

            {#if recipe.pan}
                <Tag class_name="utility_label" path="icons/pan_icon.png" label_name="Pan"></Tag>            
            {/if}
        </div>

        <div class="tags">
            {#if recipe.vegan}
                <Tag class_name="veg_label" path="../icons/vegan_icon.png" label_name="Vegan"></Tag>
            {:else if recipe.vega}
                <Tag class_name="veg_label" path="../icons/vegatarian_icon.png" label_name="Vegatarisch"></Tag>
            {:else}
                {#if recipe.meat}
                    <Tag class_name="meat_label" path="../icons/meat_icon.png" label_name="Vlees"></Tag>
                {/if}
            
                {#if recipe.fish}
                    <Tag class_name="fish_label" path="../icons/fish_icon.png" label_name="Vis"></Tag>
                {/if}
            {/if}
        </div>
    </div>
</a>