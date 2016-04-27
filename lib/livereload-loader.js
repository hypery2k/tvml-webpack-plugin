var tvmlReload = require('tvml-kit-livereload');

module.exports = function (source) {
    this.cacheable();
    var port = JSON.parse(this.query.substr(1));
    var result = tvmlReload.prepareApplicationJS(source);
    return result;
};
