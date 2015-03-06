distros/eyecon-bootstrap-slider [![GitHub version](https://badge.fury.io/gh/distros/eyecon-bootstrap-slider.svg)](http://badge.fury.io/gh/distros/eyecon-bootstrap-slider)  
===

[![Build Status][travis-image]][travis-url]
[![JSHint status](http://distros.github.io/eyecon-bootstrap-slider/badge-jshint.svg)](http://jshint.com/)
[![Dependency Status](https://david-dm.org/distros/eyecon-bootstrap-slider.svg?style=flat-square)](https://david-dm.org/distros/eyecon-bootstrap-slider)
[![devDependency Status](https://david-dm.org/distros/eyecon-bootstrap-slider.svg?style=flat-square)](https://david-dm.org/distros/eyecon-bootstrap-slider#info=devDependencies)

[![Built with gulp](http://img.shields.io/badge/built%20with-gulp.js-red.svg)](http://gulpjs.com/)

![JSPM](https://img.shields.io/badge/JSPM-eyecon--bootstrap--slider-db772b.svg?style=flat-square)
![JS format](https://img.shields.io/badge/JS_format-global-lightgrey.svg?style=flat-square)
![written in](https://img.shields.io/badge/written_in-jQuery-blue.svg?style=flat-square)
  
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
