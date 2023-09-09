import { Button } from '@/components/ui/button';
import { P } from '@/components/ui/text';

export default async function IndexPage() {
  return (
    <main>
      <P className="text-primary/80">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        explicabo optio, possimus quia quidem debitis eum delectus ut dolore
        sed, sit cum adipisci ex dolorum praesentium sequi placeat quis commodi!
      </P>
      <Button>Click Me</Button>
    </main>
  );
}
