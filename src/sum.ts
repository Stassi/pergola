import add from './add'
import reduce from './reduce'

/**
 * @description Compute the sum of numbers.
 * @param {number[]} collection Numbers to be summed.
 * @returns {number} Sum of numbers.
 * @see #increment
 */
export default function sum(collection: number[]): number {
  return reduce({
    collection,
    initialValue: 0,
    reducer: (accumulator: number, value: number) => add([accumulator, value]),
  })
}
