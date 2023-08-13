import Image from 'next/image';
import { type Icon as LucideIcon } from 'lucide-react';

export type Icon = LucideIcon;
export const Images = {
  vercel: (props: any) => (
    <Image {...props} src={`/vercel.svg`} alt="    " width={600} height={300} />
  ),
};
