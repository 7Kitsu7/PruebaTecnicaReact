export const styles = {
  container: "md:w-5/12 bg-slate-900 p-12 flex flex-col items-center justify-center relative text-center min-h-[400px]",
  resetBtn: "absolute top-8 left-8 text-slate-500 hover:text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-all",
  
  // Vista Pokémon seleccionado
  selectedWrapper: "animate-in zoom-in fade-in duration-500",
  pokemonImg: "w-64 h-64 object-contain drop-shadow-[0_20px_50px_rgba(59,130,246,0.3)]",
  pokemonTitle: "text-white text-4xl font-black uppercase mt-6 italic tracking-tighter",
  badgeContainer: "mt-4 flex gap-2 justify-center",
  badge: "px-3 py-1 bg-slate-800 text-blue-400 text-[9px] font-black uppercase rounded-lg border border-slate-700",

  // Vista Buscador
  searchWrapper: "w-full max-w-xs space-y-6",
  searchTitle: "text-white text-xl font-black uppercase tracking-tight",
  inputWrapper: "relative",
  input: "w-full bg-slate-800 border-2 border-transparent focus:border-blue-500 rounded-2xl p-4 text-white outline-none transition-all shadow-inner",
  
  // Sugerencias
  suggestionBox: "absolute top-full left-0 w-full bg-white mt-3 rounded-2xl overflow-hidden shadow-2xl z-20 border border-slate-100",
  suggestionBtn: "w-full p-4 text-left text-sm font-bold text-slate-700 hover:bg-blue-50 hover:text-blue-600 capitalize transition-colors border-b border-slate-50 last:border-none",
};