const gamesMock = require('../data/gamesMock.json');
module.exports = {
    /* List all games from mock file */
    getAll: (req, res) => {
        res.status(200).json(gamesMock);
    },
    /* Example of a create game method */
    create: (req, res) => {
        res.status(201).json(req.body);
    }
}