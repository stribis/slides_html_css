# Style System Lab

This starter intentionally uses legacy Sass `@import` rules. The exercise is to migrate it to the module system and decide which values should remain in Sass and which should become runtime CSS custom properties.

## Run the project

```bash
npm install
npm run sass:watch
```

Open `index.html` with a local development server. The Sass compiler writes to `css/styles.css`.

## Main tasks

1. Replace `@import` with `@use` and `@forward`.
2. Add namespaces to variables, mixins, and map functions.
3. Expose theme colors as CSS custom properties.
4. Generate only the three required status variants.
5. Inspect the compiled CSS and remove unnecessary output.
