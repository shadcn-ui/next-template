import { useEffect, useMemo, useState } from 'react';

export function useMediaQuery(
  query: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | `(${string})`
) {
  const parsedQuery = useMemo(() => {
    switch (query) {
      case 'sm':
        return '(min-width: 640px)';
      case 'md':
        return '(min-width: 768px)';
      case 'lg':
        return '(min-width: 1024px)';
      case 'xl':
        return '(min-width: 1280px)';
      case '2xl':
        return '(min-width: 1536px)';
      default:
        return query;
    }
  }, [query]);

  const getMatches = (parsedQuery: string) => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(parsedQuery).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState(getMatches(parsedQuery));

  function handleChange() {
    setMatches(getMatches(parsedQuery));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(parsedQuery);
    handleChange();
    matchMedia.addEventListener('change', handleChange);
    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parsedQuery]);

  return matches;
}
