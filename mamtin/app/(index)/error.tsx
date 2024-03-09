'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <center className="min-h-[50vh]">
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button className="rounded-lg border px-2 py-1" onClick={() => reset()}>
        Try again
      </button>
    </center>
  );
}
