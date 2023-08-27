'use client';

import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import Input from '@/components/input';

export default function ContactPage() {
  const { handleSubmit, control } = useForm();

  return (
    <section className="mx-auto max-w-xl">
      <form
        onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}
        className="space-y-4"
      >
        <Input name="First Name" control={control} />
        <Input name="Last Name" control={control} />
        <Input name="email" control={control} />
        <Input name="description" rows={5} control={control} />
        <input type="submit" className="hidden" />
        <Button full>Get Alert</Button>
      </form>
    </section>
  );
}
