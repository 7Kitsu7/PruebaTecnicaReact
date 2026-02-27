import { styles } from './PokemonCard.styles';

export const PokemonCard = ({ pokemon }) => {
  const artwork = pokemon.sprites.other['official-artwork'].front_default;

  return (
    <div className={styles.card}>
      <img 
        src={artwork} 
        alt={pokemon.name}
        className={styles.image}
      />
      
      <h2 className={styles.name}>{pokemon.name}</h2>
      
      <div className={styles.typesContainer}>
        {pokemon.types.map((t) => (
          <span 
            key={t.type.name} 
            className={styles.typeTag}
          >
            {t.type.name}
          </span>
        ))}
      </div>
    </div>
  );
};