import { both, either } from 'ramda';
import curry1 from 'ramda/src/internal/_curry1';

import isNotNull from './isNotNull';
import isFunction from './isFunction';
import isOfTypeObject from './internal/isOfTypeObject';

/* eslint-disable max-len */
/**
 * Checks if input value is language type of `Object`.
 *
 * @func isObj
 * @aliases isObject
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotObj|isNotObj}, {@link RA.isObjLike|isObjLike}, {@link RA.isPlainObj|isPlainObj}
 * @example
 *
 * RA.isObj({}); //=> true
 * RA.isObj([]); //=> true
 * RA.isObj(() => {}); //=> true
 * RA.isObj(null); //=> false
 * RA.isObj(undefined); //=> false
 */
/* eslint-enable max-len */
const isObj = curry1(both(isNotNull, either(isOfTypeObject, isFunction)));

export default isObj;
