import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { filterGenre, filterOrigin, orderByAlphabet, orderByRating, getAllGames, getAllGenres } from "../../redux/actions";
import './home.css'

const Home = () => {
    const [searchValue, SetSearchValue] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage] = useState(15);

    const videogames = useSelector(state => state.videogames)
    const genreList = useSelector(state => state.genres)
    const dispatch = useDispatch();;

    const handleGenreFilter = (event) => {
        dispatch(filterGenre(event.target.value))
    }

    const handleOriginFilter = (event) => {
        dispatch(filterOrigin(event.target.value))
    }
    
    const handleOrderByAlphabet = (event) => {
        dispatch(orderByAlphabet(event.target.value))
    }

    const handleOrderByRating = (event) => {
        dispatch(orderByRating(event.target.value))
    }

    const handleSearch = (event) => {
        SetSearchValue(event.target.value)
    }

    const gameSearch = videogames.filter(game => game.name.toLowerCase().startsWith(searchValue.toLowerCase()))

    useEffect(() => {
        dispatch(getAllGames());
        dispatch(getAllGenres());
    }, []);

    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    const currentGames = gameSearch.slice(indexOfFirstGame, indexOfLastGame);

    const totalPages = Math.ceil(gameSearch.length / gamesPerPage);

    const goToNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
    };

    const goToPreviousPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
    };

return (
    <div>
        <div className="searchbar-div">
            <input className="searchbar-input" type='search' value={searchValue} onChange={handleSearch}/>
            <button>Agregar</button>
        </div>

            <div className="filter-div">
                <select className="select-filter"  onChange={handleOrderByAlphabet}>
                    <option value='none'> Normal </option>
                    <option value="ascA">A-Z</option>
                    <option value="descA">Z-A</option>
                </select>

                <select className="select-filter"  onChange={handleOrderByRating}>
                    <option value='none'> Normal </option>
                    <option value="ascR">Higher Rating</option>
                    <option value="descR">Lower Rating</option>
                </select>

                <select className="select-filter" onChange={handleGenreFilter}>
                    <option value="allGenres">Todos los géneros</option>
                    {genreList.map(genre => (
                        <option value={genre}>{genre}</option>
                    ))}
                </select>

                <select className="select-filter" onChange={handleOriginFilter}>
                    <option value="allOrigin">Todos los orígenes</option>
                    <option value="API">API</option>
                    <option value="Database">Base de datos</option>
                </select>
            </div>

    <div className="box-game">
        {console.log(gameSearch)}
        {currentGames.map(game => (
        <div key={game.id}>
            <NavLink to={`/detail/${game.id}`}><h1>{game.name}</h1></NavLink>
            <ul>{game.genres?.map(gen => <li key={gen}>{gen}</li>)}</ul>
            <img src={game.image} alt="" className="img"/>
        </div>
        ))}
    </div>

    <div className="pagination">
        <button onClick={goToPreviousPage} disabled={currentPage === 1}> Anterior </button>
            <span>{currentPage}</span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>Siguiente </button>
</div>

    </div>
);
};

export default Home;