<script>
import { slide } from 'svelte/transition';
export let transaction;
export let removeTransaction;
</script>

<div class="transactions-div">

    <div class="transaction" transition:slide={{duration: 500 }}>
        <span>{transaction.description}</span>
        <span>{new Date(transaction.date).toLocaleString()}</span>
    </div>

    <div class="amount" id="{transaction.value > 0 ? 'positive-amount' : 'negative-amount'}"
		transition:slide={{duration: 500 }}>
		<span>{transaction.value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span>
        <button class="delete" on:click={()=> removeTransaction(transaction._id)}>
			<i class="material-icons">delete_outline</i>
		</button>
    </div>

</div>

<style>

.transactions-div {
	align-items: center;
	background-color: #1E2021;
	border-radius: 4px;
	display: flex;
	height: 100%;
	justify-content: space-between;
	margin: 0 auto;
	margin-bottom: 0.5rem;
	padding: 0.5rem;
	width: 100%;
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

#positive-amount,
#negative-amount {
	display: flex;
	justify-content: center;
	justify-items: center;
}

#positive-amount span,
#negative-amount span {
	display: flex;
	margin-top: 0.5rem;
}

#positive-amount span {
	color: #00F5C3
}

#negative-amount span {
	color: #EF2460
}

.delete {
	cursor: pointer;
	background-color: transparent;
	color: white;
	border: none;
	margin-bottom: 0;
	padding-bottom: 0;
}
</style>