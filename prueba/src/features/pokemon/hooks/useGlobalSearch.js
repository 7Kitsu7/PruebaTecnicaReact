import { useQuery } from '@tanstack/react-query';
import { getPokemonDetailsList } from '../api/pokemonApi';
import { getAllNames } from '../../../services/pokemon.service';

export const useGlobalSearch = (search) => {
  const query = useQuery({
    queryKey: ['global-search', search],
    queryFn: async () => {
      if (!search || search.length < 2) return [];
      
      const allResults = await getAllNames();
      
      const matches = allResults
        .filter(p => p.name.includes(search.toLowerCase().trim()))
        .slice(0, 20); 
        
      return getPokemonDetailsList(matches);
    },
    enabled: search.length >= 2,
    staleTime: 1000 * 60 * 30, 
  });

  return {
    searchResults: query.data ?? [],
    isSearching: query.isFetching,
    ...query
  };
};