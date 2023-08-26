import { Text } from '@/components/ui/text';

export default async function IndexPage() {
  const users = await fetch('https://jsonplaceholder.typicode.com/users').then(
    (res) => res.json()
  );

  return (
    <section className="container grid min-h-screen items-center">
      {users?.map((_: Awaited<typeof users>[0]) => (
        <Text key={_.name}>{_.name}</Text>
      ))}
    </section>
  );
}
