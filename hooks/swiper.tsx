import { useEffect, useRef, useState } from 'react';

const useSwiperRef = () => {
  const [wrapper, setWrapper] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    setWrapper(ref.current);
  }, []);

  return [wrapper, ref as any];
};

export default useSwiperRef;
