var defaults = require('defaults');
var assert = require('assert');
var _ = require('lodash');
var opts = {
  "start": ["[", "{"],
  "end": ["]", "}"]
};

var result = [];
var tmp;


function hasStart(matcher, string) {
  return matcher.start.reduce(function(acc, next, index) {
    if (index === 1) {
      acc = _.startsWith(string, acc) ? true : false;
    }
    return acc || _.startsWith(string, next);
  });
}

function hasEnd(matcher, string) {
  return matcher.end.reduce(function(acc, next, index) {
    if (index === 1) {
      acc = _.endsWith(string, acc) ? true : false;
    }
    return acc || _.endsWith(string, next);
  });
}

function init(input, options) {
  assert.equal(typeof input, 'string', 'should be string');
  var _options = defaults(options, opts);
  return _.chain(input.split(",")).forEach(function(arg) {
    var start = hasStart(_options, arg);
    if (start || !_.isEmpty(tmp)) {
      if (start) {
        tmp += arg;
      } else {
        tmp += ',' + arg;
      }
    }
    if (hasEnd(_options, arg)) {
      result.push(tmp);
      tmp = '';
    } else if (_.isEmpty(tmp)) {
      //TODO:- parse it into right data type
      try{
        var tmp2 = JSON.parse(tmp);
      } catch(e){
        var tmp2 = tmp;
      }
      result.push(arg);
    }

  }).value();
}

switch (process.env.NODE_ENV) {
  case 'test':
    module.exports = {
      "init": init,
      "hasStart": hasStart,
      "hasEnd": hasEnd
    };
    break;
  default:
    module.exports = init;
}
