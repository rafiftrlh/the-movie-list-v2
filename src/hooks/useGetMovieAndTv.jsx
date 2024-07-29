import { useEffect, useState } from 'react'
import apiAxios from '../services/api'

const useGetPopular = type => {
  const [dataPopular, setDataPopular] = useState([])

  useEffect(() => {
    apiAxios
      .get(`/${type}/popular?page=1`)
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
      .get(`/trending/${type}/week`)
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
        const res = await apiAxios.get(`/trending/movie/day`)
        return res.data.results.slice(0, 5)
      } catch (err) {
        console.log(err)
        return []
      }
    }

    const fetchTrendingTV = async () => {
      try {
        const res = await apiAxios.get(`/trending/tv/day`)
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

export { useGetPopular, useGetTrendingWeek, useGetTrendingToday }
