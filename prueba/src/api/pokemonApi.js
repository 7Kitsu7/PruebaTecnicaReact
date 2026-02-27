const BASE_URL = import.meta.env.VITE_API_URL;

const fetchJson = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Error al conectar con la API: ${url}`);
  return res.json();
};

export const getPokemons = async ({ pageParam = 0 }) => {
  const limit = 20;
  const data = await fetchJson(`${BASE_URL}/pokemon?limit=${limit}&offset=${pageParam}`);
  
  const results = await Promise.all(data.results.map(p => fetchJson(p.url)));
  
  return { 
    results, 
    nextOffset: data.next ? pageParam + limit : null 
  };
};

export const getAllNames = async () => {
  const { count } = await fetchJson(`${BASE_URL}/pokemon?limit=1`);
  const data = await fetchJson(`${BASE_URL}/pokemon?limit=${count}`);
  return data.results; 
};

export const getPokemonDetailsList = (list) => 
  Promise.all(list.map(p => fetchJson(p.url)));