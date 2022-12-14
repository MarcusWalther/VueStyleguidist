const path = require('path');

module.exports = (env, argv) => {
    let typescriptConfig = 'tsconfig.json';

    return {
        module: {
            rules: [
                {
                    test: /\.ts$|\.tsx$|\.js$/,
                    use: [{
                        loader: 'ts-loader',
                        options: {
                            configFile: typescriptConfig,
                            appendTsSuffixTo: [/\.vue$/]
                        }
                    }],
                    exclude: path.resolve(__dirname, 'node_modules')
                }
            ]
        }
    }
};