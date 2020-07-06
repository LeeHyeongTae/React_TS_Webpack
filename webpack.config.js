module.exports = {
    mode: 'development',

    entry: './src/index.tsx', //entry point

    output: { //빌드 결과물을 dist/main.js에 위치
        filename: 'main.js',
        path: __dirname + '/dist'
    },

    devtool: 'source-map', // 디버깅을 위해 소스맵 추가

    devServer: {
        contentBase: './',
        publicPath: '/dist'
    },

    resolve: { // 파일 확장자 처리
        extensions: ['.ts', '.tsx', '.js']
    },

    module: {
        rules: [
            { // .ts나 .tsx 확장자를 ts-loader가 트랜스파일
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
        ]
    },
};