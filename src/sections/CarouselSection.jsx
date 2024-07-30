import { useGetCarouselData } from '../hooks/useGetMovieAndTv'
import { useEffect, useState } from 'react'
import { imageUrl } from '../services/api'

const CarouselSection = () => {
  const { dataCarousel } = useGetCarouselData()
  const [currentIndex, setCurrentIndex] = useState(0)
  console.log(dataCarousel)

  const prev = () => {
    const isFirstCurrentIndex = currentIndex === 0
    const newCurrentIndex = isFirstCurrentIndex
      ? dataCarousel.length - 1
      : currentIndex - 1
    setCurrentIndex(newCurrentIndex)
  }

  const next = () => {
    const isLastCurrentIndex = currentIndex === dataCarousel.length - 1
    const newCurrentIndex = isLastCurrentIndex ? 0 : currentIndex + 1
    setCurrentIndex(newCurrentIndex)
  }

  const goToSlide = index => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, dataCarousel.length])

  return (
    <div className='relative w-full max-w-[1400px] mx-auto p-5'>
      <div className='relative h-full overflow-hidden rounded-lg shadow-lg'>
        <div
          className='flex transition-transform duration-700 ease-in-out'
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {dataCarousel.map((data, index) => (
            <div key={index} className='w-full flex-shrink-0 relative'>
              <img
                src={imageUrl + data.backdrop_path}
                alt={data.title}
                className='object-cover w-full h-[500px] rounded-lg'
              />
              <div className='absolute flex flex-col items-end bottom-0 pt-52 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent text-white w-full gap-3'>
                <h2 className='text-xl font-bold tracking-wider text-end'>
                  {data.title || data.name}
                </h2>
                <div className='flex flex-wrap items-center justify-end gap-5'>
                  <span className='bg-gray-900 w-fit px-2 py-1 text-sm font-medium text-emerald-400 rounded-lg border-2 border-dark-steel-blue'>
                    Top Rating
                  </span>
                  <span className='bg-gray-900 w-fit px-2 py-1 text-sm font-medium text-emerald-400 fill-emerald-400 rounded-lg border-2 border-dark-steel-blue flex items-center gap-1 uppercase'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='15px'
                      height='15px'
                      viewBox='0 0 24 24'
                    >
                      <path
                        fillRule='evenodd'
                        d='M9 2.25a.75.75 0 0 1 .75.75v1.506a49 49 0 0 1 5.343.371a.75.75 0 1 1-.186 1.489q-.99-.124-1.99-.206a18.7 18.7 0 0 1-2.97 6.323q.476.576 1 1.108a.75.75 0 0 1-1.07 1.05A19 19 0 0 1 9 13.688a18.8 18.8 0 0 1-5.656 4.482a.75.75 0 0 1-.688-1.333a17.3 17.3 0 0 0 5.396-4.353A18.7 18.7 0 0 1 5.89 8.598a.75.75 0 0 1 1.388-.568A17.2 17.2 0 0 0 9 11.224a17.2 17.2 0 0 0 2.391-5.165a48 48 0 0 0-8.298.307a.75.75 0 0 1-.186-1.489a49 49 0 0 1 5.343-.371V3A.75.75 0 0 1 9 2.25M15.75 9a.75.75 0 0 1 .68.433l5.25 11.25a.75.75 0 1 1-1.36.634l-1.198-2.567h-6.744l-1.198 2.567a.75.75 0 0 1-1.36-.634l5.25-11.25A.75.75 0 0 1 15.75 9m-2.672 8.25h5.344l-2.672-5.726z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                    {data.original_language}
                  </span>
                  <span className='bg-gray-900 w-fit px-2 py-1 text-sm font-medium text-emerald-400 rounded-lg border-2 border-dark-steel-blue capitalize'>
                    {data.media_type}
                  </span>
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
                    <span className='font-medium text-sm'>
                      {data.vote_average}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='absolute top-10 md:bottom-10 md:top-auto left-10 transform flex space-x-2'>
          {dataCarousel.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition duration-500 ${
                index === currentIndex
                  ? 'bg-emerald-400 scale-150'
                  : 'bg-gray-400'
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <button
          className='absolute top-1/2 left-5 transform -translate-y-1/2 p-2 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition'
          onClick={prev}
          aria-label='Previous Slide'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 18l-6-6 6-6'
            />
          </svg>
        </button>

        <button
          className='absolute top-1/2 right-5 transform -translate-y-1/2 p-2 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition'
          onClick={next}
          aria-label='Next Slide'
        >
          <svg
            className='rotate-180'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 18l-6-6 6-6'
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default CarouselSection
