<script>
    export let balance;
    export let income;
    export let expenses;
</script>

<header>
    <h1>Dashboard</h1>
    <p>Current Balance</p>
    <h2>${$balance}</h2>
</header>

<div>

    <aside class="income-expense" id="income">
        <span>Income</span>
        <span>$ {$income}</span>
    </aside>

    <aside class="income-expense" id="expense">
        <span>Expense</span>
        <span>$ {$expenses}</span>
    </aside>

</div>

<style>

header h1,
header h2,
header p {
	margin: 0 24px;
	margin-left: 0;
}

header p {
	color: #5C6062;
	/* font-size: 1.5rem; */
	margin-bottom: 1rem;
	margin-top: 1rem;
}

/* #balance div, */
div {
	display: flex;
	margin-top: 1.5rem;
}

div aside span {
	margin-left: 0;
}

.income-expense {
	display: flex;
	flex-direction: column;
}

.income-expense span {
	margin: 0 24px;
	font-size: 14px;
	text-transform: uppercase;
}

#income span:first-of-type {
	color: #00F5C3;
}

#expense span:first-of-type {
	color: #EF2460;
}

</style>