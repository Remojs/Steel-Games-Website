import React from 'react'

const Card = ({currentGames, game}) => {
  return (
    <>
        <div className="box-game">
        {currentGames.map(game => (
        <div key={game.id}>
            <NavLink to={`/detail/${game.id}`}><h1>{game.name}</h1></NavLink>
            <ul>{game.genres?.map(gen => <li key={gen}>{gen}</li>)}</ul>
            <img src={game.image} alt="" className="img"/>
        </div>
        ))}
    </div>
    </>
  )
}

export default Card