/** @typedef {SinglyLinkedListNode | null} NullableSinglyLinkedListNode */
export type NullableSinglyLinkedListNode = SinglyLinkedListNode | null

/**
 * @callback Next
 * @return {NullableSinglyLinkedListNode}
 */
type Next = () => NullableSinglyLinkedListNode

/**
 * @callback SetNext
 * @param {NullableSinglyLinkedListNode} nextNode
 * @return {SinglyLinkedListNode}
 */
type SetNext = (nextNode: NullableSinglyLinkedListNode) => SinglyLinkedListNode

/**
 * @callback Value
 * @return {*}
 */
type Value = () => any

/**
 * @interface SinglyLinkedListNodeParams
 * @property {NullableSinglyLinkedListNode} [next]
 * @property {*} value
 */
interface SinglyLinkedListNodeParams {
  next?: NullableSinglyLinkedListNode
  value: any
}

/**
 * @interface SinglyLinkedListNode
 * @property {Next} next
 * @property {SetNext} setNext
 * @property {Value} value
 */
export interface SinglyLinkedListNode {
  next: Next
  setNext: SetNext
  value: Value
}

export default function singlyLinkedListNode({
  value,
  next = null,
}: SinglyLinkedListNodeParams): SinglyLinkedListNode {
  return {
    next(): NullableSinglyLinkedListNode {
      return next
    },
    setNext: (nextNode: NullableSinglyLinkedListNode): SinglyLinkedListNode =>
      singlyLinkedListNode({ value, next: nextNode }),
    value: (): any => value,
  }
}
