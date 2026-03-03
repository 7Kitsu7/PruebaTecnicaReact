export const TrainersSkeleton = () => (
  <div className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden animate-pulse">
    {[1, 2, 3, 4, 5].map((i) => (
      <div key={i} className="flex items-center justify-between p-8 border-b border-slate-50">
        <div className="space-y-2 flex-1"><div className="h-4 bg-slate-100 rounded w-1/3"/><div className="h-3 bg-slate-50 rounded w-1/4"/></div>
        <div className="flex-1 flex justify-center"><div className="w-10 h-10 bg-slate-100 rounded-full"/></div>
        <div className="flex-1 flex justify-end gap-2"><div className="w-16 h-8 bg-slate-50 rounded-xl"/><div className="w-16 h-8 bg-slate-50 rounded-xl"/></div>
      </div>
    ))}
  </div>
);