import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (pathname.startsWith('/home'))
    return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: ['/home'],
};
