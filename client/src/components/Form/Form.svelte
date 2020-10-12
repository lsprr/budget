<script>
    import axios from 'axios';
    import { onMount } from 'svelte'
    let number = 0;
    let typeOfTransaction = '+';

    onMount(async() => {
        const {} = await axios.get('/api/budgets')
    })
</script>

<div class="field has-addons">
    <p class="control">
        <span class="select">
            <select bind:value={typeOfTransaction}>
                <option value="+">+</option>
                <option value="-">-</option>
            </select>
        </span>
    </p>
    <p class="control is-expanded">
        <input class="input" type="number" bind:value={number} placeholder="Amount of money">
    </p>
    <p class="control">
        <button class="button">
            Save
        </button>
    </p>
</div>