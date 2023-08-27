import { useId } from 'react';
import { useController, useForm } from 'react-hook-form';

import { InputProps } from '@/types/input';
import { cn } from '@/lib/utils';

const Input = ({
  className,
  type,
  label,
  placeholder,
  rows,
  name,
  control,
  ...props
}: InputProps) => {
  const { control: backupControl } = useForm();
  const { field } = useController({
    name: name! || label!,
    control: control || backupControl,
    rules: props.rules,
  });
  const id = useId();
  return (
    <>
      <div className={cn('', className, {})} {...props}>
        <div className="flex items-center justify-between">
          <label htmlFor={id} className={cn('capitalize', {})}>
            {label ?? placeholder ?? name}
          </label>
        </div>
        {rows ? (
          <textarea
            {...field}
            rows={rows}
            placeholder={placeholder ?? label ?? name}
            className="focus-within:border-primary mt-3 w-full rounded-[10px] border px-4 py-3 outline-none"
            id={id}
          />
        ) : (
          <input
            {...field}
            placeholder={placeholder ?? label ?? name}
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
