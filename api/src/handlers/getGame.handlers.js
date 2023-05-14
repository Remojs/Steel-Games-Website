const getAll = require('../controllers/getGames.controller')

const getGames = async (req, res) => {
    const games = await getAll()
    try {
        res.status(200).json(games)
    } catch (error) {
        res.status(404).send('algo salio mal')
    }
}

module.exports = getGames