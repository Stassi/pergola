/** @typedef {*} ResultIfFalse */
type ResultIfFalse = any

/** @typedef {*} ResultIfTrue */
type ResultIfTrue = any

/**
 * @callback IfFalse
 * @returns {ResultIfFalse}
 */
type IfFalse = () => ResultIfFalse

/**
 * @callback IfTrue
 * @returns {ResultIfTrue}
 */
type IfTrue = () => ResultIfTrue

/**
 * @callback Predicate
 * @returns {boolean}
 */
type Predicate = () => boolean

/**
 * @typedef {object} Input
 * @property {IfFalse} ifFalse Called if the predicate is not satisfied.
 * @property {IfTrue} ifTrue Called if the predicate is satisfied.
 * @property {Predicate} predicate Determines which function is called.
 */
type Input = {
  ifFalse: IfFalse
  ifTrue: IfTrue
  predicate: Predicate
}

/**
 * @description Binary decision to call one of two functions.
 * @param {Input} input
 * @returns {(ResultIfFalse|ResultIfTrue)} Conditional value.
 */
export default function conditional(
  input: Input
): ResultIfFalse | ResultIfTrue {
  const { ifFalse, ifTrue, predicate } = input
  return predicate() ? ifTrue() : ifFalse()
}
