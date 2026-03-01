import { useParams } from 'react-router-dom';
import { usePokemonDetails } from '../hooks/usePokemonDetails';
import { useOpinionForm } from '../hooks/useOpinionForm';
import { PokemonVisualizer } from '../components/opinion/PokemonVisualizer';
import { OpinionFormFields } from '../components/opinion/OpinionFormFields';

export const Opinion = () => {
  const { name } = useParams();
  const { data: pokemon } = usePokemonDetails(name);
  const { searchTerm, setSearchTerm, suggestions, formMethods, handleSend, selectPokemon } = useOpinionForm(name);

  return (
    <div className="min-h-[calc(100vh-64px)] bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-5xl rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        
        {/* Lado izquierdo (Visualizer o Buscador) */}
        <PokemonVisualizer 
          name={name} 
          pokemon={pokemon} 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          suggestions={suggestions}
          onSelect={selectPokemon}
        />

        {/* Lado derecho (Formulario) */}
        <div className="md:w-7/12 p-10 md:p-16">
          <header className="mb-10">
            <h3 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter">Tu Reporte</h3>
          </header>

          <form onSubmit={formMethods.handleSubmit(handleSend)} className="space-y-6">
            <OpinionFormFields register={formMethods.register} errors={formMethods.formState.errors} name={name} />
            
            <button 
              type="submit" 
              disabled={!name}
              className={`w-full py-5 rounded-3xl font-black text-xs uppercase tracking-widest transition-all ${
                name ? 'bg-slate-900 text-white hover:bg-blue-600' : 'bg-slate-100 text-slate-300'
              }`}
            >
              {name ? 'Publicar' : 'Selecciona un Pokémon'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};