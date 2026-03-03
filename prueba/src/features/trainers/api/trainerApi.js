import { commentApi, pokeApi } from '../../../lib/axios';

export const getInitialTrainers = async () => {
  const { data: users } = await commentApi.get('/users?_limit=4');
  return await Promise.all(
    users.map(async (user) => {
      try {
        const { data: pokemon } = await pokeApi.get(`/pokemon/${user.id}`);
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          city: user.address.city,
          phone: user.phone,
          pokemonName: pokemon.name,
          pokemonId: user.id
        };
      } catch {
        return { ...user, pokemonName: 'bulbasaur', pokemonId: 1 };
      }
    })
  );
};

export const createTrainerApi = async (trainer) => {
  await commentApi.post('/users', trainer);
  return { ...trainer, id: Date.now() };
};

export const updateTrainerApi = async ({ id, data }) => {
  if (id <= 10) await commentApi.put(`/users/${id}`, data);
  return { id, data };
};

export const deleteTrainerApi = async (id) => {
  if (id <= 10) await commentApi.delete(`/users/${id}`);
  return id;
};