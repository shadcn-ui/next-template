import { z } from 'zod';

import { procedure, router } from '../trpc';

const welcomeRouter = router({
  welcome: procedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.name}`,
      };
    }),
  mutate: procedure
    .input(z.object({ name: z.string(), roll: z.number() }))
    .mutation(({ input }) => {
      return {
        name: input.name,
        roll: input.roll,
      };
    }),
});
export default welcomeRouter;
