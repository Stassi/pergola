type ResultIfFalse = any
type ResultIfTrue = any

/**
 * @returns {ResultIfFalse}
 */
type IfFalse = () => ResultIfFalse

/**
 * @returns {ResultIfTrue}
 */
type IfTrue = () => ResultIfTrue

/**
 * @returns {boolean} Whether the predicate is satisfied.
 */
type Predicate = () => boolean

/**
 * @description Binary decision to call one of two functions.
 * @param {object} params
 * @param {IfFalse} params.ifFalse Called if the predicate is not satisfied.
 * @param {IfTrue} params.ifTrue Called if the predicate is satisfied.
 * @param {Predicate} params.predicate Determines which function is called.
 * @returns {(ResultIfFalse|ResultIfTrue)} Conditional value.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */
export default function conditional({
  ifFalse,
  ifTrue,
  predicate,
}: {
  ifFalse: IfFalse
  ifTrue: IfTrue
  predicate: Predicate
}): ResultIfFalse | ResultIfTrue {
  return predicate() ? ifTrue() : ifFalse()
}
