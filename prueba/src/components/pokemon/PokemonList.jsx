import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { usePokemons } from '../../hooks/usePokemons';
import { useGlobalSearch } from '../../hooks/useGlobalSearch';
import { PokemonCard } from './PokemonCard';
import { PokemonSkeleton } from '../ui/PokemonSkeleton';
import { PokemonModal } from './PokemonModal'; 
import { styles } from './PokemonList.styles';

export const PokemonList = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null); 
  const { ref, inView } = useInView();

  const { allPokemons, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading: isLoadingList } = usePokemons();
  const { searchResults, isSearching } = useGlobalSearch(debouncedSearch);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 500);
    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    if (inView && hasNextPage && !search) fetchNextPage();
  }, [inView, hasNextPage, search, fetchNextPage]);

  const showSearchLayer = search.length >= 2;
  const isPending = (search !== debouncedSearch || isSearching) && showSearchLayer;

  const handleOpenModal = (pokemon) => setSelectedPokemon(pokemon);
  const handleCloseModal = () => setSelectedPokemon(null);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Pokédex</h1>
        <input
          type="text"
          placeholder="Busca por nombre (ej: char, mega, alola)..."
          className={styles.input}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>

      {showSearchLayer && (
        <section className={styles.searchSection}>
          <div className={styles.grid}>
            {isPending 
              ? Array.from({ length: 8 }).map((_, i) => <PokemonSkeleton key={`sk-search-${i}`} />)
              : searchResults.map(p => (
                  <PokemonCard 
                    key={`search-${p.id}`} 
                    pokemon={p} 
                    onClick={handleOpenModal} 
                  />
                ))
            }
          </div>
          {!isPending && searchResults.length === 0 && (
            <p className={styles.noResults}>No se encontraron coincidencias.</p>
          )}
          <hr className={styles.divider} />
        </section>
      )}

      <section className={styles.infiniteSection(showSearchLayer)}>
        <div className={styles.grid}>
          {allPokemons.map(p => (
            <PokemonCard 
              key={`list-${p.id}`} 
              pokemon={p} 
              onClick={handleOpenModal} 
            />
          ))}
          {(isLoadingList || isFetchingNextPage) && 
            Array.from({ length: 4 }).map((_, i) => <PokemonSkeleton key={`sk-list-${i}`} />)
          }
        </div>
        <div ref={ref} className={styles.loaderInfo}>
          {hasNextPage ? "Cargando más Pokémon..." : "Has visto a todos los Pokémon."}
        </div>
      </section>

      {selectedPokemon && (
        <PokemonModal 
          pokemon={selectedPokemon} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
};