# Reducerad array med objekt

## Uppgift

Modulen `src/arrayExtension.js` innehåller funktionen `getSum` som måste kompletteras.

![Beroendediagram](/.readme/dependency-graph.svg)

Funktionen ska summera objekts tal som finns i arrayen genom att använda [`Array.reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).

Du ska även implementera viss felhantering, innebärande att undantag kastas om fel inträffar. Om parametern inte refererar till en array ska ett undantag av typen `TypeError` kastas innehållande felmeddelandet `The passed argument is not an array.`.

Vidare så ska funktionen vara en så kallad "pure function", det vill säga vara helt utan sidoeffekter.

Kodavsnittet nedan är ett exempel på hur funktionen `getSum` är tänkt att användas.

```js
import { getSum } from './arrayExtension.js'

const data = [{nr: 4}, {nr: 5}]
let result = getSum(data)
console.log(result) // output: 9

data.push({nr: 33})
result = getSum(arr)
console.log(result) // output: 42
```

## Tips

Genom att köra enhetstesterna som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt enhetstesterna...).

Funktioner, metoder, etc. som _kan_ komma till användning beroende hur du väljer att lösa uppgiften.

- [if](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [Array.isArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
- [Array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
- [TypeError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
