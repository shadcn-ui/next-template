'use client';

import { useEffect } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

import { MotionDiv } from './motion';

export const Cursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);
  return (
    <MotionDiv
      className="pointer-events-none fixed left-0 top-0 z-50 size-8"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt="cursor"
        height="94"
        src="https://img.icons8.com/3d-fluency/94/cursor.png"
        width="94"
      />
    </MotionDiv>
  );
};
