import { POKEMON_TRANSLATIONS } from '../../constants/pokemonTranslations';
import { styles } from './PokemonModal.styles';

export const PokemonModal = ({ pokemon, onClose }) => {
  if (!pokemon) return null;

  const artwork = pokemon.sprites.other['official-artwork'].front_default;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        
        <button className={styles.closeBtn} onClick={onClose}>
          <svg className="w-5 h-5 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className={styles.header}>
          <img 
            src={artwork} 
            alt={pokemon.name} 
            className="w-48 h-48 object-contain drop-shadow-2xl animate-in slide-in-from-top-10 duration-500" 
          />
        </div>

        <div className={styles.body}>
          <h2 className="text-4xl font-black text-center capitalize mb-3 text-slate-900 tracking-tight">
            {pokemon.name}
          </h2>
          
          <div className={styles.badgeContainer}>
            {pokemon.types.map(t => (
              <span key={t.type.name} className="px-5 py-1.5 rounded-full bg-slate-900 text-white font-bold text-[10px] uppercase tracking-widest">
                {POKEMON_TRANSLATIONS.types[t.type.name] || t.type.name}
              </span>
            ))}
          </div>

          <h3 className={styles.sectionTitle}>Estadísticas Base</h3>
          
          <div className={styles.statsGrid}>
            {pokemon.stats.map(s => (
              <div key={s.stat.name} className={styles.statRow}>
                <span className={styles.statName}>
                  {POKEMON_TRANSLATIONS.stats[s.stat.name] || s.stat.name}
                </span>
                
                <div className={styles.statBarBg}>
                  <div 
                    className={styles.statBarFill} 
                    style={{ 
                      width: `${Math.min((s.base_stat / 150) * 100, 100)}%`,
                      transition: 'width 1s ease-out' 
                    }} 
                  />
                </div>
                
                <span className={styles.statValue}>
                  {s.base_stat}
                </span>
              </div>
            ))}
          </div>

          <div className={styles.infoGrid}>
            <div className="text-center">
              <p className="text-2xl font-black text-slate-900">
                {pokemon.weight / 10} <span className="text-sm font-medium">kg</span>
              </p>
              <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mt-1">
                {POKEMON_TRANSLATIONS.attributes.weight}
              </p>
            </div>
            
            <div className="text-center">
              <p className="text-2xl font-black text-slate-900">
                {pokemon.height / 10} <span className="text-sm font-medium">m</span>
              </p>
              <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mt-1">
                {POKEMON_TRANSLATIONS.attributes.height}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};