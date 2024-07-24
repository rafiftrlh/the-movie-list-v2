import { useGetMovies } from '../hooks/useGetMovie'

const Home = () => {
  const { dataMovies } = useGetMovies()

  console.log(dataMovies)

  return (
    <div>
      <div className=''></div>
    </div>
  )
}

export default Home
