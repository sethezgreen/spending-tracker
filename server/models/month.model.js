const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MonthSchema = new Schema({
    month: {
        type:String
    },
    totalBudget: {
        type:Number
    },
    year: {
        type:Number
    },
    expenses: [
        {
            type: new Schema(
            {
                expenseName:String, 
                price:Number
            }, {timestamps:true}
            )
        }
    ]
}, {timestamps:true})

module.exports = mongoose.model('Month', MonthSchema)