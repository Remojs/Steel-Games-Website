const getAll = require('./getGames.controller')

const getGamesByName = async (name) => {
    const games = await getAll();
    const filteredGames = games.filter((game) => game.name.toLowerCase().includes(name.toLowerCase()));
    const result = filteredGames.slice(0, 15);
    if (result.length === 0) return "No se encontraron juegos con ese nombre.";
    else return result;
};

module.exports = getGamesByName