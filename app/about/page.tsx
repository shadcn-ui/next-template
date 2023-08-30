'use client';

import { Text } from '@/components/ui/text';
import Motion from '@/components/motion';

export default function AboutPage() {
  return (
    <section className="container">
      <Motion asChild initial="bottom">
        <Text intent={'heading'} className="text-primary text-center font-bold">
          Sohan R. Emon
        </Text>
      </Motion>
    </section>
  );
}
