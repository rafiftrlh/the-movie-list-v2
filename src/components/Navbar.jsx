import { useEffect, useState } from 'react'
import { useGetCollection } from '../hooks/useGetMovieAndTv'
import { imageUrl } from '../services/api'

const Navbar = () => {
  let [openModal, setOpenModal] = useState(false)

  return (
    <div className='px-10 py-5 flex justify-between items-center'>
      <h1 className='text-xl font-semibold text-emerald-400'>
        The Movie List V2
      </h1>
      <button type='button' onClick={() => setOpenModal(true)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='25.13px'
          height='27px'
          viewBox='0 0 15 16'
        >
          <path
            fill='white'
            d='M6.5 13.02a5.5 5.5 0 0 1-3.89-1.61C1.57 10.37 1 8.99 1 7.52s.57-2.85 1.61-3.89c2.14-2.14 5.63-2.14 7.78 0C11.43 4.67 12 6.05 12 7.52s-.57 2.85-1.61 3.89a5.5 5.5 0 0 1-3.89 1.61m0-10c-1.15 0-2.3.44-3.18 1.32C2.47 5.19 2 6.32 2 7.52s.47 2.33 1.32 3.18a4.51 4.51 0 0 0 6.36 0C10.53 9.85 11 8.72 11 7.52s-.47-2.33-1.32-3.18A4.48 4.48 0 0 0 6.5 3.02'
          ></path>
          <path
            fill='white'
            d='M13.5 15a.47.47 0 0 1-.35-.15l-3.38-3.38c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.38 3.38c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z'
          ></path>
        </svg>
      </button>
      {openModal && <ModalSearch setOpenModal={setOpenModal} />}
    </div>
  )
}

const ModalSearch = ({ setOpenModal }) => {
  const [query, setQuery] = useState('')
  const { dataCollections, loading } = useGetCollection(query)

  const handleOnChange = value => {
    setQuery(value)
    console.log(dataCollections)
  }

  return (
    <div className='fixed inset-0 bg-neutral-900/30 z-[99] backdrop-blur-sm flex items-start py-10 justify-center'>
      <div className='w-9/12 max-h-full border-y border-neutral-600 bg-neutral-800 rounded-md text-neutral-300 flex flex-col relative'>
        <label className='flex items-center gap-3 px-5 py-3 border-b border-inherit'>
          <svg
            className='fill-slate-300'
            xmlns='http://www.w3.org/2000/svg'
            width='20px'
            height='20px'
            viewBox='0 0 16 16'
          >
            <path
              fillRule='evenodd'
              d='M11.5 7a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-.82 4.74a6 6 0 1 1 1.06-1.06l3.04 3.04a.75.75 0 1 1-1.06 1.06z'
              clipRule='evenodd'
            ></path>
          </svg>
          <input
            onChange={e => handleOnChange(e.target.value)}
            autoFocus
            type='search'
            className='bg-transparent outline-none border-none w-full border text-inherit'
            placeholder='Search movie or tv series . . .'
          />
        </label>
        <div className='flex-1 overflow-y-auto py-5 px-5'>
          {query === '' && (
            <>
              <h2 className='font-medium text-inherit text-lg tracking-wider'>
                Recent
              </h2>
              <p className='text-neutral-400'>None</p>
            </>
          )}
          {loading ? (
            <p className='text-neutral-400'>Loading...</p>
          ) : (
            <>
              {dataCollections.length <= 0 && query !== '' ? (
                <>
                  <h2 className='font-medium text-inherit text-lg tracking-wider'>
                    Results
                  </h2>
                  <p className='text-neutral-400'>No results found</p>
                </>
              ) : (
                <ul className='flex flex-col w-full gap-3'>
                  {dataCollections.map(item => (
                    <li key={item.id} className='flex w-full'>
                      <div className='h-24 sm:h-32 aspect-poster rounded-lg overflow-hidden'>
                        {item.poster_path == null ? (
                          <img
                            src='/img/no_image_found.png'
                            alt=''
                            className='object-cover rounded-lg'
                          />
                        ) : (
                          <img
                            src={imageUrl + item.poster_path}
                            alt={item.title || item.name}
                            className='w-full h-full object-cover'
                          />
                        )}
                      </div>
                      <div className='flex flex-col ml-2 mt-1'>
                        <p className='text-inherit'>
                          {item.title || item.name}
                        </p>
                        <span className='flex items-center gap-2'>
                          <svg
                            className='fill-neutral-300'
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
                          {item.original_language}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
        <div className='h-fit px-5 py-3 flex-shrink-0 border-t border-inherit flex justify-between items-center'>
          <button
            onClick={() => setOpenModal(false)}
            type='button'
            className='flex items-center gap-2'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20px'
              height='20px'
              viewBox='0 0 48 48'
            >
              <g
                className='stroke-neutral-300'
                fill='none'
                strokeLinejoin='round'
                strokeWidth={3}
              >
                <path d='M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z'></path>
                <path
                  strokeLinecap='round'
                  d='M29.657 18.343L18.343 29.657m0-11.314l11.314 11.314'
                ></path>
              </g>
            </svg>
            Close
          </button>
          <h2 className='font-semibold text-inherit tracking-widest text-sm'>
            The Movie List V2
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Navbar
