const {
    Router
} = require('express')
const Budget = require('../models/Budget')

const router = Router()

router.get('/', async (request, response) => {
    try {
        const budgets = await Budget.find()
        if (!budgets) {
            throw new Error('No budgets')
        }
        response.status(200).json(budgets)
    } catch (error) {
        response.status(400).json({
            message: error.message
        })
    }
})

router.post('/', async (request, response) => {
    const {
        description,
        value,
        date
    } = request.body
    const newBudget = new Budget({
        description,
        value,
        date
    })
    try {
        const budget = await newBudget.save()
        if (!budget) {
            throw new Error('There was an error saving the budget')
        }
        response.status(200).json(budget)
    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
})

router.delete('/:id', async (request, response) => {
    const {
        id
    } = request.params
    try {
        const budget = Budget.findById(id)
        if (!budget) {
            throw new Error('No budget was found')
        }
        const remove = await budget.remove()
        if (!remove) {
            throw new Error('There was a problem deleting the budget')
        }
        response.status(200).json({
            id
        })
    } catch (error) {
        response.status(404).json({
            message: error.message
        })
    }
})

module.exports = router