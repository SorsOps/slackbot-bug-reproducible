const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ZipPlugin = require('zip-webpack-plugin');


const plugins = [
    new ZipPlugin({
        path: path.resolve(__dirname, 'bundle'),
        filename: 'lambda.zip'
    })
];


module.exports = (env, argv) => {
    return {
        entry: './src/index.ts',
        target: 'node',
        devtool: 'source-map',
        externalsPresets: { node: true },
        plugins,
        mode: env.production ? 'production' : 'development',
        optimization: {
            concatenateModules: env.production,
            minimize: env.production,
            usedExports: env.production
        },
        externals: {
            bufferutil: 'bufferutil',
            'utf-8-validate': 'utf-8-validate'
        },
        output: {
            iife: false,
            clean: true,
            chunkFormat: 'commonjs',
            chunkLoading: 'require',
            path: path.resolve(__dirname, 'dist'),
            filename: (pathData) => {
                return pathData.chunk.name === 'main' ? 'index.js' : '[name].js';
            },
            library: {
                type: 'commonjs2'
            }
        },
        resolve: {
            mainFiles: ['index'],
            plugins: [
                new TsconfigPathsPlugin({
                    configFile: './tsconfig.prod.json',
                    baseUrl: '.'
                })
            ],
            roots: [path.resolve(__dirname, 'src')],
            modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
            extensions: ['.ts', '.js']
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: [
                        {
                            loader: 'ts-loader',
                            options: {
                                //Do not use rel paths here
                                //https://github.com/TypeStrong/ts-loader/issues/405
                                configFile: 'tsconfig.prod.json'
                            }
                        }
                    ]
                }
            ]
        }
    }
};