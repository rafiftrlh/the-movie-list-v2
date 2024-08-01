import { useEffect, useState } from 'react'
import apiAxios from '../services/api'

const useGetCollection = searchVal => {
  const [dataCollections, setDataCollections] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      if (searchVal) {
        setLoading(true)
        try {
          const res = await apiAxios.get(
            `/search/collection?query=${searchVal}&include_adult=false&language=en-US&page=1`
          )
          setDataCollections(res.data.results)
        } catch (err) {
          console.log(err)
        } finally {
          setLoading(false)
        }
      } else {
        setDataCollections([])
      }
    }

    const debounceFetch = setTimeout(fetchData, 300)

    return () => clearTimeout(debounceFetch)
  }, [searchVal])

  return { dataCollections, loading }
}

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

const useGetCarouselData = () => {
  const [dataCarousel, setDataCarousel] = useState([])

  useEffect(() => {
    const fetchCarouselMovies = async () => {
      try {
        const res = await apiAxios.get(`/movie/top_rated?page=1`)
        return res.data.results.slice(0, 5).map(movie => ({
          ...movie,
          media_type: 'movie',
          vote_average: parseFloat(movie.vote_average.toFixed(1))
        }))
      } catch (err) {
        console.log(err)
        return []
      }
    }

    const fetchCarouselTV = async () => {
      try {
        const res = await apiAxios.get(`/tv/top_rated?page=1`)
        return res.data.results.slice(0, 5).map(tv => ({
          ...tv,
          media_type: 'tv',
          vote_average: parseFloat(tv.vote_average.toFixed(1))
        }))
      } catch (err) {
        console.log(err)
        return []
      }
    }

    const fetchAllCarousel = async () => {
      const [carouselMovies, carouselTV] = await Promise.all([
        fetchCarouselMovies(),
        fetchCarouselTV()
      ])

      const combinedData = [...carouselMovies, ...carouselTV]
      setDataCarousel(combinedData)
    }

    fetchAllCarousel()
  }, [])

  return { dataCarousel }
}

export {
  useGetPopular,
  useGetTrendingWeek,
  useGetCarouselData,
  useGetCollection
}
