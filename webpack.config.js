const path = require("path");
const outputPath = path.join(__dirname, "dist");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.tsx"
  },
  output: {
    path: outputPath,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        }
      }
    ]
  },
  resolve: { // これを書くから、import文が拡張子なしで解釈できる。
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  devServer: {
    contentBase: outputPath,
    open: true,
    liveReload: true
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: path.resolve(__dirname, './src/index.html')
      }
    )
  ]
}
