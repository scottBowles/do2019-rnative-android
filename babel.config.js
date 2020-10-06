module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            api: "./src/api",
            assets: "./src/assets",
            common: "./src/common",
            screens: "./src/screens",
            styles: "./src/styles",
          },
        },
      ],
    ],
  };
};
