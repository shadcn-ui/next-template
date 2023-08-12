import Motion from '@/components/motion';

export default function TestPage() {
  return (
    <section>
      <Motion initial="right" className="h-96 w-1/2 bg-red-500 text-7xl">
        hello
      </Motion>
    </section>
  );
}
