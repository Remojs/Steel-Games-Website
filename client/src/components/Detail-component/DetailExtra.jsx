import './detail.css'

const DetailExtra = ({ game }) => {
    return (
        <div className="detail-extra-container">

            <div className="detail-extra-columnOne">
                <div className="detail-extra-franchise">
                    <h3 className="franchise-title"> Echa un vistazo a toda la franquicia de {game.name} en Steel </h3>
                </div>

                <div className="detail-extra-buygame">
                    <h2 className="buygame-title"> Comprar {game.name}</h2>
                    <div className="buygame-btn-box">
                        <div className="detail-extra-btn prize"> ARS$ 8.999,00 </div>
                        <button className="detail-extra-btn buy"> Añadir al Carro</button>
                    </div>
                </div>

                <h3 className='detail-extra-title buypack-page-title'> PACKS QUE INCLUYEN ESTE JUEGO </h3>
                <div className="detail-extra-buypack">
                    <div className="buypack-text">
                        <h3 className="buypack-title"> Comprar {game.name}: Edición Digital Deluxe </h3>
                        <p className="buypack-description"> <span className="buypack-description-span">Incluye 3 artículo(s):</span> "{game.name}: Extreme Challenge", "{game.name}: GOTY Edition", "{game.name}: New Horizons", </p>
                    </div>
                    <div className="buypack-btn-box">
                        <div className="buypack-btn-prize-box">
                            <div className="detail-extra-btn prize"> ARS$ 11.999,00 </div>
                            <button className="detail-extra-btn buy"> Añadir al Carro</button>
                        </div>
                        <div className="buypack-btn-data-box">
                            <button className="detail-extra-btn pack-data"> Datos del Pack </button>
                        </div>
                    </div>
                </div>

                <h3 className='detail-extra-title contenido-page-title'> CONTENIDO PARA ESTE JUEGO </h3>
                <div className="detail-extra-contenido">
                    <div className="dlc-container">
                        <h6 className='dlc-name'> {game.name}: Extreme Challenge</h6>
                        <h6 className='dlc-prize'> ARS$ 3.299,00 </h6>
                    </div>
                    <div className="dlc-container">
                        <h6 className='dlc-name'> {game.name}: GOTY Edition</h6>
                        <h6 className='dlc-prize'> ARS$ 6.999,00 </h6>
                    </div>
                    <div className="dlc-container">
                        <h6 className='dlc-name'> {game.name}: New Horizons</h6>
                        <h6 className='dlc-prize'> ARS$ 4.599,00 </h6>
                    </div>
                    <div className="dlc-container">
                        <h6 className='dlc-name'> {game.name}: Hero Rising</h6>
                        <h6 className='dlc-prize'> ARS$ 2.599,00 </h6>
                    </div>
                    <div className="dlc-btn-box">
                        <div className="detail-extra-btn prize"> ARS$ 8.999,00 </div>
                        <button className="detail-extra-btn buy"> Añadir al Carro</button>
                    </div>
                </div>

                <h3 className='detail-extra-title events-page-title'> EVENTOS Y ANUNCIOS RECIENTES </h3>
                <div className="detail-extra-events">
                    <div className="event-box">
                        <img src={game.image} alt="" className="event-img" />
                        <div className="event-info">
                            <h6 className="event-title"> Nuevo DLC disponible </h6>
                            <p className="event-date"> jue, 2 de febrero de 2023 </p>
                        </div>
                    </div>
                    <div className="event-box">
                        <img src={game.image} alt="" className="event-img" />
                        <div className="event-info">
                            <h6 className="event-title"> Nueva actualizacion (v1.5.12) </h6>
                            <p className="event-date"> mar, 23 de mayo de 2023 </p>
                        </div>
                    </div>
                </div>

                <h3 className='detail-extra-title'> ACERCA DE ESTE JUEGO </h3>
                <div className="detail-extra-about">
                    <p className="about-game" dangerouslySetInnerHTML={{ __html: game.description }} />
                </div>

                <h3 className='detail-extra-title'> REQUISITOS DEL SISTEMA </h3>
                <div className="detail-extra-requeriments">
                    <div className="requeriments-column">
                        <p className="requeriments-title"> Minimos:</p>
                        <p className="requeriments-intro"> Requiere un procesador y un sistema operativo de 64 bits </p>
                        <p className="requeriments-category"> <span className="requeriments-span"> SO: </span> 64-bit Windows 10</p>
                        <p className="requeriments-category"> <span className="requeriments-span"> Procesador: </span> Intel Core i5-6600 (3.3Ghz) or AMD Ryzen 5 1400 (3.2Ghz)</p>
                        <p className="requeriments-category"> <span className="requeriments-span"> Memory: </span> 16 GB de RAM</p>
                        <p className="requeriments-category"> <span className="requeriments-span"> Graficos: </span> NVIDIA GeForce GTX 960 4GB or AMD Radeon RX 470 4GB</p>
                        <p className="requeriments-category"> <span className="requeriments-span"> DirectX: </span> Versión 12</p>
                        <p className="requeriments-category"> <span className="requeriments-span"> Almacenamiento: </span> 85 GB de espacio disponible</p>
                        <p className="requeriments-category"> <span className="requeriments-span"> Notas Adicionales: </span> SSD (Preferred), HDD (Supported), 720p/30 fps, Low Quality Settings</p>
                    </div>
                    <div className="requeriments-column">
                        <p className="requeriments-title">Recomendados:</p>
                        <p className="requeriments-intro"> Requiere un procesador y un sistema operativo de 64 bits </p>
                        <p className="requeriments-category"> <span className="requeriments-span"> SO: </span> 64-bit Windows 10 </p>
                        <p className="requeriments-category"> <span className="requeriments-span"> Procesador: </span> Intel Core i7-8700 (3.2Ghz) or AMD Ryzen 5 3600 (3.6 Ghz) </p>
                        <p className="requeriments-category"> <span className="requeriments-span"> Memory: </span>  16 GB de RAM</p>
                        <p className="requeriments-category"> <span className="requeriments-span"> Graficos: </span> NVIDIA GeForce 1080 Ti or AMD Radeon RX 5700 XT or INTEL Arc A770</p>
                        <p className="requeriments-category"> <span className="requeriments-span"> DirectX: </span> Versión 12</p>
                        <p className="requeriments-category"> <span className="requeriments-span"> Almacenamiento: </span> 85 GB de espacio disponible</p>
                        <p className="requeriments-category"> <span className="requeriments-span"> Notas Adicionales: </span> SSD, 1080p/60 fps, High Quality Settings</p>
                    </div>
                </div>

            </div>

            <div className="detail-extra-columnTwo">
                <div className="detail-extra-info">
                    <div className="caracteristica">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#8AD128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        <h6 className="caracteristica-text"> Un Jugador </h6>
                    </div>
                    <div className="caracteristica">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#8AD128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l9 4.9V17L12 22l-9-4.9V7z"/></svg>
                        <h6 className="caracteristica-text"> Logros de Steel </h6>
                    </div>
                    <div className="caracteristica">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#8AD128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
                        <h6 className="caracteristica-text"> Compat. Parcial con mando </h6>
                    </div>
                    <div className="caracteristica">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#8AD128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.2 15c.7-1.2 1-2.5.7-3.9-.6-2-2.4-3.5-4.4-3.5h-1.2c-.7-3-3.2-5.2-6.2-5.6-3-.3-5.9 1.3-7.3 4-1.2 2.5-1 6.5.5 8.8m8.7-1.6V21"/><path d="M16 16l-4-4-4 4"/></svg>
                        <h6 className="caracteristica-text"> Steam Cloud </h6>
                    </div>
                    <div className="caracteristica">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#8AD128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line></svg>
                        <h6 className="caracteristica-text"> Remote Play </h6>
                    </div>
                </div>

                <div className="detail-extra-idiom"></div>

                <div className="detail-extra-esrb"></div>

                <div className="detail-extra-badges">
                    <p className="badge-title"> Incluye 35 logros de Steel</p>
                    <div className="badges-box">
                        <img src="https://github.com/Remojs/PI-Videogames/blob/master/client/public/img/Detail-img/achievement.png?raw=true" alt="" className="badge badge-one" />
                        <img src="https://github.com/Remojs/PI-Videogames/blob/master/client/public/img/Detail-img/achievement.png?raw=true" alt="" className="badge badge-two" />
                        <img src="https://github.com/Remojs/PI-Videogames/blob/master/client/public/img/Detail-img/achievement.png?raw=true" alt="" className="badge badge-three" />
                        <div className="badge"> Ver los 35...</div>
                    </div>
                </div>
                <div className="detail-extra-metacritic"></div>
            </div>

        </div>
    )
}

export default DetailExtra