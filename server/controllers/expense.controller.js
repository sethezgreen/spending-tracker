const Month = require('../models/month.model')

module.exports = {
    // Update Expense
    updateExpense: (req, res) => {
        const expenseName = req.body.expenseName
        const price = req.body.price
        Month.findOneAndUpdate(
            {_id: req.params.monthId},
            {
                $set: {
                    "expenses.$[inner].expenseName": expenseName,
                    "expenses.$[inner].price": price
                },
            },
            {
                arrayFilters: [{ "inner._id": req.params.expenseId }],
                new:true
            }
        )
            .then((updatedMonth) => {
                res.json(updatedMonth)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    // Delete Expense
    deleteExpense: (req, res) => {
        Month.findOneAndUpdate(
            {_id: req.params.monthId},
            {
                $pull: {
                    expenses: { _id: req.params.expenseId }
                }
            },
            { new:true }
        )
            .then((result) => {
                res.status(201).json(result)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
}