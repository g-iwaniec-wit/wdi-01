import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // adapter-static defaults to outputting into a `build` directory.
    // override to deploy to GitHub Pages which uses the `docs` folder.
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: null
    }),

    // when hosting on GH Pages subpath, tell SvelteKit about the base path
    // (Vite's `base` option is already set in vite.config.ts as well).
    paths: {
      base: '/wdi-01'
    }
  }
};

export default config;
