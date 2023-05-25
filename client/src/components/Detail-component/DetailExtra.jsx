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

                <h3 className='detail-extra-title'> PACKS QUE INCLUYEN ESTE JUEGO </h3>
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

                <h3 className='detail-extra-title'> CONTENIDO PARA ESTE JUEGO </h3>
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

                <h3 className='detail-extra-title'> EVENTOS Y ANUNCIOS RECIENTES </h3>
                <div className="detail-extra-events">
                    <div className="event-box">
                        <img src="https://www.fcbarcelona.com/fcbarcelona/photo/2022/08/02/ae5252d1-b79b-4950-9e34-6e67fac09bb0/LeoMessi20092010_pic_fcb-arsenal62.jpg" alt="" className="event-img" />
                        <div className="event-info">
                            <h6 className="event-title"> Nuevo DLC disponible </h6>
                            <p className="event-date"> jue, 2 de febrero de 2023 </p>
                        </div>
                    </div>
                    <div className="event-box">
                        <img src="https://www.fcbarcelona.com/fcbarcelona/photo/2022/08/02/ae5252d1-b79b-4950-9e34-6e67fac09bb0/LeoMessi20092010_pic_fcb-arsenal62.jpg" alt="" className="event-img" />
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
                <div className="detail-extra-info"></div>
                <div className="detail-extra-idiom"></div>
                <div className="detail-extra-esrb"></div>
                <div className="detail-extra-badges"></div>
                <div className="detail-extra-infoTwo"></div>
                <div className="detail-extra-metacritic"></div>
            </div>

        </div>
    )
}

export default DetailExtra