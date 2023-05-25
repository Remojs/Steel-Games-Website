import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import Nav from '../Layout-components/Nav/Nav'
import Footer from '../Layout-components/Footer/Footer'
import './detail.css'
import DetailExtra from './DetailExtra';

const Detail = () => {

const {id} = useParams();
const [game, setGame] = useState({});

const getGameInfo = async(id) => {
    const { data } = await axios(`http://localhost:3001/videogames/${id}`)
    if (data.name) setGame(data);
}

useEffect(() => {
    getGameInfo(id)
    }, [id]);

return (
    <div  key={game.id} className="game-background">
        <Nav />
        <p className="category"> Todos los juegos {'>'} {game.genres?.[0]} {'>'} Franquicia {game.name} {'>'} {game.name}</p>
        <h2 className='detail-name'>{game.name}</h2>

        <div className="detail-structure">

            <div className="cover-img-box">
                <img className='cover-image' src={game.image} alt="Game Cover" />
            </div>

            <div className="game-details">

                <h1 className='detail-id'>ID: {game.id}</h1>

                <img className='detail-img' src={game.image} alt="Game Cover" />
                
                <p className='detail-game-description'> {game.name} te permite descubrir estrategias, explorar el genero {game.genres?.[0]} y divertirte con amigos de todo el mundo. Empieza a jugar gratis, desafía a tus amigos, consigue logros y experimenta la magia del juego. </p>

                <p className="detail-info resena">Reseñas Generales <span className='detail-span'> Mayormente positivas </span></p>
                <p className='detail-info release'>Fecha de lanzamiento: <span className='detail-span release-span'>{game.released}</span> </p>
                <p className='detail-info rating'>Rating:  {[...Array(5)].map((_,i) => <svg key={i} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill={i < Math.floor(game.rating) ? 'yellow' : 'none'} stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft:'3px'}}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>)} <span className='detail-span release-span'>({game.rating})</span></p>

                
                <div className="platforms">
                    <h3 className='detail-platform-label'>Plataformas:</h3>
                    <ul className='detail-platform-value'>{game.platform?.map((platform, index) => <li key={index}>{platform}</li>)}</ul>
                </div>

                <div className="genres">
                    <h3 className='detail-genre-lablel'>Géneros:</h3>
                    <ul className='detail-genre-value'>{game.genres?.map((genre, index) => <li key={index}>{genre}</li>)}</ul>
                </div>
            </div>
        </div>
        <DetailExtra game={game}/>
        <Footer />
    </div>
    );
}

export default Detail