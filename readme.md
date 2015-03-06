Eyeron bootstrap-slider 
===

[![GitHub version](https://badge.fury.io/gh/distros%2Feyecon-bootstrap-slider.svg?style=flat-square)](http://badge.fury.io/gh/distros%2Feyecon-bootstrap-slider)
[![Build Status](https://travis-ci.org/distros/eyecon-bootstrap-slider.svg?branch=master&style=flat-square)](https://travis-ci.org/distros/eyecon-bootstrap-slider)
[![Dependency Status](https://david-dm.org/distros/eyecon-bootstrap-slider.svg?style=flat-square)](https://david-dm.org/distros/eyecon-bootstrap-slider)
[![devDependency Status](https://david-dm.org/distros/eyecon-bootstrap-slider/dev-status.svg?style=flat-square)](https://david-dm.org/distros/eyecon-bootstrap-slider#info=devDependencies)  
[![written in](https://img.shields.io/badge/written_in-jQuery-blue.svg?style=flat-square)](http://www.jquery.com)
![JS format](https://img.shields.io/badge/JS_format-global-lightgrey.svg?style=flat-square)]
[![Built with gulp](http://img.shields.io/badge/built%20with-gulp.js-red.svg?style=flat-square)](http://gulpjs.com/)  
![JSPM](https://img.shields.io/badge/JSPM-eyecon--bootstrap--slider-db772b.svg?style=flat-square)
![Dependencies](https://img.shields.io/badge/dependencies-jquery,_bootstrap-db772b.svg?style=flat-square)  
[![Hex.pm](https://img.shields.io/hexpm/l/plug.svg?style=flat-square)]()

Repository for the [bootstrap-slider](http://www.eyecon.ro/bootstrap-slider/) from Stefan Petre ([eyecon.ro](http://www.eyecon.ro))

This is a jquery plugin that implements a slider that works well with bootstrap themes.

This package includes gulp tasks to uglify the source css and to compile the less files.

## Installation

	jspm install eyecon-bootstrap-slider

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
