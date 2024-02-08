const MonthController = require('../controllers/month.controller')

module.exports = (app) => {
    app.post('/api/create', MonthController.createMonth)
    app.get('/api/months', MonthController.findAllMonths)
    app.get('/api/month/:id', MonthController.findMonth)
    app.put('/api/updateMonth/:id', MonthController.updateMonth)
    app.delete('/api/deleteMonth/:id', MonthController.deleteMonth)

    // Expense routes
    // app.put('/api/month/:monthId/expenses/:expenseId', MonthController.updateExpense)
}