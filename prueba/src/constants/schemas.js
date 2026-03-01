import { z } from 'zod';

export const opinionSchema = z.object({
  trainerName: z.string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .max(15, "El nombre es muy largo para un entrenador")
    .regex(/^[a-zA-Z]+$/, "Solo se permite letras"),
  
  rating: z.string().refine((val) => ["1", "2", "3", "4", "5"].includes(val), {
    message: "Por favor, selecciona una puntuación",
  }),

  comment: z.string()
    .min(10, "Cuéntanos un poco más (mínimo 10 caracteres)")
    .max(200, "Tu opinión es muy larga (máximo 200 caracteres)"),
});