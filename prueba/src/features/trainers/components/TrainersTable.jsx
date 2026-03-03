import { motion, AnimatePresence } from 'framer-motion';
import { PokemonAvatar } from './PokemonAvatar';

export const TrainersTable = ({ trainers, onEdit, onDelete, onDetail }) => {
  return (
    <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-50/50 text-slate-400 text-[10px] font-black uppercase tracking-widest">
            <th className="px-8 py-5 text-center">Entrenador</th>
            <th className="px-8 py-5 text-center">Compañero</th>
            <th className="px-8 py-5 text-center">Gestión</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          <AnimatePresence mode="popLayout"> 
            {trainers.map((t) => (
              <motion.tr 
                key={t.id}
                layout 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ 
                  opacity: 0, 
                  scale: 0.9, 
                  transition: { duration: 0.2 },
                  x: -20 
                }}
                className="hover:bg-blue-50/30 transition-colors"
              >
                <td className="px-8 py-4 text-center">
                  <div className="font-black text-slate-900 uppercase text-sm">{t.name}</div>
                  <div className="text-[10px] text-slate-400 font-bold lowercase">{t.email}</div>
                </td>
                
                <td className="px-8 py-4">
                  <div className="flex flex-col items-center gap-1">
                    <PokemonAvatar identifier={t.pokemonName || t.pokemonId} />
                    <span className="text-[9px] font-black uppercase text-blue-600 italic tracking-tighter">
                      {t.pokemonName}
                    </span>
                  </div>
                </td>

                <td className="px-8 py-4">
                  <div className="flex justify-center gap-2">
                    <button 
                      onClick={() => onDetail(t)} 
                      className="bg-slate-100 p-2.5 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                      title="Ver Detalles"
                    >
                      <span className="text-[9px] font-black uppercase px-2">Ficha</span>
                    </button>
                    <button 
                      onClick={() => onEdit(t)} 
                      className="bg-slate-100 p-2.5 rounded-xl hover:bg-slate-900 hover:text-white transition-all shadow-sm"
                      title="Editar"
                    >
                      <span className="text-[9px] font-black uppercase px-2">Editar</span>
                    </button>
                    <button 
                      onClick={() => onDelete(t.id)} 
                      className="bg-red-50 text-red-500 p-2.5 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm"
                      title="Eliminar"
                    >
                      <span className="text-[9px] font-black uppercase px-2">Borrar</span>
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </AnimatePresence>
        </tbody>
      </table>
    </div>
  );
};