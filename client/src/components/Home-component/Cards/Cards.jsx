import './card.css'
import Card from './Card'

const Cards = ({currentGames}) => {

return (
    <div className="box-game">
            {currentGames.map((game) => <Card game={game} /> )}
        </div>
)
}

export default Cards