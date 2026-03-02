export const styles = {
  container: "space-y-6",
  grid: "grid grid-cols-1 md:grid-cols-2 gap-6",
  fieldGroup: "space-y-2",
  label: "text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1",
  
  // Inputs y Selects base
  inputBase: "w-full p-4 bg-slate-50 rounded-2xl border-2 transition-all outline-none",
  inputActive: "border-transparent focus:border-blue-500",
  inputError: "border-red-200 focus:border-red-400",
  
  // Select específico (sin flecha default para customizar)
  select: "appearance-none cursor-pointer",
  
  // Textarea
  textarea: "resize-none",
  
  // Mensajes de error
  errorText: "text-[10px] text-red-500 font-bold italic ml-1",
};