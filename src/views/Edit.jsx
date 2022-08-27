import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Edit() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const movieFromApi = await axios.get(`http://localhost:8000/api/v1/movies/${id}`);
        setMovie(movieFromApi.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    getMovie();
  }, [id])


  return (
    <div>
      <h2>Edit movie</h2>
      <form>
        <input type="text" name="title" value={movie.title} />
        <input type="number" name="year" value={movie.year} />
        <input type="text" name="director" value={movie.director} />
        <input type="text" name="duration" value={movie.duration} />
        <input type="text" name="synopsis" value={movie.synopsis} />
        <input type="text" />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
