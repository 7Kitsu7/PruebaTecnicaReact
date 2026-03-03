import { PokemonAvatar } from './PokemonAvatar';

export const TrainersTable = ({ trainers, onEdit, onDelete, onDetail }) => (
  <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest">
          <th className="px-8 py-6 text-center">Entrenador</th>
          <th className="px-8 py-6 text-center">Compañero</th>
          <th className="px-8 py-6 text-center">Gestión</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-50">
        {trainers.map((t) => (
          <tr key={t.id} className="hover:bg-blue-50/40 transition-all">
            <td className="px-8 py-5 text-center">
              <div className="font-black text-slate-900 uppercase text-sm">{t.name}</div>
              <div className="text-[10px] text-slate-400 font-bold">{t.email}</div>
            </td>
            <td className="px-8 py-5 text-center flex flex-col items-center gap-1">
              <PokemonAvatar identifier={t.pokemonName || t.pokemonId} />
              <span className="text-[9px] font-black uppercase text-blue-600 italic">{t.pokemonName}</span>
            </td>
            <td className="px-8 py-5">
              <div className="flex justify-center gap-2">
                <button onClick={() => onDetail(t)} className="bg-slate-100 px-3 py-2 rounded-xl text-[9px] font-black uppercase hover:bg-blue-600 hover:text-white transition-all">Ficha</button>
                <button onClick={() => onEdit(t)} className="bg-slate-100 px-3 py-2 rounded-xl text-[9px] font-black uppercase hover:bg-slate-900 hover:text-white transition-all">Editar</button>
                <button onClick={() => onDelete(t.id)} className="bg-red-50 text-red-500 px-3 py-2 rounded-xl text-[9px] font-black uppercase hover:bg-red-500 hover:text-white transition-all">Borrar</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);