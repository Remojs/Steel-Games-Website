const { Genres } = require('../db')
const axios = require('axios');
const { API_KEY, API_URL } = process.env;

const getGenres = async () => {
    const { data } = await axios(`${API_URL}${API_KEY}`);
    const result = data.results
    const allGenres = []

    for (const g of result) {
        await Genres.create({ name: g.name });
        allGenres.push(g.name);
    }
    return allGenres
}

module.exports = getGenres