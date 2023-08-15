import Image from 'next/image';
import { AlignJustify, X } from 'lucide-react';

export const Icons = {
  menu: AlignJustify,
  x: X,
  logo: (props: any) => (
    <Image
      {...props}
      className="invert"
      src={`/next.svg`}
      alt="logo"
      width={100}
      height={100}
    />
  ),
};
