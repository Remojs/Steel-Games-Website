const createGame = require('../controllers/createGames.controller')

const createGameHandler = async (req, res) => {
    try {
        const { name, description, released, rating, platform, genres, image } = req.body;
        const createdGame = await createGame(name, description, released, rating, platform, genres, image)
        res.status(200).json(createdGame)
    } catch (error) {
        res.status(500).send({error: error.message}); 
    }
}

module.exports = createGameHandler