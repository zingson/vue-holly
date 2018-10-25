module.exports = {
    baseUrl:process.env.NODE_ENV === 'production'? '/control/': '/',
    outputDir:"dist",
    assetsDir:"assets",
    filenameHashing:true,
    productionSourceMap:true,  //如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
    devServer:{
        host:'0.0.0.0',
        port: 8089
    },
    configureWebpack:{
        entry: './src/main.js',
        plugins: [

        ]
    }
};
