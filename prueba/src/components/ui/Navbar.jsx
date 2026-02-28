import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const linkStyles = ({ isActive }) => 
    `text-[10px] font-black uppercase tracking-[0.2em] transition-all px-4 py-2 rounded-xl ${
      isActive ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-400 hover:bg-slate-100 hover:text-slate-600'
    }`;

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="font-black uppercase tracking-tighter text-xl text-slate-900">PokeApp</span>
        </div>
        
        <div className="flex gap-4">
          <NavLink to="/" className={linkStyles}>Pokedex</NavLink>
          <NavLink to="/opinion" className={linkStyles}>Opiniones</NavLink>
        </div>
      </div>
    </nav>
  );
};