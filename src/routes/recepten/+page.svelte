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
        margin: 0 15px;
    }
    
    h2 {
        margin: 0;
        padding: 0;
    }

</style>

<svelte:head>
   <title>Appie Kookboek | Recepten</title>
</svelte:head>

<main lang="ts">
    <h2>Recepten</h2>
    Toevoegingen? Meld bij de <a href="/idee">de beheerder</a>
    <br><br>
    
    {#each recipes as recipe}
        <Recipecard recipe={recipe}></Recipecard>  
    {/each}

</main>

