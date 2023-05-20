import React, { useState, useEffect } from "react";
import './gallery.css'

const Gallery = ({videogames}) => {

    const [current, setCurrent] = useState(0)
    const length = videogames.length
    const games = videogames.reverse()

    const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
    const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1)

    useEffect(() => { 
        const interval = setInterval(() => nextSlide(), 5000);
        return () => clearInterval(interval);
    }, [current]);

    const hasPlatform = (platforms, platform) => {
        const regex = new RegExp(`\\b${platform}\\b`, 'i');
        return regex.test(platforms);
    };

return (
    <section className="carousel">        
    <button className="right-arrow button-carrousel" onClick={nextSlide}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg> </button>
    <button className="left-arrow button-carrousel" onClick={prevSlide}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg> </button>
        {games.map((element, index) => {
            return(
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    
                    {index === current && (
                        <div className="carrousel-box">
                            <img src={element.image} alt="steel" className="image-carrousel"/>
                            <div className="carrousel-info"> 
                                <h2 className="carrousel-data">{element.name}</h2>
                                <h2 className="carrousel-data">{element.genres}</h2>
                                <div className="carrousel-data">
                                        {hasPlatform(element.platform, 'PC') && (
                                            <img src="https://raw.githubusercontent.com/Remojs/PI-Videogames/3d6cd47276575d86882e5422b356e1ff7eb0c0d4/client/public/img/SVG/windows-174-svgrepo-com.svg" alt="" className="platform-icon" />
                                        )}
                                        {hasPlatform(element.platform, 'Playstation') && (
                                            <img src="https://raw.githubusercontent.com/Remojs/PI-Videogames/3d6cd47276575d86882e5422b356e1ff7eb0c0d4/client/public/img/SVG/playstation-svgrepo-com.svg" alt="" className="platform-icon" />
                                        )}
                                        {hasPlatform(element.platform, 'Xbox') && (
                                            <img src="https://raw.githubusercontent.com/Remojs/PI-Videogames/3d6cd47276575d86882e5422b356e1ff7eb0c0d4/client/public/img/SVG/xbox-svgrepo-com.svg" alt="" className="platform-icon" />
                                        )}
                                        {hasPlatform(element.platform, 'Nintendo Switch') && (
                                            <img src="https://raw.githubusercontent.com/Remojs/PI-Videogames/3d6cd47276575d86882e5422b356e1ff7eb0c0d4/client/public/img/SVG/nintendo-switch-svgrepo-com.svg" alt="" className="platform-icon" />
                                        )}
                                        {hasPlatform(element.platform, 'Linux') && (
                                            <img src="https://raw.githubusercontent.com/Remojs/PI-Videogames/3d6cd47276575d86882e5422b356e1ff7eb0c0d4/client/public/img/SVG/linux-svgrepo-com.svg" alt="" className="platform-icon" />
                                        )}
                                        {hasPlatform(element.platform, 'macOS') && (
                                            <img src="https://raw.githubusercontent.com/Remojs/PI-Videogames/3d6cd47276575d86882e5422b356e1ff7eb0c0d4/client/public/img/SVG/apple-173-svgrepo-com.svg" alt="" className="platform-icon" />
                                        )}
                                    </div>
                            </div>
                        </div>
                    )}
                </div>
            )
        })}
    </section>
);
};

export default Gallery;