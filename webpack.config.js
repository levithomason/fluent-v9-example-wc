const path = require("path");

const appDir = path.resolve("./app");
const outDir = path.resolve("./www");

module.exports = () => {
    return {
        devServer: {
            compress: false,
            open: true,
            port: 9005,
            static: {
                directory: path.join(__dirname, 'www'),
            },
        },
        target: "node",
        mode: "production",
        devtool: "source-map",
        entry: appDir + "/index.tsx",
        module: {
            rules: [
                {
                    test: /\.tsx?/,
                    use: [{
                        loader: 'ts-loader',
                        options: {
                            configFile: "tsconfig.app.json"
                        }
                    }],
                    exclude: /node_modules/,
                }
            ]
        },
        output: {
            path: outDir,
            publicPath: "/",
            filename: "[name].js",
        },
        resolve: {
            extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
        optimization: {
            minimize: true
        },
    };
};
