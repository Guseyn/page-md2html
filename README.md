# page-md2html

[![NPM Version](https://img.shields.io/npm/v/@page-libs/md2html.svg)](https://npmjs.org/package/@page-libs/md2html)
[![Build Status](https://travis-ci.org/Guseyn/page-md2html.svg?branch=master)](https://travis-ci.org/Guseyn/page-md2html)
[![codecov](https://codecov.io/gh/Guseyn/page-md2html/branch/master/graph/badge.svg)](https://codecov.io/gh/Guseyn/page-md2html)

Provides async object `HtmlFromMd` that represents translated `html` text from `markdown` text. This library is based on this [one](https://github.com/showdownjs/showdown) and [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf). So it supports regular markdown features.

## Install

`npm install @page-libs/md2html`

## Run test

`npm test`

## Run build

`npm run build`

## Usage

```js

new HtmlFromMd(markdownText).call();

```