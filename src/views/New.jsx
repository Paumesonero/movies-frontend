import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function New() {

  const navigate = useNavigate()
  const [movie, setMovie] = useState({
    title: '',
    year: '',
    director: '',
    duration: '',
    synopsis: '',
    image: ''
  })

  const handleChange = (e) => {
    const conditionalValue = e.target.name === 'year' ? parseInt(e.target.value) : e.target.value;
    console.log(conditionalValue)
    setMovie(prev => {
      return {
        ...prev,
        [e.target.name]: conditionalValue
      }
    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const newMovie = await axios.post('http://localhost:8000/api/v1/movies', movie)
      navigate(`/movie/${newMovie.data.data._id}`)
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <div>
      <h2>Create a movie</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Enter title" value={movie.title} onChange={handleChange} />
        <input type="number" name="year" placeholder="Enter year" value={movie.year} onChange={handleChange} />
        <input type="text" name="director" placeholder="Enter director" value={movie.director} onChange={handleChange} />
        <input type="text" name="duration" placeholder="Enter duration" value={movie.duration} onChange={handleChange} />
        <input type="text" name="synopsis" placeholder="Enter synopsis" value={movie.synopsis} onChange={handleChange} />
        <input type="text" name="image" placeholder="Enter image" value={movie.image} onChange={handleChange} />
        <button type='submit'>Submit</button>

      </form>
    </div>
  )
}
