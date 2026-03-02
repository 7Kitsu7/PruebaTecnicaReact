import { pokeApi } from '../../../lib/axios';

export const getPokemons = async ({ pageParam = 0 }) => {
  const limit = 20;
  const { data } = await pokeApi.get(`/pokemon?limit=${limit}&offset=${pageParam}`);

  // Obtenemos los detalles de cada pokemon en paralelo
  const results = await Promise.all(
    data.results.map(async (p) => {
      const resp = await pokeApi.get(p.url); 
      return resp.data;
    })
  );

  return {
    results,
    nextOffset: data.next ? pageParam + limit : null
  };
};

export const getPokemonDetailsList = (list) =>
  Promise.all(list.map(async (p) => {
    const resp = await pokeApi.get(p.url);
    return resp.data;
  }));

export const getPokemonByName = async (name) => {
  try {
    const { data } = await pokeApi.get(`/pokemon/${name.toLowerCase()}`);
    return data;
  } catch (error) {
    throw new Error("Pokémon no encontrado");
  }
};