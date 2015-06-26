# string2array
## Description
A utility that converts given `string` in a comma delimited format and returns an `array`;

### Syntax:-
`string2array(arg1)`

#### Parameters:-
**arg1**  

> Input string delimited by `,`. The string that you want to be converted<br>`e.g:- 'hello,world,['nice','day'],{"good":"bye", "world":["earth",9000]}'`

## Why use it at all?
Aside from mentioned above, this utility is only used in special cases. _Often times you'd use a real data types and would not have to rely on string but if you do, then here it is_

## Usage

```
var string2array = require('string2array');
console.log(string2array("hello,world,['nice','day'],{'good':'bye', 'world':['earth',9000]}")); // Gives you ["hello","world",['nice','day'],{'good':'bye', 'world':['earth',9000]}]
```

## Global install
Option is not available in global install.

### Usage
`ubuntu$ string2array 'hello,world,["nice","day"],{"good":"bye", "world":["earth",9000]}';`
