var loader = require('../lib/livereload-loader'),
  path = require('path'),
  livereload = require('../index.js');

describe('api', function () {
  'use strict';

  it('should replace', function (done) {
    // given

    var dirname = path.resolve(__dirname, '..', 'node_modules', 'tvml-kit-livereload');
    var given = `App.onLaunch = function () {
    }`,
      expected = `var liveReload = require('` + dirname + `/lib/livereload');

App.onLaunch = function () {
  liveReload.connect('http://localhost:9000', App);
    }
`;
    this.cacheable = function () {
    };
    this.query = " 9000";
    // when
    var result = loader.apply(this, [given]);
    // then
    expect(result).toBe(expected);
    done();
  });

});
