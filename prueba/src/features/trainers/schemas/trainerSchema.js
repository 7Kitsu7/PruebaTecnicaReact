import { z } from 'zod';

export const trainerSchema = z.object({
    name: z.string()
        .min(3, "El nombre debe tener al menos 3 caracteres")
        .max(20, "El nombre es muy largo para un entrenador"),
    email: z.string().email("Email inválido"),
    pokemonName: z.string().min(1, "Escribe el nombre de un Pokémon"),
    city: z.string().min(1, "Ciudad requerida"),
    phone: z.string()
        .min(5, "Teléfono requerido")
        .regex(/^[0-9]+$/, "El teléfono solo puede contener números")

});

