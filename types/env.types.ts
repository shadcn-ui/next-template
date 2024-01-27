import { env } from '@/env';
import { TypeOf, z } from 'zod';

declare global {
  namespace NodeJS {
    interface ProcessEnv extends TypeOf<typeof env> {}
  }
}
try {
  env.parse(process.env);
} catch (err) {
  if (err instanceof z.ZodError) {
    const { fieldErrors } = err.flatten();
    const errorMessage = Object.entries(fieldErrors)
      .map(([field, errors]) =>
        errors ? `${field}: ${errors.join(', ')}` : field
      )
      .join('\n  ');
    throw new Error(`Missing environment variables:\n  ${errorMessage}`);
  }
}
