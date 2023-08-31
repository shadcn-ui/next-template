import { Img } from '@sohanemon/next-image';
import { IconProps } from '@sohanemon/next-image/dist/types/img.type';
import { cn } from '@sohanemon/utils';
import { AlignJustify, Moon, Sun, X } from 'lucide-react';

export const Icons = {
  sun: Sun,
  moon: Moon,
  menu: AlignJustify,
  x: X,
  logo: ({ className, ...props }: IconProps) => (
    <Img
      {...props}
      className={cn('w-20', className)}
      src={`/public/cat.png`}
      alt="logo"
    />
  ),
};
