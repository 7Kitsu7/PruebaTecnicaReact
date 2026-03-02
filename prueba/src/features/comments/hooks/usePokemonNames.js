import { useQuery } from '@tanstack/react-query';
import { getAllNames } from '../../../services/pokemon.service';

export const usePokemonNames = () => {
  return useQuery({
    queryKey: ['pokemonNames'],
    queryFn: getAllNames,
    staleTime: 1000 * 60 * 60, 
  });
};