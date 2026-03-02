export const styles = {
  container: "max-w-6xl mx-auto px-4 pb-20",
  header: "sticky top-[64px] z-30 bg-slate-50/95 backdrop-blur-md py-6 mb-8 flex flex-col items-center border-b border-slate-100/50 transition-all",
  title: "text-4xl font-black text-slate-900 mb-6 uppercase tracking-tighter",
  input: "w-full max-w-md p-4 rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all",
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
  searchSection: "mb-10 animate-in fade-in slide-in-from-bottom-4 duration-300",
  noResults: "text-center py-20 text-slate-400 font-medium",
  divider: "my-10 border-slate-200",
  loaderInfo: "h-32 flex items-center justify-center mt-10 text-slate-400 font-medium italic",
  
  infiniteSection: (isHidden) => isHidden ? "hidden" : "block"
};