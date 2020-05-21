import add from '../../../add'
import decrement from '../../../decrement'
import increment from '../../../increment'
import SinglyLinkedListNode from './SinglyLinkedListNode'

export default class SinglyLinkedList {
  private _head: SinglyLinkedListNode | null = null
  private _length: number = 0

  private decrementLength(): void {
    this._length = decrement(this._length)
  }

  private incrementLength(): void {
    this._length = increment(this._length)
  }

  get head(): SinglyLinkedListNode | null {
    return this._head
  }

  get length(): number {
    return this._length
  }

  concatenate(list: SinglyLinkedList): void {
    if (!this.head) this._head = list.head
    else this.getLastNode().next = list.head

    this._length = add([this.length, list.length])
  }

  findNode(value: any): SinglyLinkedListNode | null {
    if (!this.head) {
      throw new Error('Failed to access index: no nodes exist.')
    }

    let count = 0
    let node = this.head

    while (this.length > count && node.value !== value) {
      count = increment(count)
      node = <SinglyLinkedListNode>node.next
    }

    if (node.value === value) return node
    else return null
  }

  getLastNode(): SinglyLinkedListNode {
    return this.getNodeAt(decrement(this.length))
  }

  getNodeAt(index: number): SinglyLinkedListNode {
    if (!this.head) {
      throw new Error('Failed to access index: no nodes exist.')
    }

    if (this.length <= index) {
      throw new Error(
        'Failed to access index: index exceeds number of available nodes.'
      )
    }

    let counter = 0
    let node = this.head

    while (counter < index) {
      counter = increment(counter)
      node = <SinglyLinkedListNode>node.next
    }

    return node
  }

  insertAfter(index: number, value: any): void {
    const selectedNode = this.getNodeAt(index)
    const newNode = new SinglyLinkedListNode(value)
    newNode.next = selectedNode.next
    selectedNode.next = newNode

    this.incrementLength()
  }

  insertAtStart(value: any): void {
    const node = new SinglyLinkedListNode(value)
    node.next = this.head || null
    this._head = node

    this.incrementLength()
  }

  insertLast(value: any): void {
    const node = new SinglyLinkedListNode(value)

    if (this.head) this.getLastNode().next = node
    else this._head = node

    this.incrementLength()
  }

  removeAfter(index: number) {
    const selectedNode = this.getNodeAt(index)
    const nodeToRemove = selectedNode.next

    if (!nodeToRemove) {
      throw new Error(`No node to remove at index ${increment(index)}.`)
    }

    selectedNode.next = nodeToRemove.next
    nodeToRemove.next = null

    this.decrementLength()
  }

  removeAtStart(): void {
    if (!this.head) {
      throw new Error('Failed to access index: no nodes exist.')
    }

    this._head = this.head.next

    this.decrementLength()
  }

  removeLast(): void {
    if (!this.head) {
      throw new Error('Failed to access index: no nodes exist.')
    }

    if (this.length === 1) this._head = null
    else this.getNodeAt(this.length - 2).next = null

    this.decrementLength()
  }

  reverse(): void {
    if (!this.head) {
      throw new Error('Failed to access index: no nodes exist.')
    }

    if (this.length === 1) return

    this.reverseLink({ node: this.head })
  }

  private reverseLink({
    node,
    previousNode = null,
  }: {
    node: SinglyLinkedListNode
    previousNode?: SinglyLinkedListNode | null
  }): void {
    const nextNode = node.next
    node.next = previousNode

    if (nextNode) this.reverseLink({ node: nextNode, previousNode: node })
    else this._head = node
  }
}
