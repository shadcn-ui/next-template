import { NextMiddleware } from 'next/server';

export type PageProps = Readonly<{
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}>;

export type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware;

export type NavType = { title: string; href: `/${string}` };

export interface ElementEvent<T> {
  target: T;
}
