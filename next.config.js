const withAntdLess = require("next-plugin-antd-less");

module.exports = withAntdLess({
  // optional
  modifyVars: {
    "@primary-color": "#48A3E7",
    "@border-radius-base": " 8px",
    "@form-item-margin-bottom": "8px",
  },
  // optional
  // lessVarsFilePath: "./src/styles/variables.less",
  // optional
  lessVarsFilePathAppendToEndOfContent: true,
  // optional https://github.com/webpack-contrib/css-loader#object
  // cssLoaderOptions: {
  //   esModule: false,
  //   sourceMap: false,
  //   modules: {
  //     mode: 'local',
  //   },
  // },

  // Other Config Here...

  webpack(config) {
    return config;
  },

  // ONLY for Next.js 10, if you use Next.js 11, delete this block
  // future: {
  //   webpack5: false,
  // },
});
