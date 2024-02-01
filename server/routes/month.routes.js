const MonthController = require('../controllers/month.controller')

module.exports = (app) => {
    app.post('/api/create', MonthController.createMonth)
    app.get('/api/months', MonthController.findAllMonths)
}