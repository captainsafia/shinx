# shinx
[![Build Status](https://travis-ci.org/captainsafia/hawkeye.svg?branch=master)](https://travis-ci.org/captainsafia/hawkeye)

![](http://randompokemon.com/sprites/animated/403.gif)

Shinx is a package for watching changes on a Jupyter kernel runtime directory that utilizes RxJS.

## Installation

```
npm install shinx
```

## Usage

```
var subject = require('shinx');

subject.subcribe(function (x) {
  console.log("Jupyter kernel has been started!");
});
```
