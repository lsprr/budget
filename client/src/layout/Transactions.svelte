<script>
    import Form from '../components/Form/Form.svelte'
</script>

<section id="transactions">

    <Form />

    <header id="transactions-header">
        <span>Transactions</span>
        <span>Show All</span>
    </header>

    <div class="transactions-div">

        <div class="transaction">
            <span>Freelance Work</span>
            <span>23 Feb 10:32 AM</span>
        </div>

        <div class="amount" id="freelance-amount">
            <span>$120.30</span>
        </div>

    </div>

    <div class="transactions-div">

        <div class="transaction">
            <span>Amazon</span>
            <span>22 Feb 11:43 AM</span>
        </div>

        <div class="amount" id="amazon-amount">
            <span>$65.23</span>
        </div>

    </div>

</section>

<style>
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

    #freelance-amount span {
        color: #00F5C3
    }

    #amazon-amount span {
        color: #EF2460
    }
</style>