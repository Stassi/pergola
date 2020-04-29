import SinglyLinkedListNode from './SinglyLinkedListNode'

describe('SinglyLinkedListNode', () => {
  it('should allow nodes to be appended ', () => {
    const nodeA = new SinglyLinkedListNode('a')

    nodeA.next = new SinglyLinkedListNode('b')

    expect(nodeA.value).toBe('a')
    expect(nodeA.next.value).toBe('b')
  })

  it('should allow a node to be prepended to a node', () => {
    const nodeP = new SinglyLinkedListNode('p')
    const nodeO = new SinglyLinkedListNode('o')

    nodeO.next = nodeP

    expect(nodeO.value).toBe('o')
    expect(nodeO.next.value).toBe('p')
  })
})
