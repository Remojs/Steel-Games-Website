const getAllbyId = require('../controllers/getGamesbyId.controller')

const getById = async (req, res) => {
    try {
        const { idVideogame } = req.params;
        const game = await getAllbyId(idVideogame)
        return res.status(200).json(game);
    } catch (error) {
        res.status(500).send(error.message); 
    }
}

module.exports = getById