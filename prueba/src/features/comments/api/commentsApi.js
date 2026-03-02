import { commentApi } from '../../../lib/axios'; 
import { pokeApi } from '../../../lib/axios'; 
export const postOpinion = async (opinionData) => {
  const { data } = await commentApi.post('/posts', opinionData);
  return data;
};

 