const {
    Router
} = require('express')
const Budget = require('../models/Budget')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const budgets = await Budget.find()
        if (!budgets) {
            throw new Error('No budgets')
        }
        res.status(200).json(budgets)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

router.post('/', async (req, res) => {
    const {
        // description,
        value,
        date
    } = req.body
    const newBudget = new Budget({
        // description,
        value,
        date
    })
    try {
        const budget = await newBudget.save()
        if (!budget) {
            throw new Error('There was an error saving the budget')
        }
        res.status(200).json(budget)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

router.delete('/:id', async (req, res) => {
    const {
        id
    } = req.params
    try {
        const budget = Budget.findById(id)
        if (!budget) {
            throw new Error('No budget was found')
        }
        const remove = await budget.remove()
        if (!remove) {
            throw new Error('There was a problem deleting the budget')
        }
        res.status(200).json({
            id
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
})

module.exports = router