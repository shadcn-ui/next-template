'use client';

import { useEffect } from 'react';
import useUser from '@/store/user';

import { Text } from '@/components/ui/text';

export default function IndexPage() {
  const [fetchUser, users] = useUser((s) => [s.fetchUser, s.users]);
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);
  return (
    <section className="container grid min-h-screen items-center">
      {users?.map((_) => (
        <Text key={_.name}>{_.name}</Text>
      ))}
    </section>
  );
}
