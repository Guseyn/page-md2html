'use strict'

const { HtmlFromMd } = require('./../index');
const { StrictEqualAssertion } = require('@cuties/assert');

new StrictEqualAssertion(
  new HtmlFromMd('Hello.\n\n* This is markdown.\n* It is fun\n* Love it or leave it.'),
  '<p>Hello.</p>\n<ul>\n<li>This is markdown.</li>\n<li>It is fun</li>\n<li>Love it or leave it.</li>\n</ul>'
).call();
