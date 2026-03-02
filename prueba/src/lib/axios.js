import axios from 'axios';

export const pokeApi = axios.create({
  baseURL: import.meta.env.VITE_POKEAPI_URL,
});

export const commentApi = axios.create({
  baseURL: import.meta.env.VITE_JSONPLACEHOLDER_URL,
});