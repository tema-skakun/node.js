import { fileURLToPath } from 'url';
import { dirname } from 'path';

export default function createPath(filename) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  return `${__dirname}/../views/${filename}.ejs`;
}
