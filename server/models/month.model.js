const mongoose = require('mongoose')

const MonthSchema = new mongoose.Schema({
    month: {
        type:String
    },
    totalBudget: {
        type:Number
    },
    year: {
        type:Number
    },
    expenses: [{
        name:String, 
        value:Number
    }, {timestamps:true}]
    // need to find out how to add time stamps to expenses
}, {timestamps:true})

module.exports = mongoose.model('Month', MonthSchema)