import SinglyLinkedListNode from './SinglyLinkedListNode'

describe('SinglyLinkedListNode', () => {
  it('should allow nodes to be appended ', () => {
    const nodeA = new SinglyLinkedListNode('a')

    nodeA.next = new SinglyLinkedListNode('b')

    expect(nodeA.value).toBe('a')
    expect(nodeA.next.value).toBe('b')
  })
})
