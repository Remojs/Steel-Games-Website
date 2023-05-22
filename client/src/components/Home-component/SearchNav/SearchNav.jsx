import './searchnav.css'
import { NavLink } from 'react-router-dom'


const SearchNav = ({handleSearch, searchValue}) => {
return (
    <>
        <div className="searchbar-div">
                <div className='links-box'>
                    <button className="link-searchnav"> <NavLink  className="link-searchnav" to={`/detail/${Math.floor(Math.random() * 849500) + 1}`}> Random Game</NavLink> </button>
                    <button className="link-searchnav"> <NavLink  className="link-searchnav" to='https://matias.ma/nsfw/' > Coming Soon</NavLink> </button>                
                    <button className="link-searchnav"> <NavLink  className="link-searchnav" to='https://matias.ma/nsfw/' > Coming Soon</NavLink> </button>
                    <button className="link-searchnav"> <NavLink  className="link-searchnav" to='https://matias.ma/nsfw/' > Coming Soon</NavLink> </button>
                    <button className="link-searchnav"> <NavLink  className="link-searchnav" to='https://matias.ma/nsfw/' > Coming Soon</NavLink> </button>
                </div>
                
                <div className="searchbar-box">
                    <input className="searchbar-input" placeholder='Search...' type='search' value={searchValue} onChange={handleSearch}/>
                    <button className='searchbar-btn'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>
                </div>
        </div>
    </>
    )
}

export default SearchNav