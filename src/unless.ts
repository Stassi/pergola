import not from './not'
import until from './until'

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
 * @interface UnlessInput
 * @property {*} initialValue
 * @property {Predicate} predicate
 * @property {Transform} transform
 */
interface UnlessInput {
  initialValue: any
  predicate: Predicate
  transform: Transform
}

/**
 * @description Transform a value unless a predicate is satisfied.
 * @param {UnlessInput} props
 * @return {*}
 */
export default function unless(props: UnlessInput): any {
  const { initialValue, predicate } = props
  return predicate(initialValue) ? initialValue : until(props)
}
