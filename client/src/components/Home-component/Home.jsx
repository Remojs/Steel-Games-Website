import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllGames } from "../../redux/actions";

import Nav from '../Layout-components/Nav/Nav';
import SearchNav from './SearchNav/SearchNav';
import Gallery from "./Gallery/Gallery";
import Filters from './Filters/Filters'
import Cards from "./Cards/Cards";
import Pagination from "./Pagination/Pagination";
import './home.css'


const Home = () => {
    const videogames = useSelector(state => state.videogames)
    const dispatch = useDispatch();
    useEffect(() => dispatch(getAllGames()), [dispatch]);

    //searchbar
    const [searchValue, SetSearchValue] = useState('')

    const handleSearch = (event) => {
        SetSearchValue(event.target.value)
        setCurrentPage(1)
    }
    const gameSearch = videogames.filter(game => game.name.toLowerCase().startsWith(searchValue.toLowerCase()))
    
    //pagination
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastGame = currentPage * 15;
    const indexOfFirstGame = indexOfLastGame - 15;
    const currentGames = gameSearch.slice(indexOfFirstGame, indexOfLastGame);
    const totalPages = Math.ceil(gameSearch.length / 15);

    const goToNextPage = () => setCurrentPage(page => page + 1);
    const goToPreviousPage = () => setCurrentPage(page => page - 1);
    

return (
    <div className="home-body">
        <Nav />

        <img  className="home-gif" alt="gif" src='https://github.com/Remojs/PI-Videogames/blob/master/client/public/img/GIF.gif?raw=true' />
        <SearchNav searchValue={searchValue} handleSearch={handleSearch} />

        <Gallery videogames={videogames}/>
        <div className="divider-bar"></div>
        <img alt="winter" className="winter-poster" src="https://github.com/Remojs/PI-Videogames/blob/master/client/public/img/winter.png?raw=true"/>
        
        <Filters />
        <h4 className="cards-title"> OFERTAS ESPECIALES </h4>
        <Cards currentGames={currentGames}/>
        <Pagination  goToPreviousPage={goToPreviousPage} goToNextPage={goToNextPage} currentPage={currentPage} totalPages={totalPages}/>
    </div>
);
};

export default Home;