global.moment = require('moment');
global.chai   = require('chai');
global.sinon  = require('sinon');
global.Q      = require('q');
global.assert = chai.assert;

Q.longStackSupport = true;

/**
 * Promise test helper
 */

global.pt = function(fn) {
  return function(done) {
    var promise = fn.apply(this);
    if (!promise.then) return done(new Error("Object "+promise+" is not a promise"));

    promise.then(
      function(data) { done(undefined, data); },
      function(err) { done(err); });
  };
};

assert.jsonEqual = function(left, right) {
  return assert.equal(JSON.stringify(left), JSON.stringify(right));
};

/**
 * 2 * minutes
 */

global.minutes = 60 * 1000;
