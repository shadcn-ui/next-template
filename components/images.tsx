import Image from 'next/image';

import Img from './ui/img';

export const Images = {
  vercel: (props: any) => (
    <Image {...props} src={`/vercel.svg`} alt="    " width={600} height={300} />
  ),
  cat1: (props: any) => (
    <Img {...props} src="/public/assets/images/Clipboard-1.png" />
  ),
};
