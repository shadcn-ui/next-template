import { z } from 'zod';

import { procedure, router } from '../trpc';

export const welcomeRouter = router({
  welcome: procedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.name}`,
      };
    }),
});
