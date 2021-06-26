const { resolve } = require('path');
const path = require ('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'bundle.js',
    },
    resolve:{
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                exclude: /mode_modules/,
                use: {
                    loader: 'babel_loader',
                }
            }
        ]
    },

    devServer : {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3006
    }

}