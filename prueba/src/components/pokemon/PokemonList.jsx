import { useState } from 'react';
import { usePokemons } from '../../hooks/usePokemons';
import { PokemonCard } from './PokemonCard';
import { PokemonSkeleton } from '../ui/PokemonSkeleton';

export const PokemonList = () => {
  const { data: pokemons, isLoading, isError } = usePokemons();
  const [search, setSearch] = useState("");

  const filtered = pokemons?.filter(poke => 
    poke.name.toLowerCase().includes(search.toLowerCase())
  );

  if (isError) return <div className="text-center p-10 font-bold text-red-500">Error al cargar datos.</div>;

  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-10 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Pokédex</h1>
        <input
          type="text"
          placeholder="Escribe el nombre de un pokémon..."
          className="w-full max-w-md p-4 rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {isLoading 
          ? Array.from({ length: 12 }).map((_, i) => <PokemonSkeleton key={i} />)
          : filtered?.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)
        }
      </main>
    </div>
  );
};