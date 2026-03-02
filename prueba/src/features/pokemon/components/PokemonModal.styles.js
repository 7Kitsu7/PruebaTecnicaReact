export const styles = {
  overlay: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-in fade-in duration-200",
  content: "bg-white w-full max-w-xl rounded-[2.5rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200",
  header: "relative h-48 flex items-center justify-center bg-gradient-to-b from-slate-100 to-white",
  closeBtn: "absolute top-6 right-6 bg-white shadow-lg p-2 rounded-full hover:scale-110 active:scale-95 transition-all z-20",
  body: "p-8 pt-2",
  badgeContainer: "flex justify-center gap-2 mb-6",
  sectionTitle: "text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4 text-center border-b border-slate-50 pb-2",
  
  statsGrid: "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3", 
  statRow: "flex items-center gap-3",
  statName: "w-20 text-[9px] font-black uppercase text-slate-400 truncate",
  statBarBg: "flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden",
  statBarFill: "h-full bg-blue-500 rounded-full",
  statValue: "w-6 text-right text-[10px] font-black text-slate-700",
  
  infoGrid: "grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-100"
};