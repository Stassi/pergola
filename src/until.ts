import not from './not'

/**
 * @callback Predicate
 * @param {*} value
 * @return {boolean}
 */
type Predicate = (value: any) => boolean

/**
 * @callback Transform
 * @param {*} value
 * @return {*}
 */
type Transform = (value: any) => any

/**
 * @interface UntilInput
 * @property {*} initialValue
 * @property {Predicate} predicate
 * @property {Transform} transform
 */
interface UntilInput {
  initialValue: any
  predicate: Predicate
  transform: Transform
}

/**
 * @description Transform a value until a predicate is satisfied.
 * @param {UntilInput} props
 * @return {*}
 */
export default function until({
  initialValue,
  predicate,
  transform,
}: UntilInput): any {
  let value = initialValue

  do value = transform(value)
  while (not(predicate(value)))

  return value
}
