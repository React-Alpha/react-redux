import path from "path";

export default {
  entry: "./src/index.js", // Update this based on your project structure
  output: {
    path: path.resolve(path.dirname(new URL(import.meta.url).pathname), "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Match all .css files
        use: [
          "style-loader", // Inject CSS into the DOM
          "css-loader", // Resolve @import and url() in CSS
          "postcss-loader", // Process CSS with PostCSS
        ],
      },
    ],
  },
  plugins: [],
};
