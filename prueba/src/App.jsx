import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PokemonPage } from './features/pokemon/pages/PokemonPage';
import { PokemonDetailPage } from './features/pokemon/pages/PokemonDetailPage';
import { OpinionPage } from './features/comments/pages/OpinionPage';
import { Navbar } from './components/layout/Navbar';

function App() {
  return ( 
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<PokemonPage />} />
          <Route path="/pokemon/:name" element={<PokemonDetailPage />} />
          <Route path="/opinion/:name?" element={<OpinionPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </BrowserRouter> 
  );
}

export default App;