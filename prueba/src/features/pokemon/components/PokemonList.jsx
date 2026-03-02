import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { usePokemons } from '../hooks/usePokemons';
import { useGlobalSearch } from '../hooks/useGlobalSearch';
import { PokemonCard } from './PokemonCard';
import { PokemonSkeleton } from '../../../components/ui/PokemonSkeleton';
import { styles } from './PokemonList.styles';

export const PokemonList = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const navigate = useNavigate();
  const { ref, inView } = useInView();

  // Obtenemos los datos y estados de la lista infinita
  const { 
    allPokemons, 
    fetchNextPage, 
    hasNextPage, 
    isFetchingNextPage, 
    isLoading: isLoadingInitial 
  } = usePokemons();

  // Obtenemos los datos de búsqueda
  const { searchResults, isSearching } = useGlobalSearch(debouncedSearch);

  // Debounce para la búsqueda
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 500);
    return () => clearTimeout(timer);
  }, [search]);

  // Infinite Scroll Trigger
  useEffect(() => {
    if (inView && hasNextPage && !search) fetchNextPage();
  }, [inView, hasNextPage, search, fetchNextPage]);

  const handleOpenDetail = (pokemon) => navigate(`/pokemon/${pokemon.name}`);

  const showSearchLayer = search.length >= 2;
  const isPendingSearch = (search !== debouncedSearch || isSearching) && showSearchLayer;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Pokédex</h1>
        <input
          type="text"
          placeholder="Busca por nombre (ej: char, mega)..."
          className={styles.input}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>

      {/* CAPA DE BÚSQUEDA */}
      {showSearchLayer && (
        <section className={styles.searchSection}>
          <div className={styles.grid}>
            {isPendingSearch 
              ? Array.from({ length: 8 }).map((_, i) => <PokemonSkeleton key={`sk-search-${i}`} />)
              : searchResults.map(p => (
                  <PokemonCard key={`search-${p.id}`} pokemon={p} onClick={handleOpenDetail} />
                ))
            }
          </div>
          {!isPendingSearch && searchResults.length === 0 && (
            <p className={styles.noResults}>No se encontraron coincidencias.</p>
          )}
          <hr className={styles.divider} />
        </section>
      )}

      {/* LISTA INFINITA */}
      <section className={styles.infiniteSection(showSearchLayer)}>
        <div className={styles.grid}>
          {/* Skeletons de carga inicial (cuando la lista aún está vacía) */}
          {isLoadingInitial && allPokemons.length === 0 && (
            Array.from({ length: 12 }).map((_, i) => <PokemonSkeleton key={`sk-init-${i}`} />)
          )}

          {/* Renderizado de Pokémon */}
          {allPokemons.map(p => (
            <PokemonCard key={`list-${p.id}`} pokemon={p} onClick={handleOpenDetail} />
          ))}

          {/* Skeletons de carga de siguiente página (Scroll Infinito) */}
          {isFetchingNextPage && (
            Array.from({ length: 4 }).map((_, i) => <PokemonSkeleton key={`sk-next-${i}`} />)
          )}
        </div>

        {/* Ref para Intersection Observer */}
        <div ref={ref} className={styles.loaderInfo}>
          {hasNextPage ? (
            <span className="animate-pulse">Cargando más Pokémon...</span>
          ) : (
            allPokemons.length > 0 && "Has visto a todos los Pokémon."
          )}
        </div>
      </section>
    </div>
  );
};