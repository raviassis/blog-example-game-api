const gamesMock = require('../data/gamesMock.json');
module.exports = {
   getAll: (req, res) => {
       res.status(200).json(gamesMock);
   }
}