import { useNavigate } from 'react-router-dom';
import { styles } from './PokemonVisualizer.styles';
import { POKEMON_TRANSLATIONS } from '../../constants/pokemonTranslations';

export const PokemonVisualizer = ({ name, pokemon, searchTerm, setSearchTerm, suggestions, onSelect }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      {/* Botón Reset */}
      {name && (
        <button 
          onClick={() => navigate('/opinion')} 
          className={styles.resetBtn}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
          </svg>
          Cambiar Pokémon
        </button>
      )}

      {/* Pokémon Seleccionado */}
      {name && pokemon ? (
        <div className={styles.selectedWrapper}>
          <img 
            src={pokemon.sprites.other['official-artwork'].front_default} 
            className={styles.pokemonImg} 
            alt={name} 
          />
          <h2 className={styles.pokemonTitle}>{name}</h2>
          
          <div className={styles.badgeContainer}>
            {pokemon.types.map(t => (
              <span key={t.type.name} className={styles.badge}>
                {/* Traducción aplicada aquí */}
                {POKEMON_TRANSLATIONS.types[t.type.name] || t.type.name}
              </span>
            ))}
          </div>
        </div>
      ) : (
        /* Buscador con Autocompletado */
        <div className={styles.searchWrapper}>
          <div className="text-center mb-2">
            <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-slate-700 shadow-lg">
              <svg className="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className={styles.searchTitle}>¿A quién buscas?</h3>
          </div>

          <div className={styles.inputWrapper}>
            <input 
              type="text" 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Ej: Lucario, Gengar..." 
              className={styles.input}
            />
            
            {suggestions.length > 0 && (
              <div className={styles.suggestionBox}>
                {suggestions.map(s => (
                  <button 
                    key={s.name} 
                    onClick={() => onSelect(s.name)}
                    className={styles.suggestionBtn}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};