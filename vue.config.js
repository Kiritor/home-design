const path = require("path");
const apiData = require("./mock/data.json");

module.exports = {
  devServer: {
    // mock数据,轮播广告图API
    port: 8082,
    before(app) {
      app.post("/api/data", (req, res) => {
        res.json(apiData);
      })
    }
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "src/assets/css/mixin.less")],
    },
  },
  css: {
    loaderOptions: {
      less: {
        // 若使用 less-loader@5，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            //'text-color': '#111',
            //'border-color': '#eee',
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            hack: `true; @import "@/assets/css/mixin.less";`,
          },
        },
      },
    },
  }
};
