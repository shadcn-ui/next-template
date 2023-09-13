export type PageProps = Readonly<{
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}>;
