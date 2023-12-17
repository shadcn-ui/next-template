'use server';

import { cookies } from 'next/headers';

export async function storeTheme(theme: string) {
  cookies().set('data-theme', theme);
}
