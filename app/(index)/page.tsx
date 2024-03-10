import { Img } from '@/components/image';
import { Motion } from '@/components/motion';

export const metadata = {
  title: 'Home',
};

export default async function IndexPage() {
  return (
    <section>
      <div className="my-5 text-3xl ">hello</div>
      <Motion initial="top">
        <h4 className="mt-20 text-7xl ">
          Update Readme, Site.ts and package.json
        </h4>
      </Motion>
      <Img
        className="my-5 aspect-video rounded-md object-cover center-x"
        placeholder="shimmer"
        src={'https://images.unsplash.com/photo-1704722105454-2625cbecde68'}
        width={700}
      />
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </section>
  );
}
