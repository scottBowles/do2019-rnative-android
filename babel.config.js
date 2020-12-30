module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "@babel/preset-typescript"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            data: "./src/data",
            assets: "./src/assets",
            common: "./src/common",
            screens: "./src/screens",
            styles: "./src/styles",
            models: "./src/models",
          },
        },
      ],
      "babel-plugin-styled-components",
    ],
  };
};
