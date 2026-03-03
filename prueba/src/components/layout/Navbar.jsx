import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const linkStyles = ({ isActive }) =>
    `text-[10px] font-black uppercase tracking-[0.2em] transition-all px-6 py-2.5 rounded-2xl ${isActive
      ? 'bg-blue-600 text-white shadow-xl shadow-blue-200 scale-105'
      : 'text-slate-500 hover:bg-white hover:shadow-md hover:text-blue-600'
    }`;

  return (
    <nav className="bg-white/70 backdrop-blur-xl border-b border-white/20 sticky top-0 z-50 px-6 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* LOGO SECCIÓN CON POKEBOLA */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-10 h-10">
            {/* Resplandor detrás de la Pokébola */}
            <div className="absolute inset-0 bg-blue-400 blur-lg opacity-40 group-hover:opacity-70 transition-opacity" />

            {/* Imagen de la Pokébola Circular */}
            <img
              src="https://st2.depositphotos.com/1906711/11944/v/450/depositphotos_119441904-stock-illustration-pokeball-hanging-in-the-air.jpg"
              alt="Pokeball"
              className="relative w-full h-full object-cover rounded-full border-2 border-white shadow-lg group-hover:rotate-[360deg] transition-transform duration-700 ease-in-out"
            />
          </div>

          <span className="font-black uppercase tracking-tighter text-2xl text-slate-900 italic">
            PokeApp
          </span>
        </div>

        {/* MENÚ SECCIÓN */}
        <div className="flex gap-2">
          <NavLink to="/" className={linkStyles}>Pokedex</NavLink>
          <NavLink to="/opinion" className={linkStyles}>Opiniones</NavLink>
          <NavLink to="/trainers" className={linkStyles}>Entrenadores</NavLink>
        </div>
      </div>
    </nav>
  );
};