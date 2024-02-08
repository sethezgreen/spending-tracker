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
    },

    // Read One Month
    findMonth: (req, res) => {
        Month.findOne({_id: req.params.id})
            .then((month) => {
                res.status(200).json(month)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    // Update Month
    updateMonth: (req, res) => {
        Month.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
            .then((updatedMonth) => {
                res.json(updatedMonth)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    // Delete Month
    deleteMonth: (req, res) => {
        Month.deleteOne({_id: req.params.id})
            .then((result) => {
                res.status(201).json(result)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
}