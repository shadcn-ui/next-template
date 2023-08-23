import { useEffect, useRef } from 'react';

const useClickOutside = (
  callback: () => void = () => alert('clicked outside')
) => {
  const ref = useRef<HTMLDivElement>(null);
  const listener = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  });
  return ref;
};

export default useClickOutside;
