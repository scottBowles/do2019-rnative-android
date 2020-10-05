module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            assets: "./src/assets",
            apiHooks: "./src/apiHooks",
            components: "./src/components",
            library: "./src/library",
            styles: "./src/styles",
          },
        },
      ],
    ],
  };
};
