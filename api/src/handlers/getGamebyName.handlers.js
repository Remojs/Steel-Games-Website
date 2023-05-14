const getGamesByName = require ('../controllers/getGamesbyName.controller')

const getByName = async (req, res) => {
    try {
        const { name } = req.params;
        const game = await getGamesByName(name)
        return res.status(200).json(game);
    } catch (error) {
        res.status(500).send(error.message); 
    }
}


module.exports = getByName;