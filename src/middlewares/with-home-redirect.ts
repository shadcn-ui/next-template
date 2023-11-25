import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

import { MiddlewareFactory } from '@/types/middleware.types';

import { match } from '.';

export const withHomeRedirect: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    if (match(['/home'], request)) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    return next(request, _next);
  };
};
