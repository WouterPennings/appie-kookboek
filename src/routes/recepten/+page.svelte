<script lang="ts">
    import Recipecard from "$lib/Recipecard.svelte";
    import { recipes } from "$lib/Recipe";
    import Backbtn from "$lib/Backbtn.svelte";

    const shuffle = ([...arr]) => {
        let m = arr.length;
        while (m) {
            const i = Math.floor(Math.random() * m--);
            [arr[m], arr[i]] = [arr[i], arr[m]];
        }
        return arr;
    };
</script>


<style>
    * {
        font-family: 'Raleway', sans-serif;
    }
    
    main {
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
    <Backbtn url="/"></Backbtn>

    <h2>Recepten</h2>
    Toevoegingen? Meld bij de <a href="/idee">de beheerder</a>
    <br><br>
    
    {#each shuffle(recipes) as recipe}
        <Recipecard recipe={recipe}></Recipecard>  
    {/each}

</main>

