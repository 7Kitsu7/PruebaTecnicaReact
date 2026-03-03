import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { trainerSchema } from '../schemas/trainerSchema';

export const TrainerForm = ({ onSubmit, initialData, onCancel }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(trainerSchema),
    defaultValues: initialData || { pokemonName: '' }
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* NOMBRE COMPLETO */}
      <div className="space-y-1">
        <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest">
          Nombre del Entrenador
        </label>
        <input 
          {...register("name")} 
          className={`w-full bg-slate-50 rounded-2xl p-4 text-sm font-bold focus:ring-2 outline-none transition-all ${errors.name ? 'ring-red-500 bg-red-50' : 'ring-blue-500'}`}
          placeholder="Ej: Ash Ketchum"
        />
        {errors.name && <p className="text-[9px] text-red-500 font-bold ml-2 italic">{errors.name.message}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* EMAIL */}
        <div className="space-y-1">
          <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest">Email</label>
          <input 
            {...register("email")} 
            className="w-full bg-slate-50 rounded-2xl p-4 text-sm font-bold focus:ring-2 ring-blue-500 outline-none" 
            placeholder="entrenador@liga.com"
          />
          {errors.email && <p className="text-[9px] text-red-500 font-bold ml-2 italic">{errors.email.message}</p>}
        </div>

        {/* POKEMON NOMBRE */}
        <div className="space-y-1">
          <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest">Compañero Pokémon</label>
          <input 
            {...register("pokemonName")} 
            className="w-full bg-slate-50 rounded-2xl p-4 text-sm font-bold focus:ring-2 ring-blue-500 outline-none" 
            placeholder="Ej: lucario"
          />
          {errors.pokemonName && <p className="text-[9px] text-red-500 font-bold ml-2 italic">{errors.pokemonName.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* CIUDAD */}
        <div className="space-y-1">
          <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest">Ciudad</label>
          <input 
            {...register("city")} 
            className="w-full bg-slate-50 rounded-2xl p-4 text-sm font-bold focus:ring-2 ring-blue-500 outline-none" 
            placeholder="Ej: Pueblo Paleta"
          />
          {errors.city && <p className="text-[9px] text-red-500 font-bold ml-2 italic">{errors.city.message}</p>}
        </div>

        {/* TELÉFONO */}
        <div className="space-y-1">
          <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest">Teléfono</label>
          <input 
            {...register("phone")} 
            className="w-full bg-slate-50 rounded-2xl p-4 text-sm font-bold focus:ring-2 ring-blue-500 outline-none" 
            placeholder="999031080"
          />
          {errors.phone && <p className="text-[9px] text-red-500 font-bold ml-2 italic">{errors.phone.message}</p>}
        </div>
      </div>

      {/* BOTONES DE ACCIÓN */}
      <div className="flex gap-3 pt-6">
        <button 
          type="submit" 
          className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-lg active:scale-95"
        >
          {initialData ? 'Actualizar Ficha' : 'Completar Registro'}
        </button>
        <button 
          type="button" 
          onClick={onCancel} 
          className="px-8 py-4 rounded-2xl font-black text-[10px] uppercase text-slate-400 hover:bg-slate-100 transition-all"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};