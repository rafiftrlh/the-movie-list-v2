import { useEffect, useState, useMemo } from 'react'
import apiAxios from '../services/api'

const useGetAiringToday = () => {
  const [dataAiringToday, setDataAiringToday] = useState([])

  useEffect(() => {
    apiAxios
      .get(`/tv/airing_today`)
      .then(ress => {
        setDataAiringToday(ress.data.results)
      })
      .catch(err => console.log(err))
  }, [])

  const memoizedDataAiringToday = useMemo(
    () => dataAiringToday,
    [dataAiringToday]
  )

  return { dataAiringToday: memoizedDataAiringToday }
}

const useGetOnTheAir = () => {
  const [dataOnTheAir, setDataOnTheAir] = useState([])

  useEffect(() => {
    apiAxios
      .get(`/tv/on_the_air`)
      .then(ress => {
        setDataOnTheAir(ress.data.results)
      })
      .catch(err => console.log(err))
  }, [])

  const memoizedDataOnTheAir = useMemo(() => dataOnTheAir, [dataOnTheAir])

  return { dataOnTheAir: memoizedDataOnTheAir }
}

export { useGetAiringToday, useGetOnTheAir }
