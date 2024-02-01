const Month = require('../models/month.model')

module.exports = {
    // Create Month
    createMonth: (req, res) => {
        Month.create(req.body)
            .then((newMonth) => {
                res.status(201).json(newMonth)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    // Read all Months
    findAllMonths: (req, res) => {
        Month.find()
            .then((allMonths) => {
                res.status(200).json(allMonths)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
}