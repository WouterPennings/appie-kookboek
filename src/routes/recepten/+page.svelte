<script lang="ts">
    import Recipecard from "$lib/Recipecard.svelte";
    import { recipes } from "$lib/Recipe";
</script>


<style>
    * {
        font-family: 'Raleway', sans-serif;
    }
    
    main {
        width: 100%;
    }
    
    p, h1, h2, h3 {
        margin: 0;
        padding: 0;
    }

</style>

<main lang="ts">
    <h2>Recepten</h2>
    Toevoegingen? Meld bij de <a href="/idee">de beheerder</a>
    <br><br>
    
    {#each recipes as recipe}
        <Recipecard recipe={recipe}></Recipecard>  
    {/each}

</main>

