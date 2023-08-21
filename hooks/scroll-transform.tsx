// @ts-nocheck
import { useScroll, useTransform } from 'framer-motion';

const useScrollTransform = ({
  target,
  inputRange = [0, 1],
  outputRange,
  offset = ['start end', 'end end'],
}: {
  target: any;
  inputRange?: [number, number];
  outputRange: [any, any];
  offset?: [string, string];
}) => {
  const { scrollYProgress } = useScroll({
    target,
    offset,
  });

  const motionValue = useTransform(scrollYProgress, inputRange, outputRange);
  return motionValue;
};

export default useScrollTransform;
