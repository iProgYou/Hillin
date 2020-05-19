var path = require("path")

module.export = {
    entry : './main.js',
    output : {
        path : path.join(__dirname,'./'),
        filename : 'index.js'
    }
}