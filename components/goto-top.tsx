'use client';

import { useEffect, useRef } from 'react';

export function GoToTop() {
  const goToTopRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.onscroll = function () {
      if (
        document.body.scrollTop > 700 ||
        document.documentElement.scrollTop > 700
      ) {
        goToTopRef.current?.classList.remove('hidden');
      } else {
        goToTopRef.current?.classList.add('hidden');
      }
    };

    return () => {};
  }, [goToTopRef]);

  function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <>
      <div
        ref={goToTopRef}
        className="fixed bottom-6 right-6 z-50 hidden h-6 w-6 md:bottom-10 md:right-10 md:h-10 md:w-10"
        title="Go To Top"
        onClick={goToTop}
      >
        <button className="grid h-full w-full place-content-center rounded-full bg-primary/80 text-foreground shadow-md hover:bg-primary">
          <svg
            className="h-4 w-4 md:h-6 md:w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 4l8 8h-6v8h-4v-8H4l8-8z" />
          </svg>
        </button>
        <span className="sr-only">Go to top</span>
      </div>
    </>
  );
}
