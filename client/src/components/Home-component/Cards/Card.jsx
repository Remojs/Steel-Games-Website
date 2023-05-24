import { NavLink } from 'react-router-dom'
import './card.css'

const Card = ({game}) => {

const calcularDescuento = () => {
    const oldPrize = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    const newPrize = Math.floor(Math.random() * (oldPrize - 1000 + 1)) + 1000;
    const discount = ((oldPrize - newPrize) / oldPrize) * 100;

    return { oldPrize, newPrize, discount: Math.round(discount) };
};
    
const { oldPrize, newPrize, discount } = calcularDescuento();

return (
    <div key={game.id} className="card-box">
        <img src={game.image} alt="" className="card-img"/>

        <div className="card-info-box"> 
            <h1 className='card-name'><NavLink to={`/detail/${game.id}`} className='card-name-link'>{game.name}</NavLink></h1>
            <ul className="card-genres-box"> {game.genres?.map(gen => <li className="card-genres" key={gen}> {typeof gen === 'string' ? gen : gen.name} </li>)}</ul>
            
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
}

export default Card