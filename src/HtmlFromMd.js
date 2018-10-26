'use strict'

const { AsyncObject } = require('@cuties/cutie');
const markdown = require( "markdown" ).markdown;

class HtmlFromMd extends AsyncObject {

  constructor(md) {
    super(md);
  }

  definedSyncCall() {
    return (md) => {
      return markdown.toHTML(md);
    }
  }

}

module.exports = HtmlFromMd;
