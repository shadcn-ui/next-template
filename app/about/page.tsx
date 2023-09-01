'use client';

import Motion from '@sohanemon/motion';

import { Text } from '@/components/ui/text';

export default function AboutPage() {
  return (
    <section className="container">
      <Motion animate asChild initial="bottom">
        <Text intent={'heading'} className="text-primary text-center font-bold">
          Sohan R. Emon
        </Text>
      </Motion>
    </section>
  );
}
