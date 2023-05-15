const { Videogames, Genres } = require("../db");
const URL = 'https://api.rawg.io/api/games?key=7283520e86154edd8646ecf1e9e8f823&page_size=20'
const getGameInfo = require('./tools.controller')

const getApiGames = async (url) => {
    let allGames = [];
    let nextPage = url;

    while (nextPage && allGames.length < 100) {
        let { game, next } = await getGameInfo(nextPage, 'many') //la 'many' es para indicarle q me devuelva el next
        allGames = [...allGames, ...game];
        nextPage = next;
    }
        return allGames;
};

const getDbGames = async (db) => await db.findAll()

const getAll = async () => {
    const db = await getDbGames(Videogames);
    const api = await getApiGames(URL);
    return [...db, ...api];
};

module.exports = getAll