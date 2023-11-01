
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokemonDetail from './pages/PokemonDetail'
import PrivateRoutes from './components/privateRoutes'

function App() {
  

  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<PrivateRoutes/> }>
           <Route path="/pokedex/" element={<Pokedex />} />
           <Route path="/pokedex/:pokemonId" element={<PokemonDetail />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
