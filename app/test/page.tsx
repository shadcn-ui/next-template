import Motion from '@/components/motion';

export default function TestPage() {
  return (
    <section>
      <Motion
        asChild
        initial="hidden"
        animate="visible"
        className="ml-20 text-7xl"
      >
        <p>hello</p>
      </Motion>
    </section>
  );
}
