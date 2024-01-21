import { Img } from '@/components/image';
import { Motion } from '@/components/motion';

export const metadata = {
  title: 'Home',
};
export default async function IndexPage() {
  return (
    <Motion initial={'dot'} transition={{ delay: 0.5 }}>
      <Img
        className="my-5 object-contain transition-all duration-300 center-x [--img-outline-color:transparent] hover:[--img-outline-color:white]"
        placeholder="shimmer"
        src={'/public/castle.png'}
        width={400}
        style={{
          filter:
            'drop-shadow(2.5px 0px 1px var(--img-outline-color)) drop-shadow(-2.5px 0px 1px var(--img-outline-color)) drop-shadow(0px 2.5px 1px var(--img-outline-color)) drop-shadow(0px -2.5px 1px var(--img-outline-color))',
        }}
      />
    </Motion>
  );
}
