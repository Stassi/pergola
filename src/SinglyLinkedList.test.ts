import SinglyLinkedList from './SinglyLinkedList'

describe('SinglyLinkedList', () => {
  describe('#insertAtStart', () => {
    it('should allow values to be prepended to the list', () => {
      const listA = new SinglyLinkedList()
      listA.insertAtStart('b')
      listA.insertAtStart('a')

      expect(listA.head?.value).toBe('a')
      expect(listA.head?.next?.value).toBe('b')
    })
  })

  describe('#getNodeAt', () => {
    it('should allow values to be retrieved by index', () => {
      const listA = new SinglyLinkedList()
      listA.insertAtStart('b')
      listA.insertAtStart('a')

      expect(listA.getNodeAt(0).value).toBe('a')
      expect(listA.getNodeAt(1).value).toBe('b')
    })
  })

  describe('#removeAtStart', () => {
    it('should remove the head node', () => {
      const listA = new SinglyLinkedList()
      listA.insertAtStart('b')
      listA.insertAtStart('a')
      listA.removeAtStart()

      expect(listA.getNodeAt(0).value).toBe('b')
    })
  })

  describe('#insertAfter', () => {
    it('should insert a value after an index', () => {
      const listA = new SinglyLinkedList()
      listA.insertAtStart('a')
      listA.insertAfter(0, 'b')
      listA.insertAfter(1, 'c')

      expect(listA.head?.value).toBe('a')
      expect(listA.getNodeAt(1).value).toBe('b')
      expect(listA.getNodeAt(2).value).toBe('c')
    })
  })

  describe('#removeAfter', () => {
    it('should remove a value after an index', () => {
      const listA = new SinglyLinkedList()
      listA.insertAtStart('a')
      listA.insertAfter(0, 'b')
      listA.insertAfter(1, 'c')
      listA.removeAfter(1)

      expect(listA.head?.value).toBe('a')
      expect(listA.getNodeAt(1).value).toBe('b')
    })
  })

  describe('#getLastNode', () => {
    it('should return the last node in the list', () => {
      const listA = new SinglyLinkedList()
      listA.insertAtStart('a')
      listA.insertAfter(0, 'b')
      listA.insertAfter(1, 'c')

      expect(listA.getLastNode().value).toBe('c')
    })
  })

  describe('#insertLast', () => {
    it('should allow a value to be appended to the end of a list', () => {
      const listA = new SinglyLinkedList()
      listA.insertLast('a')
      listA.insertLast('b')

      expect(listA.getNodeAt(1).value).toBe('b')
    })
  })

  describe('#removeLast', () => {
    it('should remove the value at the end of a list', () => {
      const listA = new SinglyLinkedList()
      listA.insertLast('a')
      listA.insertLast('b')
      listA.insertLast('c')
      listA.removeLast()
      listA.removeLast()

      expect(listA.getLastNode().value).toBe('a')
    })
  })

  describe('#findNode', () => {
    it('should return the node containing the given value', () => {
      const listA = new SinglyLinkedList()
      listA.insertLast('a')
      listA.insertLast('b')
      listA.insertLast('c')

      expect(listA.findNode('a')?.value).toBe('a')
      expect(listA.findNode('b')?.value).toBe('b')
      expect(listA.findNode('c')?.value).toBe('c')
    })
  })

  describe('#reverse', () => {
    it('should reverse the order of nodes in a list', () => {
      const listA = new SinglyLinkedList()
      listA.insertLast('a')
      listA.insertLast('b')
      listA.insertLast('c')
      listA.reverse()

      expect(listA.getNodeAt(0).value).toBe('c')
      expect(listA.getNodeAt(1).value).toBe('b')
      expect(listA.getNodeAt(2).value).toBe('a')
    })
  })

  describe('#concatenate', () => {
    it('should append one linked list to another linked list', () => {
      const listA = new SinglyLinkedList()
      listA.insertLast('a')
      listA.insertLast('b')
      listA.insertLast('c')

      const listB = new SinglyLinkedList()
      listB.insertLast('d')
      listB.insertLast('e')
      listB.insertLast('f')

      listA.concatenate(listB)

      expect(listA.getNodeAt(0).value).toBe('a')
      expect(listA.getNodeAt(1).value).toBe('b')
      expect(listA.getNodeAt(2).value).toBe('c')
      expect(listA.getNodeAt(3).value).toBe('d')
      expect(listA.getNodeAt(4).value).toBe('e')
      expect(listA.getNodeAt(5).value).toBe('f')
    })
  })
})
