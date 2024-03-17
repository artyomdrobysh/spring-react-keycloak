const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TsConfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const EXTENSIONS = [".ts", ".tsx", ".js"];

module.exports = {
    entry: path.join(__dirname, "src", "index.tsx"),
    output: {
        filename: "[name].bundle.js",
        path: path.join(__dirname, "build"),
        publicPath: "/"
    },
    resolve: {
        extensions: EXTENSIONS,
        plugins: [
            new TsConfigPathsPlugin({
                extensions: EXTENSIONS
            })
        ]
    },
    devServer: {
        port: 7700,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "ts-loader"
            },
            {
                test: /\.module\.s?css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "/"
                        }
                    },
                    {
                        loader: "css-loader",
                        options: {
                            import: true,
                            importLoaders: 1,
                            modules: {
                                mode: "local",
                                localIdentName: "[path][name]__[local]",
                            }
                        }
                    },
                    "sass-loader"
                ]
            },
            {
                test: /\.s?css$/,
                exclude: [/(node_modules)/, /\.module\.s?css$/],
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "/"
                        }
                    },
                    {
                        loader: "css-loader",
                        options: {
                            import: true,
                            importLoaders: 1
                        }
                    },
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                type: "asset/resource",
                generator: {
                    filename: "assets/images/[name][ext][query]",
                }
            }
        ]
    },
    plugins: [
        new Dotenv(),
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
            inject: true,
            minify: {
                keepClosingSlash: true,
                minifyCSS: true,
                minifyJS: true,
                minifyURLs: true,
                removeComments: true,
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
            }
        })
    ]
};
