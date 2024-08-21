import { useState, useEffect, useMemo } from 'react'
import apiAxios from '../services/api'

const useGetCreditMovie = id => {
  const [dataCreditMovie, setDataCreditMovie] = useState([])

  useEffect(() => {
    apiAxios
      .get(`/movie/${id}/credits`)
      .then(ress => {
        setDataCreditMovie(ress.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [id])

  const memoizedDataCreditMovie = useMemo(
    () => dataCreditMovie,
    [dataCreditMovie]
  )

  return { dataCreditMovie: memoizedDataCreditMovie }
}

export { useGetCreditMovie }
