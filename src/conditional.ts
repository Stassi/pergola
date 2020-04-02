/**
 * @callback IfFalse
 * @returns {*}
 */
type IfFalse = () => any

/**
 * @callback IfTrue
 * @returns {*}
 */
type IfTrue = () => any

/**
 * @callback Predicate
 * @returns {boolean}
 */
type Predicate = () => boolean

/**
 * @typedef {object} ConditionalInput
 * @property {IfFalse} ifFalse Called if the predicate is not satisfied.
 * @property {IfTrue} ifTrue Called if the predicate is satisfied.
 * @property {Predicate} predicate Determines which function is called.
 */
type ConditionalInput = {
  ifFalse: IfFalse
  ifTrue: IfTrue
  predicate: Predicate
}

/**
 * @description Binary decision to call one of two functions.
 * @param {ConditionalInput} input
 * @returns {*} Conditional value.
 */
export default function conditional(input: ConditionalInput): any {
  const { ifFalse, ifTrue, predicate } = input
  return predicate() ? ifTrue() : ifFalse()
}
