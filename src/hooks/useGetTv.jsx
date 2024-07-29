import { useEffect, useState } from 'react'
import apiAxios from '../services/api'

const useGetAiringToday = () => {
  const [dataAiringToday, setDataAiringToday] = useState([])

  useEffect(() => {
    apiAxios
      .get(`/tv/airing_today`)
      .then(ress => {
        setDataAiringToday(ress.data)
      })
      .catch(err => console.log(err))
  }, [])

  return { dataAiringToday }
}

const useGetOnTheAir = () => {
  const [dataOnTheAir, setDataOnTheAir] = useState([])

  useEffect(() => {
    apiAxios
      .get(`/tv/on_the_air`)
      .then(ress => {
        setDataOnTheAir(ress.data)
      })
      .catch(err => console.log(err))
  }, [])

  return { dataOnTheAir }
}

export { useGetAiringToday, useGetOnTheAir }
