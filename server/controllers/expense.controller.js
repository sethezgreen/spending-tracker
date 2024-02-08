const Month = require('../models/month.model')

module.exports = {
    // Update Expense
    updateExpense: (req, res) => {
        const name = req.body.name
        Month.findByIdAndUpdate(
            req.params.monthId,
            {
                $set: {
                    "expenses.$[inner].name": name
                }
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
    }
}