Eyeron bootstrap-slider 
===

[![GitHub version](https://badge.fury.io/gh/[namespace]%2F[name].svg?style=flat-square)](http://badge.fury.io/gh/[namespace]%2F[name])
[![Build Status](https://travis-ci.org/[namespace]/[name].svg?branch=master&style=flat-square)](https://travis-ci.org/[namespace]/[name])
[![Dependency Status](https://david-dm.org/[namespace]/[name].svg?style=flat-square)](https://david-dm.org/[namespace]/[name])
[![devDependency Status](https://david-dm.org/[namespace]/[name]/dev-status.svg?style=flat-square)](https://david-dm.org/[namespace]/[name]#info=devDependencies)  
[![Pull Request Stats](http://issuestats.com/github/joyent/node/badge/pr?style=flat)](http://issuestats.com/github/[namespace]/[name])
[![Issue Stats](http://issuestats.com/github/joyent/node/badge/issue?style=flat)](http://issuestats.com/github/[namespace]/[name])
[![Hex.pm](https://img.shields.io/hexpm/l/plug.svg?style=flat-square)]()  
[![written in](https://img.shields.io/badge/written_in-jQuery-blue.svg?style=flat-square)](http://www.jquery.com)
[![JS format](https://img.shields.io/badge/JS_format-global-lightgrey.svg?style=flat-square)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Built with gulp](http://img.shields.io/badge/built%20with-gulp.js-red.svg?style=flat-square)](http://gulpjs.com/)  
[![JSPM](https://img.shields.io/badge/JSPM-eyecon--bootstrap--slider-db772b.svg?style=flat-square)](http://jspm.io)
[![jQuery](https://img.shields.io/badge/jquery-*-db772b.svg?style=flat-square)](https://github.com/components/jquery)
[![Bootstrap](https://img.shields.io/badge/bootstrap-^3.3.5-db772b.svg?style=flat-square)](https://github.com/twbs/bootstrap)  


Repository for the [bootstrap-slider](http://www.eyecon.ro/bootstrap-slider/) from Stefan Petre ([eyecon.ro](http://www.eyecon.ro))

This is a jquery plugin that implements a slider that works well with bootstrap themes.

This package includes gulp tasks to uglify the source css and to compile the less files.

## Installation

	jspm install [name]

## Building

The source files are located in the `src` folder,
building the source files will generate optimized files in the `dist` folder.

Run an npm install to download the needed dependencies for building:

	npm install

Build js:

	gulp js

Build css:

	gulp less

Build minified css:

	gulp less-prod

To build everything at once use:

	gulp build

## Testing

run the tests through npm (this will run jshint and jasmine)

	npm test

[namespace]: distros
[name]: eyecon-bootstrap-slider
