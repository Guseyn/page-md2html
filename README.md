# page-md2html
Provides async object that represent `html` that is get by `markdown` text.

## Concept

This library is based on this [one](https://github.com/evilstreak/markdown-js). So it supports regular markdown features.

But there are some new cool features:

1. youtube: `[!youtube!][videoId]`
2. soundcloud `[!soundcloud!][soundcloudIframe]`

## Usage

```js

new HtmlFromMd(markdownText).call();
