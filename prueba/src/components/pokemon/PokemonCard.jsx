export const PokemonCard = ({ pokemon }) => (
  <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center hover:scale-105 transition-transform">
    <img 
      src={pokemon.sprites.other['official-artwork'].front_default} 
      alt={pokemon.name}
      className="w-28 h-28 object-contain mb-4"
    />
    <h2 className="text-xl font-bold capitalize">{pokemon.name}</h2>
    <div className="flex gap-2 mt-3">
      {pokemon.types.map(t => (
        <span key={t.type.name} className="px-3 py-1 text-[10px] font-bold rounded-full bg-blue-50 text-blue-600 uppercase">
          {t.type.name}
        </span>
      ))}
    </div>
  </div>
);