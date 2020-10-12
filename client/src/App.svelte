<script>
    import axios from 'axios';
    import { onMount } from 'svelte'
    let amount = 0;
    let typeOfTransaction = '+';
    let transactions = []

    onMount(async() => {
        const { data } = await axios.get('/api/budgets');
        transactions = data;
    })

    async function addTransaction() {
        const transaction = {
            date: new Date().getTime(),
            value: typeOfTransaction === '+' ? amount : amount * -1
        }
        const response = await axios.post('/api/budgets', transaction);
        transactions = [response.data, ...transactions];
        amount = 0;
    }

    async function removeTransaction(id) {
		const response = await axios.delete('/api/budgets/' + id)
		if (response.data.id === id) {
			transactions = transactions.filter(transaction => transaction._id =! id)
		}
	}
</script>


	
<main class="container">
	<section id="balance">
    
		<header>
			<h1>Dashboard</h1>
			<p>Current Balance</p>
			<h2>$38 204.00</h2>
		</header>
	
		<div>
	
			<aside class="income-expense" id="income">
				<span>INCOME</span>
				<span>$ 1980.38</span>
			</aside>
	
			<aside class="income-expense" id="expense">
				<span>EXPENSE</span>
				<span>$ 2739.92</span>
			</aside>
	
		</div>
	
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
				<button class="button" on:click={addTransaction}>
					Save
				</button>
			</p>
		</div>
	
		<header id="transactions-header">
			<span>Transactions</span>
			<span>Show All</span>
		</header>
	
		{#each transactions as transaction (transaction._id)}
		<div class="transactions-div">
	
			<div class="transaction">
				<span>{transaction.description}</span>
				<span>{transaction.date}</span>
			</div>
	
			<div class="amount" id="positive-amount">
				<span>{transaction.value}</span>
				<button class="delete" on:click={() => removeTransaction(transaction._id)} />
			</div>
	
		</div>
		{/each}
	
		<!-- <div class="transactions-div">
	
			<div class="transaction">
				<span>Amazon</span>
				<span>22 Feb 11:43 AM</span>
			</div>
	
			<div class="amount" id="amazon-amount">
				<span>$65.23</span>
			</div>
	
		</div> -->
	
	</section>
</main>
	
<style>
#balance {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 35%;
}

#balance header h1,
header h2,
header p {
	margin: 0 24px;
}

#balance header p {
	color: #5C6062;
	font-size: 14px;
}

#balance div {
	display: flex;
}

.income-expense {
	display: flex;
	flex-direction: column;
}

.income-expense span {
	margin: 0 24px;
	font-size: 14px;
}

#income span:first-of-type {
	color: #00F5C3;
}

#expense span:first-of-type {
	color: #EF2460;
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

.transactions-div {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 30%;
	width: 85%;
	background-color: #1E2021;
	border-radius: 4px;
	margin: 0 auto;
}

.transactions-div span {
	margin: 0 16px;
}

.transaction {
	display: flex;
	flex-direction: column;
}

.transaction span:nth-of-type(2) {
	font-size: 12px;
}

#positive-amount span {
	color: #00F5C3
}

#amazon-amount span {
	color: #EF2460
}
</style>