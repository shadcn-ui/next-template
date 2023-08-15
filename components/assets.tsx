import Image from 'next/image';

export const Assets = {
  vercel: (props: any) => (
    <Image {...props} src={`/vercel.svg`} alt="    " width={600} height={300} />
  ),
};
