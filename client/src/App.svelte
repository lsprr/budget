<script>
    // TODO: Typescript
    import { onMount } from 'svelte'
    import axios from 'axios'
    import Balance from './components/Balance.svelte'
    import Transaction from './components/Transaction.svelte'
    import Loading from './components/Loading.svelte'
    import {
        transactions,
        sortedTransactions,
        balance,
        income,
        expenses,
    } from './stores'

    let description = null
    let amount = null
    let typeOfTransaction = '+'
    let loading = false

    $: disabled = !amount

    onMount(async () => {
        loading = true
        const { data } = await axios.get('/api/budgets')
        $transactions = data
        loading = false
    })

    async function addTransaction() {
        const transaction = {
            description: description,
            date: new Date().getTime(),
            value: typeOfTransaction === '+' ? amount : amount * -1,
        }
        const response = await axios.post('/api/budgets', transaction)
        $transactions = [response.data, ...$transactions]
        description = ''
        amount = null
    }

    async function removeTransaction(id) {
        const response = await axios.delete('/api/budgets/' + id)
        if (response.data.id === id) {
            $transactions = $transactions.filter(
                (transaction) => transaction._id != id
            )
        }
    }
</script>

<style>
    .input-field > label {
        color: white;
    }

    input:not([type]),
    input[type='text']:not(.browser-default),
    input[type='number']:not(.browser-default) {
        color: white;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type='number'] {
        -moz-appearance: textfield;
    }

    main {
        color: #fff;
        background-color: #0f1214;
        border-radius: 4px;
    }

    #balance {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-bottom: 10rem;
        margin-top: 5rem;
    }

    #transactions {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        color: #9fa6aa;
    }

    #transactions-header {
        display: flex;
        font-size: medium;
        justify-content: space-between;
        margin-bottom: 1rem;
    }

    #transactions-header span:first-of-type {
        margin-left: 16px;
    }

    #transactions-header span:nth-of-type(2) {
        margin-right: 16px;
        color: #00f5c3;
    }
</style>

<main class="container">
    <section id="balance">
        <Balance {balance} {income} {expenses} />
    </section>

    <!-- <section id="chart">
		TODO: Include any kind of chart in this project and add interactive chart to this svelte applications.
	</section> -->

    <section id="transactions">
        <div class="col s12">
            <div class="input-field col s12">
                <input
                    id="description"
                    type="text"
                    bind:value={description}
                    class="validate"
                    required />
                <label for="description">Description</label>
            </div>
        </div>
        <div class="col s12">
            <div class="input-field col s12">
                <input
                    id="amount"
                    type="number"
                    bind:value={amount}
                    class="validate"
                    required />
                <label for="amount">Amount</label>
            </div>
        </div>
        <div class="col s12">
            <div class="input-field col s12 right-align">
                <button
                    class="waves-effect waves-light btn"
                    on:click={addTransaction}
                    {disabled}>
                    Save
                </button>
            </div>
        </div>

        <header id="transactions-header">
            <span>Transactions</span>
            <!-- <span>Show All</span> -->
        </header>
        {#if loading}
            <Loading />
        {/if}
        {#each $sortedTransactions as transaction (transaction._id)}
            <Transaction {transaction} {removeTransaction} />
        {/each}
    </section>
</main>
