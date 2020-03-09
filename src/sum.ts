/**
 * @description Compute the sum of numbers.
 * @param {...number} n Numbers to be summed.
 * @returns {number} Sum of numbers.
 * @see #increment
 */
export default function sum(...n: number[]): number {
  return n.reduce((prev, current) => {
    return prev + current
  }, 0)
}
