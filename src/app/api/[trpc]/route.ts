import { appRouter } from '@/server';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

const handler = async (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api',
    req,
    router: await appRouter,
    createContext: () => ({}),
  });
export { handler as GET, handler as POST };
