<script>
export let balance
export let income
export let expenses
</script>

<header>
    <h1>Dashboard</h1>
    <p>Current Balance</p>
    <h2>${balance}</h2>
</header>

<div>

    <aside class="income-expense" id="income">
        <span>INCOME</span>
        <span>$ {income}</span>
    </aside>

    <aside class="income-expense" id="expense">
        <span>EXPENSE</span>
        <span>$ {expenses}</span>
    </aside>

</div>

<style>

#balance header h1,
header h2,
header p {
	margin: 0 24px;
}

#balance header p {
	color: #5C6062;
	font-size: 14px;
}

/* #balance div, */
div {
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

</style>