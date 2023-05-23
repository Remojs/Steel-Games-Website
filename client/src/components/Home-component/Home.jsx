import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { filterGenre, filterOrigin, orderByAlphabet, orderByRating, getAllGames, getAllGenres } from "../../redux/actions";
import Nav from '../Nav-component/Nav';
import SearchNav from './SearchNav/SearchNav';
import './home.css'

import Gallery from "./Gallery/Gallery";

const Home = () => {
    const [searchValue, SetSearchValue] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage] = useState(15);

    const videogames = useSelector(state => state.videogames)
    const genreList = useSelector(state => state.genres)
    const dispatch = useDispatch();

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


    const calcularDescuento = () => {
        const oldPrize = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
        const newPrize = Math.floor(Math.random() * (oldPrize - 1000 + 1)) + 1000;
        const discount = ((oldPrize - newPrize) / oldPrize) * 100;
        return { oldPrize, newPrize, discount};
    }

    const descuentosAleatorios = () => {
        const { oldPrize, newPrize, discount } = calcularDescuento();
        return { oldPrize, newPrize, discount: Math.round(discount) };
    };
    
return (
    <div className="home-body">
        <Nav />
        <img  className="home-gif" alt="gif" src='https://github.com/Remojs/PI-Videogames/blob/master/client/public/img/GIF.gif?raw=true' />
        <SearchNav searchValue={searchValue} handleSearch={handleSearch} />
        <Gallery videogames={videogames}/>
        <div className="divider-bar"></div>
        <img alt="winter" className="winter-poster" src="https://github.com/Remojs/PI-Videogames/blob/master/client/public/img/winter.png?raw=true"/>
            <div className="filter-div">
                <select className="select-filter"  onChange={handleOrderByAlphabet}>
                    <option value="" disabled selected>Alfabetico</option>
                    <option value='none'> Normal </option>
                    <option value="ascA">A-Z</option>
                    <option value="descA">Z-A</option>
                </select>
 
                <select className="select-filter"  onChange={handleOrderByRating}>
                    <option value="" disabled selected>Rating</option>
                    <option value='none'> Normal </option>
                    <option value="ascR">Higher Rating</option>
                    <option value="descR">Lower Rating</option>
                </select>

                <select className="select-filter" onChange={handleGenreFilter}>
                    <option value="" disabled selected>Generos</option>
                    <option value="allGenres">Todos los géneros</option>
                    {genreList.map(genre => (
                        <option key={genre} value={genre}>{genre}</option>
                    ))}
                </select>

                <select className="select-filter" onChange={handleOriginFilter}>
                    <option value="" disabled selected>Origen</option>
                    <option value="allOrigin">Todos los orígenes</option>
                    <option value="API">API</option>
                    <option value="Database">Base de datos</option>
                </select>
            </div>
        <h4 className="cards-title"> OFERTAS ESPECIALES </h4>
        <div className="box-game">
            {currentGames.map((game) => {
                const { oldPrize, newPrize, discount } = descuentosAleatorios();
                return(
                    <div key={game.id} className="card-box">
                    <img src={game.image} alt="" className="card-img"/>
                    <div className="card-info-box"> 
                        <h1 className='card-name'><NavLink to={`/detail/${game.id}`} className='card-name-link'>{game.name}</NavLink></h1>
                        <ul className="card-genres-box">{game.genres?.map(gen => <li className="card-genres" key={gen}>{gen}</li>)}</ul>
                        <div className="prize-box">
                        <div className="discount"> -{discount}% </div>
                        <div className="prize">
                            <h4 className="old-prize"> ARS$ {oldPrize}</h4>
                            <h2 className="new-prize"> ARS$ {newPrize}</h2>
                        </div>
                    </div>
                    </div>
                </div>
                )
            })}
        </div>

    <div className="pagination">
        <button className="prev-btn" onClick={goToPreviousPage} disabled={currentPage === 1}> Anterior </button>
            <span className="current-btn">{currentPage}</span>
        <button className="next-btn" onClick={goToNextPage} disabled={currentPage === totalPages}>Siguiente </button>
    </div>

    <footer className="footer-home">
            <div className="footer-divider up"></div>
            <p className="footer-text"> © 2023 Remo Corporation. Todos los derechos reservados a <a href="https://store.steampowered.com">Steam.</a> Todos los diseños usados fueron inspirados en Steam. Todas las marcas registradas pertenecen a sus respectivos dueños en EE. UU. y otros países.
            Todos los precios son ficticios y no incluyen IVA (donde sea aplicable).   <a href="https://store.steampowered.com/privacy_agreement/?snr=1_44_44_"> Política de Privacidad </a>   |   <a href="https://store.steampowered.com/legal/?snr=1_44_44_">Información legal</a>   |   <a href="https://store.steampowered.com/subscriber_agreement/?snr=1_44_44_">Acuerdo de Suscriptor a Steam</a>   |   <a href="https://store.steampowered.com/steam_refunds/?snr=1_44_44_">Reembolsos</a>   |   <a href="https://store.steampowered.com/account/cookiepreferences/?snr=1_44_44_">Cookies</a> </p>
            <div className="footer-divider down"></div>
    </footer>

</div>
);
};

export default Home;