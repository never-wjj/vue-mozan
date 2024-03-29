module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vue-mozan/" : "/",
  css: {
    loaderOptions: {
      stylus: {
        "resolve url": true,
        import: []
      }
    }
  },
  pluginOptions: {
    "cube-ui": {
      postCompile: true,
      theme: false
    }
  }
};
