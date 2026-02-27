import { styles } from './PokemonCard.styles';
import { POKEMON_TRANSLATIONS } from '../../constants/pokemonTranslations';

export const PokemonCard = ({ pokemon, onClick }) => {
  const artwork = pokemon.sprites.other['official-artwork'].front_default;

  return (
    <div className={styles.card} onClick={() => onClick(pokemon)}>
      <img src={artwork} alt={pokemon.name} className={styles.image} loading="lazy" />
      <h2 className={styles.name}>{pokemon.name}</h2>
      <div className={styles.typesContainer}>
        {pokemon.types.map((t) => (
          <span key={t.type.name} className={styles.typeTag}>
            {POKEMON_TRANSLATIONS.types[t.type.name] || t.type.name}
          </span>
        ))}
      </div>
    </div>
  );
};