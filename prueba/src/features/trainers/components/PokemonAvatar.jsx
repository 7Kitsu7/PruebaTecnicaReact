import { usePokemonDetails } from '../../pokemon/hooks/usePokemonDetails';

export const PokemonAvatar = ({ identifier, size = "sm" }) => {
  const { data: pokemon, isLoading } = usePokemonDetails(identifier?.toString().toLowerCase());
  
  const containerClasses = size === "lg" 
    ? "w-48 h-48 rounded-[3rem] bg-slate-50 p-6" 
    : "w-8 h-8 rounded-full bg-slate-100 p-1"; 

  return (
    <div className={`${containerClasses} border border-slate-100 flex items-center justify-center overflow-hidden shrink-0 mx-auto`}>
      {isLoading ? (
        <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
      ) : (
        <img 
          src={pokemon?.sprites?.other['official-artwork']?.front_default || pokemon?.sprites?.front_default} 
          className="w-full h-full object-contain" 
          alt="pk" 
        />
      )}
    </div>
  );
};