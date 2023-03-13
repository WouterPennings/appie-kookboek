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
        margin-bottom: 10px;
    }

    img {
        width: 140px;
        border-radius: 16px;
        box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.185);
    }

    .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
        margin-left: 15px;
        text-align: start;
    }
</style>

<main>
    <!-- FIXME: Recipes could have multiple figures -->
    <img src={recipe.img_path[0]} alt={recipe.img_path[0]}>
    <div class="info">
        <h2>{recipe.name}</h2>
        <h4>{recipe.inventors.join(", ")}</h4>
    </div>
</main>