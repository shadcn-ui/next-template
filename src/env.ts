import { z } from 'zod';

export const env = z.object({
  BASE_URL: z
    .string()
    .url()
    .default('http://localhost:3000')
    .transform((v) => (v.endsWith('/') ? v.slice(0, -1) : v)),
  NEXT_PUBLIC_PUBLISHABLE_KEY: z.string(),
});
