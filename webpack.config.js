var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");
const path = require("path");

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "app",
    projectName: "Products",
    webpackConfigEnv,
    argv,
  });
  //console.log(defaultConfig);
  return merge(defaultConfig, {
    module: {
      rules: [
        // CSS rules
        {
          test: /\.(s(a|c)ss)$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    optimization: {
      splitChunks: {
        chunks: "all",
        minSize: 1000,
        minChunks: 3,
        cacheGroups: {
          default: false,
        },
      },
    },
  });
};
