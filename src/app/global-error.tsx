'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="el">
      <body>
        <center>
          <h2>Something went wrong!</h2>
          <button onClick={() => reset()}>Try again</button>
        </center>
      </body>
    </html>
  );
}
