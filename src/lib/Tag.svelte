<script lang="ts">
    export let class_name: string;
    export let path: string;
    export let label_name: string;
</script>

<style>
    label {
        display: flex;
        align-items: center;

        width: min-content;
        padding: 1px 6px;
        border-radius: 16px;
        font-weight: 700;
        font-size: 0.9em;
    }
    
    img {
        width: 15px;
    }

    .veg_label {
        border: 2px #40c057 solid;
        color: #236b30;
    }

    .meat_label {
        border: 2px #fa5252 solid;
        color: #b33b3b;
    }

    .fish_label {
        border: 2px #22c3e6 solid;
        color: #167a91;
    }

    .utility_label {
        border: 2px #4d4d4d solid;
        color: #252525;
    }
</style>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class={class_name}>
    <img src={path} alt={path}> {label_name}
</label>