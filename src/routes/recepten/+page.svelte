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
        margin-top: 30px;
    }
    
    p, h1, h2, h3 {
        margin: 0;
        padding: 0;
    }

</style>

<main lang="ts">
    <h1>Recepten</h1>
    <br>
    Hieronder staan alle recepten weergeven van dit kookboek. 
    Helaas heeft de website niet van elke recept een originele foto in bezit. 
    Als je een van deze recepten maakt dan mag je de foto altijd sturen naar <a href="/idee">de beheerder</a>
    <br><br><br>
    
    {#each recipes as recipe}
        <Recipecard recipe={recipe}></Recipecard>  
    {/each}

</main>

