'use strict'

const { AsyncObject } = require('@page-libs/cutie')
const showdown = require('showdown')

class HtmlFromMd extends AsyncObject {
  constructor (md, options) {
    super(md, options || {})
  }

  syncCall () {
    return (md, options) => {
      return new showdown.Converter(options).makeHtml(md)
    }
  }
}

module.exports = HtmlFromMd
