<script>
	import Balance from './layout/Balance.svelte'
	import Chart from './layout/Chart.svelte'
	import Transactions from './layout/Transactions.svelte'
</script>


	
<main class="container">
	<Balance />
	<Chart />
	<Transactions />
</main>
	
<style>
	main {
		height: 736px;
		/* width: 375px; */
		background-color: #0F1214;
		color: #fff;
		border-radius: 4px;
	}
</style>