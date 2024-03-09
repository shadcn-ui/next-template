import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

import type { MiddlewareFactory } from '@/types/index.types';

import { match } from '.';

export const withRedirect: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    if (match(['/home'], request)) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    return next(request, _next);
  };
};
