<script>
    export let balance
    export let income
    export let expenses
</script>

<style>
    header h1,
    header h2,
    header h3 {
        margin: 0 24px;
        margin-left: 0;
        text-align: center;
    }

    header h1 {
        font-size: xx-large;
    }

    header h2 {
        color: #a0a4a6;
        font-size: medium;
        margin-bottom: 1rem;
        margin-top: 1rem;
    }

    header h3 {
        font-size: x-large;
    }

    /* #balance div, */
    div {
        display: flex;
        margin-left: auto;
        margin-right: auto;
        margin-top: 1.5rem;
        text-align: center;
    }

    div aside span {
        font-size: large;
    }

    .income-expense {
        display: flex;
        flex-direction: column;
    }

    .income-expense span {
        margin: 0 24px;
        text-transform: uppercase;
    }

    #income span:first-of-type {
        color: #00f5c3;
    }

    #expense span:first-of-type {
        color: #fb3d3d;
    }

    @media all and (min-width: 667px) {
        header h1,
        header h2,
        header h3 {
            text-align: left;
        }

        div {
            margin-left: initial;
            margin-right: initial;
            text-align: initial;
        }

        .income-expense span {
            margin-left: 0;
        }
    }
</style>

<header>
    <h1>Dashboard</h1>
    <h2>Current Balance</h2>
    <h3>${$balance}</h3>
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
