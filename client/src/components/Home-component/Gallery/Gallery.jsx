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
                                <h2 className="carrousel-data">
                                        {hasPlatform(element.platform, 'PC') && (
                                            <img src="" alt="PC" className="platform-icon" />
                                        )}
                                        {hasPlatform(element.platform, 'Playstation') && (
                                            <img src="" alt="PlayStation" className="platform-icon" />
                                        )}
                                        {hasPlatform(element.platform, 'Xbox') && (
                                            <img src="" alt="Xbox" className="platform-icon" />
                                        )}
                                        {hasPlatform(element.platform, 'Nintendo Switch') && (
                                            <img src="" alt="Switch" className="platform-icon" />
                                        )}
                                        {hasPlatform(element.platform, 'Linux') && (
                                            <img src="" alt="Switch" className="platform-icon" />
                                        )}
                                        {hasPlatform(element.platform, 'macOS') && (
                                            <img src="" alt="Switch" className="platform-icon" />
                                        )}
                                    </h2>
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