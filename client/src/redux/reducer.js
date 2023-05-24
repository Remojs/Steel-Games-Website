const initialState = {
    videogames: [],
    allVideogames: [],
    genres:[]
}

const reducer = (state = initialState, action) => {
    switch(action.type){

        case 'SET_VIDEOGAMES':
          return {...state, videogames: action.payload, allVideogames: action.payload};


        case 'SET_GENRES':
          return {...state, genres: action.payload};

        case 'POST_VIDEOGAMES':
          return{...state}


        case 'FILTER_GENRE':
          const genderFilter = state.allVideogames.filter(game => game.genres.some(genre => genre === action.payload));
            return{...state, videogames:action.payload === "allGenres" 
              ? [...state.allVideogames] 
              : genderFilter
            }


        case 'FILTER_ORIGIN':
          let filteredOriginGames = [];
            if (action.payload === "API") filteredOriginGames = state.allVideogames.filter(game => !isNaN(game.id));
            if (action.payload === "Database") filteredOriginGames = state.allVideogames.filter(game => isNaN(game.id));
            if (action.payload === "allOrigin" )filteredOriginGames = [...state.allVideogames];
              return {...state, videogames: filteredOriginGames};


        case 'ORDER_ALPHABETICAL':
          let sortedByName = [];
            if(action.payload === 'ascA') sortedByName = [...state.allVideogames].sort((a, b) => a.name.localeCompare(b.name))
            if(action.payload === 'descA') sortedByName = [...state.allVideogames].sort((a, b) => b.name.localeCompare(a.name))
            if(action.payload === 'none') sortedByName = [...state.allVideogames]
              return {...state, videogames: sortedByName};



        case 'ORDER_RATING':
          let sortedByRating = [];
            if(action.payload === 'ascR') sortedByRating = [...state.allVideogames].sort((a, b) => b.rating - a.rating)
            if(action.payload === 'descR') sortedByRating = [...state.allVideogames].sort((a, b) => a.rating - b.rating)
            if(action.payload === 'none') sortedByRating = [...state.allVideogames]
              return {...state, videogames: sortedByRating};
                
        default: return {...state};
    }
}

export default reducer;