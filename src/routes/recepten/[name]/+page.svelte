<script lang="ts">
    import Backbtn from '$lib/Backbtn.svelte';
    import type { Recipe } from '$lib/Recipe';
    import Tag from '$lib/Tag.svelte';
    import { error } from '@sveltejs/kit';


    export let data;
    if(data.data == undefined) {
        throw error(404, {
            message: 'Not found'
        });
    }

    let recipe = data.data as Recipe;
</script>

<style>
    ol, ul {
        margin-top: 0;
    }

    p, h2, h3, h4 {
        margin: 0;
        padding: 0;
    }

    main {
        padding:  0 15px;
    }

    img {
        width: 100%;
        border-radius: 16px;
    }
    
    .inventors {
        color: gray;
        margin-bottom: 10px;
    }

    .tags {
        display: flex;
        gap: 5px;
    }
</style>


<main>
    <Backbtn url="/recepten"></Backbtn>

    <!-- This path feels very sketchy, this prob can be done differently -->
    <img src={"../"+recipe.img_path[0]} alt="Hello">
    <h2>{recipe.name}</h2>
    <h4 class="inventors">{recipe.inventors.join(", ")}</h4>

    <div class="tags">
        {#if recipe.microwave}
            <Tag class_name="utility_label" path="../icons/microwave_icon.png" label_name="Magnetron"></Tag>
        {/if}
        
        {#if recipe.airfryer}
            <Tag class_name="utility_label" path="../icons/airfryer_icon.png" label_name="Airfryer"></Tag>
        {/if}
        
        {#if recipe.pan}
            <Tag class_name="utility_label" path="../icons/pan_icon.png" label_name="Pan"></Tag>            
        {/if}
        {#if recipe.vegan}
            <Tag class_name="veg_label" path="../icons/vegan_icon.png" label_name="Vegan"></Tag>
        {:else if recipe.vega}
            <Tag class_name="veg_label" path="../icons/vegan_icon.png" label_name="Vegan"></Tag>
        {:else}
            {#if recipe.meat}
                <Tag class_name="meat_label" path="../icons/meat_icon.png" label_name="Vlees"></Tag>
            {/if}
        
            {#if recipe.fish}
                <Tag class_name="fish_label" path="../icons/fish_icon.png" label_name="Vis"></Tag>
            {/if}
        {/if}
    </div>
    <br>
    <h3>Hoofd Ingredienten</h3>
    <ol>
        {#each recipe.main_ingredients as ingredient}
            <li>{ingredient.name}</li>
            {#if Array.isArray(ingredient.options)} 
                <ul>
                    {#each ingredient.options as opt}
                        <li>{opt}</li>
                    {/each}
                </ul>
            {/if}
        {/each}
    </ol>

    <h3>Toppings</h3>
    <ul>
        {#each recipe.topings as toping}
            <li>{toping.name}</li>
            {#if Array.isArray(toping.options)} 
            <ul>
                {#each toping.options as opt}
                    <li>{opt}</li>
                {/each}
            </ul>
        {/if}
        {/each}
    </ul>

    {#if recipe.description != undefined}
        <h3>Uitleg</h3>
        {#if Array.isArray(recipe.description)}
            {#each recipe.description as paragraph}
                <p>{paragraph}</p>
                <br>
            {/each}
        {:else}
            <p>{recipe.description}</p>
        {/if}
    {/if}
</main>
