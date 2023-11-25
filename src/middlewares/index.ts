import { NextMiddleware, NextRequest, NextResponse } from 'next/server';

import { MiddlewareFactory } from '@/types/middleware.types';

export function stackMiddlewares(
  functions: MiddlewareFactory[] = [],
  index = 0
): NextMiddleware {
  const current = functions[index];
  if (current) {
    const next = stackMiddlewares(functions, index + 1);
    return current(next);
  }
  return () => NextResponse.next();
}

export const match = (matcher: string[], request: NextRequest) =>
  matcher?.some((path) => request.nextUrl.pathname.startsWith(path));
