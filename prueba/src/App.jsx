import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { PokemonDetail } from './pages/PokemonDetail';
import { Opinion } from './pages/Opinion';
import { Navbar } from './components/ui/Navbar';

function App() {
  return ( 
    <BrowserRouter>
      <Navbar />
      <div className="min-h-screen bg-slate-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:name" element={<PokemonDetail />} />
          <Route path="/opinion/:name?" element={<Opinion />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;