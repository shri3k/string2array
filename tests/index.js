var test = require('tape');
var string2array = require('../');
var _ = require('lodash');

// mocks
var mockInitData = 'hello,world,["nice","day"],{"good":"bye", "world":["earth",9000]}';
// ----------
var matcher = {
  "start": ['[', '{'],
  "end": [']', '}']
};
var _input = "nice";

test("hasStart returns proper boolean value", function(t) {

  t.ok(string2array.hasStart(matcher, matcher.start[0] + _input), "should return true which starts with [");
  t.notOk(string2array.hasStart(matcher, _input), "should return false which does not starts with [");
  t.ok(string2array.hasStart(matcher, matcher.start[1] + _input), "should return true which starts with {");
  t.notOk(string2array.hasStart(matcher, _input), "should return false which does not starts with {");
  t.end();
});

test("hasEnd returns proper boolean value", function(t) {
  t.ok(string2array.hasEnd(matcher, _input + matcher.end[0]), "should return true which starts with [");
  t.notOk(string2array.hasEnd(matcher, _input), "should return false which does not starts with [");
  t.ok(string2array.hasEnd(matcher, _input + matcher.end[1]), "should return true which starts with {");
  t.notOk(string2array.hasEnd(matcher, _input), "should return false which does not starts with {");
  t.end();
});

test("should return an array", function(t) {
  t.ok(_.isArray(string2array.init(mockInitData)), "should be an array with no option given");
  t.ok(_.isArray(string2array.init(mockInitData, {
    "start": ["["],
    "end": ["]"]
  })), "should be an array wih option");
  t.end();
});

test("should return the right result", function(t) {
  t.deepEqual(string2array.init(mockInitData), ["hello", "world", ["nice", "day"], {
    "good": "bye",
    "world": ["earth", 9000]
  }], "should have the same result");
  t.end();
});
