import { defineConfig } from 'astro/config';

// GitHub Pages sirve la carpeta /docs de la rama main, así que el build se genera ahí.
export default defineConfig({
  site: 'https://lokthrow.github.io',
  outDir: './docs',
  trailingSlash: 'ignore',
});
