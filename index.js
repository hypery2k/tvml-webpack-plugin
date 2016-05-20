var path = require("path");
var resolve = require("resolve");
var tvmlReload = require('tvml-kit-livereload');

function TvmlLiveReloadPlugin(options) {
    this.appFile = options.appFile || 'application.js';
    this.importsLoader = resolve.sync('imports-loader', {basedir: __dirname});
    this.port = options.port || 9000;
    tvmlReload.start(this.port, function () {
    });
}

TvmlLiveReloadPlugin.prototype.apply = function (compiler) {
    var appFile = this.appFile,
        port = this.port,
        importsLoader = this.importsLoader,
        devtool = compiler.options.devtool;

    compiler.plugin("compilation", function () {
        if (devtool) {
            tvmlReload.reload();
        }
    });
    compiler.plugin("normal-module-factory", function (nmf) {

        var livereloadPath = path.join(__dirname, "/lib/livereload-loader.js") + "?" + port;
        // add only in devtool
        if (devtool) {
            nmf.plugin("after-resolve", function (data, callback) {
                if ((data.rawRequest).indexOf(appFile) !== -1) {
                    // adding livereload loader
                    data.loaders.push(livereloadPath);
                    // socket.io-client requires the window object, and navigator.userAgent to be present.
                    // use webpack to shim these into socket.io
                    data.loaders.push(importsLoader + "?window=>{},navigator=>{userAgent: 'tvos'}");
                    callback(null, data);
                } else {

                    callback(null, data);
                }
            });
        } else {
            nmf.plugin("after-resolve", function (data, callback) {
                if ((data.rawRequest).indexOf(appFile) !== -1) {
                    for (var i = data.loaders.length; i--;) {
                        if (data.loaders[i] === livereloadPath) {
                            data.loaders.splice(i, 1);
                        }
                    }
                    callback(null, data);
                } else {

                    callback(null, data);
                }
            });
        }
    });
};

module.exports = TvmlLiveReloadPlugin;
