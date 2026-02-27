export const translations = {
  stats: {
    hp: "PS",
    attack: "Ataque",
    defense: "Defensa",
    "special-attack": "At. Especial",
    "special-defense": "Def. Especial",
    speed: "Velocidad"
  },
  attributes: {
    weight: "Peso",
    height: "Altura"
  },
  types: {
    normal: "Normal",
    fire: "Fuego",
    water: "Agua",
    grass: "Planta",
    electric: "Eléctrico",
    ice: "Hielo",
    fighting: "Lucha",
    poison: "Veneno",
    ground: "Tierra",
    flying: "Volador",
    psychic: "Psíquico",
    bug: "Bicho",
    rock: "Roca",
    ghost: "Fantasma",
    dragon: "Dragón",
    dark: "Siniestro",
    steel: "Acero",
    fairy: "Hada"
  }
};

export const styles = {
  overlay: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-in fade-in duration-200",
  content: "bg-white w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200",
  header: "relative h-56 flex items-center justify-center bg-gradient-to-b from-slate-100 to-white",
  closeBtn: "absolute top-6 right-6 bg-white shadow-lg p-2 rounded-full hover:scale-110 active:scale-95 transition-all z-10",
  body: "p-8 pt-0",
  badgeContainer: "flex justify-center gap-2 mb-8",
  sectionTitle: "text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 text-center",
  statsGrid: "space-y-4",
  statRow: "flex items-center gap-4",
  statName: "w-24 text-[11px] font-bold uppercase text-slate-500",
  statBarBg: "flex-1 h-2 bg-slate-100 rounded-full overflow-hidden",
  statBarFill: "h-full bg-blue-500 rounded-full transition-all duration-1000",
  statValue: "w-8 text-right text-xs font-black text-slate-700",
  infoGrid: "grid grid-cols-2 gap-4 mt-10 pt-8 border-t border-slate-100"
};