const path = require(`path`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);

module.exports = {
    mode: `development`,
    entry: `./src/main.js`,
    output: {
        filename: `bundle.js`,
        path: path.join(__dirname, `dist`),
    },
    devtool: `source-map`,
    module: {
        rules: [{
            test: /\.css$/i,
            use: [`style-loader`, `css-loader`],
        },
            {
                test: /\.scss$/,
                use: [`style-loader`, MiniCssExtractPlugin.loader, {
                    loader: `css-loader`,
                    options: {sourceMap: true}
                },
                {
                    loader: `sass-loader`,
                    options: {sourceMap: true}
                }],
            }]
    },
    devServer: {
        contentBase: path.join(__dirname, `dist`),
        publicPath: 'http://localhost:8080',
        compress: true,
        watchContentBase: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
    ],
};
