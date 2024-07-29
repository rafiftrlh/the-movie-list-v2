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

const useGetNowPlayingMovies = () => {
  const [dataNowPlayingMovies, setDataNowPlayingMovies] = useState([])

  useEffect(() => {
    apiAxios
      .get(`/movie/now_playing`)
      .then(ress => setDataNowPlayingMovies(ress.data))
      .catch(err => console.log(err))
  }, [])

  return { dataNowPlayingMovies }
}

export { useGetMovies, useGetNowPlayingMovies }
