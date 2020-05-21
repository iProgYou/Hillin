var path = require("path")

module.export = {
    entry : './main.js',
    output : {
        path : path.join(__dirname,'./'),
        filename : 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loaders: [
                            'file-loader',
                            'image-webpack-loader'
                        ]
                    }
                ],
            }
        ]
    }
}