import ScrollProvider from '@/context/scroll-provider';

export default function BlogPage() {
  return (
    <ScrollProvider>
      <section className="container columns-2  space-y-3">
        {Array.from(Array(100)).map((_, idx) => (
          <div key={_} className="text-justify ">
            {(idx + 101).toLocaleString('en', {
              minimumIntegerDigits: 4,
              useGrouping: false,
            })}
            . Once upon a time in Faridpur Engineering College
          </div>
        ))}
      </section>
    </ScrollProvider>
  );
}
