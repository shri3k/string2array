var defaults = require('defaults');
var assert = require('assert');
var _ = require('lodash');
var debug = require('debug')('stringray');
var opts = {
  "start": ["[", "{"],
  "end": ["]", "}"]
};


function hasStart(matcher, string) {
  string = string.trim();
  return _.chain(matcher.start).reduce(function(acc, next, index) {
    if (index === 0) {
      acc = _.startsWith(string, acc) ? true : false;
    }
    return acc || _.startsWith(string, next);
  }, matcher.start[0]).value();
}

function hasEnd(matcher, string) {
  string = string.trim();
  return matcher.end.reduce(function(acc, next, index) {
    if (index === 0) {
      acc = _.endsWith(string, acc) ? true : false;
    }
    return acc || _.endsWith(string, next);
  }, matcher.end[0]);
}

function init(input, options) {
  assert.equal(typeof input, 'string', 'should be string');
  if (Object.getPrototypeOf(this) != init.prototype) {
    debug("Input given: ", input);
    debug("Input type: ", typeof input);
    var obj = Object.create(init.prototype);
    obj.result = [];
    obj.tmp = '';
    obj.constructor.apply(obj, arguments);
    return getArgs(obj.result, obj.tmp);
  }

  function getArgs(result, tmp) {
    var _options = defaults(options, opts);
    input.split(",").forEach(function(arg) {
      arg = arg.trim();
      var start = hasStart(_options, arg);
      if (start || !_.isEmpty(tmp)) {
        debug('hasStart or isNotEmpy ' + arg);
        var delimiter = "";
        if (!start) {
          delimiter = ",";
        }
        tmp = tmp.concat(delimiter, arg);
      }
      if (hasEnd(_options, arg)) {
        debug('hasEnd of ' + arg);
        var parse;
        try {
          debug('parse', tmp);
          parse = JSON.parse(tmp);
        } catch (e) {
          debug("Failed parse value " + tmp);
          process.stderr.write(e);
          parse = tmp;
        }
        result.push(parse);
        tmp = '';
      } else if (_.isEmpty(tmp)) {
        if ((/'/g).test(arg)) {
          result.push(arg.replace(/'/g, ""));
        } else {
          result.push(arg.replace(/"/g, ""));
        }
      }
    });
    return result;
  }
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
