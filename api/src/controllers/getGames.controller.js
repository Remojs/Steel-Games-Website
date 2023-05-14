const axios = require("axios");
const { Videogames, Genres } = require("../db");
const URL = 'https://api.rawg.io/api/games?key=7283520e86154edd8646ecf1e9e8f823'

const getApiGames = async (url) => {
    let allGamesApi = [];
    let next = url;

    while (next && allGamesApi.length < 100) {
    const { data } = await axios.get(next);
    const games = data.results.map(({ id, name, background_image, released, rating, platforms, genres }) => ({
        id,
        name,
        image: background_image,
        released,
        rating,
        platform: platforms.map((el) => el.platform.name),
        genres: genres.map((el) => el.name),
    }));

    allGamesApi = [...allGamesApi, ...games];
    next = data.next;
    }

    return allGamesApi;
};



const getDbGames = async () => {
    const videogames = await Videogames.findAll()
    return videogames;
};

const getAll = async () => {
    const db = await getDbGames();
    const api = await getApiGames(URL);
    const [dbData, apiData] = await Promise.all([api, db]);
    return [...dbData, ...apiData];
};

module.exports = getAll