# lokthrow.github.io

Web personal de Alejandro Muñoz, hecha con [Astro](https://astro.build).

## Desarrollo

```sh
yarn install
yarn dev      # http://localhost:4321
yarn build    # genera la web estática en docs/
```

GitHub Pages publica la carpeta `docs/` de la rama `main`, así que después de cualquier cambio hay que ejecutar `yarn build` y hacer commit también de `docs/`.

## Estructura

- `src/data/apps.ts`: datos de cada app (textos, enlaces, tecnología).
- `src/data/site.ts`: nombre, email y redes.
- `src/pages/index.astro`: portada.
- `src/pages/apps/[slug].astro`: ficha de cada app.
- `src/pages/apps/<app>/privacidad.astro`: políticas de privacidad.
- `public/app-ads.txt`: lo necesita AdMob en la raíz del dominio, no borrar.
