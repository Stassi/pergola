/** @typedef {*[]} AnyPair */
type AnyPair = [any, any]

/**
 * @description Find the strict equality of two values.
 * @param {AnyPair} input Values to compare.
 * @returns {boolean} Whether the values are equal.
 */
export default function strictEqual(input: AnyPair): boolean {
  const [x, y] = input
  return x === y
}
