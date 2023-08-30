import { ComponentPropsWithRef, HTMLAttributes } from 'react';
import { FieldValues, RegisterOptions } from 'react-hook-form';

export interface InputProps extends ComponentPropsWithRef<'input'> {
  type?: string;
  label?: string;
  placeholder?: string;
  name: string;
  control?: any;
  rows?: number;
  rules?:
    | Omit<
        RegisterOptions<FieldValues, string>,
        'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
      >
    | undefined;
}
