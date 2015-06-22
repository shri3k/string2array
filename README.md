# Description
A utility that converts given `string` in a comma delimited format and returns an `array`;

## Syntax:-
`stringray(arg1 [,arg2])`

### Parameters:-

**arg1**  
> Input string delimited by `,`. The string that you want to be converted  
`e.g:- "hello,world,['nice','day'],{'good':'bye', 'world':['earth',9000]}"`

**arg2**  
> Options. If you have your own specific format other than what standard array and objects then you can do so too but you have to specify the package what those special identifiers are.  
Just like how arrays start with square bracket `[` and end with `]` and objects with `{` and end with `}`. You can make up your separators by passing object as:-
```
{
  "start": ['<'],
  "end": ['>']
}
```
where `start` and `end` are mandatory. If not given or if the values aren't in an array format then it'll be reverted back to defaults.

# Why use it at all?
Aside from mentioned above, this utility is only used in special cases. _Often times you'd use a real data types and would not have to rely on string but if you do, then here it is_

# Usage

```
var stringray = require('stringray');
console.log(stringray("hello,world,['nice','day'],{'good':'bye', 'world':['earth',9000]}")); // Gives you ["hello","world",['nice','day'],{'good':'bye', 'world':['earth',9000]}]
```
#Global install
Option is not available in global install.

##Usage
`ubuntu$ stringray "hello,world,['nice','day'],{'good':'bye', 'world':['earth',9000]}";`
