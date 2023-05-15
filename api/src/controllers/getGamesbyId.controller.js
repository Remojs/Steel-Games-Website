const { Videogames, Genres } = require('../db.js');
const getGameInfo = require('./tools.controller')
const { API_KEY, API_URL } = process.env;


const getDbGamebyId = async (idVideogame) => {
        let dbInfo = await Videogames.findOne({
            where: { id: idVideogame },
                include: { model: Genres, attributes: ['name'], 
                    through: { attributes: [], }
                }
        });
        return dbInfo && { ...dbInfo.toJSON(), genres: dbInfo.genres.map(g => g.name) }
};

const getAllbyId = async (idVideogame) => {
        if(isNaN(idVideogame)){
            const db = await getGameInfo(`${API_URL}/${+idVideogame}${API_KEY}`, 'few');
            return db
        } else {
            const api = await getApiGamebyId(idVideogame);
            return api;
        }
}


module.exports = getAllbyId