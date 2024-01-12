import welcomeRouter from './routers/welcome';
import { mergeRouters } from './trpc';

export const appRouter = mergeRouters(welcomeRouter);

export type AppRouter = typeof appRouter;
