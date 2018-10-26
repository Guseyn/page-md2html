'use strict'

const { HtmlFromMd } = require('./../index');
const { StrictEqualAssertion } = require('@cuties/assert');

new StrictEqualAssertion(
  new HtmlFromMd('Hello.\n\n* This is markdown.\n* It is fun\n* Love it or leave it.'),
  '<p>Hello.</p>\n\n<ul><li>This is markdown.</li><li>It is fun</li><li>Love it or leave it.</li></ul>'
).call();
