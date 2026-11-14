import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { GRUPO } from './config/site';

const trabajos = defineCollection({
  // Cada TP es un .md en src/content/trabajos/
  loader: glob({ pattern: '**/*.md', base: './src/content/trabajos' }),
  schema: ({ image }) =>
    z
      .object({
        titulo: z.string().min(3),
        numero: z.number().int().positive(),
        fecha: z.coerce.date(),
        descripcion: z.string().max(220, 'La descripción corta no debe superar 220 caracteres'),
        tags: z.array(z.string()).default([]),
        portada: image(),
        portadaAlt: z.string().default(''),
        repo: z.url().optional(),
        demo: z.url().optional(),
        // Ruta a un archivo dentro de public/ (ej. "/documentos/tp-integrador-entrega-2.docx")
        documento: z.string().startsWith('/').optional(),
        podcast: z.url().optional(),
        // "pendiente" muestra la tarjeta como "En preparación" (ej. un TP que todavía no se entregó)
        estado: z.enum(['entregado', 'pendiente']).default('entregado'),
        // La consigna pide aclarar si es individual o grupal (y citar integrantes).
        // En los grupales, omitir `integrantes` usa GRUPO de config/site.ts.
        modalidad: z.enum(['individual', 'grupal']).default('individual'),
        integrantes: z.array(z.string()).default([]),
        borrador: z.boolean().default(false),
      })
      // Si un TP grupal no lista integrantes, se usa el grupo de la cursada (config/site.ts)
      .transform((tp) =>
        tp.modalidad === 'grupal' && tp.integrantes.length === 0 ? { ...tp, integrantes: [...GRUPO] } : tp,
      ),
});

export const collections = { trabajos };
