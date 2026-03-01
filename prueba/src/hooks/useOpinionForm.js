import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { opinionSchema } from '../constants/schemas';
import { postOpinion } from '../api/pokemonApi';
import { usePokemonNames } from './usePokemonNames';

export const useOpinionForm = (pokemonName) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const { data: allNames } = usePokemonNames();

  const formMethods = useForm({
    resolver: zodResolver(opinionSchema),
    defaultValues: { rating: "5" }
  });

  // Autocompletado
  useEffect(() => {
    if (searchTerm.length > 1 && allNames) {
      setSuggestions(allNames.filter(p => p.name.includes(searchTerm.toLowerCase())).slice(0, 5));
    } else {
      setSuggestions([]);
    }
  }, [searchTerm, allNames]);

  const handleSend = async (data) => {
    try {
      const res = await postOpinion({ ...data, pokemon: pokemonName });
      alert(`¡Éxito! publicación #${res.id} creado.`);
      navigate('/');
    } catch (e) {
      alert("Error al enviar");
    }
  };

  return {
    searchTerm,
    setSearchTerm,
    suggestions,
    formMethods,
    handleSend,
    selectPokemon: (name) => {
      navigate(`/opinion/${name}`);
      setSearchTerm("");
    }
  };
};