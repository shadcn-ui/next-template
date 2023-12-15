import { z } from 'zod';

export const env = z.object({
  BASE_URL: z.string().url(),
  NEXT_PUBLIC_PUBLISHABLE_KEY: z.string().url(),
});
