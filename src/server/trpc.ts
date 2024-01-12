import { initTRPC } from '@trpc/server';

const trpc = initTRPC.create();
export const { router, procedure, mergeRouters } = trpc;
