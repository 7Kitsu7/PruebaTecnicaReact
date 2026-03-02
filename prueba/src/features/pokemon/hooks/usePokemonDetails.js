import { useQuery } from '@tanstack/react-query';
import { getPokemonByName } from '../api/pokemonApi';

export const usePokemonDetails = (name) => {
  return useQuery({
    queryKey: ['pokemon', name],
    queryFn: () => getPokemonByName(name),
    enabled: !!name,
  });
};