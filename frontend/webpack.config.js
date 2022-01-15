var packageJSON = require("./package.json")
var path = require("path")
const PATHS = {
  build: path.join(
    __dirname,
    "target",
    "classes",
    "META-INF",
    "resources",
    "webjars",
    packageJSON.name,
    packageJSON.version,
  ),
}
module.exports = {
  entry: "./src/index.ts",
  output: {
    path: PATHS.build,
    filename: "app-bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  }
}