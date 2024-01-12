import type { AppRouter } from '@/server';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

import { getBaseUrl } from '@/lib/utils';

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: getBaseUrl() + '/api',
    }),
  ],
});
