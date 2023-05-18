import axios from 'axios';


export const filterGenre = (genre) => {
    return{ type: 'FILTER_GENRE', payload: genre};
};

export const filterOrigin = (origin) => {
    return{ type: 'FILTER_ORIGIN', payload: origin};
};

export const orderByAlphabet = (order) => {
    return{ type: 'ORDER_ALPHABETICAL', payload: order};
};

export const orderByRating = (order) => {
    return{ type: 'ORDER_RATING', payload: order};
};

export const setVideogames = (videogames) => {
    return { type: 'SET_VIDEOGAMES', payload: videogames };
}

export const setGenres = (genre) => {
    return { type: 'SET_GENRES', payload: genre };
}


export const getAllGames = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:3001/videogames');
            dispatch(setVideogames(data));
        } catch (error) {
            console.log(error);
        }
    }
}

export const getAllGenres = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:3001/genres/');
            dispatch(setGenres(data));
        } catch (error) {
            console.log(error);
        }
    }
}