import { Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage'
import DetailMoviePage from './pages/DetailMoviePage'

export default function App () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movie/:id' element={<DetailMoviePage />} />
    </Routes>
  )
}
