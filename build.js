import webpack from 'webpack';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
export const __dirname = dirname(fileURLToPath(import.meta.url));

export const compiler = webpack({
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /zcv\.wasm$/,
                type: "javascript/auto",
                loader: "file-loader"
            },
            {
                test: /\.txt$/,
                use: 'raw-loader'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
});