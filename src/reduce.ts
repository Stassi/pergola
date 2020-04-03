/**
 * @callback Reducer
 * @param {any} accumulator
 * @param {any} value
 * @param {number} [index]
 * @returns {*}
 * */
type Reducer = (accumulator: any, value: any, index?: number) => any

/**
 * @typedef {object} ReducerInput
 * @property {*[]} collection
 * @property {*} initialValue
 * @property {Reducer} reducer
 */
type ReducerInput = {
  collection: any[]
  initialValue: any
  reducer: Reducer
}

/**
 * @description Iteratively transform a set.
 * @param {ReducerInput} input
 * @returns {*}
 */
export default function reduce(input: ReducerInput): any {
  const { collection, initialValue, reducer } = input

  return collection.reduce(reducer, initialValue)
}
