module.exports = {
  mount: {
    /* ... */
  },
  plugins: [
    [
      "@snowpack/plugin-run-script",
      {
        cmd: "eslint 'src/**/*.{js,jsx,ts,tsx}'",
        // Optional: Use npm package "watch" to run on every file change
        //watch: 'watch "$1" src'
      },
    ],
    ["@snowpack/plugin-babel"],
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
