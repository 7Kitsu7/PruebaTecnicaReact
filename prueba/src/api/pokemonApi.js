const POKE_URL = import.meta.env.VITE_POKEAPI_URL;
const JSON_URL = import.meta.env.VITE_JSONPLACEHOLDER_URL;

const fetchJson = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Error al conectar con la API: ${url}`);
  return res.json();
};

export const getPokemons = async ({ pageParam = 0 }) => {
  const limit = 20;
  const data = await fetchJson(`${POKE_URL}/pokemon?limit=${limit}&offset=${pageParam}`);
  const results = await Promise.all(data.results.map(p => fetchJson(p.url)));
  return { 
    results, 
    nextOffset: data.next ? pageParam + limit : null 
  };
};

export const getAllNames = async () => {
  const { count } = await fetchJson(`${POKE_URL}/pokemon?limit=1`);
  const data = await fetchJson(`${POKE_URL}/pokemon?limit=${count}`);
  return data.results; 
};

export const getPokemonDetailsList = (list) => 
  Promise.all(list.map(p => fetchJson(p.url)));

export const getPokemonByName = async (name) => {
  return fetchJson(`${POKE_URL}/pokemon/${name.toLowerCase()}`);
};

export const postOpinion = async (opinionData) => {
  const res = await fetch(`${JSON_URL}/posts`, {
    method: 'POST',
    body: JSON.stringify(opinionData),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
  if (!res.ok) throw new Error('Error al enviar la opinión');
  return res.json();
};