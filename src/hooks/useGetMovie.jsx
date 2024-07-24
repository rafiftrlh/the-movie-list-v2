import apiAxios from '../services/api'
import { useState, useEffect } from 'react'

const useGetMovies = () => {
  const [dataMovies, setDataMovies] = useState([])
  useEffect(() => {
    apiAxios
      .get(`/discover/movie?sort_by=popularity.desc`)
      .then(ress => {
        setDataMovies(ress.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return { dataMovies }
}

export { useGetMovies }
