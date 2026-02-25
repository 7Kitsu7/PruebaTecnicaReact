const BASE_URL = import.meta.env.VITE_API_URL;

export const getPokemons = async (limit = 100) => {
  const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}`);
  if (!response.ok) throw new Error('Error al obtener la lista');
  const data = await response.json();

  const detailPromises = data.results.map(async (pokemon) => {
    const res = await fetch(pokemon.url);
    if (!res.ok) throw new Error(`Error al obtener detalles de ${pokemon.name}`);
    return res.json();
  });

  return Promise.all(detailPromises);
};