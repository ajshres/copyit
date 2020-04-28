# COPY IT

Small size copy to clipboard code. No Flash.
[Demo](https://ajshres.github.io/copyit/)
## Install
`npm install copy-it-js --save`

or

`yarn add copy-it-js`

## How to use?

Example 1:
```js
import { copyText } from 'copy-it-js';

copyText("Copy Me");
```

Example 2:
```js
import { copyElement } from 'copy-it-js';

copyElement(document.getElementById('someInput'))
```

```html
<html>
    <head>...</head>
    <body>
        <input id="someInput" readonly value="copy me" />
    </body>
</html>
```

Example 3:

```html
<html>
    <head>
        <script src="../dist/copy.min.js"></script>
    </head>
    <body>
        <input id="someInput" readonly value="copy me" />
        <script>
            copyit.copyElement(document.getElementById("someInput"));
        </script>
    </body>
</html>
```
Inspired From
1. [https://github.com/zenorocha/clipboard.js](https://github.com/zenorocha/clipboard.js)
2. [https://github.com/zenorocha/select](https://github.com/zenorocha/select)
