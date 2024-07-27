import { useState } from 'react'
import CardPopular from '../components/CardPopular'
import { useGetPopular } from '../hooks/useGetMovie'
import { Link } from 'react-router-dom'

const PopularSection = () => {
  const [type, setType] = useState('movie')
  const { dataPopular } = useGetPopular(type)

  const handleToggle = () => {
    setType(prevType => (prevType === 'movie' ? 'tv' : 'movie'))
  }

  return (
    <>
      <div className='flex gap-10 mt-5'>
        {/* Trending Today */}
        <div className='w-full'>
          <div className='flex flex-col md:flex-row justify-start md:justify-between items-start gap-3 mx-10'>
            <div className='flex items-center gap-3'>
              <h1 className='font-bold tracking-wide text-xl'>| Popular</h1>
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
            <Link
              to='#'
              className='underline hover:text-emerald-500 font-medium tracking-wider'
            >
              See all
            </Link>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-3 w-full py-3 px-10'>
            {dataPopular?.results?.map((data, index) => (
              <CardPopular key={index} data={data} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default PopularSection
