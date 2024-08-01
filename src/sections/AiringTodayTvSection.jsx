import { useGetAiringToday } from '../hooks/useGetTv'
import CardSimple from '../components/CardSimple'

const AiringTodayTvSection = () => {
  const { dataAiringToday } = useGetAiringToday()

  return (
    <>
      <div className='w-full mt-5'>
        <div className='flex flex-col md:flex-row items-start md:items-center gap-3 mx-10'>
          <h1 className='font-bold tracking-wide text-xl'>
            | Tv Series Airing Today
          </h1>
        </div>

        <div className='overflow-y-hidden mt-3 w-full relative'>
          <div className='flex overflow-x-auto gap-5 py-3 px-10'>
            {dataAiringToday?.results?.map((data, index) => (
              <CardSimple key={index} data={data} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default AiringTodayTvSection
