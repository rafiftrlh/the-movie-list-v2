import { useState, useEffect, useMemo } from 'react'
import apiAxios from '../services/api'

const useGetMovies = () => {
  const [dataMovies, setDataMovies] = useState([])

  useEffect(() => {
    apiAxios
      .get(`/discover/movie?sort_by=popularity.desc`)
      .then(ress => {
        setDataMovies(ress.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const memoizedDataMovies = useMemo(() => dataMovies, [dataMovies])

  return { dataMovies: memoizedDataMovies }
}

const useGetNowPlayingMovies = () => {
  const [dataNowPlayingMovies, setDataNowPlayingMovies] = useState([])

  useEffect(() => {
    apiAxios
      .get(`/movie/now_playing`)
      .then(ress => setDataNowPlayingMovies(ress.data.results))
      .catch(err => console.log(err))
  }, [])

  const memoizedDataNowPlayingMovies = useMemo(
    () => dataNowPlayingMovies,
    [dataNowPlayingMovies]
  )

  return { dataNowPlayingMovies: memoizedDataNowPlayingMovies }
}

const useGetDetailMovie = id => {
  const [detailMovie, setDetailMovie] = useState([])

  useEffect(() => {
    apiAxios
      .get(`/movie/${id}`)
      .then(ress => setDetailMovie(ress.data))
      .catch(err => console.log(err))
  }, [id])

  return { detailMovie }
}

export { useGetMovies, useGetNowPlayingMovies, useGetDetailMovie }
