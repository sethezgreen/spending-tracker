const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MonthSchema = new Schema({
    month: {
        type:String,
        required: [true, 'Please select a month.']
    },
    totalBudget: {
        type:Number,
        required: [true, 'Please enter a total budget.'],
        min: [1, 'Budget must be at least $1.'],
        max: [1000000, 'Budget must be less than $1,000,000.']
    },
    year: {
        type:Number,
        required: [true, 'Please enter a year.'],
        min: [1, 'Year must be at least 1.'],
        max: [9999, 'Year must be less than 9999']
    },
    expenses: [
        {
            type: new Schema(
            {
                expenseName:{
                    type:String,
                    required: [true, 'Please name your expense.']
                }, 
                price:{
                    type:Number,
                    required: [true, 'Please enter the price.'],
                    min: [1, 'Minimum price is $1.'],
                    max: [1000000, 'Maximum price is $1,000,000']
                }
            }, {timestamps:true}
            )
        }
    ]

}, {timestamps:true})

module.exports = mongoose.model('Month', MonthSchema)