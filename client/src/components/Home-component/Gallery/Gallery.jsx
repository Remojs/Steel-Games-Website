import React, { useState, useEffect, useCallback } from "react";
import './gallery.css'

const Gallery = ({videogames}) => {

    const [current, setCurrent] = useState(0)
    const games = [...videogames].slice(35, 81).reverse();
    const length = games.length

    const nextSlide = useCallback(() => setCurrent(current => current === length - 1 ? 0 : current + 1), [length]);
    const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1)

    useEffect(() => { 
        const interval = setInterval(() => nextSlide(), 5000);
        return () => clearInterval(interval);
    }, [current, nextSlide]);

    const hasPlatform = (platforms, platform) => {
        const regex = new RegExp(`\\b${platform}\\b`, 'i');
        return regex.test(platforms);
    };

return (

    <div>
    <h4 className="carrousel-title"> DESTACADOS Y RECOMENDADOS</h4>
    <section className="carousel">        
    <div className="carrousel-background" ></div>
    <button className="right-arrow button-carrousel" onClick={nextSlide}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg> </button>
    <button className="left-arrow button-carrousel" onClick={prevSlide}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg> </button>
        {games.map((element, index) => {
            return(
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    
                    {index === current && (
                        <div className="carrousel-box">
                            <img src={element.image} alt="steel" className="image-carrousel"/>
                            <div className="carrousel-info"> 
                                <h2 className="carrousel-data title">{element.name}</h2>
                                <div className="carrousel-data genres-container">{element.genres.slice(0, 4).map((genre, index) => {
                                    return (
                                        <div key={genre} className="genre">{genre}</div>
                                    )
                                })}</div>

                                <div className="carrousel-data steam-data">
                                    <h3 className=" steam-status"> Ya Disponible </h3>
                                    <div className="steam-sell"> Lo mas vendido </div>
                                </div>

                                <div className="carrousel-data bottom-elements">
                                    <h6 className="status"> Free to Play </h6>
                                    <div className="carrousel-data platforms">
                                        {hasPlatform(element.platform, 'PC') && (
                                            <img src="https://raw.githubusercontent.com/Remojs/PI-Videogames/398205682e06e841e78424f6cde48adf7838e5bd/client/public/img/SVG/windows-174-svgrepo-com.svg" alt="" className="platform-icon" />
                                        )}
                                        {hasPlatform(element.platform, 'Playstation') && (
                                            <img src="https://raw.githubusercontent.com/Remojs/PI-Videogames/398205682e06e841e78424f6cde48adf7838e5bd/client/public/img/SVG/playstation-svgrepo-com.svg" alt="" className="platform-icon" />
                                        )}
                                        {hasPlatform(element.platform, 'Xbox') && (
                                            <img src="https://raw.githubusercontent.com/Remojs/PI-Videogames/398205682e06e841e78424f6cde48adf7838e5bd/client/public/img/SVG/xbox-svgrepo-com.svg" alt="" className="platform-icon" />
                                        )}
                                        {hasPlatform(element.platform, 'Nintendo Switch') && (
                                            <img src="https://raw.githubusercontent.com/Remojs/PI-Videogames/398205682e06e841e78424f6cde48adf7838e5bd/client/public/img/SVG/nintendo-switch-svgrepo-com.svg" alt="" className="platform-icon" />
                                        )}
                                        {hasPlatform(element.platform, 'Linux') && (
                                            <img src="https://raw.githubusercontent.com/Remojs/PI-Videogames/398205682e06e841e78424f6cde48adf7838e5bd/client/public/img/SVG/linux-svgrepo-com.svg" alt="" className="platform-icon" />
                                        )}
                                        {hasPlatform(element.platform, 'macOS') && (
                                            <img src="https://raw.githubusercontent.com/Remojs/PI-Videogames/398205682e06e841e78424f6cde48adf7838e5bd/client/public/img/SVG/apple-173-svgrepo-com.svg" alt="" className="platform-icon" />
                                        )}
                                </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )
        })}
    </section>
    </div>

);
};

export default Gallery;