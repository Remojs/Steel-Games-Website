const axios = require("axios");

const getGameInfo = async(url, mode) => {
    const { data } = await axios.get(url)

    if (mode === 'few') { //si es few tira una sola entrada
        const { id, name, description, background_image, released, rating, platforms, genres } = data
        const game = {
            id,
            name,
            description,
            image: background_image,
            released,
            rating,
            platform: platforms.map((el) => el.platform.name),
            genres: genres.map((el) => el.name)
        };
        return game
    }

    if(mode === 'many'){ //si es many tira todas las entradas con next
        const game = data.results.map(({ id, name, description, background_image, released, rating, platforms, genres }) => ({
            id,
            name,
            description,
            image: background_image,
            released,
            rating,
            platform: platforms.map((el) => el.platform.name),
            genres: genres.map((el) => el.name)
        }));
        return { game, next: data.next }; //si es y devuelve la info con next
    }

    else throw Error('getGameInfo does not have that configuration') //si no es nada tira error
}

module.exports = getGameInfo