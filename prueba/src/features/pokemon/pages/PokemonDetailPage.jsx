import { useParams, useNavigate } from 'react-router-dom';
import { usePokemonDetails } from '../hooks/usePokemonDetails';
import { PokemonModal } from '../components/PokemonModal';

export const PokemonDetailPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { data: pokemon, isLoading } = usePokemonDetails(name);

  const handleClose = () => navigate('/');

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300" 
        onClick={handleClose} 
      />
      
      {!isLoading && pokemon && (
        <PokemonModal pokemon={pokemon} onClose={handleClose} />
      )}
      
      {isLoading && (
        <div className="z-10 flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};