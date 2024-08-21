import CardSimple from '../components/CardSimple'
import { useGetNowPlayingMovies } from '../hooks/useGetMovie'

const NowPlayingMoviesSection = () => {
  const { dataNowPlayingMovies } = useGetNowPlayingMovies()

  return (
    <>
      <div className='w-full mt-5'>
        <div className='flex flex-col md:flex-row items-start md:items-center gap-3 mx-10'>
          <h1 className='font-bold tracking-wide text-xl'>
            | Movies Now Playing
          </h1>
        </div>

        <div className='overflow-y-hidden mt-3 w-full relative'>
          <div className='flex overflow-x-auto gap-5 py-3 px-10'>
            {dataNowPlayingMovies?.map((data, index) => (
              <CardSimple key={index} data={data} type='movie' />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default NowPlayingMoviesSection
