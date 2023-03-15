<script lang="ts">
    export let url: string;
</script>

<style>
    h4 {
        margin: 0;
        padding: 0;
    }

    .btn {
        width: fit-content;
        display: flex;
        gap: 10px;
        
        padding: 5px 20px;
        margin-bottom: 5px;

        border-radius: 16px;
        color: black;
        background-color: #e2f1fb;
        text-decoration: none;
        font-weight: 900;
    }

    .arrow-back {
        rotate: 180deg;
        height: 20px;
        width: auto;
    }
</style>

<a class="btn" href="{url}">
    <img class="arrow-back" src="../icons/arrow_icon.png" alt="arrow"> 
    <h4>Terug</h4>  
</a>