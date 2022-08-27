import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

export default function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    const getMovie = async () => {
      try {
        const movieFromApi = await axios.get(`http://localhost:8000/api/v1/movies/${id}`)
        setMovie(movieFromApi.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    getMovie()
  }, [id])

  const handleDelete = async () => {
    await axios.delete(`http://localhost:8000/api/v1/movies/${id}`)
    navigate('/')
  }
  return (
    <div>
      <h2>Movie details</h2>
      {movie && (
        <div>
          <div className='movie-plus-year'>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
          </div>
          <p>{movie.director}</p>
          <p>{movie.duration}</p>
          <p>{movie.synopsis}</p>
          <p>{movie.image}</p>
          <Link to={`/edit/${id}`}><button>Edit movie</button></Link>
          <button onClick={handleDelete}>Delete movie</button>
        </div>
      )}

    </div>
  )
}
