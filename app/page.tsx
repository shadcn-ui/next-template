'use client';

import { useEffect } from 'react';
import useUser from '@/store/user';

export default function IndexPage() {
  const [fetchUser, users] = useUser((s) => [s.fetchUser, s.users]);
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);
  return (
    <section className="container grid items-center">
      {users?.map((_) => (
        <p key={_.name}>{_.name}</p>
      ))}
    </section>
  );
}
