# TVML WebPack Plugin

[![Greenkeeper badge](https://badges.greenkeeper.io/hypery2k/tvml-webpack-plugin.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/hypery2k/tvml-webpack-plugin.svg?branch=master)](https://travis-ci.org/hypery2k/tvml-webpack-plugin) [![npm version](https://badge.fury.io/js/tvml-webpack-plugin.svg)](http://badge.fury.io/js/tvml-webpack-plugin) [![Dependency Status](https://david-dm.org/hypery2k/tvml-webpack-plugin.svg)](https://david-dm.org/hypery2k/tvml-webpack-plugin) [![devDependency Status](https://david-dm.org/hypery2k/tvml-webpack-plugin/dev-status.svg)](https://david-dm.org/hypery2k/tvml-webpack-plugin#info=devDependencies)

> A WebPack plugin to support on developing TVML-based WebApps for tvOS

[![NPM](https://nodei.co/npm/tvml-webpack-plugin.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/tvml-webpack-plugin/)

> Feel free to **donate**
>
> <a href='https://pledgie.com/campaigns/31915'><img alt='Click here to lend your support to: NPM packages and make a donation at pledgie.com !' src='https://pledgie.com/campaigns/31915.png?skin_name=chrome' border='0' ></a>
> <a target="_blank" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=JYG6LVEHB59TL">
> <img alt="" border="0" src="https://www.paypalobjects.com/de_DE/DE/i/btn/btn_donateCC_LG.gif"/>
> </img></a>
> Or donate [Bitcoins](bitcoin:3NKtxw1SRYgess5ev4Ri54GekoAgkR213D):
> [![Bitcoin](https://martinreinhardt-online.de/bitcoin.png)](bitcoin:3NKtxw1SRYgess5ev4Ri54GekoAgkR213D)
>
> Also via [greenaddress](https://greenaddress.it/pay/GA3ZPfh7As3Gc2oP6pQ1njxMij88u/)


## Installation

```
npm install tvml-webpack-plugin --save-dev
```

Or if you want to use the development version (nightly build), which maybe not stable!:

```
npm install tvml-webpack-plugin@next --save-dev
```

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
