const Path = require("path");
const vConsolePlugin = require("vconsole-webpack-plugin");

module.exports = {
  lintOnSave: true,
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Templates";
      return args;
    });
    config.resolve.alias
      .set("@", Path.join(__dirname, "src"))
      .set("@configs", Path.join(__dirname, "src/configs"))
      .set("@routers", Path.join(__dirname, "src/routers"))
      .set("@pages", Path.join(__dirname, "src/pages"))
      .set("@assets", Path.join(__dirname, "src/assets"));
  },
  configureWebpack: (config) => {
    config.plugins = [
      ...config.plugins,
      ...[
        new vConsolePlugin({
          filter: [],
          enable: true
        })
      ]
    ];
  },
  devServer: {
    host: "0.0.0.0",
    port: 9999,
    open: true,
    hot: true
  }
};
