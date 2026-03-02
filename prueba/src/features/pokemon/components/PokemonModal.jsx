import { useNavigate } from 'react-router-dom';
import { POKEMON_TRANSLATIONS } from '../../../constants/pokemonTranslations';
import { styles } from './PokemonModal.styles';

export const PokemonModal = ({ pokemon, onClose }) => {
  const navigate = useNavigate(); // Hook para navegar entre rutas

  if (!pokemon) return null;

  const artwork = pokemon.sprites.other['official-artwork'].front_default;

  const handleGoToOpinion = () => {
    navigate(`/opinion/${pokemon.name}`);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>

        {/* Botón de cierre */}
        <button className={styles.closeBtn} onClick={onClose}>
          <svg className="w-5 h-5 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className={styles.header}>
          <img
            src={artwork}
            alt={pokemon.name}
            className="w-40 h-40 object-contain drop-shadow-2xl animate-in slide-in-from-top-10 duration-500"
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

          {/* BOTÓN DE OPINIÓN */}
          <button
            onClick={handleGoToOpinion}
            className="mt-8 w-full py-4 border-2 border-slate-100 rounded-2xl flex items-center justify-center gap-3 group hover:border-blue-500 hover:bg-blue-50/30 transition-all duration-300"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-blue-600">
              Dejar Opinión
            </span>
            <svg
              className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};