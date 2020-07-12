const gamesMock = require('../data/gamesMock.json');
module.exports = {
    getAll: (req, res) => {
        res.status(200).json(gamesMock);
    },
    create: (req, res) => {

        res.status(201).json(req.body);
    }
}