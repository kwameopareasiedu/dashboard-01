const path = require("path");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /.tsx?$/,
                exclude: /\node_modules/,
                use: {
                    loader: "ts-loader",
                    options: { transpileOnly: true }
                }
            },
            {
                test: /.jsx?$/,
                exclude: /\node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    {
                        loader: "postcss-loader",
                        options: { plugins: () => [require("autoprefixer")] }
                    },
                    { loader: "sass-loader" }
                ]
            },
            {
                test: /\.(png|jp(e?)g|gif|svg)$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 400960,
                            name: "/assets/[hash].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.(mp3|wav|ogg)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            publicPath: "/assets",
                            outputPath: "./assets"
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ["file-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".scss"]
    }
};
