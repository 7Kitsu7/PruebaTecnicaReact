import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { getInitialTrainers, createTrainerApi, updateTrainerApi, deleteTrainerApi } from '../api/trainerApi';

export const useTrainers = () => {
  const queryClient = useQueryClient();

  const { data: trainers = [], isLoading } = useQuery({
    queryKey: ['trainers'],
    queryFn: async () => {
      const local = localStorage.getItem('pokedex_trainers');
      if (local) return JSON.parse(local);
      const apiData = await getInitialTrainers();
      localStorage.setItem('pokedex_trainers', JSON.stringify(apiData));
      return apiData;
    },
    staleTime: Infinity,
  });

  const sync = (newList) => {
    localStorage.setItem('pokedex_trainers', JSON.stringify(newList));
    queryClient.setQueryData(['trainers'], newList);
  };

  const createMutation = useMutation({
    mutationFn: createTrainerApi,
    onSuccess: (newT) => {
      sync([newT, ...trainers]);
      toast.success('Entrenador registrado');
    }
  });

  const updateMutation = useMutation({
    mutationFn: updateTrainerApi,
    onSuccess: (res) => {
      sync(trainers.map(t => t.id === res.id ? { ...t, ...res.data } : t));
      toast.success('Datos actualizados');
    }
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTrainerApi,
    onSuccess: (id) => {
      sync(trainers.filter(t => t.id !== id));
      toast.success('Registro eliminado');
    }
  });

  return { 
    trainers, 
    isLoading, 
    create: createMutation.mutate, 
    update: updateMutation.mutate, 
    remove: deleteMutation.mutate 
  };
};