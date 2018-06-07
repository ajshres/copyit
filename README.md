# COPY IT

Small size copy to clipboard code. No Flash.

## Install
`npm install copy-it --save`

## How to use?

Example 1:
```
import { copyText } from 'copy-it';

copyText("Copy Me");
```

Example 2:
```
import { copyElement } from 'copy-it';

copyElement(document.getElementById('someInput'))
```

```
<html>
    <head>...</head>
    <body>
        <input id="someInput" readonly value="copy me" />
    </body>
</html>
```

Example 3:

```
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
