import singlyLinkedListNode from './singlyLinkedListNode'

describe('SinglyLinkedListNode', () => {
  it('should allow nodes to be appended ', () => {
    let nodeA = singlyLinkedListNode({ value: 'a' })
    let nodeB = singlyLinkedListNode({ value: 'b' })
    const nodeC = singlyLinkedListNode({ value: 'c' })

    nodeB = nodeB.setNext(nodeC)
    nodeA = nodeA.setNext(nodeB)

    expect(nodeA.value()).toBe('a')
    expect(nodeA.next()?.value()).toBe('b')
    expect(nodeA.next()?.next()?.value()).toBe('c')
  })
})
