import { z } from 'zod';

export const envSchema = z.object({
  NODE_ENV: z.coerce.string(),
  PORT: z.coerce.number(),
});

export type Env = z.infer<typeof envSchema>;
