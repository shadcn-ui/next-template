export type PageProps = Readonly<{
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}>;

export type NavType = { title: string; href: `/${string}` };

export interface ElementEvent<T> {
  target: T;
}
