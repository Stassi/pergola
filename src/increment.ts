import add from './add'

/**
 * @description Increment by 1.
 * @param {number} n Number to be incremented.
 * @returns {number} Number incremented by 1.
 * @see #add
 * @see #decrement
 * @see #sum
 */
export default function increment(n: number): number {
  return add([n, 1])
}
