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
                            limit: 8192,
                            name: "/assets/images/[hash].[ext]"
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
                            publicPath: "/assets/audio",
                            outputPath: "./assets/audio"
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
    // plugins: [
    //     new webpack.DllReferencePlugin({
    //         context: __dirname,
    //         manifest: require("./dist/lib/tpg.json")
    //     })
    // ],
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".scss"]
    }
};
