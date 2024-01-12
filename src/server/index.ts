import fs from 'fs';
import path from 'path';

import { mergeRouters } from './trpc';

const folderPath = path.join(process.cwd(), 'src', 'server', 'routers');

const getFileNames = (folderPath: string): Promise<string[]> =>
  new Promise((resolve, reject) => {
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        reject('Unable to scan directory: ' + err);
        return;
      }
      resolve(files);
    });
  });

async function routeHandlers() {
  const pathNames = await getFileNames(folderPath);

  const routerList = await Promise.all(
    pathNames.map(
      async (fileName) => (await import(`./routers/${fileName}`)).default
    )
  );
  return mergeRouters(...routerList);
}

export const appRouter = routeHandlers();

export type AppRouter = typeof appRouter;
