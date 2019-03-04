'use strict'

const { AsyncObject } = require('@page-libs/cutie')
const showdown = require('showdown')
const converter = new showdown.Converter()

class HtmlFromMd extends AsyncObject {
  constructor (md) {
    super(md)
  }

  syncCall () {
    return (md) => {
      return converter.makeHtml(md)
    }
  }
}

module.exports = HtmlFromMd
