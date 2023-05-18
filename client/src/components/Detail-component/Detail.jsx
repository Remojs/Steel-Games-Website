import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import './detail.css'

const Detail = () => {

const {id} = useParams();
const [game, setGame] = useState({});

const getGameInfo = async(id) => {
    const { data } = await axios(`http://localhost:3001/videogames/${id}`)
    if (data.name) setGame(data) 
    else window.alert('¡No hay personaje con este ID!');
}

useEffect(() => {
    getGameInfo(id)
    }, []);

return (
    <div className="game-details">
        <h1>ID: {game.id}</h1>
        <h2>Nombre: {game.name}</h2>
            <img src={game.image} alt="Game Cover" />

        <div className="platforms">
            <h3>Plataformas:</h3>
            <ul>{game.platform?.map((platform, index) => <li key={index}>{platform}</li>)}</ul>
        </div>

        <div className="description">
            <h3>Descripción:</h3>
            <p>{game.description}</p>
        </div>

            <p>Fecha de lanzamiento: {game.released}</p>
            <p>Rating: {game.rating}</p>
        <div className="genres">
            <h3>Géneros:</h3>
            <ul>{game.genres?.map((genre, index) => <li key={index}>{genre}</li>)}</ul>
        </div>
        </div>
    );
}

export default Detail