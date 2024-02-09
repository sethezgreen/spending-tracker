const MonthController = require('../controllers/month.controller')
const ExpenseController = require('../controllers/expense.controller')

module.exports = (app) => {
    app.post('/api/create', MonthController.createMonth)
    app.get('/api/months', MonthController.findAllMonths)
    app.get('/api/month/:id', MonthController.findMonth)
    app.put('/api/updateMonth/:id', MonthController.updateMonth)
    app.delete('/api/deleteMonth/:id', MonthController.deleteMonth)

    // Expense routes
    app.put('/api/month/:monthId/expenses/:expenseId', ExpenseController.updateExpense)
    app.put('/api/month/:monthId/expense/delete/:expenseId', ExpenseController.deleteExpense)
    app.put('/api/month/:monthId/expense/add', ExpenseController.addExpense)
}