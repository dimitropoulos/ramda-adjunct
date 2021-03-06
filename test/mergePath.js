import { assert } from 'chai';

import * as RA from '../src';

describe('mergePath', function() {
  let path;
  let source;
  let obj;
  let expected;

  beforeEach(function() {
    path = ['a', 'b'];
    source = { c2: 22, c3: 33 };
    obj = { a: { b: { c1: 1, c2: 2 } } };
    expected = { a: { b: { c1: 1, c2: 22, c3: 33 } } };
  });

  it('should curry', function() {
    assert.deepEqual(RA.mergePath(path, source, obj), expected);
    assert.deepEqual(RA.mergePath(path)(source, obj), expected);
    assert.deepEqual(RA.mergePath(path, source)(obj), expected);
    assert.deepEqual(RA.mergePath(path)(source)(obj), expected);
  });

  it('should merge the property paths containing object', function() {
    assert.deepEqual(RA.mergePath(path, source, obj), expected);
  });

  context('given empty source', function() {
    specify('should return unmodified object', function() {
      assert.deepEqual(RA.mergePath(path, {}, obj), obj);
    });
  });

  context('given empty obj', function() {
    specify('should create object with subject under path', function() {
      expected = { a: { b: { c2: 22, c3: 33 } } };
      assert.deepEqual(RA.mergePath(path, source, {}), expected);
    });
  });

  context('given target is not an object', function() {
    it('shold create object with subject under path', function() {
      expected = { a: { b: { c2: 22, c3: 33 } } };
      assert.deepEqual(RA.mergePath(path, source, { a: { b: 1 } }), expected);
    });
  });
});
