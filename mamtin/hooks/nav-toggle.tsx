import { useCallback, useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';

const useNavToggle = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [leaved, setLeaved] = useState(false);

  const update = useCallback(() => {
    if (scrollY.get() > 300) setLeaved(true);
    else setLeaved(false);
    if (scrollY.get() > scrollY.getPrevious() && leaved) {
      return setHidden(true);
    }

    setHidden(false);
  }, [leaved, scrollY]);

  useMotionValueEvent(scrollY, 'change', update);
  return { leaved, hidden };
};

export default useNavToggle;
