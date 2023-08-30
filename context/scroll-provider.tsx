'use client';

import { HTMLAttributes, useLayoutEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export default function ScrollProvider({
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const [containerSize, setContainerSize] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const _y = useTransform(scrollY, [0, containerSize], [0, -containerSize]);
  const y = useSpring(_y, { stiffness: 50 });

  useLayoutEffect(() => {
    const container = containerRef.current;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (Array.isArray(entry.contentBoxSize)) {
          setContainerSize(entry.contentRect.height);
        } else {
          setContainerSize(entry.contentRect.height);
        }
      }
    });

    observer.observe(container!);
    return () => observer.disconnect();
  }, []);

  return <motion.div ref={containerRef} style={{ y }} {...(props as any)} />;
}
