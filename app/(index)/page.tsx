import { Suspense } from 'react';

import { Text as P } from '@/components/ui/text';
import { Img } from '@/components/image';

import { ThemeToggle } from './_components/theme-toggle';

export const metadata = {
  title: 'Home',
};
export default async function IndexPage() {
  return (
    <section>
      <P center className="mt-20 text-7xl">
        Update Readme, Site.ts and package.json
      </P>
      <Img
        className="my-5 aspect-video rounded-md object-cover center-x"
        placeholder="shimmer"
        src={'https://images.unsplash.com/photo-1704722105454-2625cbecde68'}
        width={700}
      />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laboriosam
      culpa dicta libero possimus, illum quaerat magni? Hic qui quod
      reprehenderit fuga, magni veritatis excepturi eius cupiditate officiis
      impedit rerum, ut quidem vel velit commodi voluptates. Inventore a officia
      similique ullam ab suscipit, eius dolore nobis molestias deleniti officiis
      nostrum earum eligendi et voluptas reprehenderit obcaecati voluptatem.
      Distinctio exercitationem, saepe sapiente consequatur delectus tenetur
      illo quo! Incidunt est veniam quibusdam illum deleniti a quos quae placeat
      ipsa, sunt illo eaque eum autem! Officia omnis repellat similique, est
      sapiente a tempore dolor ad nihil! Rem tempore fuga autem distinctio! Quia
      nihil laudantium, molestiae necessitatibus natus, blanditiis recusandae
      ipsam iste facilis illo eos reprehenderit? Harum, unde fugiat facere alias
      nihil corrupti illo quia. Laboriosam dolorem voluptas sequi reiciendis
      voluptatem eum. Eveniet, ad obcaecati suscipit beatae nihil corporis nemo
      fuga autem architecto neque tempora a aspernatur nulla laboriosam
      quibusdam. Similique sit rem tenetur quia assumenda, nostrum cum officiis
      libero? Corporis exercitationem similique dolorem error animi dolore
      repellat repellendus debitis, magni maiores, sint, nemo vel hic tempora
      officia sunt quas impedit quasi quia quisquam optio? Ipsum blanditiis
      ducimus praesentium eos eaque dolorem, eveniet iusto aliquid architecto
      ipsam rem magnam rerum consequatur repudiandae fugit reiciendis quibusdam
      ullam itaque, exercitationem distinctio. Neque delectus molestiae
      deserunt. Quasi, quos at voluptate est deleniti error quas cumque aliquam
      dolore inventore unde voluptatum officia ex eligendi nostrum dignissimos
      molestiae consectetur dolores delectus. Dolorum deleniti ullam voluptas
      non error aliquam earum. Assumenda iste corrupti laboriosam cumque
      quisquam mollitia doloremque tempora. Necessitatibus, hic sapiente.
      Deserunt fugit iure eum, dolorem cupiditate, aliquam veniam iste maiores
      natus in modi ducimus nihil! Ducimus asperiores fugiat earum officia. Quas
      laborum assumenda cumque tempora, temporibus et nihil rerum voluptas modi
      reprehenderit, libero quisquam. Veritatis aliquid est odit debitis ea
      totam, reprehenderit porro culpa placeat quidem rerum repellat assumenda
      consectetur excepturi magni illum impedit illo rem harum sit, eum, itaque
      cum? Quasi, optio cupiditate. Quas deserunt voluptates recusandae, culpa
      iste quisquam itaque distinctio natus ea odit quia numquam provident nam
      ipsam quasi veniam nesciunt excepturi ratione magni soluta eum voluptas,
      molestias expedita praesentium? Iusto quam temporibus iure distinctio
      minima dolorum soluta? Esse numquam magni a praesentium eligendi officia
      delectus nostrum placeat error fugiat est nobis facilis doloremque iste
      quo, alias in aspernatur! Optio sapiente aut eius ipsam odit alias sunt
      tempora voluptatibus eveniet provident! Ipsam amet laborum maiores non
      reprehenderit accusantium quisquam ratione iure, placeat, consequuntur
      numquam animi. Eligendi libero cum reprehenderit! Illo repellat
      consectetur harum incidunt sequi hic aspernatur libero error iure,
      obcaecati asperiores maxime minus, eos, quasi nesciunt? Hic repudiandae
      suscipit quam, ipsa nostrum nisi perferendis, numquam minima corrupti sint
      aliquam id ab, deleniti exercitationem nihil dicta assumenda obcaecati
      aliquid fugit eos non voluptatem! Temporibus voluptatum praesentium porro
      corrupti provident architecto nesciunt, molestias illo eum odit
      voluptatibus suscipit cum cumque eos. Ea culpa delectus iste corporis
      necessitatibus quod, ipsa in consectetur! Eligendi autem odit deserunt
      dolores possimus libero iure, magni modi consectetur voluptate quaerat
      omnis veritatis perferendis ipsum, maiores est? Officiis aut provident
      delectus quae et?
      <center>{process.env.BASE_URL}</center>
      <center>{process.env.NEXT_PUBLIC_PUBLISHABLE_KEY}</center>
      <Suspense fallback={<center>Loading ...</center>}>
        <ThemeToggle />
      </Suspense>
    </section>
  );
}
