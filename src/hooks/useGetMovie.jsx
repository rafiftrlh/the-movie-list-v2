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

const useGetPopular = type => {
  const [dataPopular, setDataPopular] = useState([])

  useEffect(() => {
    apiAxios
      .get(`/${type}/popular?language=en-US&page=1`)
      .then(res => {
        setDataPopular(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [type])

  return { dataPopular }
}

const useGetTrendingWeek = type => {
  const [dataTrendingWeek, setDataTrendingWeek] = useState([])

  useEffect(() => {
    apiAxios
      .get(`/trending/${type}/week?language=en-US`)
      .then(res => {
        setDataTrendingWeek(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [type])

  return { dataTrendingWeek }
}

const useGetTrendingToday = () => {
  const [dataTrending, setDataTrending] = useState([])

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const res = await apiAxios.get(`/trending/movie/day?language=en-US`)
        return res.data.results.slice(0, 5)
      } catch (err) {
        console.log(err)
        return []
      }
    }

    const fetchTrendingTV = async () => {
      try {
        const res = await apiAxios.get(`/trending/tv/day?language=en-US`)
        return res.data.results.slice(0, 5)
      } catch (err) {
        console.log(err)
        return []
      }
    }

    const fetchAllTrending = async () => {
      const [trendingMovies, trendingTV] = await Promise.all([
        fetchTrendingMovies(),
        fetchTrendingTV()
      ])

      const combinedData = [...trendingMovies, ...trendingTV]
      setDataTrending(combinedData)
    }

    fetchAllTrending()
  }, [])

  return { dataTrending }
}

export { useGetMovies, useGetTrendingWeek, useGetTrendingToday, useGetPopular }
