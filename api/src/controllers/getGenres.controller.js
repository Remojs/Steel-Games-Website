const { Genres } = require('../db')
const axios = require('axios');
const api_url = 'https://api.rawg.io/api/genres?key=7283520e86154edd8646ecf1e9e8f823'

const getGenres = async () => {
    const { data } = await axios(api_url);
    const result = data.results
    const allGenres = []

    for (const g of result) {
        await Genres.findOrCreate({ where: { name: g.name } });
        allGenres.push(g.name);
    }
    return allGenres
}

module.exports = getGenres