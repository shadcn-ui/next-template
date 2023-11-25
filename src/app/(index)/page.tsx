import { Text as P } from '@/components/ui/text';
import { Img } from '@/components/image';

export const metadata = {
  title: 'Home',
};
export default async function IndexPage() {
  return (
    <section>
      <P center className="mt-20 text-7xl text-primary/80">
        Update Readme, Site.ts and package.json
      </P>
      <Img
        className="rounded-md center-x"
        placeholder="shimmer"
        src={'https://images.unsplash.com/photo-1695653420624-4a23b2ffc77c'}
        width={700}
      />
    </section>
  );
}
