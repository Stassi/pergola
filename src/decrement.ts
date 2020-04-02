import add from './add'
import negate from './negate'

/**
 * @description Decrement by 1.
 * @param {number} n Number to be decremented.
 * @returns {number} Number decremented by 1.
 * @see #increment
 */
export default function decrement(n: number): number {
  return add([n, negate(1)])
}
