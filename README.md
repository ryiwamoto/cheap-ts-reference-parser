# cheap-ts-reference-parser 
Regexp based reference pareser for Typescript.

# Example
sample.ts
```typescript
/// <reference path="a.ts"/>
/// <reference path="./lib/b.ts"/>
class Sample {
}
```

```javascript
var fs = require('fs');
var parser = require('chea-ts-reference-parser');

var filePath = '/tmp/sample.ts';
var result = parser(
  filePath, //file path (string)
  fs.readFileSync(fielPath, 'utf8') //file contents (string)
);
expect(result).toBe(['/tmp/a.ts', '/tmp/lib/b.ts']); //resolved path of referenced files
```
