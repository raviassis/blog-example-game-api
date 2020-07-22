const gamesMock = require('../data/gamesMock.json');
const { attributes } = require('structure'); // import structure
 
/* Game validation request */
const GameValidation = attributes({
   name: {
       type: String,
       required: true,
   },
   price: {
       type: Number,
       positive: true,
       required: true,
   }
})(class GameValidation {});

module.exports = {
    /* List all games from mock file */
    getAll: (req, res) => {
        res.status(200).json(gamesMock);
    },
    /* Example of a create game method */
    create: (req, res) => {
        const newGame = new GameValidation(req.body);
        const {valid, errors} = newGame.validate();
        if (valid) {
            res.status(201).json(newGame);
        }
        else {
            res.status(422).json(errors);
        }
    }
}