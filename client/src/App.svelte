<script>
import {
	onMount
} from 'svelte';
import axios from 'axios';
import Balance from './components/Balance.svelte';
import Transaction from './components/Transaction.svelte';
import Loading from './components/Loading.svelte';
import {
	transactions,
	sortedTransactions,
	balance,
	income,
	expenses
} from './stores';

let amount = 0;
let typeOfTransaction = '+';
let loading = false;

$: disabled = !amount;

onMount(async () => {
	loading = true;
	const {
		data
	} = await axios.get('/api/budgets');
	$transactions = data;
	loading = false;
})

async function addTransaction() {
	const transaction = {
		date: new Date().getTime(),
		value: typeOfTransaction === '+' ? amount : amount * -1
	}
	const response = await axios.post('/api/budgets', transaction);
	$transactions = [response.data, ...$transactions];
	amount = 0;
}

async function removeTransaction(id) {
	const response = await axios.delete('/api/budgets/' + id)
	if (response.data.id === id) {
		$transactions = $transactions.filter(transaction => transaction._id != id)
	}
}
</script>

<main class="container">
	<section id="balance">
		<Balance {$balance} {$income} {$expenses} />
	</section>

	<section id="chart"></section>

	<section id="transactions">
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
				<input class="input" type="number" bind:value={amount} placeholder="Amount of money">
			</p>
			<p class="control">
				<button class="button" on:click={addTransaction} {disabled}>
					Save
				</button>
			</p>
		</div>
		<header id="transactions-header">
			<span>Transactions</span>
			<span>Show All</span>
		</header>
		{#if loading}
			<Loading />
		{/if}
		{#each $sortedTransactions as transaction (transaction._id)}
			<Transaction {transaction} {removeTransaction} />
		{/each}
	</section>
</main>

<style>
#balance {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 35%;
}

#chart {
	height: 25%;
}

main {
	height: 736px;
	/* width: 375px; */
	background-color: #0F1214;
	color: #fff;
	border-radius: 4px;
}

#transactions {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 35%;
	color: #5C6062;
}

#transactions-header {
	display: flex;
	justify-content: space-between;
	font-size: 14px;
}

#transactions-header span:first-of-type {
	margin-left: 16px;
}

#transactions-header span:nth-of-type(2) {
	margin-right: 16px;
	color: #00F5C3;
}

</style>