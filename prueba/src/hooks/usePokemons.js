import { useQuery } from '@tanstack/react-query';
import { getPokemons } from '../api/pokemonApi';

export const usePokemons = () => {
  return useQuery({
    queryKey: ['pokemons'],
    queryFn: () => getPokemons(100),
    staleTime: 1000 * 60 * 5, 
    refetchOnWindowFocus: false, 
  });
};