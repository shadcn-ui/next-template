import { ComponentProps } from 'react';
import Img from '@sohanemon/next-image';
import { IconProps } from '@sohanemon/next-image/dist/types/img.type';
import { cn } from '@sohanemon/utils';

export const Icons = {
  menu: (props: ComponentProps<'svg'>) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" x2="21" y1="6" y2="6" />
      <line x1="3" x2="21" y1="12" y2="12" />
      <line x1="3" x2="21" y1="18" y2="18" />
    </svg>
  ),
  x: (props: ComponentProps<'svg'>) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  ),
  logo: ({ className, ...props }: IconProps) => (
    <Img
      {...props}
      className={cn('w-20', className)}
      src={`/public/cat.png`}
      alt="logo"
    />
  ),
};
