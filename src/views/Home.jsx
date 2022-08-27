import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Home() {
  const [movies, setMovies] = useState(null)

  useEffect(() =>{
    const getMovies = async () =>{
      try {
        const moviesFromApi = await axios.get('http://localhost:8000/api/v1/movies')
        console.log(moviesFromApi.data.data)
        setMovies(moviesFromApi.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    getMovies()
  },[])
  return (
    <div>
      <h2>Home</h2>
      {movies && (movies.map(el =>{
        return(
          <div key={el._id}>
            <Link to={`/movie/${el._id}`}>{el.title}</Link>
            <img src={el.image} alt={el.title} />
          </div>
          
        )
      }))}
      {!movies && <p>Loading...</p>}
    </div>
  )
}
