import { P } from '@/components/ui/text';
import { Img } from '@/components/image';

export default async function IndexPage() {
  return (
    <section>
      <P center className="mt-20 text-7xl text-primary/80">
        Update Readme, Site.ts and package.json
      </P>
      <Img
        className="rounded-md center-x"
        src={
          'https://images.unsplash.com/photo-1695653420624-4a23b2ffc77c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      />
    </section>
  );
}
