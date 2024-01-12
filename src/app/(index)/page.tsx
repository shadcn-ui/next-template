import { Suspense } from 'react';

import { Text as P } from '@/components/ui/text';
import { Img } from '@/components/image';

import { trpc } from '../api/[trpc]/trpc';
import { ThemeToggle } from './_components/theme-toggle';

export const metadata = {
  title: 'Home',
};
export default async function IndexPage() {
  const msg = await trpc.welcome.query({ name: '`sohanemon`' });

  return (
    <section>
      <center>{msg.greeting}</center>
      <P center className="mt-20 text-7xl">
        Update Readme, Site.ts and package.json
      </P>
      <Img
        className="my-5 aspect-video rounded-md object-cover center-x"
        placeholder="shimmer"
        src={'https://images.unsplash.com/photo-1704722105454-2625cbecde68'}
        width={700}
      />
      <center>{process.env.BASE_URL}</center>
      <center>{process.env.NEXT_PUBLIC_PUBLISHABLE_KEY}</center>
      <Suspense fallback={<center>Loading ...</center>}>
        <ThemeToggle />
      </Suspense>
    </section>
  );
}
