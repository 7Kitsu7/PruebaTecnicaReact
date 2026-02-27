import { useInfiniteQuery } from '@tanstack/react-query';
import { getPokemons } from '../api/pokemonApi';

export const usePokemons = () => {
  const query = useInfiniteQuery({
    queryKey: ['pokemons', 'infinite'],
    queryFn: getPokemons,
    getNextPageParam: (lastPage) => lastPage.nextOffset,
    initialPageParam: 0,
    staleTime: 1000 * 60 * 10,
  });

  const allPokemons = query.data?.pages.flatMap(p => p.results) ?? [];

  return {
    allPokemons,
    ...query
  };
};