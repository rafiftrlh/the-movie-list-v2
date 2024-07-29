import AiringTodayTvSection from '../sections/AiringTodayTvSection'
import CarouselSection from '../sections/CarouselSection'
import NowPlayingMoviesSection from '../sections/NowPlayingMoviesSection'
import PopularSection from '../sections/PopularSection'
import TrendingSection from '../sections/TrendingSection'

const Home = () => {
  return (
    <>
      <div className='fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'></div>
      <div className='fixed w-10 h-screen z-50 bg-gradient-to-r from-neutral-950 from-10% to-transparent'></div>
      <div className='fixed right-0 w-10 h-screen z-50 bg-gradient-to-l from-neutral-950 from-10% to-transparent'></div>
      <main className='py-5'>
        <CarouselSection />
        <TrendingSection />
        <NowPlayingMoviesSection />
        <AiringTodayTvSection />
        <PopularSection />
      </main>
    </>
  )
}

export default Home
