const axios = require("axios");
const URL = 'https://api.rawg.io/api/games'
const API_KEY = '?key=7283520e86154edd8646ecf1e9e8f823'
const { Videogames, Genres } = require('../db.js');


const getApiGamebyId = async (idVideogame) => {
    const { data } = await axios.get(`${URL}/${+idVideogame}${API_KEY}`);
    const { id, name, background_image, released, rating, platforms, genres } = data
    const apiGame = {
        id,
        name,
        image: background_image,
        released,
        rating,
        platform: platforms.map((p) => p.platform.name),
        genres: genres.map((genre) => genre.name),
    };
    return apiGame
};

const getDbGamebyId = async (idVideogame) => {
    try {
        let dbInfo = await Videogames.findOne({
            where: {
                id: idVideogame
            },
            include: {
                model: Genres,
                attributes: ['name'],
                through: {
                    attributes: [],
                }
            }
        });

        dbInfo = JSON.parse(JSON.stringify(dbInfo));
        dbInfo.genres = dbInfo.genres.map(g => g.name);
        return dbInfo;

    } catch(error) {
        return null;
    }
};

const getAllbyId = async (idVideogame) => {
        if(isNaN(idVideogame)){
            const db = await getDbGamebyId(idVideogame);
            return db
        } else {
            const api = await getApiGamebyId(idVideogame);
            return api;
        }
}


module.exports = getAllbyId