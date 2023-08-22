import fs from 'node:fs/promises';
import { getPlaiceholder } from 'plaiceholder';

export async function placeholderImage(src: string) {
  try {
    let buffer;

    if (src.startsWith('http')) {
      const res = await fetch(src);
      buffer = await res.arrayBuffer();
    } else {
      buffer = await fs.readFile(src);
    }

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));
    return base64;
  } catch (err) {
    console.error(err);
  }
}
