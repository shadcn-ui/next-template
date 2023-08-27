import Image from 'next/image';
import { AlignJustify, Moon, Sun, X } from 'lucide-react';

export const Icons = {
  sun: Sun,
  moon: Moon,
  menu: AlignJustify,
  x: X,
  logo: (props: any) => (
    <Image
      {...props}
      priority
      className=""
      src={`/cat.png`}
      alt="logo"
      width={100}
      height={100}
    />
  ),
};
