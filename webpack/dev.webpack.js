const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { EnvironmentPlugin } = webpack;

dotenv.config();

module.exports = {
    mode: 'development',
    entry: path.resolve(process.cwd(), 'src', 'web', 'index.tsx'),
    target: ['web', 'es2017'],
    devServer: {
        port: 3001,
        hot: true,
        https: false,
        open: true,
        static: path.resolve(process.cwd(), 'assets')
    },
    module: {
        rules: [
            {
                test: /\.m?js/,
                type: 'javascript/auto',
                resolve: {
                    fullySpecified: false
                }

            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.png/,
                type: 'asset/resource'
            }
        ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
      alias: {
        "@": path.resolve(process.cwd(), "src"),
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
      new EnvironmentPlugin({ ...process.env }),
      new HtmlWebpackPlugin({ template: 'html/template.html' })
    ],
};
