import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGenres, getAllGames, PostVideogames } from "../../redux/actions";
import validate from './validation'
import './form.css'


const AddVideogame = () => {

    const dispatch = useDispatch();
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
    }
    
    return(
    <div className="form-box">
        <div className="form-container">
            <form onSubmit={submitHandler}>
            <h2>Crea Tu Propio Videojuego!</h2>

            <div>
                <label>Nombre: </label>
                <input type="text" value= {form.name} onChange={changeHandler} name= "name" />
                {errors.name && <span>{errors.name}</span>}
            </div>

            <div>
                <label>Descripcion: </label>
                <input type= "text" value = {form.description} onChange={changeHandler} name= "description" />
                {errors.description && <span>{errors.description}</span>}
            </div>

            <div>
                <label>Fecha de lanzamiento: </label>
                <input type= "date" value = {form.released} onChange={changeHandler} name= "released" />
                {errors.released && <span>{errors.released}</span>}
            </div>

            <div>
                <label>Imagen: </label>
                <input type = "text" value = {form.image} onChange={changeHandler} name= "image"/>
                {errors.image && <span>{errors.image}</span>}
            </div>

            <div>
                <label> Generos: </label>
                <select onChange={(event) => handleSelectGenre(event)}>
                    <option disabled selected defaultValue> Seleccionar </option>
                    {genreList?.map((genre) =>(<option value={genre}> {genre} </option>))}
                </select>
                {errors.genres && <span>{errors.genres}</span>}
                <ul><li>{form.genres.map(element => element + " ,")}</li></ul>
            </div>

            <div>
                <label>Plataformas: </label>
                    <select onChange={(event) => handleSelectPlatforms(event)}>
                        <option disabled selected defaultValue>Seleccionar</option>
                        {platformsApi?.map((element) => (<option value={element} key={element}> {element} </option> ))}
                    </select>
                    {errors.platforms && <span>{errors.platforms}</span>}
                    <ul><li>{form.platform.map(element => element + " ,")}</li></ul>
            </div>

            <div>
                <label>Rating: </label>
                <input type= "number" min= "0" max ="5" value = {form.rating} onChange={changeHandler} name= "rating"></input>
                {errors.rating && <span>{errors.rating}</span>}
            </div>

            <button type="submit" disabled = { 
                form.name === '' || errors.name ||
                form.description === '' || errors.description ||
                form.rating === '' || errors.rating ||
                form.released === '' || errors.released ||
                form.image === '' || errors.image ||
                form.genres === '' || errors.genres ||
                form.platforms === '' || errors.platforms}> Crear Videojuego </button>
            </form>
        </div>
    </div>
    )
}

export default AddVideogame;