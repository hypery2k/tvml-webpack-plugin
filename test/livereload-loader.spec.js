var loader = require('../lib/livereload-loader');

exports.replace = function(test) {
    // given
    var given = `App.onLaunch = function () {
    }`,
        expected =  `var liveReload = require('tvml-kit-livereload/lib/livereload');

App.onLaunch = function () {
  liveReload.connect('http://localhost:9000', App);
    }
`;
    this.cacheable=function(){};
    this.query =" 9000";
    // when
    var result = loader.apply(this,[given]);
    // then
    test.ok(result.localeCompare(expected)===0, 'Should replace source');
    test.done();
}