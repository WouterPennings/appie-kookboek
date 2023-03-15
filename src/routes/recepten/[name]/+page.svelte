<script lang="ts">
    export let data;
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    main {
        width: 100%;
        padding:  0 15px;
    }

    img {
        width: 100%;
    }
</style>


<main>
    <!-- This path feels very sketchy, this prob can be done differently -->
    <img src={"../"+data.data?.img_path[0]} alt="Hello">
    <h2>{data.data?.name}</h2>
</main>
