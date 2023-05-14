const { Videogames, Genres } = require('../db');

const createGame = async (name, description, released, rating, platform, genres, image) => {
    try {
        const newVideogame = await Videogames.create({
            name: name,
            description: description,
            released: released,
            rating: rating,
            platform: platform,
            image: image
        });
            return newVideogame
    } catch (error) {
        console.log(error.message)
        console.log(name, description, released, rating, platform, genres, image)
    }
}

module.exports = createGame;
