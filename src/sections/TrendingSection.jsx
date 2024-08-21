import { useState } from 'react'
import { useGetTrendingWeek } from '../hooks/useGetMovieAndTv'
import CardSimple from '../components/CardSimple'

const TrendingSection = () => {
  const [type, setType] = useState('movie')
  const { dataTrendingWeek } = useGetTrendingWeek(type)

  const handleToggle = () => {
    setType(prevType => (prevType === 'movie' ? 'tv' : 'movie'))
  }

  return (
    <>
      {/* Trending Week */}
      <div className='w-full mt-5'>
        <div className='flex flex-col md:flex-row items-start md:items-center gap-3 mx-10'>
          <h1 className='font-bold tracking-wide text-xl'>| Trending Week</h1>
          {/* Toggle Switch */}
          <div className='flex items-center cursor-pointer'>
            <div className='relative w-48 h-10 bg-transparent rounded-full border border-[#13395c]'>
              <div
                className={`absolute top-0 w-1/2 h-full rounded-full transition-all duration-300 ${
                  type === 'movie'
                    ? 'bg-dark-steel-blue left-0'
                    : 'bg-dark-steel-blue left-1/2'
                }`}
              ></div>
              <span
                onClick={() => handleToggle('movie')}
                className={`absolute left-0 w-1/2 text-center leading-10 transition-all duration-300 text-sm ${
                  type === 'movie'
                    ? 'text-emerald-400 font-semibold'
                    : 'text-white'
                }`}
              >
                Movies
              </span>
              <span
                onClick={() => handleToggle('tv')}
                className={`absolute right-0 w-1/2 text-center leading-10 transition-all duration-300 text-sm ${
                  type === 'tv'
                    ? 'text-emerald-400 font-semibold'
                    : 'text-white'
                }`}
              >
                TV Series
              </span>
            </div>
          </div>
        </div>

        <div className='overflow-y-hidden mt-3 w-full relative'>
          <div className='flex overflow-x-auto gap-5 py-3 px-10'>
            {dataTrendingWeek?.map((data, index) => (
              <CardSimple key={index} data={data} type={type} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default TrendingSection
