# Zoltan Radics's Svelte homework for Cuez.

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## What to do after cloning this repository?

Once you've cloned the project, run `npm ci`. Why `npm ci`? Because everytime you run `npm install`, npm will update the locked versions in your package-lock.json file and most probably that will hanging changes in your package-lock.json file so for now you only need `npm ci`.

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
