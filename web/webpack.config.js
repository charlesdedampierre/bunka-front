const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none', // Setting mode to 'none' to disable default behavior
    entry: './src/index.jsx', // Adjust entry point to index.jsx
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'] // Allow webpack to resolve .jsx files
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Path to your HTML template file
            filename: 'index.html', // Name of the generated HTML file
            inject: 'body' // Inject the bundle.js script into the body of the HTML file
        })
    ]
};
