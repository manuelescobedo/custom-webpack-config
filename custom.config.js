const webpack = require('webpack');
const pkg = require('./package.json');


module.exports = function (config) {
    config.plugins.push(
        new webpack.DefinePlugin({
            'APPVERSION': JSON.stringify(pkg.version)
          })
    )
    return config;
};
