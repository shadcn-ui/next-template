import { Button } from '@/components/ui/button';
import Img from '@/components/ui/img';
import { Text } from '@/components/ui/text';

export default function ImagesPage() {
  return (
    <>
      <Text as={'h4'} variant="lg/bold/muted" className="container">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quos
        voluptate autem, exercitationem aliquam repellat perspiciatis facere non
        tenetur laborum quaerat id architecto corrupti ipsa minima beatae fugit
        at nostrum?
      </Text>
      <Button
        href="https://github.com/sohanemon"
        variant="default/link"
        className="mx-auto my-12 block"
      >
        Find SohanEmon
      </Button>
      <section className="container grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Img
          className="shadow-lg"
          src="/public/assets/images/Clipboard-1.png"
        />
        <Img
          className="shadow-lg"
          src="https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <Img
          className="shadow-lg"
          src="https://images.pexels.com/photos/1835008/pexels-photo-1835008.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <Img
          className="shadow-lg"
          src="https://images.pexels.com/photos/406630/pexels-photo-406630.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </section>
    </>
  );
}
