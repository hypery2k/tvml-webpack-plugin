# TVML WebPack Plugin

[![Build Status](https://travis-ci.org/hypery2k/tvml-webpack-plugin.svg?branch=master)](https://travis-ci.org/hypery2k/tvml-webpack-plugin) [![npm version](https://badge.fury.io/js/tvml-webpack-plugin.svg)](http://badge.fury.io/js/tvml-webpack-plugin) [![Dependency Status](https://david-dm.org/hypery2k/tvml-webpack-plugin.svg)](https://david-dm.org/hypery2k/tvml-webpack-plugin) [![devDependency Status](https://david-dm.org/hypery2k/tvml-webpack-plugin/dev-status.svg)](https://david-dm.org/hypery2k/tvml-webpack-plugin#info=devDependencies) 

> A WebPack plugin to support on developing TVML-based WebApps for tvOS
 
[![NPM](https://nodei.co/npm/tvml-webpack-plugin.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/tvml-webpack-plugin/)


## Usage

``` javascript
var TvmlPlugin = require("tvml-webpack-plugin");
module.exports = {
	plugins: [
		new TvmlPlugin();
	]
}
```

## Advanced usage

``` javascript
var TvmlPlugin = require("tvml-webpack-plugin");
module.exports = {
	plugins: [
		new TvmlPlugin({appFile: './src/application.js',port:9000});
	]
}
```

## Thanks

Thanks to [joshhunt](https://github.com/joshhunt). [His project](https://github.com/joshhunt/tvos-au-vod) was base for this.

## License

MIT, Copyright 2016 Martin Reinhardt