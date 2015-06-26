# stringray
## Description
A utility that converts given `string` in a comma delimited format and returns an `array`;

### Syntax:-
`stringray(arg1)`

#### Parameters:-
**arg1**  

> Input string delimited by `,`. The string that you want to be converted<br>`e.g:- 'hello,world,['nice','day'],{"good":"bye", "world":["earth",9000]}'`

## Why use it at all?
Aside from mentioned above, this utility is only used in special cases. _Often times you'd use a real data types and would not have to rely on string but if you do, then here it is_

## Usage

```
var stringray = require('stringray');
console.log(stringray("hello,world,['nice','day'],{'good':'bye', 'world':['earth',9000]}")); // Gives you ["hello","world",['nice','day'],{'good':'bye', 'world':['earth',9000]}]
```

## Global install
Option is not available in global install.

### Usage
`ubuntu$ stringray 'hello,world,["nice","day"],{"good":"bye", "world":["earth",9000]}';`
