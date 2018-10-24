# page-markdown2html
Translator from custom markdown(with custom elements) to html. It's not usual markdown language, it's specific for page framework.

# Concept (not completely ready)

`config.json`

```json
{
  "h1": { 
    "path": "./path/to/template_with_h1",
    "marker": "#"
   },
  "h2": { 
    "path": "./path/to/template_with_h2",
    "marker": "##"
   },
   "paragraph": {
      "path": "./path/to/template_with_simpleText",
      "marker": "--"
   }
   "youtube": {
     "path": "./path/to/template_with_youtube",
     "marker": "youtube"
   }
  ...
}
```

`page.md`

```md

????

```

## usage

```js
new HtmlFromMarkdown(pathToConfig, pathToPageMd).call() // AsyncObject
```

