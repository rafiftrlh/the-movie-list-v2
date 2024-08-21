import { Link, useParams } from 'react-router-dom'
import { useGetDetailMovie } from '../hooks/useGetMovie'
import { imageUrl } from '../services/api'
import { useEffect } from 'react'
import { useGetCreditMovie } from '../hooks/useGetPeople'

const DetailMoviePage = () => {
  const { id } = useParams()
  const { detailMovie } = useGetDetailMovie(id)
  const { dataCreditMovie } = useGetCreditMovie(id)
  const formattedVote = detailMovie?.vote_average?.toFixed(1)

  useEffect(() => {
    window.scrollTo({
      top: 0
    })
  }, [])

  return (
    <main>
      <div className='fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />
      <div className='h-screen w-screen'>
        <div
          style={{
            backgroundImage: `url(${
              detailMovie.backdrop_path
                ? imageUrl + detailMovie.backdrop_path
                : ''
            })`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
          className='h-full w-full flex gap-10 flex-shrink-0 relative p-10'
        >
          <div
            className='absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-none'
            style={{ zIndex: 1 }}
          ></div>
          <div className='h-full w-full xs:w-fit flex-shrink-0 mx-auto md:mx-0 aspect-poster overflow-hidden rounded-xl z-10'>
            <img
              src={imageUrl + detailMovie.poster_path}
              alt={detailMovie.title}
              className='object-cover w-full h-full'
            />
          </div>
          <div className='w-full h-full relative hidden md:block z-50'>
            <div className='flex flex-col items-start gap-5 mb-3'>
              <Link
                to='/'
                className='flex items-center gap-0.5 cursor-pointer bg-gray-500/50 text-white pl-2 pr-3 py-1 rounded-full backdrop-blur-sm border border-gray-400'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20px'
                  height='20px'
                  viewBox='0 0 512 512'
                >
                  <path
                    fill='none'
                    stroke='white'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={40}
                    d='M328 112L184 256l144 144'
                  ></path>
                </svg>
                <span className='font-semibold text-sm'>Back</span>
              </Link>
              <h1 className='text-3xl font-bold text-pretty text-white'>
                {detailMovie.title}
              </h1>
            </div>
            <div className='flex flex-wrap items-center gap-3 mb-4'>
              <p className='font-semibold'>Genres : </p>
              {detailMovie?.genres?.map((genre, index) => (
                <span
                  key={index}
                  className='bg-gray-500/50 text-slate-100 px-4 text-sm py-1 flex-shrink-0 rounded-full backdrop-blur-sm border border-gray-400'
                >
                  {genre.name}
                </span>
              ))}
            </div>
            <div className='flex items-center gap-5 mb-4'>
              <div className='flex items-center gap-1 w-fit'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20px'
                  height='20px'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='#ff8800'
                    d='M17.66 11.2c-.23-.3-.51-.56-.77-.82c-.67-.6-1.43-1.03-2.07-1.66C13.33 7.26 13 4.85 13.95 3c-.95.23-1.78.75-2.49 1.32c-2.59 2.08-3.61 5.75-2.39 8.9c.04.1.08.2.08.33c0 .22-.15.42-.35.5c-.23.1-.47.04-.66-.12a.6.6 0 0 1-.14-.17c-1.13-1.43-1.31-3.48-.55-5.12C5.78 10 4.87 12.3 5 14.47c.06.5.12 1 .29 1.5c.14.6.41 1.2.71 1.73c1.08 1.73 2.95 2.97 4.96 3.22c2.14.27 4.43-.12 6.07-1.6c1.83-1.66 2.47-4.32 1.53-6.6l-.13-.26c-.21-.46-.77-1.26-.77-1.26m-3.16 6.3c-.28.24-.74.5-1.1.6c-1.12.4-2.24-.16-2.9-.82c1.19-.28 1.9-1.16 2.11-2.05c.17-.8-.15-1.46-.28-2.23c-.12-.74-.1-1.37.17-2.06c.19.38.39.76.63 1.06c.77 1 1.98 1.44 2.24 2.8c.04.14.06.28.06.43c.03.82-.33 1.72-.93 2.27'
                  ></path>
                </svg>
                <span className='font-medium text-sm'>
                  {detailMovie?.popularity}
                </span>
              </div>
              <div className='flex items-center gap-1 w-fit'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20px'
                  height='20px'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='#ff8800'
                    d='M12.865 2.996a1 1 0 0 0-1.73 0L8.421 7.674a1.25 1.25 0 0 1-.894.608L2.44 9.05c-.854.13-1.154 1.208-.488 1.76l3.789 3.138c.35.291.515.75.43 1.197L5.18 20.35a1 1 0 0 0 1.448 1.072l4.79-2.522a1.25 1.25 0 0 1 1.164 0l4.79 2.522a1 1 0 0 0 1.448-1.072l-.991-5.205a1.25 1.25 0 0 1 .43-1.197l3.79-3.139c.665-.55.365-1.63-.49-1.759l-5.085-.768a1.25 1.25 0 0 1-.895-.608z'
                  ></path>
                </svg>
                <span className='font-medium text-sm'>{formattedVote}/10</span>
              </div>
            </div>
            <h2 className='text-xl font-semibold tracking-wider'>Overview</h2>
            <p className='mb-4 text-pretty text-white'>
              {detailMovie.overview}
            </p>
          </div>
        </div>
      </div>

      <div className='w-full h-full relative md:hidden p-10'>
        <div className='flex flex-col items-start gap-5 mb-3'>
          <Link
            to='/'
            className='flex items-center gap-0.5 cursor-pointer bg-gray-500/50 text-white pl-2 pr-3 py-1 rounded-full backdrop-blur-sm border border-gray-400'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20px'
              height='20px'
              viewBox='0 0 512 512'
            >
              <path
                fill='none'
                stroke='white'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={40}
                d='M328 112L184 256l144 144'
              ></path>
            </svg>
            <span className='font-semibold text-sm'>Back</span>
          </Link>
          <h1 className='text-3xl font-bold text-pretty text-white'>
            {detailMovie.title}
          </h1>
        </div>
        <div className='flex flex-wrap items-center gap-3 mb-4'>
          <p className='font-semibold'>Genres : </p>
          {detailMovie?.genres?.map((genre, index) => (
            <span
              key={index}
              className='bg-gray-500/50 text-slate-100 px-4 text-sm py-1 flex-shrink-0 rounded-full backdrop-blur-sm border border-gray-400'
            >
              {genre.name}
            </span>
          ))}
        </div>
        <div className='flex items-center gap-5 mb-4'>
          <div className='flex items-center gap-1 w-fit'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20px'
              height='20px'
              viewBox='0 0 24 24'
            >
              <path
                fill='#ff8800'
                d='M17.66 11.2c-.23-.3-.51-.56-.77-.82c-.67-.6-1.43-1.03-2.07-1.66C13.33 7.26 13 4.85 13.95 3c-.95.23-1.78.75-2.49 1.32c-2.59 2.08-3.61 5.75-2.39 8.9c.04.1.08.2.08.33c0 .22-.15.42-.35.5c-.23.1-.47.04-.66-.12a.6.6 0 0 1-.14-.17c-1.13-1.43-1.31-3.48-.55-5.12C5.78 10 4.87 12.3 5 14.47c.06.5.12 1 .29 1.5c.14.6.41 1.2.71 1.73c1.08 1.73 2.95 2.97 4.96 3.22c2.14.27 4.43-.12 6.07-1.6c1.83-1.66 2.47-4.32 1.53-6.6l-.13-.26c-.21-.46-.77-1.26-.77-1.26m-3.16 6.3c-.28.24-.74.5-1.1.6c-1.12.4-2.24-.16-2.9-.82c1.19-.28 1.9-1.16 2.11-2.05c.17-.8-.15-1.46-.28-2.23c-.12-.74-.1-1.37.17-2.06c.19.38.39.76.63 1.06c.77 1 1.98 1.44 2.24 2.8c.04.14.06.28.06.43c.03.82-.33 1.72-.93 2.27'
              ></path>
            </svg>
            <span className='font-medium text-sm'>
              {detailMovie?.popularity}
            </span>
          </div>
          <div className='flex items-center gap-1 w-fit'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20px'
              height='20px'
              viewBox='0 0 24 24'
            >
              <path
                fill='#ff8800'
                d='M12.865 2.996a1 1 0 0 0-1.73 0L8.421 7.674a1.25 1.25 0 0 1-.894.608L2.44 9.05c-.854.13-1.154 1.208-.488 1.76l3.789 3.138c.35.291.515.75.43 1.197L5.18 20.35a1 1 0 0 0 1.448 1.072l4.79-2.522a1.25 1.25 0 0 1 1.164 0l4.79 2.522a1 1 0 0 0 1.448-1.072l-.991-5.205a1.25 1.25 0 0 1 .43-1.197l3.79-3.139c.665-.55.365-1.63-.49-1.759l-5.085-.768a1.25 1.25 0 0 1-.895-.608z'
              ></path>
            </svg>
            <span className='font-medium text-sm'>{formattedVote}/10</span>
          </div>
        </div>
        <h2 className='text-xl font-semibold tracking-wider'>Overview</h2>
        <p className='mb-4 text-pretty text-white'>{detailMovie.overview}</p>
      </div>
      <div className='mt-0 md:mt-10'>
        <h2 className='text-2xl font-bold text-white mb-4 px-10'>| Cast</h2>
        <div className='flex gap-5 overflow-x-scroll py-5 px-10'>
          {dataCreditMovie?.cast?.map((c, index) => (
            <div
              key={index}
              className='w-52 rounded-lg overflow-hidden flex-shrink-0 bg-zinc-900 border-[1.5px] border-zinc-500/50'
            >
              <div className='w-full aspect-poster overflow-hidden'>
                <img
                  src={imageUrl + c.profile_path}
                  alt={c.name}
                  className='object-contain w-full h-full'
                />
              </div>
              <div className='text-white p-2'>
                <h2 className='font-bold'>{c.name}</h2>
                <p className='text-slate-200'>{c.character}</p>
              </div>
            </div>
          ))}
        </div>
        <h2 className='text-2xl font-bold text-white mb-4 mt-10 px-10'>
          | Crew
        </h2>
        <div className='flex gap-5 overflow-x-scroll py-5 px-10'>
          {dataCreditMovie?.crew?.map((c, index) => (
            <div
              key={index}
              className='w-52 rounded-lg overflow-hidden flex-shrink-0 bg-zinc-900 border-[1.5px] border-zinc-500/50'
            >
              <div className='w-full aspect-poster overflow-hidden'>
                <img
                  src={imageUrl + c.profile_path}
                  alt={c.name}
                  className='object-contain w-full h-full'
                />
              </div>
              <div className='text-white p-2'>
                <h2 className='font-bold'>{c.name}</h2>
                <p className='text-slate-200'>{c.department}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default DetailMoviePage
