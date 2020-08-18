const path = require("path");
const webpack = require("webpack");

module.exports = {
    context: process.cwd(),
    entry: {
        library: [
            "@tinymce/tinymce-react",
            "file-saver",
            "formik",
            "google-maps-react",
            "react",
            "react-chartjs-2",
            "react-circular-progressbar",
            "react-cropper",
            "react-dom",
            "react-router-dom",
            "react-simple-widgets",
            "yup"
        ]
    },
    output: {
        filename: "tpg.dll.js",
        path: path.resolve(__dirname, "./dist/lib"),
        library: "tpg"
    },
    plugins: [
        new webpack.DllPlugin({
            name: "tpg",
            path: path.resolve(__dirname, "./dist/lib/tpg.json")
        })
    ],
    resolve: {
        extensions: [".js", ".jsx", ".json", ".less", ".scss", ".css"],
        modules: [__dirname, "node_modules"]
    }
};
