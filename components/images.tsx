'use client';

import { Img } from '@sohanemon/next-image';
import { ImgProps } from '@sohanemon/next-image/dist/types/img.type';

export const Images = {
  cat1: (props: ImgProps) => (
    <Img {...props} src="/public/assets/images/Clipboard-1.png" />
  ),
};
