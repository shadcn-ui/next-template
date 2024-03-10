import {
  type NextMiddleware,
  type NextRequest,
  NextResponse,
} from 'next/server';

import type { MiddlewareFactory } from '@/types/index.types';

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
  matcher?.some((path) => request.nextUrl.pathname === path);
