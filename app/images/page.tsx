import Img from '@/components/img';

export default function ImagesPage() {
  return (
    <section className="container grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <Img
        className="rounded-lg shadow-lg"
        src="/public/assets/images/Clipboard-1.png"
      />
      <Img
        className="rounded-lg shadow-lg"
        src="https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
      <Img
        className="rounded-lg shadow-lg"
        src="https://images.pexels.com/photos/1835008/pexels-photo-1835008.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
      <Img
        className="rounded-lg shadow-lg"
        src="https://images.pexels.com/photos/406630/pexels-photo-406630.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
    </section>
  );
}
