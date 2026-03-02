import { pokeApi } from '../lib/axios';

export const getAllNames = async () => {
  const { data: initialData } = await pokeApi.get('/pokemon?limit=1')
  const { data } = await pokeApi.get(`/pokemon?limit=${initialData.count}`)
  return data.results
}

