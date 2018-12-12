'use strict'

const { AsyncObject } = require('@cuties/cutie');
const showdown  = require('showdown');
const converter = new showdown.Converter();

class HtmlFromMd extends AsyncObject {

  constructor(md) {
    super(md);
  }

  definedSyncCall() {
    return (md) => {
      return converter.makeHtml(md);
    }
  }

}

module.exports = HtmlFromMd;
