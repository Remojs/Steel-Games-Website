import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGenres, getAllGames, PostVideogames } from "../../redux/actions";
import { useNavigate } from 'react-router-dom'
import validate from './validation'
import Nav from '../Layout-components/Nav/Nav'
import Footer from '../Layout-components/Footer/Footer'
import './form.css'


const AddVideogame = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const genreList = useSelector(state => state.genres)
    const platformsApi = [ "PC", "PlayStation 5", "PlayStation 4", "PlayStation 3", "Xbox One", "Xbox Series S/X", "Xbox 360", "Xbox", "Nintendo Switch", "Nintendo 3DS", "Nintendo DS", "Nintendo DSi", "iOS", "Android", "macOS", "Linux"]

    const [form, setForm] = useState({
        name: "",
        description: "",
        released: "",
        rating: "",
        genres: [],
        platform: [],
        image:""
    })

    const [errors, setErrors] = useState({
        name: "",
        description: "",
        released: "",
        rating: "",
        genres: [],
        platforms: [],
        image:""
    })

    useEffect(()=>{
        dispatch(getAllGenres());
        dispatch(getAllGames());
    },[dispatch]);


    const changeHandler = (event) =>{
        const property = event.target.name;
        const value = event.target.value;
        setForm({...form, [property]:value})
        setErrors(validate({...form, [property]:value}))
    }
    
    const handleSelectGenre = (event) => {
        const value = event.target.value;
        setForm({...form, genres: [...form.genres, value] })
    }
    
    const handleSelectPlatforms = (event) => {
        const value = event.target.value;
        setForm({ ...form, platform: [...form.platform, value] })
    }

    const submitHandler = (event) =>{
        event.preventDefault()
        dispatch(PostVideogames(form))
        setForm({
            name: "",
            description: "",
            released: "",
            rating: "",
            genres: [],
            platform: [],
            image:"",
        })
        navigate('/home')
    }
    
    return(
    <div className="form-box"> 
        <Nav />

        <h2 className="form-title-page">Crea Tu Videojuego</h2>

        <div className="form-container">
            <div className="qr-box">
                <h3 className="qr-title"> Escanea y crea tu juego</h3>
                <img className="qr" src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Commons_QR_code.png" alt="qr" />
                <p className="qr-text"> Usa la aplicación Steel Mobile para iniciar sesión con un código QR </p>
            </div>

            <form onSubmit={submitHandler}>
                <div className='form-input-boxes'>
                    <label className='form-label'>Nombre: </label>
                    <input className='form-input' type="text" value= {form.name} onChange={changeHandler} name= "name" />
                    {errors.name && <span className='error'>{errors.name}</span>}
                </div>

                <div className='form-input-boxes'>
                    <label className='form-label'>Descripcion: </label>
                    <input className='form-input' type= "text" value = {form.description} onChange={changeHandler} name= "description" />
                    {errors.description && <span className='error'>{errors.description}</span>}
                </div>

                <div className='form-input-boxes'>
                    <label className='form-label'>Fecha de lanzamiento: </label>
                    <input className='form-input' type= "date" value = {form.released} onChange={changeHandler} name= "released" />
                    {errors.released && <span className='error'>{errors.released}</span>}
                </div>

                <div className='form-input-boxes'>
                    <label className='form-label'>Imagen: </label>
                    <input className='form-input' type = "text" value = {form.image} onChange={changeHandler} name= "image"/>
                    {errors.image && <span className='error'>{errors.image}</span>}
                </div>

                <div className="form-input-boxes">
                    <label className='form-label'> Generos: </label>
                    <select className="form-select" onChange={(event) => handleSelectGenre(event)}>
                        <option disabled selected defaultValue> Seleccionar </option>
                        {genreList?.map((genre) =>(<option value={genre}> {genre} </option>))}
                    </select>
                    {errors.genres && <span className='error'>{errors.genres}</span>}
                    <ul><li>{form.genres.map(element => element + " ,")}</li></ul>
                </div>

                <div className="form-input-boxes">
                    <label className='form-label'>Plataformas: </label>
                        <select className="form-select" onChange={(event) => handleSelectPlatforms(event)}>
                            <option disabled selected defaultValue>Seleccionar</option>
                            {platformsApi?.map((element) => (<option value={element} key={element}> {element} </option> ))}
                        </select>
                        {errors.platforms && <span className='error'>{errors.platforms}</span>}
                        <ul><li>{form.platform.map(element => element + " ,")}</li></ul>
                </div>

                <div className='form-input-boxes'>
                    <label className='form-label'>Rating: </label>
                    <input className='form-input' type= "number" min= "0" max ="5" value = {form.rating} onChange={changeHandler} name= "rating"></input>
                    {errors.rating && <span className='error'>{errors.rating}</span>}
                </div>

                <button className="form-btn" type="submit" disabled = { 
                    form.name === '' || errors.name ||
                    form.description === '' || errors.description ||
                    form.rating === '' || errors.rating ||
                    form.released === '' || errors.released ||
                    form.image === '' || errors.image ||
                    form.genres === '' || errors.genres ||
                    form.platforms === '' || errors.platforms}> Crear Videojuego 
                </button>
            </form>
        </div>

        <Footer />

    </div>
    )
}

export default AddVideogame;