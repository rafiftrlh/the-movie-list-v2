/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { imageUrl } from '../services/api'

const CardTrending = ({ type, data }) => {
  return (
    <Link
      to={`/${type}/${data.id}`}
      className='overflow-hidden group w-48 flex-shrink-0 relative hover:scale-105 transition-transform cursor-pointer rounded-lg'
    >
      <div className='w-full'>
        <span className='absolute top-0 left-0 py-1 pl-2 pr-3 bg-red-600 text-sm rounded-ee-lg flex items-center gap-1 w-fit'>
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
          <span className='font-medium text-sm'>{data.popularity}</span>
        </span>
        <div className='w-full flex-shrink-0 overflow-hidden'>
          <img
            src={imageUrl + data.poster_path}
            alt=''
            className='object-cover'
          />
        </div>
        <div className='w-full absolute -bottom-full group-hover:bottom-0 transition-all py-2 text-center bg-gradient-to-t from-80% from-black/60 to-transparent z-10'>
          <p className='font-medium mt-2'>{data.title || data.name}</p>
        </div>
      </div>
    </Link>
  )
}

export default CardTrending
