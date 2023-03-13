<script lang="ts">
    export let subtitle: string;
    export let text: string;
    export let img_path: string;
</script>

<style>
    h1, h2, h3, h4, p {
        text-align: center;
        margin: 0;
    }

    .subsubtitle {
        display:flex; 
        justify-content: center;
        align-items: center; 
        gap: 10px; 

        margin-top: 15px;
        margin-bottom: 5px;
        text-align: center;
        font-weight: 700;
        color: #ff7900;
    }
</style>

<div class="subsubtitle">
    <img src={img_path} alt="carrot_icon" width="24px">
    <h3>{subtitle}</h3>
</div>
<p>{text}</p>