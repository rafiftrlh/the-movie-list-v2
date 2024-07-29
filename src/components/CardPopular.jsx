import { imageUrl } from '../services/api'

const CardPopular = ({ data }) => {
  const formattedVote = data.vote_average.toFixed(1) // Membatasi nilai vote_average menjadi 1 angka desimal

  // Menentukan warna border berdasarkan nilai vote_average
  let borderColor = 'border-red-500'
  if (data.vote_average >= 4 && data.vote_average < 7) {
    borderColor = 'border-yellow-500'
  } else if (data.vote_average >= 7) {
    borderColor = 'border-green-500'
  }

  return (
    <div className='overflow-hidden group w-full flex-shrink-0 relative hover:scale-105 transition-transform'>
      <div className='w-full'>
        <div className='w-full flex-shrink-0 overflow-hidden rounded-lg'>
          <img
            src={imageUrl + data.poster_path}
            alt={data.title || data.name}
            className='object-cover'
          />
        </div>
        <span
          className={`absolute top-2 left-2 text-sm font-medium w-9 h-9 flex items-center justify-center bg-black/80 border-2 rounded-full ${borderColor}`}
        >
          {formattedVote}
        </span>
        <div className='my-2 flex items-start justify-between gap-2'>
          <div className=''>
            <p className='text-start text-white'>{data.title || data.name}</p>
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
              <span className='font-medium text-sm'>{data.popularity}</span>
            </div>{' '}
          </div>
          <button type='button' className='fill-gray-400'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30px'
              height='30px'
              viewBox='0 0 24 24'
            >
              <path
                fillRule='evenodd'
                d='M21 11.098v4.993c0 3.096 0 4.645-.734 5.321c-.35.323-.792.526-1.263.58c-.987.113-2.14-.907-4.445-2.946c-1.02-.901-1.529-1.352-2.118-1.47a2.225 2.225 0 0 0-.88 0c-.59.118-1.099.569-2.118 1.47c-2.305 2.039-3.458 3.059-4.445 2.945a2.238 2.238 0 0 1-1.263-.579C3 20.736 3 19.188 3 16.091v-4.994C3 6.81 3 4.666 4.318 3.333C5.636 2 7.758 2 12 2c4.243 0 6.364 0 7.682 1.332C21 4.665 21 6.81 21 11.098M8.25 6A.75.75 0 0 1 9 5.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 6'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardPopular
