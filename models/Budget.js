const {
    Schema,
    model
} = require('mongoose')

const now = new Date().getTime()

const BudgetSchema = new Schema({
    // description: {
    //     type: String,
    //     required: true
    // },
    value: {
        type: Number,
        required: true,
    },
    date: {
        type: Number,
        default: now
    }
})

const Budget = model('budget', BudgetSchema)

module.exports = Budget