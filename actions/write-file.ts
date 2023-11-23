'use server';

import { writeFile } from 'fs/promises';

// import data from '@/public/data.json'

export async function writeAction() {
  writeFile('public/data.json', JSON.stringify({ user: 'sohanemon' }));
}
