/** @typedef {[number, number]} NumberPair */
type NumberPair = [number, number]

/**
 * @description Add two values.
 * @param {NumberPair} input Values to add.
 * @returns {number} Sum of both values.
 */
export default function add(input: NumberPair): number {
  const [n, m] = input
  return n + m
}