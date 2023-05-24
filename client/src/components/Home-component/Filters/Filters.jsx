import React from 'react'
import { filterGenre, filterOrigin, orderByAlphabet, orderByRating, getAllGenres } from "../../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import {useEffect } from "react";
import './filters.css'


const Filters = () => {

  const genreList = useSelector(state => state.genres)
  const dispatch = useDispatch();

  const handleGenreFilter = (event) => dispatch(filterGenre(event.target.value))
  const handleOriginFilter = (event) => dispatch(filterOrigin(event.target.value))
  const handleOrderByAlphabet = (event) => dispatch(orderByAlphabet(event.target.value))
  const handleOrderByRating = (event) => dispatch(orderByRating(event.target.value))

  useEffect(() => {
    dispatch(getAllGenres());
  }, [dispatch]);

  return (
    <>
      <div className="filter-div">
                <select className="select-filter"  onChange={handleOrderByAlphabet}>
                    <option value="" disabled selected>Alfabetico</option>
                    <option value='none'> Normal </option>
                    <option value="ascA">A-Z</option>
                    <option value="descA">Z-A</option>
                </select>
 
                <select className="select-filter"  onChange={handleOrderByRating}>
                    <option value="" disabled selected>Rating</option>
                    <option value='none'> Normal </option>
                    <option value="ascR">Higher Rating</option>
                    <option value="descR">Lower Rating</option>
                </select>

                <select className="select-filter" onChange={handleGenreFilter}>
                    <option value="" disabled selected>Generos</option>
                    <option value="allGenres">Todos los géneros</option>
                    {genreList.map(genre => (
                        <option key={genre} value={genre}>{genre}</option>
                    ))}
                </select>

                <select className="select-filter" onChange={handleOriginFilter}>
                    <option value="" disabled selected>Origen</option>
                    <option value="allOrigin">Todos los orígenes</option>
                    <option value="API">API</option>
                    <option value="Database">Base de datos</option>
                </select>
            </div>
    </>
  )
}

export default Filters