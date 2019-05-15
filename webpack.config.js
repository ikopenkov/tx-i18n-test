const path = require('path');
const {
    i18nTx,
    i18nExtractor,
    contextedPhrasesFilter,
} = require('tx-i18n/webpack');

module.exports = {
    mode: 'production',

    entry: {
        'app': './index.tsx',
    },

    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            getCustomTransformers: test => {
                                return {
                                    before: [
                                        i18nTx({}),
                                    ],
                                    after: [],
                                };
                            },
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        new i18nExtractor({
            output: phrases => {
                return [
                    {
                        file: './locale.js',
                        phrases,
                    },
                ];
            },
        }),
    ],

    resolve: {
        extensions: ['.ts', 'tsx', '.js', '.jsx', '.json'],
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
};
