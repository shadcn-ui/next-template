'use client';

import { useEffect, useRef } from 'react';

export default function GoToTop() {
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
        onClick={goToTop}
        ref={goToTopRef}
        title="Go To Top"
        className="fixed bottom-10 right-10 z-50 hidden h-10 w-10 "
      >
        <button className="bg-primary/80 text-foreground hover:bg-primary grid h-full w-full place-content-center rounded-full shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path d="M12 4l8 8h-6v8h-4v-8H4l8-8z" />
          </svg>
        </button>
        <span className="sr-only">Go to top</span>
      </div>
    </>
  );
}
