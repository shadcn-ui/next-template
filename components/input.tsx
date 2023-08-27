import { HTMLAttributes, useId } from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  type: string;
  label: string;
  placeholder: string;
  name: string;
  rows: number;
}

const Input = ({ className, type, ...props }: InputProps) => {
  const id = useId();
  return (
    <>
      <div className={cn('', className, {})} {...props}>
        <div className="flex items-center justify-between">
          <label
            htmlFor={id}
            className={cn(
              'text-[15px] font-normal leading-none text-black',
              {}
            )}
          >
            {props.label}
          </label>
        </div>
        {props.rows ? (
          <textarea
            rows={props.rows}
            placeholder={props.placeholder}
            className="focus-within:border-primary mt-3 w-full rounded-[10px] border px-4 py-3 outline-none"
            id={id}
          />
        ) : (
          <input
            placeholder={props.placeholder}
            className="focus-within:border-primary mt-3 h-11 w-full rounded-[10px] border px-4"
            type={type}
            id={id}
          />
        )}
      </div>
    </>
  );
};

Input.displayName = 'Input';
export default Input;
